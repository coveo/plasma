import type {McpServer} from 'tmcp';
import {beforeEach, describe, expect, it} from 'vitest';
import {createServer} from '../createServer.js';
import {BUTTON, makeData} from '../tools/__tests__/fixtures.js';

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
        it('registers all four tools', async () => {
            const response = await server.receive(req(1, 'tools/list'));
            const tools = (response as {result: {tools: Array<{name: string}>}}).result.tools;
            const names = tools.map((t) => t.name);
            expect(names).toContain('list_components');
            expect(names).toContain('get_component_doc');
            expect(names).toContain('get_component_props');
            expect(names).toContain('search_docs');
            expect(tools).toHaveLength(4);
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
            expect(firstText(response)).toMatchInlineSnapshot(`
              "# Search Results for "button"

              Found 1 component(s):

              ## Button

              A clickable button component

              # Button

              Use the Button to trigger actions.

              ## Props

              | Prop | Type | Default |
              |------|------|---------|
              | variant | string | 'filled' |
              | disabled | boolean | false |

              ## Usage

              Import from \`@coveord/plasma-mantine\`."
            `);
        });

        it('returns a no-results message when nothing matches', async () => {
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'xyznonexistent'}}),
            );
            expect(firstText(response)).toMatchInlineSnapshot(`"No components found matching "xyznonexistent"."`);
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

        it('searches across both BUTTON and MODAL fixture components', async () => {
            // "overlay" only appears in MODAL
            const response = await server.receive(
                req(1, 'tools/call', {name: 'search_docs', arguments: {query: 'overlay'}}),
            );
            expect(firstText(response)).toMatchInlineSnapshot(`
              "# Search Results for "overlay"

              Found 1 component(s):

              ## Modal

              A dialog overlay component

              # Modal

              Use the Modal to display overlay dialogs.

              ## Usage

              Import from \`@coveord/plasma-mantine\`."
            `);
        });
    });
});
