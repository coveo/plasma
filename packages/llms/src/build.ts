import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import matter from 'gray-matter';
import {generateLlmsFullTxt} from './llms-full-txt.ts';
import {generateLlmsTxt} from './llms-txt.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(currentDir, '../dist');

/** Base URL where the generated files will be served (Storybook static deployment). */
const BASE_URL = process.env.PLASMA_BASE_URL ?? 'https://plasma.coveo.com';

export interface DocEntry {
    /** Filename without .md extension, used for URL paths. */
    slug: string;
    /** Display name (from frontmatter `name:` field, falls back to slug). */
    name: string;
    /** One-sentence description, sourced from YAML frontmatter `description:` field. */
    description: string;
    /** Full Markdown content (frontmatter stripped). */
    content: string;
}

const UTF8_BOM = '\uFEFF';

/** Returns the UTF-8 BOM prefix for text-based files (.md, .txt), empty string otherwise. */
const bomPrefix = (filePath: string): string => (filePath.endsWith('.md') || filePath.endsWith('.txt') ? UTF8_BOM : '');

const write = (filePath: string, content: string) => {
    const interpolated = content.replaceAll('{{BASE_URL}}', BASE_URL);
    fs.writeFileSync(filePath, bomPrefix(filePath) + interpolated, 'utf-8');
    const kb = (interpolated.length / 1024).toFixed(1);
    console.log(`  ✓  ${path.relative(distDir, filePath)} (${kb} KB)`);
};

/**
 * Reads all .md files from a source directory, parses YAML frontmatter,
 * and returns a sorted array of DocEntry objects.
 */
const readDocs = (sourceDir: string): DocEntry[] =>
    fs
        .readdirSync(sourceDir)
        .filter((f) => f.endsWith('.md'))
        .sort()
        .map((file) => {
            const slug = path.basename(file, '.md');
            const raw = fs.readFileSync(path.join(sourceDir, file), 'utf-8');
            const {data, content} = matter(raw);
            return {
                slug,
                name: (data.name as string) ?? slug,
                description: (data.description as string) ?? '',
                content,
            };
        });

/**
 * Writes a set of doc entries to an output directory:
 * - One .md file per entry (frontmatter stripped, BASE_URL replaced)
 * - An index.json manifest with slug, name, and description for each entry
 */
const writeDocs = (entries: DocEntry[], outDir: string) => {
    fs.mkdirSync(outDir, {recursive: true});

    for (const entry of entries) {
        write(path.join(outDir, `${entry.slug}.md`), entry.content);
    }

    const index = entries.map(({slug, name, description}) => ({slug, name, description}));
    write(path.join(outDir, 'index.json'), JSON.stringify(index, null, 2));
};

const main = () => {
    console.log('\n🚀 Generating Plasma LLM documentation…\n');
    console.log(`   Base URL: ${BASE_URL}\n`);

    fs.mkdirSync(distDir, {recursive: true});

    const components = readDocs(path.resolve(currentDir, '../src/components'));
    const contentGuidelines = readDocs(path.resolve(currentDir, '../src/content'));

    console.log(`📄 Writing output files…\n`);

    writeDocs(components, path.join(distDir, 'llms', 'components'));
    writeDocs(contentGuidelines, path.join(distDir, 'llms', 'content'));

    // llms.txt index
    write(path.join(distDir, 'llms.txt'), generateLlmsTxt(components, contentGuidelines, BASE_URL));

    // llms-full.txt
    write(path.join(distDir, 'llms-full.txt'), generateLlmsFullTxt(components, contentGuidelines));

    // Skill — read src/skill.md, replace {{BASE_URL}} placeholder
    const skillTemplate = fs.readFileSync(path.resolve(currentDir, '../src/skill.md'), 'utf-8');
    write(path.join(distDir, 'plasma-skill.md'), skillTemplate);

    console.log(
        `\n✅ Done! Generated docs for ${components.length} components and ${contentGuidelines.length} content guidelines.\n`,
    );
};

main();
