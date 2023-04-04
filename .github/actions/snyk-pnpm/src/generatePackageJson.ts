import {LockfileV6, ResolvedDependenciesOfImporters} from '@pnpm/lockfile-types';
import {PackageJson} from 'type-fest';

function isLocalPackage(resolvedVersion: string): boolean {
    return /^link:/.test(resolvedVersion);
}

function convertResolvedDepsToSpecifiedDeps(resolvedDeps: ResolvedDependenciesOfImporters): PackageJson.Dependency {
    const deps = {} as PackageJson.Dependency;
    if (resolvedDeps) {
        Object.entries(resolvedDeps).forEach(([packageName, {version, specifier}]) => {
            if (!isLocalPackage(version)) {
                deps[packageName] = specifier;
            }
        });
    }
    return deps;
}

export function generatePackageJson(lockfile: LockfileV6): PackageJson {
    const deps = {} as PackageJson.Dependency;
    const devDeps = {} as PackageJson.Dependency;

    for (const [projectName, projectSnapshot] of Object.entries(lockfile.importers)) {
        Object.assign(deps, convertResolvedDepsToSpecifiedDeps(projectSnapshot.dependencies));
        Object.assign(devDeps, convertResolvedDepsToSpecifiedDeps(projectSnapshot.devDependencies));
    }
    return {dependencies: deps, devDependencies: devDeps};
}
