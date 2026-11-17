import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

/**
 * Keeps the Claude Code plugin's committed copy of the Plasma skill in sync with `src/skill.md`.
 *
 * The plugin is served straight from git (no build step), so the copy must be committed.
 * It always targets the production URL, whatever `PLASMA_BASE_URL` is set to, so preview builds never rewrite it.
 *
 * Usage: `node src/claude-plugin-skill.ts` writes the copy, `node src/claude-plugin-skill.ts --check` fails on drift.
 */

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.resolve(currentDir, 'skill.md');
export const pluginSkillPath = path.resolve(currentDir, '../../claude-plugin/skills/plasma/SKILL.md');

const PRODUCTION_BASE_URL = 'https://plasma.coveo.com';

// No UTF-8 BOM: it would sit before the YAML frontmatter that Claude Code parses.
const render = (): string => fs.readFileSync(sourcePath, 'utf-8').replaceAll('{{BASE_URL}}', PRODUCTION_BASE_URL);

export const writePluginSkill = () => {
    fs.mkdirSync(path.dirname(pluginSkillPath), {recursive: true});
    fs.writeFileSync(pluginSkillPath, render(), 'utf-8');
};

const isPluginSkillInSync = (): boolean =>
    fs.existsSync(pluginSkillPath) && fs.readFileSync(pluginSkillPath, 'utf-8') === render();

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
    const relativePath = path.relative(process.cwd(), pluginSkillPath);
    if (!process.argv.includes('--check')) {
        writePluginSkill();
        console.log(`✓ Wrote ${relativePath}`);
    } else if (isPluginSkillInSync()) {
        console.log(`✓ ${relativePath} is in sync with packages/llms/src/skill.md`);
    } else {
        console.error(
            `✗ ${relativePath} is out of sync with packages/llms/src/skill.md.\n` +
                '  Edit the source, then run `pnpm claude-plugin:sync` and commit the result.',
        );
        process.exit(1);
    }
}
