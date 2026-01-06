import {type ArgTypes} from '@storybook/react-vite';

/**
 * Represents a Storybook arg with both its type definition and initial value
 */
export type Arg<T> = {
    readonly type: Partial<ArgTypes<any>>[string];
    readonly initialValue: T;
};

export type SharedArgs<T> = {
    readonly ArgsTypes: Partial<ArgTypes<T>>;
    readonly Args: T;
};

const label: Arg<string> = {
    type: {
        control: 'text',
        description: 'Input label',
        table: {
            type: {summary: 'string'},
        },
    },
    initialValue: 'Label',
};

const description: Arg<string> = {
    type: {
        control: 'text',
        description: 'Input description',
        table: {
            type: {summary: 'string'},
        },
    },
    initialValue: 'Description',
};

const error: Arg<string | undefined> = {
    type: {
        control: 'text',
        description: 'Error message',
        table: {
            type: {summary: 'string'},
        },
    },
    initialValue: undefined,
};

const required: Arg<boolean> = {
    type: {
        control: 'boolean',
        description: 'Required field indicator',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    initialValue: true,
};

const disabled: Arg<boolean> = {
    type: {
        control: 'boolean',
        description: 'Disabled state',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    initialValue: false,
};

const readOnly: Arg<boolean> = {
    type: {
        control: 'boolean',
        description: 'Read-only state',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    initialValue: false,
};

const placeholder: Arg<string> = {
    type: {
        control: 'text',
        description: 'Placeholder',
        table: {
            type: {summary: 'string'},
        },
    },
    initialValue: 'Placeholder',
};

export const Args = {
    label,
    description,
    error,
    required,
    disabled,
    readOnly,
    placeholder,
} as const;
