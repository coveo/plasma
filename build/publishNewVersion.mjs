import {
    generateChangelog,
    getNextVersion,
    getCommits,
    getRemoteName,
    gitPush,
    gitPushTags,
    gitTag,
    gitCommit,
    parseCommits,
    pnpmBumpVersion,
    pnpmGetChangedPackages,
    pnpmPublish,
    writeChangelog,
} from '@coveo/semantic-monorepo-tools';
import {spawnSync} from 'node:child_process';
import {Command, Option} from 'commander';
import angularChangelogConvention from 'conventional-changelog-angular';

import getLastTag from './getLastTag.mjs';

const VERSION_PREFIX = 'v';
const PATH = '.';
const BUMP_TYPES = ['major', 'minor', 'patch', 'prerelease'];

const program = new Command();
program
    .option('--dry', 'dry run', false)
    .option('--tag', 'tag to use on NPM', 'latest')
    .option('--branch', 'allow deploy on branch', 'master')
    .addOption(
        new Option('--bump <type>', 'bump a <type> version instead of reliying on commit messages').choices(BUMP_TYPES)
    );

program.parse();

const options = program.opts();

const outputProcess = (process) => {
    if (process) {
        console.log(process.stdout.trim());
        if (process.status !== 0) {
            console.error(process.stderr.trim());
        }
    }
};

(async () => {
    const convention = await angularChangelogConvention;

    const lastTag = getLastTag();
    console.log('Last tag: %s', lastTag);

    const [remote] = getRemoteName();

    const changedPackages = pnpmGetChangedPackages(lastTag);
    if (!changedPackages.includes('root')) {
        changedPackages.push('root');
    }

    if (changedPackages.length > 0) {
        const [commits] = getCommits(PATH, lastTag);

        const parsedCommits = parseCommits(commits, convention.parserOpts);
        let bumpInfo;
        if (options.bump !== null && BUMP_TYPES.includes(options.bump)) {
            bumpInfo = {type: options.bump, preid: options.bump === 'prerelease' ? 'next' : undefined};
        } else {
            bumpInfo = convention.recommendedBumpOpts.whatBump(parsedCommits);
        }

        const currentVersion = {version: lastTag.replace(VERSION_PREFIX, '')};
        const newVersion = getNextVersion(currentVersion, bumpInfo);

        if (newVersion !== currentVersion) {
            console.log('Bumping %s to version %s', changedPackages.join(', '), newVersion);
            pnpmBumpVersion(newVersion, lastTag, ['root']);

            if (parsedCommits.length > 0) {
                const changelog = await generateChangelog(
                    parsedCommits,
                    newVersion,
                    {
                        host: 'https://github.com',
                        owner: 'coveo',
                        repository: 'plasma',
                    },
                    convention.writerOpts
                );
                await writeChangelog(PATH, changelog);
            }

            const versionTag = `${VERSION_PREFIX}${newVersion}`;
            if (!options.dry) {
                outputProcess(gitCommit(`chore(release): publish version ${versionTag} [version bump]`, '.'));
                gitTag(versionTag);

                if (remote) {
                    console.log(`Pushing version ${versionTag} on git`);
                    outputProcess(gitPush());
                    outputProcess(gitPushTags());
                }

                outputProcess(spawnSync('git', ['status'], {encoding: 'utf-8'}));

                console.log(`Publishing version ${versionTag} on NPM`);
                outputProcess(pnpmPublish(lastTag, options.tag, options.branch));
            }
        }
    } else {
        console.log('No package changed, skipping publish');
    }
})();
