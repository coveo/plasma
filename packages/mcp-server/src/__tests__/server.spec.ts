import type {McpServer} from 'tmcp';
import {beforeEach, describe, expect, it} from 'vitest';
import {createServer} from '../createServer.js';
import {BUTTON, VOICE_GUIDELINE, makeData} from '../tools/__tests__/fixtures.js';

// Minimal JSON-RPC helpers
const req = (id: number, method: string, params: Record<string, unknown> = {}) => ({
    jsonrpc: '2.0' as const,
    id,
    method,
    params,
});

const notification = (method: string, params: Record<string, unknown> = {}) => ({
    jsonrpc: '2.0' as const,
    method,
    params,
});

// Extract the text from the first content block of a tool result
const firstText = (response: Awaited<ReturnType<McpServer['receive']>>): string => {
    const result = (response as {result: {content: Array<{type: string; text: string}>}}).result;
    return result.content[0].text;
};

const isError = (response: Awaited<ReturnType<McpServer['receive']>>): boolean => {
    const result = (response as {result: {isError?: boolean}}).result;
    return result.isError === true;
};

describe('plasma-mcp-server integration', () => {
    let server: McpServer;

    beforeEach(async () => {
        server = createServer(makeData());
        // MCP protocol handshake required before using tools
        await server.receive(
            req(0, 'initialize', {
                protocolVersion: '2024-11-05',
                capabilities: {},
                clientInfo: {name: 'vitest', version: '1.0.0'},
            }),
        );
        await server.receive(notification('notifications/initialized'));
    });

    describe('tools/list', () => {
        it('registers all six tools', async () => {
            const response = await server.receive(req(1, 'tools/list'));
            const tools = (response as {result: {tools: Array<{name: string}>}}).result.tools;
            const names = tools.map((t) => t.name);
            expect(names).toContain('list_components');
            expect(names).toContain('get_component_doc');
            expect(names).toContain('get_component_props');
            expect(names).toContain('search_docs');
            expect(names).toContain('list_content_guidelines');
            expect(names).toContain('get_content_guideline');
            expect(tools).toHaveLength(6);
        });

        it('includes inputSchema for tools that require arguments', async () => {
            const response = await server.receive(req(1, 'tools/list'));
            const tools = (response as {result: {tools: Array<{name: string; inputSchema: unknown}>}}).result.tools;
            const docTool = tools.find((t) => t.name === 'get_component_doc');
            expect(docTool?.inputSchema).toMatchObject({
                type: 'object',
                required: ['component'],
            });
        });
    });

    describe('list_components tool', () => {
        it('returns a markdown list of all components', async () => {
            const response = await server.receive(req(1, 'tools/call', {name: 'list_components', arguments: {}}));
            expect(firstText(response)).toMatchInlineSnapshot(`
              "# Plasma Components

              All components are imported from \`@coveord/plasma-mantine\`.

              - **Button**: A clickable button component
              - **Modal**: A dialog overlay component
              - **Alert**: An alert notification component"
            `);
        });
    });

    describe('get_component_doc tool', () => {
        it('returns full component content for a known component', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_doc', arguments: {component: 'Button'}}),
            );
            expect(isError(response)).toBe(false);
            expect(firstText(response)).toBe(BUTTON.content);
        });

        it('is case-insensitive', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_doc', arguments: {component: 'button'}}),
            );
            expect(firstText(response)).toBe(BUTTON.content);
        });

        it('returns an error result for an unknown component', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_doc', arguments: {component: 'Nonexistent'}}),
            );
            expect(isError(response)).toBe(true);
            expect(firstText(response)).toMatchInlineSnapshot(
                `"Component "Nonexistent" not found. Use list_components to see available components."`,
            );
        });

        it('returns a schema validation error when component argument is missing', async () => {
            const response = await server.receive(req(1, 'tools/call', {name: 'get_component_doc', arguments: {}}));
            expect(isError(response)).toBe(true);
        });
    });

    describe('get_component_props tool', () => {
        it('extracts the Props section for a component that has one', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_props', arguments: {component: 'Button'}}),
            );
            expect(isError(response)).toBe(false);
            expect(firstText(response)).toMatchInlineSnapshot(`
              "# Button Props

              ## Props

              | Prop | Type | Default |
              |------|------|---------|
              | variant | string | 'filled' |
              | disabled | boolean | false |
              "
            `);
        });

        it('returns the fallback message for a component without a Props section', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_props', arguments: {component: 'Modal'}}),
            );
            expect(isError(response)).toBe(false);
            expect(firstText(response)).toMatchInlineSnapshot(`
              "# Modal Props

              _No props documentation available._"
            `);
        });

        it('returns an error result for an unknown component', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_component_props', arguments: {component: 'Ghost'}}),
            );
            expect(isError(response)).toBe(true);
            expect(firstText(response)).toMatchInlineSnapshot(
                `"Component "Ghost" not found. Use list_components to see available components."`,
            );
        });
    });

    describe('search_docs tool', () => {
        it('returns matching components ranked by relevance', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'button'}}),
            );
            const text = firstText(response);
            expect(text).toContain('# Search Results for "button"');
            expect(text).toContain('## Button');
            expect(text).toContain('A clickable button component');
        });

        it('returns a no-results message when nothing matches', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'xyznonexistent'}}),
            );
            expect(firstText(response)).toMatchInlineSnapshot(`"No results found matching "xyznonexistent"."`);
        });

        it('returns a schema validation error when query argument is missing', async () => {
            const response = await server.receive(req(1, 'tools/call', {name: 'search_docs', arguments: {}}));
            expect(isError(response)).toBe(true);
        });

        it('prefers the most relevant result first', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'button'}}),
            );
            const text = firstText(response);
            const buttonIdx = text.indexOf('## Button');
            const modalIdx = text.indexOf('## Modal');
            expect(buttonIdx).toBeLessThan(modalIdx === -1 ? Infinity : modalIdx);
        });

        it('searches across both components and content guidelines', async () => {
            // "capitalization" only appears in the WritingMechanics guideline
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'capitalization'}}),
            );
            const text = firstText(response);
            expect(text).toContain('Content Guidelines — Writing Mechanics');
            expect(text).toContain('(Content Guideline)');
        });

        it('searches across both BUTTON and MODAL fixture components', async () => {
            // "overlay" only appears in MODAL
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'overlay'}}),
            );
            const text = firstText(response);
            expect(text).toContain('## Modal');
            expect(text).toContain('A dialog overlay component');
        });
    });

    describe('list_content_guidelines tool', () => {
        it('returns a markdown list of all content guidelines', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'list_content_guidelines', arguments: {}}),
            );
            const text = firstText(response);
            expect(text).toContain('# Plasma Content Guidelines');
            expect(text).toContain('**Content Guidelines — Voice**');
            expect(text).toContain('**Content Guidelines — Writing Mechanics**');
        });
    });

    describe('get_content_guideline tool', () => {
        it('returns full guideline content for a known guideline by slug', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_content_guideline', arguments: {guideline: 'Voice'}}),
            );
            expect(isError(response)).toBe(false);
            expect(firstText(response)).toBe(VOICE_GUIDELINE.content);
        });

        it('is case-insensitive', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_content_guideline', arguments: {guideline: 'voice'}}),
            );
            expect(firstText(response)).toBe(VOICE_GUIDELINE.content);
        });

        it('allows lookup by full name', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {
                    name: 'get_content_guideline',
                    arguments: {guideline: 'Content Guidelines — Voice'},
                }),
            );
            expect(firstText(response)).toBe(VOICE_GUIDELINE.content);
        });

        it('returns an error result for an unknown guideline', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'get_content_guideline', arguments: {guideline: 'Nonexistent'}}),
            );
            expect(isError(response)).toBe(true);
            expect(firstText(response)).toMatchInlineSnapshot(
                `"Content guideline "Nonexistent" not found. Use list_content_guidelines to see available guidelines."`,
            );
        });

        it('returns a schema validation error when guideline argument is missing', async () => {
            const response = await server.receive(req(1, 'tools/call', {name: 'get_content_guideline', arguments: {}}));
            expect(isError(response)).toBe(true);
        });
    });
});
