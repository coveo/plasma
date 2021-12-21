/**
 * From T, pick a set of properties whose keys are in the union K, and accept potentially other properties
 */
export type CherryPick<T, K extends keyof T> = Pick<T, K> & {[key: string]: any};
