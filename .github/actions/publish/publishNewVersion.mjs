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
    gitSetupSshRemote,
    gitSetupUser,
} from '@coveo/semantic-monorepo-tools';
import {spawnSync} from 'node:child_process';
import {Command, Option as CommanderOption} from 'commander';
import angularChangelogConvention from 'conventional-changelog-angular';

import getLastTag from './getLastTag.mjs';

const VERSION_PREFIX = 'v';
const PATH = '.';
const BUMP_TYPES = ['major', 'minor', 'patch', 'prerelease'];

const program = new Command();
program
    .option('--dry', 'dry run', false)
    .option('--tag <tag>', 'tag to use on NPM', 'latest')
    .option('--branch <branch>', 'allow deploy on branch', 'master')
    .addOption(
        new CommanderOption('--bump <type>', 'bump a <type> version instead of reliying on commit messages').choices(
            BUMP_TYPES
        )
    );

program.parse();

const options = program.opts();

const outputProcess = (process) => {
    if (process) {
        console.info(process.stdout.trim());
        if (process.status !== 0) {
            console.error(process.stderr.trim());
        }
    }
};

(async () => {
    const REPO_OWNER = 'coveo';
    const REPO_NAME = 'plasma';
    const GIT_USERNAME = 'plasma-bot';
    const GIT_EMAIL = 'plasma-bot@users.noreply.github.com';
    const GIT_SSH_REMOTE = 'deploy';

    await gitSetupSshRemote(REPO_OWNER, REPO_NAME, process.env.DEPLOY_KEY, GIT_SSH_REMOTE);
    await gitSetupUser(GIT_USERNAME, GIT_EMAIL);

    const convention = await angularChangelogConvention;

    const lastTag = await getLastTag();
    console.info('Last tag: %s', lastTag);

    const remote = await getRemoteName();

    const changedPackages = await pnpmGetChangedPackages(lastTag);
    if (!changedPackages.includes('root')) {
        changedPackages.push('root');
    }

    if (changedPackages.length > 0) {
        const commits = await getCommits(PATH, lastTag);

        const parsedCommits = parseCommits(commits, convention.parserOpts);
        let bumpInfo;
        if (options.bump !== null && BUMP_TYPES.includes(options.bump)) {
            bumpInfo = {type: options.bump, preid: options.bump === 'prerelease' ? 'next' : undefined};
        } else {
            bumpInfo = convention.recommendedBumpOpts.whatBump(parsedCommits);
        }

        const currentVersion = lastTag.replace(VERSION_PREFIX, '');
        const newVersion = getNextVersion(currentVersion, bumpInfo);

        if (newVersion !== currentVersion) {
            console.info('Bumping %s to version %s', changedPackages.join(', '), newVersion);
            await pnpmBumpVersion(newVersion, lastTag, ['root']);

            if (parsedCommits.length > 0) {
                const changelog = await generateChangelog(
                    parsedCommits,
                    newVersion,
                    {
                        host: 'https://github.com',
                        owner: REPO_OWNER,
                        repository: REPO_NAME,
                    },
                    convention.writerOpts
                );
                await writeChangelog(PATH, changelog);
            }

            const versionTag = `${VERSION_PREFIX}${newVersion}`;
            if (!options.dry) {
                await gitCommit(`chore(release): publish version ${versionTag} [skip ci]`, '.');
                await gitTag(versionTag);

                if (remote) {
                    console.info(`Pushing version ${versionTag} on git`);
                    await gitPush();
                    await gitPushTags();
                }

                spawnSync('git', ['status'], {encoding: 'utf-8'});

                console.info(`Publishing version ${versionTag} on NPM`);
                await pnpmPublish(undefined, options.tag, options.branch);
            } else {
                console.info('Would have called pnpmPublish with the following arguments:');
                console.info(`pnpmPublish(undefined, ${options.tag}, ${options.branch})`);
            }
        }
    } else {
        console.info('No package changed, skipping publish');
    }
})();
