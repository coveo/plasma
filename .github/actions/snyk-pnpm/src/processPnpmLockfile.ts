import readYamlFile from 'read-yaml-file';
import {LockfileV6, PackageSnapshot} from '@pnpm/lockfile-types';
import {PnpmPackageDesc, PnpmPackageDescType} from './Interfaces';

export async function readLockfile(lockfilePath: string): Promise<LockfileV6 | null> {
    try {
        return await readYamlFile<LockfileV6>(lockfilePath);
    } catch (err) {
        if ((err as NodeJS.ErrnoException).code !== 'ENOENT') {
            throw err;
        }

        return null;
    }
}

export function getGithubPackageDesc(uri: string, packageSnapshot: PackageSnapshot): PnpmPackageDesc {
    const result = /^github.com\/([^\/]+\/([^\/]+))\/([0-9a-f]{7})$/.exec(uri);
    if (result == null) {
        throw new Error(`Error parsing github URI ${uri}`);
    }
    const versionUri = `github:${result[1]}#${result[3]}`;
    const name = packageSnapshot.name;
    return {
        type: PnpmPackageDescType.Github,
        fullname: uri,
        name,
        version: versionUri,
    };
}

/**
 *Package names look like:
 * - /@pnpm/error@1.0.0
 * - /@pnpm/lockfile-file@1.1.3_@pnpm+logger@2.1.1
 * - /@emotion/core@10.0.14_react@16.8.6
 * - /@uc/modal-loader@0.7.1_2eb23211954108c6f87c7fe8e90d1312
 * - /eslint-plugin-import@2.26.0(@typescript-eslint/parser@4.33.0)(eslint@7.32.0)
 * - npm.example.com/axios@0.19.0
 * - npm.example.com/@sentry/node@5.1.0_@other@1.2.3
 * - github.com/LewisArdern/eslint-plugin-angularjs-security-rules/41da01727c87119bd523e69e22af2d04ab558ec9
 */
export function getPathPackageDesc(fullname: string, packageSnapshot: PackageSnapshot): PnpmPackageDesc {
    if (!fullname.startsWith('github.com/')) {
        const result = /^[^\/]*\/((?:@[^\/]+\/)?[^@]+)@(.*)$/.exec(fullname);
        if (result == null) {
            throw new Error(`Error parsing package name ${fullname}`);
        }

        let type;
        if (fullname[0] === '/') {
            type = PnpmPackageDescType.Version;
        } else {
            type = PnpmPackageDescType.Uri;
        }

        const name = result[1];
        const version = result[2];
        let versionNumber;
        let extra;
        const firstUnderscore = version.indexOf('_');
        if (firstUnderscore != -1) {
            versionNumber = version.substr(0, firstUnderscore);
            extra = version.substr(firstUnderscore + 1);
        } else {
            versionNumber = version;
        }
        return {type, fullname, name, version: versionNumber, extra};
    } else {
        return getGithubPackageDesc(fullname, packageSnapshot);
    }
}

export function getDependencyFullname(name: string, version: string): string {
    return /^\d/.test(version) ? `/${name}@${version}` : version;
}
