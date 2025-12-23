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
