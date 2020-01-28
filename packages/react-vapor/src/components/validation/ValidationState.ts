export type ValidationState = {
    isDirty: Array<{validationType: string; value: boolean}>;
    error: Array<{validationType: string; value: string}>;
    warning: Array<{validationType: string; value: string}>;
};

export type ValidationsState = Record<string, ValidationState>;
