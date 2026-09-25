/**
 * Build script for @coveord/plasma-mcp-server.
 * Reads the generated llms dist files from @coveord/plasma-llms and bundles
 * them into a single data.json file for the MCP server to use at runtime.
 */
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {DocData, LlmsData} from '../src/tools/types.ts';

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const llmsDistDir = path.resolve(currentDir, '../../llms/dist');
const distDir = path.resolve(currentDir, '../dist');
const dataFile = path.join(distDir, 'data.json');

interface IndexEntry {
    slug: string;
    name: string;
    description: string;
}

/** Reads an index.json and loads the corresponding .md files from the same directory. */
const readDocs = (dir: string): DocData[] => {
    const indexPath = path.join(dir, 'index.json');
    const entries: IndexEntry[] = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf-8')) : [];
    return entries.map(({slug, name, description}) => {
        const content = fs.readFileSync(path.join(dir, `${slug}.md`), 'utf-8');
        return {name, description, content};
    });
};

const main = () => {
    if (!fs.existsSync(llmsDistDir)) {
        console.error(`❌ llms dist not found at ${llmsDistDir}. Run pnpm build in @coveord/plasma-llms first.`);
        process.exit(1);
    }

    const components: DocData[] = readDocs(path.join(llmsDistDir, 'llms', 'components'));
    const contentGuidelines: DocData[] = readDocs(path.join(llmsDistDir, 'llms', 'content'));
    const foundations: DocData[] = readDocs(path.join(llmsDistDir, 'llms', 'foundations'));

    const data: LlmsData = {
        index: fs.readFileSync(path.join(llmsDistDir, 'llms.txt'), 'utf-8'),
        full: fs.readFileSync(path.join(llmsDistDir, 'llms-full.txt'), 'utf-8'),
        skill: fs.readFileSync(path.join(llmsDistDir, 'plasma-skill.md'), 'utf-8'),
        components,
        contentGuidelines,
        foundations,
    };

    fs.mkdirSync(distDir, {recursive: true});
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf-8');
    console.error(
        `✅ Bundled data for ${components.length} components, ${contentGuidelines.length} content guidelines, and ${foundations.length} foundations → dist/data.json`,
    );
};

main();
