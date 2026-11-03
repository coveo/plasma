import {type ReactNode} from 'react';
import {Args, SharedArgs, type WithContextualHelpArgs} from '../../Args.js';

export interface InputWrapperStoryArgs extends WithContextualHelpArgs {
    label: ReactNode;
    description: ReactNode;
    error?: ReactNode;
    required: boolean;
}

export interface BaseInputStoryArgs {
    disabled: boolean;
    readOnly: boolean;
}

export interface InlineInputStoryArgs extends BaseInputStoryArgs, WithContextualHelpArgs {
    label: ReactNode;
    description: ReactNode;
    error?: ReactNode;
}

export const InputWrapperArgs: SharedArgs<InputWrapperStoryArgs> = {
    ArgsTypes: {
        label: Args.label.type,
        contextualHelp: Args.contextualHelp.type,
        description: Args.description.type,
        error: Args.error.type,
        required: Args.required.type,
    },
    Args: {
        label: Args.label.initialValue,
        contextualHelp: Args.contextualHelp.initialValue,
        description: Args.description.initialValue,
        required: Args.required.initialValue,
    },
};

export const BaseInputArgs: SharedArgs<BaseInputStoryArgs> = {
    ArgsTypes: {
        disabled: Args.disabled.type,
        readOnly: Args.readOnly.type,
    },
    Args: {
        disabled: Args.disabled.initialValue,
        readOnly: Args.readOnly.initialValue,
    },
};

export const InlineInputArgs: SharedArgs<InlineInputStoryArgs> = {
    ArgsTypes: {
        label: Args.label.type,
        contextualHelp: Args.contextualHelp.type,
        description: Args.description.type,
        disabled: Args.disabled.type,
        readOnly: Args.readOnly.type,
        error: Args.error.type,
    },
    Args: {
        label: Args.label.initialValue,
        contextualHelp: Args.contextualHelp.initialValue,
        description: Args.description.initialValue,
        disabled: Args.disabled.initialValue,
        readOnly: Args.readOnly.initialValue,
    },
};
