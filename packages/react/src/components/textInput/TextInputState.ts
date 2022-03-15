export type TextInputState = {
    value: string;
    status: 'valid' | 'invalid' | 'warning' | 'indeterminate';
    message: string;
    visibleStatus: boolean;
    isDirty: boolean;
};
