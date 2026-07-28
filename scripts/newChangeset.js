import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHANGESET_DIR = join(ROOT, '.changeset');

const VALID_BUMPS = new Set(['major', 'minor', 'patch']);
const DEFAULT_BUMP = 'patch';
const DEFAULT_PACKAGE = '@coveord/plasma-mantine';

// Word lists to build a Changesets-style, human-readable file name.
const ADJECTIVES = ['brave', 'calm', 'clever', 'eager', 'fuzzy', 'gentle', 'happy', 'lucky', 'proud', 'swift'];
const NOUNS = ['badgers', 'comets', 'donkeys', 'foxes', 'lions', 'otters', 'pandas', 'ravens', 'tigers', 'wolves'];
const VERBS = ['bake', 'dance', 'dream', 'jump', 'race', 'shine', 'sing', 'travel', 'wander', 'wink'];

const pick = (list) => list[Math.floor(Math.random() * list.length)];
const generateName = () => `${pick(ADJECTIVES)}-${pick(NOUNS)}-${pick(VERBS)}`;

const parseArgs = (argv) => {
    const args = {bump: DEFAULT_BUMP, package: DEFAULT_PACKAGE};
    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (arg === '--bump' || arg === '-b') {
            args.bump = argv[(i += 1)];
        } else if (arg === '--package' || arg === '-p') {
            args.package = argv[(i += 1)];
        } else if (VALID_BUMPS.has(arg)) {
            // Allow the bump as a bare positional argument (e.g. `changeset:new major`).
            args.bump = arg;
        }
    }
    return args;
};

/**
 * Build the changeset body skeleton for a given bump type. The template mirrors
 * the rules enforced by scripts/validateChangesets.js:
 * - Title on the first line after the frontmatter (plain, no trailing period).
 * - Body headings start at a single `#`.
 * - `major` requires a body and a `# Migration` section; `minor` requires a body.
 *
 * The skeleton is kept comment-free: the validator treats the first non-empty
 * line after the frontmatter as the title, so the title placeholder must come
 * first. Guidance is folded into the `TODO` placeholders instead.
 */
const buildTemplate = (packageName, bump) => {
    const frontmatter = `---\n'${packageName}': ${bump}\n---\n`;

    if (bump === 'major') {
        return `${frontmatter}
TODO: describe the breaking change (sentence case, no trailing period, consumer's view)

TODO: explain what changed and why

# Migration

TODO: migration steps consumers must take (use \`\`\`diff blocks for before/after code)
`;
    }

    if (bump === 'minor') {
        return `${frontmatter}
TODO: describe the new capability (sentence case, no trailing period)

TODO: explain what it does and how to use it
`;
    }

    return `${frontmatter}
TODO: describe the fix (sentence case, no trailing period)
`;
};

const main = () => {
    const {bump, package: packageName} = parseArgs(process.argv.slice(2));

    if (!VALID_BUMPS.has(bump)) {
        console.error(`Invalid bump "${bump}". Expected one of: major, minor, patch.`);
        process.exitCode = 1;
        return;
    }

    mkdirSync(CHANGESET_DIR, {recursive: true});

    let name = generateName();
    while (existsSync(join(CHANGESET_DIR, `${name}.md`))) {
        name = generateName();
    }

    const filePath = join(CHANGESET_DIR, `${name}.md`);
    writeFileSync(filePath, buildTemplate(packageName, bump));

    console.log(`Created .changeset/${name}.md (${bump}, ${packageName}).`);
    console.log('Replace the TODO placeholders, then run `pnpm changeset:validate`.');
};

main();
