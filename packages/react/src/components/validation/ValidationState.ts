export type ISingleValidation<T> = {
    validationType: string;
    value: T;
};

export type ValidationState = {
    isDirty: Array<ISingleValidation<boolean>>;
    error: Array<ISingleValidation<string>>;
    warning: Array<ISingleValidation<string>>;
};

export type ValidationsState = Record<string, ValidationState>;
