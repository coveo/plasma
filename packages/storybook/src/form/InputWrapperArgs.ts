import {type InputWrapperProps} from '@mantine/core';
import {type ComponentPropsWithoutRef} from 'react';
import {Args, SharedArgs} from '../Args.js';

export const InputWrapperArgs: SharedArgs<InputWrapperProps> = {
    ArgsTypes: {
        label: Args.label.type,
        description: Args.description.type,
        error: Args.error.type,
        required: Args.required.type,
    },
    Args: {
        label: Args.label.initialValue,
        description: Args.description.initialValue,
        required: Args.required.initialValue,
    },
};

export const BaseInputArgs: SharedArgs<ComponentPropsWithoutRef<'input'>> = {
    ArgsTypes: {
        disabled: Args.disabled.type,
        readOnly: Args.readOnly.type,
    },
    Args: {
        disabled: Args.disabled.initialValue,
        readOnly: Args.readOnly.initialValue,
    },
};
