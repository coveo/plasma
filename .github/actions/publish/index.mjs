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
import angularChangelogConvention from 'conventional-changelog-angular';

import getLastTag from './getLastTag.mjs';

const VERSION_PREFIX = 'v';
const PATH = '.';
const BUMP_TYPES = ['major', 'minor', 'patch', 'prerelease'];

/**
 * @param options Optional options to use when publishing
 *   * `dry: boolean`: Dry run (default `false`)
 *   * `tag: string`: Tag to use on NPM (default `"latest"`)
 *   * `branch: string`: Branch name used to publish the new version (default `"master"`)
 *   * `bump: BUMP_TYPES`: Force a specific version bump instead of relying on the commit message
 */
export default async ({github, context, exec}, {
    dry = false, 
    tag = 'latest', 
    branch = 'master', 
    bump = null
} = {}) => {
    const GIT_USERNAME = 'coveobot';
    const GIT_EMAIL = 'coveobot@coveo.com';
    const GIT_SSH_REMOTE = 'deploy';

    await gitSetupSshRemote(context.repo.owner, context.repo.repo, process.env.DEPLOY_KEY, GIT_SSH_REMOTE);
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
        if (bump !== null && BUMP_TYPES.includes(bump)) {
            bumpInfo = {type: bump, preid: bump === 'prerelease' ? 'next' : undefined};
        } else {
            bumpInfo = convention.recommendedBumpOpts.whatBump(parsedCommits);
        }

        const currentVersion = lastTag.replace(VERSION_PREFIX, '');
        const newVersion = getNextVersion(currentVersion, bumpInfo);

        if (newVersion !== currentVersion) {
            console.info('Bumping %s to version %s', changedPackages.join(', '), newVersion);
            await pnpmBumpVersion(newVersion, lastTag, ['root']);

            let changelog = ''
            if (parsedCommits.length > 0) {
                changelog = await generateChangelog(
                    parsedCommits,
                    newVersion,
                    {
                        ...context.repo,
                        host: 'https://github.com',
                    },
                    convention.writerOpts
                );
                await writeChangelog(PATH, changelog);
            }

            const versionTag = `${VERSION_PREFIX}${newVersion}`;
            if (!dry) {
                await gitCommit(`chore(release): publish version ${versionTag} [skip ci]`, '.');
                await gitTag(versionTag);

                if (remote) {
                    console.info(`Pushing version ${versionTag} on git`);
                    await gitPush({remote: GIT_SSH_REMOTE});
                    await gitPushTags();
                }

                exec.exec('git', ['status'], {encoding: 'utf-8'});

                console.info(`Publishing version ${versionTag} on NPM`);
                await pnpmPublish(undefined, tag, branch);

                const [, ...bodyArray] = changelog.split('\n');
                await github.rest.repos.createRelease({
                    ...context.repo,
                    tag_name: versionTag,
                    name: `Release ${versionTag}`,
                    body: bodyArray.join('\n'),
                });
            } else {
                console.info('Would have called pnpmPublish with the following arguments:');
                console.info(`pnpmPublish(undefined, ${tag}, ${branch})`);
                console.info('Changelog: ', changelog);
            }
        }
    } else {
        console.info('No package changed, skipping publish');
    }
};
