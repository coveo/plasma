/**
 * Build script for @coveord/plasma-mcp-server.
 * Reads the generated llms dist files from @coveord/plasma-llms and bundles
 * them into a single data.json file for the MCP server to use at runtime.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {ComponentData, LlmsData} from '../src/tools/types.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const llmsDistDir = path.resolve(currentDir, '../../llms/dist');
const distDir = path.resolve(currentDir, '../dist');
const dataFile = path.join(distDir, 'data.json');

const main = () => {
    if (!fs.existsSync(llmsDistDir)) {
        console.error(`❌ llms dist not found at ${llmsDistDir}. Run pnpm build in @coveord/plasma-llms first.`);
        process.exit(1);
    }

    const llmsDir = path.join(llmsDistDir, 'llms');
    const descriptionsFile = path.join(llmsDistDir, 'descriptions.json');
    const descriptions: Record<string, string> = fs.existsSync(descriptionsFile)
        ? JSON.parse(fs.readFileSync(descriptionsFile, 'utf-8'))
        : {};
    const components: ComponentData[] = [];

    for (const file of fs.readdirSync(llmsDir).filter((f) => f.endsWith('.md'))) {
        const name = file.replace('.md', '');
        const content = fs.readFileSync(path.join(llmsDir, file), 'utf-8');
        const description = descriptions[name] ?? '';
        components.push({name, description, content});
    }

    const data: LlmsData = {
        index: fs.readFileSync(path.join(llmsDistDir, 'llms.txt'), 'utf-8'),
        full: fs.readFileSync(path.join(llmsDistDir, 'llms-full.txt'), 'utf-8'),
        skill: fs.readFileSync(path.join(llmsDistDir, 'plasma-skill.md'), 'utf-8'),
        components,
    };

    fs.mkdirSync(distDir, {recursive: true});
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf-8');
    console.error(`✅ Bundled data for ${components.length} components → dist/data.json`);
};

main();
