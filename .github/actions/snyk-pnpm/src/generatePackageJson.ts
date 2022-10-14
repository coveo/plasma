import {Lockfile, ResolvedDependencies} from '@pnpm/lockfile-types';
import {PackageJson} from 'type-fest';

function isLocalPackage(resolvedVersion: string): boolean {
    return /^link:/.test(resolvedVersion);
}

function convertResolvedDepsToSpecifiedDeps(
    resolvedDeps: ResolvedDependencies,
    specifiers: ResolvedDependencies
): PackageJson.Dependency {
    const deps = {} as PackageJson.Dependency;
    if (resolvedDeps) {
        Object.entries(resolvedDeps).forEach(([packageName, resolvedVersion]) => {
            if (!isLocalPackage(resolvedVersion)) {
                const specifiedVersion = specifiers[packageName];
                deps[packageName] = specifiedVersion;
            }
        });
    }
    return deps;
}

export function generatePackageJson(lockfile: Lockfile): PackageJson {
    const deps = {} as PackageJson.Dependency;
    const devDeps = {} as PackageJson.Dependency;

    for (const [projectName, projectSnapshot] of Object.entries(lockfile.importers)) {
        Object.assign(
            deps,
            convertResolvedDepsToSpecifiedDeps(projectSnapshot.dependencies, projectSnapshot.specifiers)
        );
        Object.assign(
            devDeps,
            convertResolvedDepsToSpecifiedDeps(projectSnapshot.devDependencies, projectSnapshot.specifiers)
        );
    }
    return {dependencies: deps, devDependencies: devDeps};
}
