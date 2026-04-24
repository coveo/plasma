import {execFile as execFileCallback} from 'node:child_process';
import {promisify} from 'node:util';

const execFile = promisify(execFileCallback);
const ROOT = process.cwd();
const PREVIEW_MARKER = '<!-- changesets-release-preview -->';
const RELEASE_TYPES = ['patch', 'minor', 'major'];
const MISSING_CHANGESET_MESSAGE = 'Some packages have been changed but no changesets were found';
const ANSI_ESCAPE_PATTERN = /\u001B\[[0-?]*[ -/]*[@-~]/g;

const getStatusBaseRef = () => {
    if (process.env.RELEASE_PREVIEW_BASE_REF) {
        return process.env.RELEASE_PREVIEW_BASE_REF;
    }

    return process.env.GITHUB_BASE_REF ? `origin/${process.env.GITHUB_BASE_REF}` : 'origin/master';
};

const getBaseBranchLabel = (baseRef) => baseRef.replace(/^origin\//, '');

const normalizeStatusLine = (line) => line.replace(ANSI_ESCAPE_PATTERN, '').replace(/^🦋/, '').trim();

const parseChangesetStatusOutput = (output) => {
    const releases = [];
    let currentType = null;

    for (const rawLine of output.split('\n')) {
        const line = normalizeStatusLine(rawLine);
        const headingMatch =
            line.match(/^info Packages to be bumped at (patch|minor|major)$/) ??
            line.match(/^info Running release would release NO packages as a (patch|minor|major)$/) ??
            line.match(/^info NO packages to be bumped at (patch|minor|major)$/);

        if (headingMatch) {
            currentType = headingMatch[1];
            continue;
        }

        const packageMatch = line.match(/^-\s+(\S+)\s+(\d+\.\d+\.\d+(?:[-+][^\s]+)?)$/);

        if (currentType && packageMatch && !packageMatch[1].startsWith('.changeset/')) {
            releases.push({
                type: currentType,
                name: packageMatch[1],
                nextVersion: packageMatch[2],
            });
        }
    }

    return releases;
};

const runChangesetStatus = async () => {
    const baseRef = getStatusBaseRef();

    try {
        const {stdout} = await execFile('pnpm', ['exec', 'changeset', 'status', `--since=${baseRef}`, '--verbose'], {
            cwd: ROOT,
            encoding: 'utf8',
        });

        return {
            baseRef,
            missingChangeset: false,
            releases: parseChangesetStatusOutput(stdout),
        };
    } catch (error) {
        const output = [error.stdout, error.stderr, error.message].filter(Boolean).join('\n');

        if (error.code === 1 && output.includes(MISSING_CHANGESET_MESSAGE)) {
            return {baseRef, missingChangeset: true, status: null};
        }

        throw error;
    }
};

const getSummary = (releases, baseRef) => {
    const baseBranchLabel = getBaseBranchLabel(baseRef);

    if (releases.length === 0) {
        return `This PR would not change any package versions if it were merged and released from \`${baseBranchLabel}\`.`;
    }

    return `This PR would bump ${releases.length} package version${releases.length === 1 ? '' : 's'} if it were merged and released from \`${baseBranchLabel}\`.`;
};

const getMissingChangesetPreview = (baseRef) =>
    [
        PREVIEW_MARKER,
        '## Release Preview',
        '',
        `Warning: Changesets detected package changes since \`${baseRef}\`, but no changeset file was found.`,
        '',
        'As-is, merging this PR would not publish a new package version. Run `pnpm changeset` to declare the intended release, or add an empty changeset if the package changes do not need a release.',
    ].join('\n');

const formatReleaseTable = (releases) => {
    const rows = releases.map(({name, nextVersion}) => `| ${name} | ${nextVersion} |`);
    return ['| Package | Next |', '| --- | --- |', ...rows].join('\n');
};

const formatReleaseGroups = (releases) =>
    RELEASE_TYPES.flatMap((type) => {
        const typeReleases = releases.filter((release) => release.type === type);

        if (typeReleases.length === 0) {
            return [];
        }

        return ['', `### ${type[0].toUpperCase()}${type.slice(1)}`, '', formatReleaseTable(typeReleases)];
    });

const buildPreview = async () => {
    const {baseRef, missingChangeset, releases} = await runChangesetStatus();

    if (missingChangeset) {
        return getMissingChangesetPreview(baseRef);
    }

    return [
        PREVIEW_MARKER,
        '## Release Preview',
        '',
        getSummary(releases, baseRef),
        ...formatReleaseGroups(releases),
    ].join('\n');
};

try {
    const preview = await buildPreview();
    process.stdout.write(`${preview}\n`);
} catch (error) {
    console.error(error);
    process.exitCode = 1;
}
