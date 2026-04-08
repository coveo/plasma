/**
 * Versioned localStorage utility for Plasma.
 *
 * All Plasma data is stored under a single `"plasma"` key with the shape:
 * ```json
 * {
 *   "storage-version": 1,
 *   "storage": {
 *     "table": {
 *       "my-table": { "columnVisibility": { ... } }
 *     }
 *   }
 * }
 * ```
 */

export const STORAGE_KEY = 'plasma';
export const CURRENT_STORAGE_VERSION = 1;

type JsonObject = Record<string, unknown>;

const createStorageObject = (): JsonObject => Object.create(null) as JsonObject;

const isUnsafeKey = (key: string): boolean => key === '__proto__' || key === 'constructor' || key === 'prototype';

const isSafePath = (path: string[]): boolean => path.every((key) => !isUnsafeKey(key));

interface PlasmaStorageSchema {
    'storage-version': number;
    storage: JsonObject;
}

const readStorage = (): PlasmaStorageSchema | null => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw === null) {
            return null;
        }
        const parsed = JSON.parse(raw);
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
            localStorage.removeItem(STORAGE_KEY);
            return null;
        }
        return parsed as PlasmaStorageSchema;
    } catch {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
            console.warn(`Unable to clean up corrupted localStorage key "${STORAGE_KEY}".`);
        }
        return null;
    }
};

const writeStorage = (data: PlasmaStorageSchema): void => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
        console.warn(`Unable to write to localStorage key "${STORAGE_KEY}".`);
    }
};

const getNestedValue = (obj: JsonObject, path: string[]): unknown => {
    let current: unknown = obj;
    for (const key of path) {
        if (typeof current !== 'object' || current === null) {
            return undefined;
        }
        current = (current as JsonObject)[key];
    }
    return current;
};

const setNestedValue = (obj: JsonObject, path: string[], value: unknown): void => {
    let current = obj;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (isUnsafeKey(key)) {
            return;
        }
        if (typeof current[key] !== 'object' || current[key] === null) {
            current[key] = createStorageObject();
        }
        current = current[key] as JsonObject;
    }
    const lastKey = path[path.length - 1];
    if (!isUnsafeKey(lastKey)) {
        current[lastKey] = value;
    }
};

/**
 * Read a value from the versioned Plasma storage at the given path.
 *
 * @param path - Path segments within `storage`, e.g. `['table', 'my-table', 'columnVisibility']`.
 * @returns The stored value, or `null` if it doesn't exist or the storage is corrupted.
 */
export const getStorageItem = <T = unknown>(path: string[]): T | null => {
    if (!isSafePath(path)) {
        return null;
    }
    const data = readStorage();
    if (!data || data['storage-version'] !== CURRENT_STORAGE_VERSION) {
        return null;
    }
    const value = getNestedValue(data.storage ?? createStorageObject(), path);
    return value !== undefined ? (value as T) : null;
};

/**
 * Write a value to the versioned Plasma storage at the given path.
 *
 * @param path - Path segments within `storage`, e.g. `['table', 'my-table', 'columnVisibility']`.
 * @param value - The value to store (must be JSON-serializable).
 */
export const setStorageItem = <T = unknown>(path: string[], value: T): void => {
    if (!isSafePath(path)) {
        return;
    }
    let data = readStorage();
    if (!data || data['storage-version'] !== CURRENT_STORAGE_VERSION) {
        data = {'storage-version': CURRENT_STORAGE_VERSION, storage: createStorageObject()};
    }
    if (!data.storage) {
        data.storage = createStorageObject();
    }
    setNestedValue(data.storage, path, value);
    writeStorage(data);
};

/**
 * Remove a value from the versioned Plasma storage at the given path.
 *
 * @param path - Path segments within `storage`, e.g. `['table', 'my-table', 'columnVisibility']`.
 */
export const removeStorageItem = (path: string[]): void => {
    if (!isSafePath(path)) {
        return;
    }
    const data = readStorage();
    if (!data) {
        return;
    }
    const parentPath = path.slice(0, -1);
    const key = path[path.length - 1];
    const parent = getNestedValue(data.storage ?? {}, parentPath);
    if (typeof parent === 'object' && parent !== null) {
        delete (parent as JsonObject)[key];
        writeStorage(data);
    }
};
