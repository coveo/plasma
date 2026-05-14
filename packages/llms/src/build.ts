import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {generateLlmsFullTxt} from './llms-full-txt.js';
import {generateLlmsTxt} from './llms-txt.js';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(currentDir, '../src/components');
const distDir = path.resolve(currentDir, '../dist');

/** Base URL where the generated files will be served (Storybook static deployment). */
const BASE_URL = process.env.PLASMA_BASE_URL ?? 'https://plasma.coveo.com';

export interface ComponentDoc {
    /** Component name (filename without .md extension). */
    name: string;
    /** One-sentence description, sourced from YAML frontmatter `description:` field. */
    description: string;
    /** Full Markdown content (frontmatter stripped). */
    content: string;
}

const ensureDir = (dir: string) => {
    fs.mkdirSync(dir, {recursive: true});
};

const write = (filePath: string, content: string) => {
    fs.writeFileSync(filePath, content, 'utf-8');
    const kb = (content.length / 1024).toFixed(1);
    console.log(`  ✓  ${path.relative(distDir, filePath)} (${kb} KB)`);
};

const main = () => {
    console.log('\n🚀 Generating Plasma LLM documentation…\n');
    console.log(`   Base URL: ${BASE_URL}\n`);

    ensureDir(distDir);
    ensureDir(path.join(distDir, 'llms'));

    const docs: ComponentDoc[] = fs
        .readdirSync(docsDir)
        .filter((f) => f.endsWith('.md'))
        .sort()
        .map((file) => {
            const name = path.basename(file, '.md');
            const raw = fs.readFileSync(path.join(docsDir, file), 'utf-8');
            const {data, content} = matter(raw);
            return {name, description: (data.description as string) ?? '', content};
        });

    console.log(`📄 Writing output files…\n`);

    // Per-component .md files (frontmatter stripped — clean Markdown for LLM consumption)
    for (const doc of docs) {
        write(path.join(distDir, 'llms', `${doc.name}.md`), doc.content.replaceAll('{{BASE_URL}}', BASE_URL));
    }

    // descriptions.json — used by @coveord/plasma-mcp-server to populate list_components
    const descriptions = Object.fromEntries(docs.map((d) => [d.name, d.description]));
    fs.writeFileSync(path.join(distDir, 'descriptions.json'), JSON.stringify(descriptions, null, 2), 'utf-8');
    console.log(`  ✓  descriptions.json`);

    // llms.txt index
    write(path.join(distDir, 'llms.txt'), generateLlmsTxt(docs, BASE_URL));

    // llms-full.txt
    write(path.join(distDir, 'llms-full.txt'), generateLlmsFullTxt(docs));

    // Skill — read src/skill.md, replace {{BASE_URL}} placeholder
    const skillTemplate = fs.readFileSync(path.resolve(currentDir, '../src/skill.md'), 'utf-8');
    write(path.join(distDir, 'plasma-skill.md'), skillTemplate.replaceAll('{{BASE_URL}}', BASE_URL));

    console.log(`\n✅ Done! Generated docs for ${docs.length} components.\n`);
};

main();
