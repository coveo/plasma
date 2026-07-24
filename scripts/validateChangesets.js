import {readdirSync, readFileSync} from 'node:fs';
import {dirname, join} from 'node:path';
import {fileURLToPath} from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const CHANGESET_DIR = join(ROOT, '.changeset');
const PACKAGES_DIR = join(ROOT, 'packages');

// Files in .changeset/ that are not changesets and must be ignored.
const NON_CHANGESET_FILES = new Set(['README.md', 'config.json', 'pre.json', 'changelog.cjs']);

const VALID_BUMPS = new Set(['major', 'minor', 'patch']);
const MAX_TITLE_LENGTH = 100;

/**
 * Discover the workspace package names so frontmatter can be validated against
 * packages that actually exist.
 */
const getWorkspacePackageNames = () => {
    const names = new Set();
    for (const entry of readdirSync(PACKAGES_DIR, {withFileTypes: true})) {
        if (!entry.isDirectory()) continue;
        try {
            const pkg = JSON.parse(readFileSync(join(PACKAGES_DIR, entry.name, 'package.json'), 'utf8'));
            if (pkg.name) names.add(pkg.name);
        } catch {
            // No package.json in this directory — skip.
        }
    }
    return names;
};

/**
 * Split a changeset into its frontmatter block and body.
 * Returns null when the frontmatter delimiters are missing or malformed.
 */
const parseChangeset = (content) => {
    const match = content.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
    if (!match) return null;

    const releases = [];
    for (const rawLine of match[1].split('\n')) {
        const line = rawLine.trim();
        if (!line) continue;
        const entry = line.match(/^["']?(@?[\w./-]+)["']?\s*:\s*(\w+)$/);
        if (!entry) {
            releases.push({raw: line, invalid: true});
            continue;
        }
        releases.push({name: entry[1], bump: entry[2]});
    }

    return {releases, body: match[2].trim()};
};

/** Return the heading levels (number of leading `#`) found in the body. */
const headingLevels = (body) => [...body.matchAll(/^(#{1,6}) /gm)].map(([, hashes]) => hashes.length);

const validateChangeset = (name, content, knownPackages) => {
    const errors = [];
    const parsed = parseChangeset(content);

    if (!parsed) {
        return ['Missing or malformed frontmatter (expected a `---` delimited block).'];
    }

    const {releases, body} = parsed;

    // Frontmatter: valid package names and bump types.
    if (releases.length === 0) {
        errors.push('Frontmatter declares no package bumps.');
    }
    for (const release of releases) {
        if (release.invalid) {
            errors.push(`Malformed frontmatter line: "${release.raw}" (expected "'<package>': <bump>").`);
            continue;
        }
        if (!knownPackages.has(release.name)) {
            errors.push(`Unknown package "${release.name}" (not a workspace package).`);
        }
        if (!VALID_BUMPS.has(release.bump)) {
            errors.push(`Invalid bump "${release.bump}" for "${release.name}" (expected major, minor, or patch).`);
        }
    }

    const bodyLines = body.split('\n');
    const title = bodyLines.find((line) => line.trim() !== '')?.trim() ?? '';
    const bodyAfterTitle = bodyLines
        .slice(bodyLines.indexOf(title) + 1)
        .join('\n')
        .trim();

    // Title rules.
    if (!title) {
        errors.push('Missing title (first line after the frontmatter).');
    } else {
        if (title.startsWith('#')) {
            errors.push('Title must be plain text, not a markdown heading.');
        }
        if (title.startsWith('-') || title.startsWith('*')) {
            errors.push('Title must not start with a list marker.');
        }
        if (title.endsWith('.')) {
            errors.push('Title must not end with a period.');
        }
        if (/\*\*breaking:?\*\*/i.test(title)) {
            errors.push('Do not prefix the title with **BREAKING:** — a `major` bump already marks breaking changes.');
        }
        if (title.length > MAX_TITLE_LENGTH) {
            errors.push(`Title is ${title.length} characters; keep it to ${MAX_TITLE_LENGTH} or fewer.`);
        }
    }

    // Body headings must start at a single `#`.
    const levels = headingLevels(body);
    if (levels.length > 0 && Math.min(...levels) !== 1) {
        errors.push('Body headings must start at a single `#` (h1).');
    }

    // Per-bump body requirements (based on the strongest declared bump).
    const bumps = new Set(releases.filter((r) => !r.invalid).map((r) => r.bump));
    if (bumps.has('major')) {
        if (!bodyAfterTitle) {
            errors.push('A `major` changeset requires an explanatory body.');
        }
        if (!/^#\s+Migration\s*$/m.test(body)) {
            errors.push('A `major` changeset must include a `# Migration` section.');
        }
    } else if (bumps.has('minor')) {
        if (!bodyAfterTitle) {
            errors.push('A `minor` changeset requires an explanatory body.');
        }
    }

    return errors;
};

const main = () => {
    const knownPackages = getWorkspacePackageNames();

    let changesetFiles;
    try {
        changesetFiles = readdirSync(CHANGESET_DIR).filter(
            (file) => file.endsWith('.md') && !NON_CHANGESET_FILES.has(file),
        );
    } catch {
        console.log('No .changeset directory found — nothing to validate.');
        return;
    }

    const failures = [];
    for (const file of changesetFiles) {
        const content = readFileSync(join(CHANGESET_DIR, file), 'utf8');
        const errors = validateChangeset(file, content, knownPackages);
        if (errors.length > 0) {
            failures.push({file, errors});
        }
    }

    if (failures.length === 0) {
        console.log(`Validated ${changesetFiles.length} changeset file(s) — all conform to the template.`);
        return;
    }

    console.error('Invalid changeset(s) found:\n');
    for (const {file, errors} of failures) {
        console.error(`  .changeset/${file}`);
        for (const error of errors) {
            console.error(`    - ${error}`);
        }
        console.error('');
    }
    console.error('See CONTRIBUTING.md ("Writing changesets") for the expected format.');
    process.exitCode = 1;
};

main();
