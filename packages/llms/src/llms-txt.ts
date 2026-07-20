import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {DocEntry} from './build.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(currentDir, '../src/llms-txt.md'), 'utf-8');

/** Generates the llms.txt index file following the llmstxt.org standard. */
export const generateLlmsTxt = (components: DocEntry[], contentGuidelines: DocEntry[], baseUrl: string): string => {
    const componentList = components
        .map(
            (c) =>
                `- [${c.name}](${baseUrl}/llms/components/${c.slug}.md): ${c.description || `${c.name} component from @coveord/plasma-mantine`}`,
        )
        .join('\n');

    const contentList = contentGuidelines
        .map((g) => `- [${g.name}](${baseUrl}/llms/content/${g.slug}.md): ${g.description || g.name}`)
        .join('\n');

    return template.replace('{{COMPONENT_LIST}}', componentList).replace('{{CONTENT_LIST}}', contentList);
};
