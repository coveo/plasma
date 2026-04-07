/**
 * Safe wrappers around `localStorage` that silently handle unavailable or full storage.
 */

/**
 * Read and parse a JSON value from localStorage.
 *
 * @param removeOnError - When `true`, removes the key if parsing fails.
 * @returns The parsed value, or `null` if the key doesn't exist or parsing fails.
 */
export const getLocalStorageItem = <T = unknown>(key: string, {removeOnError = false} = {}): T | null => {
    try {
        const raw = localStorage.getItem(key);
        if (raw === null) {
            return null;
        }
        return JSON.parse(raw) as T;
    } catch {
        if (removeOnError) {
            removeLocalStorageItem(key);
        }
        return null;
    }
};

/**
 * Serialize a value as JSON and write it to localStorage.
 */
export const setLocalStorageItem = <T = unknown>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        console.warn(`Unable to write to localStorage key "${key}".`);
    }
};

/**
 * Remove a key from localStorage.
 */
export const removeLocalStorageItem = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch {
        console.warn(`Unable to remove localStorage key "${key}".`);
    }
};
