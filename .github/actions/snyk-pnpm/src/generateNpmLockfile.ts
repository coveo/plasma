import {LockfileV6} from '@pnpm/lockfile-types';

import {
    NpmLockedPackageDependency,
    NpmLockedPackageDependencyMap,
    NpmLockedPackageSubdependency,
    NpmPackageLock,
    PnpmPackageDesc,
    PnpmPackageDescType,
} from './Interfaces';
import {getDependencyFullname, getPathPackageDesc} from './processPnpmLockfile';

function getPackage(lockfile: LockfileV6, packageDesc: PnpmPackageDesc): NpmLockedPackageDependency {
    const snapshot = (lockfile.packages || {})[packageDesc.fullname];
    if (snapshot === undefined) {
        throw new Error(`Failed to lookup ${packageDesc.fullname} in packages`);
    }

    let dep: NpmLockedPackageDependency;
    dep = {version: packageDesc.version};

    if (packageDesc.type === PnpmPackageDescType.Github && snapshot.name !== undefined) {
        const [gitPath, commitHash] = packageDesc.version.split('#');
        dep.from = `${gitPath}#${commitHash.slice(0, 7)}`;
    }

    if ('integrity' in snapshot.resolution) {
        dep.integrity = snapshot.resolution.integrity;
    }

    if (snapshot.dependencies !== undefined) {
        dep.requires = snapshot.dependencies;
    }

    if (snapshot.dev === true) {
        dep.dev = snapshot.dev;
    }

    return dep;
}

function getSubdependencyFromDependency(dep: NpmLockedPackageDependency): NpmLockedPackageSubdependency {
    const subdep = {version: dep.version} as NpmLockedPackageSubdependency;
    if (dep.resolved !== undefined) {
        subdep.resolved = dep.resolved;
    }
    if (dep.integrity !== undefined) {
        subdep.integrity = dep.integrity;
    }
    return subdep;
}

export function generateNpmLock(lockfile: LockfileV6): NpmPackageLock {
    const deps = {} as NpmLockedPackageDependencyMap;
    const subdeps = {} as NpmLockedPackageDependencyMap;

    // process remaining packages, which must be secondary dependencies
    for (const [key, val] of Object.entries(lockfile.packages)) {
        const packageDesc = getPathPackageDesc(key, val);
        const pkg = getPackage(lockfile, packageDesc);
        if (deps[packageDesc.name] !== undefined) {
            subdeps[packageDesc.fullname] = pkg;
        } else {
            deps[packageDesc.name] = pkg;
        }
    }

    // add required subdependencies from the 'requires' of dependencies
    for (const [key, val] of Object.entries(deps)) {
        if (val.requires !== undefined) {
            for (let [name, version] of Object.entries(val.requires)) {
                const fullname = getDependencyFullname(name, version);
                const snapshot = (lockfile.packages || {})[fullname];
                if (snapshot === undefined) {
                    throw new Error(`Failed to lookup ${fullname} in packages`);
                }
                const packageDesc = getPathPackageDesc(fullname, snapshot);
                // secondary dependencies are declared in the 'dependencies' of a package
                if (packageDesc.fullname in subdeps) {
                    const dep = subdeps[packageDesc.fullname];
                    if (val.dependencies === undefined) {
                        val.dependencies = {};
                    }
                    val.dependencies[name] = getSubdependencyFromDependency(dep);
                } else {
                    const dep = deps[name];
                    if (dep.version != packageDesc.version) {
                        throw new Error(`Failed to lookup ${packageDesc.fullname} in dependencies; used by ${key}`);
                    }
                }

                // remove any extraneous info from the name in 'requires'
                if (packageDesc.extra !== undefined || packageDesc.type == PnpmPackageDescType.Uri) {
                    val.requires[name] = packageDesc.version;
                }
            }
        }
    }
    return {requires: true, lockfileVersion: 1, dependencies: deps};
}
