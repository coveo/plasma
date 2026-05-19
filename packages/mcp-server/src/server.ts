#!/usr/bin/env node
import {StdioTransport} from '@tmcp/transport-stdio';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {createServer} from './createServer.js';
import type {LlmsData} from './tools/types.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

// Load bundled data
const data: LlmsData = require(path.join(currentDir, 'data.json'));

const server = createServer(data);
const transport = new StdioTransport(server);
transport.listen();
console.error('Plasma MCP Server running on stdio');
