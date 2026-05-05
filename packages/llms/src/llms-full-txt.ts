import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {ComponentDoc} from './cli.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(currentDir, '../src/llms-full-txt.md'), 'utf-8');

/** Generates llms-full.txt — a single file concatenating all component documentation. */
export const generateLlmsFullTxt = (docs: ComponentDoc[]): string => {
    const componentDocs = docs
        .map((doc) => {
            const content = doc.content.replace(/\n---\n\n\[Full Plasma documentation\]\([^)]+\)\s*$/m, '').trimEnd();
            return `${content}\n\n---`;
        })
        .join('\n\n');

    return template.replace('{{COMPONENT_DOCS}}', componentDocs);
};
