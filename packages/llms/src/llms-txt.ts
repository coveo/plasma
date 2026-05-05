import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {ComponentDoc} from './cli.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(currentDir, '../src/llms-txt.md'), 'utf-8');

/** Generates the llms.txt index file following the llmstxt.org standard. */
export const generateLlmsTxt = (components: ComponentDoc[], baseUrl: string): string => {
    const componentList = components
        .map(
            (c) =>
                `- [${c.name}](${baseUrl}/llms/${c.name}.md): ${c.description || `${c.name} component from @coveord/plasma-mantine`}`,
        )
        .join('\n');

    return template.replaceAll('{{BASE_URL}}', baseUrl).replace('{{COMPONENT_LIST}}', componentList);
};
