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

interface PlasmaStorageSchema {
    'storage-version': number;
    storage: Record<string, unknown>;
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

const getNestedValue = (obj: Record<string, unknown>, path: string[]): unknown => {
    let current: unknown = obj;
    for (const key of path) {
        if (typeof current !== 'object' || current === null) {
            return undefined;
        }
        current = (current as Record<string, unknown>)[key];
    }
    return current;
};

const setNestedValue = (obj: Record<string, unknown>, path: string[], value: unknown): void => {
    let current = obj;
    for (let i = 0; i < path.length - 1; i++) {
        const key = path[i];
        if (typeof current[key] !== 'object' || current[key] === null) {
            current[key] = {};
        }
        current = current[key] as Record<string, unknown>;
    }
    current[path[path.length - 1]] = value;
};

/**
 * Read a value from the versioned Plasma storage at the given path.
 *
 * @param path - Path segments within `storage`, e.g. `['table', 'my-table', 'columnVisibility']`.
 * @returns The stored value, or `null` if it doesn't exist or the storage is corrupted.
 */
export const getStorageItem = <T = unknown>(path: string[]): T | null => {
    const data = readStorage();
    if (!data || data['storage-version'] !== CURRENT_STORAGE_VERSION) {
        return null;
    }
    const value = getNestedValue(data.storage ?? {}, path);
    return value !== undefined ? (value as T) : null;
};

/**
 * Write a value to the versioned Plasma storage at the given path.
 *
 * @param path - Path segments within `storage`, e.g. `['table', 'my-table', 'columnVisibility']`.
 * @param value - The value to store (must be JSON-serializable).
 */
export const setStorageItem = <T = unknown>(path: string[], value: T): void => {
    let data = readStorage();
    if (!data || data['storage-version'] !== CURRENT_STORAGE_VERSION) {
        data = {'storage-version': CURRENT_STORAGE_VERSION, storage: {}};
    }
    if (!data.storage) {
        data.storage = {};
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
    const data = readStorage();
    if (!data) {
        return;
    }
    const parentPath = path.slice(0, -1);
    const key = path[path.length - 1];
    const parent = getNestedValue(data.storage ?? {}, parentPath);
    if (typeof parent === 'object' && parent !== null) {
        delete (parent as Record<string, unknown>)[key];
        writeStorage(data);
    }
};
