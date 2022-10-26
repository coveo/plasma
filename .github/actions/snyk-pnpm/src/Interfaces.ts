export interface NpmPackageLock {
    requires?: boolean;
    lockfileVersion: number;
    dependencies: NpmLockedPackageDependencyMap;
}

export interface NpmLockedPackageDependency {
    version?: string;
    resolved?: string;
    from?: string;
    integrity?: string;
    dev?: boolean;
    requires?: NpmLockedPackageRequiresMap;
    dependencies?: NpmLockedPackageSubdependencyMap;
}

export interface NpmLockedPackageDependencyMap {
    [name: string]: NpmLockedPackageDependency;
}

export interface NpmLockedPackageRequiresMap {
    [name: string]: string;
}

export interface NpmLockedPackageSubdependency {
    version: string;
    resolved?: string;
    integrity?: string;
}

export interface NpmLockedPackageSubdependencyMap {
    [name: string]: NpmLockedPackageSubdependency;
}

export enum PnpmPackageDescType {
    Version,
    Github,
    Uri,
}

export interface PnpmPackageDesc {
    type: PnpmPackageDescType;
    fullname: string;
    name: string;
    version: string;
    extra?: string;
}
