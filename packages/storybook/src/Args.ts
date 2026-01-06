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

const clearable: Arg<boolean> = {
    type: {
        control: 'boolean',
        description: 'Display clear button when value is present',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    initialValue: undefined,
};

/**
 * Type of date picker
 */
const type: Arg<'default' | 'multiple' | 'range'> = {
    type: {
        control: 'radio',
        options: ['default', 'multiple', 'range'],
        description: 'Picker type',
        table: {
            defaultValue: {summary: 'default'},
            type: {summary: "'default' | 'multiple' | 'range'"},
        },
    },
    initialValue: 'default',
};

export const Args = {
    label,
    description,
    error,
    required,
    disabled,
    readOnly,
    placeholder,
    clearable,
    type,
} as const;
