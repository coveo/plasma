import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {DocEntry} from './build.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(currentDir, '../src/llms-full-txt.md'), 'utf-8');

const BOUNDARY = `\n\n${'─'.repeat(80)}\n\n`;

/** Formats a single doc entry for inline inclusion in llms-full.txt. */
const formatEntry = (entry: DocEntry): string => {
    const header = `### ${entry.name}\n\n${entry.description}`;
    const body = entry.content
        // Remove the top-level heading (replaced by the ### header above)
        .replace(/^# .+\n/m, '')
        // Strip the trailing "Full Plasma documentation" link found in component docs
        .replace(/\n---\n\n\[Full Plasma documentation\]\([^)]+\)\s*$/m, '')
        // Collapse excessive blank lines into a single blank line
        .replace(/\n{3,}/g, '\n\n')
        // Shift all headings down two levels to nest under the ### entry header
        .replace(/^(#{1,6} )/gm, '##$1')
        .trim();
    return `${header}\n\n${body}`;
};

/** Generates llms-full.txt — a single file concatenating all component and content guideline documentation. */
export const generateLlmsFullTxt = (components: DocEntry[], contentGuidelines: DocEntry[]): string =>
    template
        .replace('{{COMPONENT_DOCS}}', components.map(formatEntry).join(BOUNDARY))
        .replace('{{CONTENT_DOCS}}', contentGuidelines.map(formatEntry).join(BOUNDARY));
