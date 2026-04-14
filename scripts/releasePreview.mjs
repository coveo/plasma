import {access, cp, mkdtemp, readdir, readFile, rm, symlink} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {execFile as execFileCallback} from 'node:child_process';
import {promisify} from 'node:util';

const execFile = promisify(execFileCallback);
const ROOT = process.cwd();
const PREVIEW_MARKER = '<!-- changesets-release-preview -->';

const exec = async (file, args, options = {}) => {
    const {stdout, stderr} = await execFile(file, args, {
        cwd: ROOT,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
        ...options,
    });

    return {stdout, stderr};
};

const listPackageJsonFiles = async (baseDir) => {
    const entries = await readdir(path.join(baseDir, 'packages'), {withFileTypes: true});
    const packageJsonFiles = await Promise.all(
        entries
            .filter((entry) => entry.isDirectory())
            .map(async (entry) => {
                const packageJsonPath = path.join(baseDir, 'packages', entry.name, 'package.json');

                try {
                    await access(packageJsonPath);
                    return packageJsonPath;
                } catch {
                    return null;
                }
            }),
    );

    return packageJsonFiles.filter(Boolean);
};

const readJson = async (filePath) => JSON.parse(await readFile(filePath, 'utf8'));

const getPackages = async (baseDir) => {
    const packageJsonFiles = await listPackageJsonFiles(baseDir);
    const packages = await Promise.all(
        packageJsonFiles.map(async (packageJsonPath) => {
            const pkg = await readJson(packageJsonPath);
            return {
                name: pkg.name,
                version: pkg.version,
                private: pkg.private === true,
            };
        }),
    );

    return new Map(packages.map((pkg) => [pkg.name, pkg]));
};

const getChangedFiles = async () => {
    const {stdout} = await exec('git', ['diff', '--name-only', '--diff-filter=d', 'origin/master...HEAD']);
    return stdout
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
};

const hasPackageCodeChanges = (changedFiles) =>
    changedFiles.some(
        (filePath) =>
            filePath.startsWith('packages/') &&
            !filePath.endsWith('.md') &&
            !filePath.startsWith('packages/website/src/docs/'),
    );

const createPreviewDir = async () => {
    const tempDir = await mkdtemp(path.join(os.tmpdir(), 'plasma-release-preview-'));
    await cp(ROOT, tempDir, {
        recursive: true,
        filter: (source) => {
            const relativePath = path.relative(ROOT, source);

            if (!relativePath) {
                return true;
            }

            return relativePath !== '.git' && relativePath !== 'node_modules' && !relativePath.startsWith('.git/');
        },
    });
    await symlink(path.join(ROOT, 'node_modules'), path.join(tempDir, 'node_modules'), 'dir');
    return tempDir;
};

const removePreviewDir = async (previewDir) => rm(previewDir, {recursive: true, force: true});

const runVersionPreview = async (worktreePath) => {
    await execFile('pnpm', ['exec', 'changeset', 'version'], {
        cwd: worktreePath,
        encoding: 'utf8',
        maxBuffer: 10 * 1024 * 1024,
    });
};

const getVersionChanges = async (previewDir) => {
    const currentPackages = await getPackages(ROOT);
    const nextPackages = await getPackages(previewDir);

    return [...nextPackages.values()]
        .filter((nextPkg) => {
            const currentPkg = currentPackages.get(nextPkg.name);
            return currentPkg && currentPkg.version !== nextPkg.version;
        })
        .map((nextPkg) => {
            const currentPkg = currentPackages.get(nextPkg.name);
            return {
                name: nextPkg.name,
                private: nextPkg.private,
                currentVersion: currentPkg.version,
                nextVersion: nextPkg.version,
            };
        })
        .sort((left, right) => {
            if (left.private !== right.private) {
                return left.private ? 1 : -1;
            }
            return left.name.localeCompare(right.name);
        });
};

const formatTable = (changes) => {
    const rows = changes.map(
        ({name, private: isPrivate, currentVersion, nextVersion}) =>
            `| ${name} | ${isPrivate ? 'private' : 'public'} | ${currentVersion} | ${nextVersion} |`,
    );

    return ['| Package | Visibility | Current | Next |', '| --- | --- | --- | --- |', ...rows].join('\n');
};

const getSummary = (changes) => {
    if (changes.length === 0) {
        return 'This PR would not change any package versions if it were merged and released from `master`.';
    }

    const publicCount = changes.filter(({private: isPrivate}) => !isPrivate).length;
    const privateCount = changes.length - publicCount;

    return `This PR would bump ${changes.length} package version${changes.length === 1 ? '' : 's'} if it were merged and released from \`master\` (${publicCount} public, ${privateCount} private).`;
};

const buildPreview = async () => {
    const changedFiles = await getChangedFiles();
    const packageCodeChanged = hasPackageCodeChanges(changedFiles);
    const previewDir = await createPreviewDir();

    try {
        await runVersionPreview(previewDir);
        const changes = await getVersionChanges(previewDir);
        const lines = [PREVIEW_MARKER, '## Release Preview', '', getSummary(changes)];

        if (changes.length > 0) {
            lines.push(
                '',
                formatTable(changes),
                '',
                'Private packages are versioned for internal consistency but are not published to npm.',
            );
        } else if (packageCodeChanged) {
            lines.push(
                '',
                'Warning: package files changed, but no Changesets version bump was detected. As-is, merging this PR would not publish a new package version.',
            );
        }

        return lines.join('\n');
    } finally {
        await removePreviewDir(previewDir);
    }
};

try {
    const preview = await buildPreview();
    process.stdout.write(`${preview}\n`);
} catch (error) {
    console.error(error);
    process.exitCode = 1;
}
