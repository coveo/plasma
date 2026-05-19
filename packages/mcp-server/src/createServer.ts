import {McpServer} from 'tmcp';
import {ValibotJsonSchemaAdapter} from '@tmcp/adapter-valibot';
import {tool} from 'tmcp/utils';
import * as v from 'valibot';
import {buildComponentMap} from './tools/buildComponentMap.js';
import {listComponents} from './tools/listComponents.js';
import {getComponentDoc} from './tools/getComponentDoc.js';
import {getComponentProps} from './tools/getComponentProps.js';
import {searchDocs} from './tools/searchDocs.js';
import type {LlmsData} from './tools/types.js';

const componentSchema = v.object({
    component: v.pipe(v.string(), v.description('The component name (e.g., "Button", "Modal", "Alert")')),
});

const querySchema = v.object({
    query: v.pipe(
        v.string(),
        v.description('The search query (e.g., "async button", "date picker", "form validation")'),
    ),
});

export const createServer = (data: LlmsData): McpServer => {
    const componentMap = buildComponentMap(data);

    const adapter = new ValibotJsonSchemaAdapter();
    const server = new McpServer(
        {
            name: 'plasma-mcp-server',
            version: '1.0.0',
        },
        {
            adapter,
            capabilities: {tools: {}},
        },
    );

    server.tool(
        {
            name: 'list_components',
            description: 'List all available Plasma design system components',
        },
        async () => tool.text(listComponents(data)),
    );

    server.tool(
        {
            name: 'get_component_doc',
            description: 'Get full documentation for a specific Plasma component',
            schema: componentSchema,
        },
        async ({component}) => {
            const result = getComponentDoc(componentMap, component);
            if (result.isError) {
                return {content: [{type: 'text' as const, text: result.text}], isError: true};
            }
            return tool.text(result.text);
        },
    );

    server.tool(
        {
            name: 'get_component_props',
            description: 'Get the props table for a specific Plasma component',
            schema: componentSchema,
        },
        async ({component}) => {
            const result = getComponentProps(componentMap, component);
            if (result.isError) {
                return {content: [{type: 'text' as const, text: result.text}], isError: true};
            }
            return tool.text(result.text);
        },
    );

    server.tool(
        {
            name: 'search_docs',
            description: 'Search across all Plasma component documentation',
            schema: querySchema,
        },
        async ({query}) => tool.text(searchDocs(data, query)),
    );

    return server;
};
