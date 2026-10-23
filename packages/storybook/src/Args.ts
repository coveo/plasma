import {type ArgTypes} from '@storybook/react-vite';

/**
 * Represents a Storybook arg with both its type definition and initial value
 */
export type Arg<T> = {
    readonly type: Partial<ArgTypes<Record<string, unknown>>>[string];
    readonly initialValue: T;
};

export type SharedArgs<T> = {
    readonly ArgsTypes: Partial<ArgTypes<T>>;
    readonly Args: T;
};

export interface WithLabelInfoArgs {
    labelInfo?: string;
}

const label: Arg<string> = {
    type: {
        control: 'text',
        description: 'Content displayed as the field label.',
        table: {
            defaultValue: {summary: 'undefined'},
            type: {summary: 'ReactNode'},
        },
    },
    initialValue: 'Label',
};

const description: Arg<string> = {
    type: {
        control: 'text',
        description: 'Helper content displayed below the label.',
        table: {
            defaultValue: {summary: 'undefined'},
            type: {summary: 'ReactNode'},
        },
    },
    initialValue: 'Description',
};

const error: Arg<string | undefined> = {
    type: {
        control: 'text',
        description: 'Validation feedback displayed below the input.',
        table: {
            defaultValue: {summary: 'undefined'},
            type: {summary: 'ReactNode'},
        },
    },
    initialValue: undefined,
};

const required: Arg<boolean> = {
    type: {
        control: 'boolean',
        description: 'Marks the field as required and displays a required indicator.',
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
        description: 'Disables the input.',
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
        description: 'Prevents users from changing the value.',
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
        description: 'Text displayed when the field is empty.',
        table: {
            defaultValue: {summary: 'undefined'},
            type: {summary: 'string'},
        },
    },
    initialValue: 'Placeholder',
};

const clearable: Arg<boolean | undefined> = {
    type: {
        control: 'boolean',
        description: 'Displays a clear button when the input has a value.',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    initialValue: undefined,
};

const labelInfo: Arg<string> = {
    type: {
        control: 'text',
        description: 'Tooltip content displayed in Input.LabelInfo',
        table: {
            type: {summary: 'string'},
        },
    },
    initialValue: 'Additional information',
};

/**
 * Type of date picker
 */
const type: Arg<'default' | 'multiple' | 'range'> = {
    type: {
        control: 'radio',
        options: ['default', 'multiple', 'range'],
        description: 'Selects single, multiple, or range selection mode.',
        table: {
            defaultValue: {summary: "'default'"},
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
    labelInfo,
    type,
} as const;
