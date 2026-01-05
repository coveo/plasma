import {InputWrapperProps} from '@mantine/core';
import {ArgTypes} from '@storybook/react-vite';

/**
 * ArgTypes for InputWrapper component props
 */
export const InputWrapperArgTypes: Partial<ArgTypes<InputWrapperProps>> = {
    label: {
        control: 'text',
        description: 'Input label',
        table: {
            type: {summary: 'string'},
        },
    },
    description: {
        control: 'text',
        description: 'Input description',
        table: {
            type: {summary: 'string'},
        },
    },
    error: {
        control: 'text',
        description: 'Error message',
        table: {
            type: {summary: 'string'},
        },
    },
    required: {
        control: 'boolean',
        description: 'Required field indicator',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
};

export const InputWrapperArgs: Partial<InputWrapperProps> = {
    label: 'Label',
    description: 'Description',
    required: true,
};

export const InputArgTypes: Partial<ArgTypes<HTMLInputElement>> = {
    placeholder: {
        control: 'text',
        description: 'Placeholder',
        table: {
            type: {summary: 'string'},
        },
    },
    disabled: {
        control: 'boolean',
        description: 'Disabled state',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
    readOnly: {
        control: 'boolean',
        description: 'Read-only state',
        table: {
            defaultValue: {summary: 'false'},
            type: {summary: 'boolean'},
        },
    },
};

export const InputArgs: Partial<HTMLInputElement> = {
    placeholder: 'Placeholder',
    disabled: false,
    readOnly: false,
};
