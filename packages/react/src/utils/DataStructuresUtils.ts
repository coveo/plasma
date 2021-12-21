export type KeyValue<T> = {
    [key: string]: T;
};

// mod is a modulo function that works with negative numbers
export const mod = (x: number, n: number) => ((x % n) + n) % n;
