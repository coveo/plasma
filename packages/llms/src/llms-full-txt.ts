import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {ComponentDoc} from './build.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(currentDir, '../src/llms-full-txt.md'), 'utf-8');

const BOUNDARY = `\n\n${'-'.repeat(80)}\n\n`;

/** Generates llms-full.txt -- a single file concatenating all component documentation. */
export const generateLlmsFullTxt = (docs: ComponentDoc[]): string => {
    const componentDocs = docs
        .map((doc) => {
            const header = `### ${doc.name}\n\n${doc.description}`;
            const body = doc.content
                .replace(/^# .+\n/m, '')
                .replace(/\n---\n\n\[Full Plasma documentation\]\([^)]+\)\s*$/m, '')
                .replace(/\n{3,}/g, '\n\n')
                .replace(/^(#{1,6} )/gm, '##$1')
                .trim();
            return `${header}\n\n${body}`;
        })
        .join(BOUNDARY);

    return template.replace('{{COMPONENT_DOCS}}', componentDocs);
};
