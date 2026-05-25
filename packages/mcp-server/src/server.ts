#!/usr/bin/env node
import {StdioTransport} from '@tmcp/transport-stdio';
import {createServer} from './createServer.js';
import type {LlmsData} from './tools/types.js';

const {default: data} = (await import(new URL('./data.json', import.meta.url).href, {with: {type: 'json'}})) as {
    default: LlmsData;
};

const server = createServer(data);
const transport = new StdioTransport(server);
transport.listen();
console.error('Plasma MCP Server running on stdio');
