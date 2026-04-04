import {PasswordEditableInput} from '@coveord/plasma-mantine/components/PasswordEditableInput';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof PasswordEditableInput> = {
    title: '@components/form/string/PasswordEditableInput',
    id: 'PasswordEditableInput',
    component: PasswordEditableInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: Args.placeholder.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: Args.placeholder.type,
        maskedFieldProps: {
            control: false,
            description: 'Masked mode configuration',
        },
        onEdit: {
            action: 'edit clicked',
            table: {
                type: {summary: '() => void'},
            },
        },
        onCancel: {
            action: 'cancel clicked',
            table: {
                type: {summary: '() => void'},
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof PasswordEditableInput>;

export const Default: Story = {
    render: (props) => <PasswordEditableInput {...props} />,
};

export const Masked: Story = {
    args: {
        maskedFieldProps: {
            enabled: true,
            defaultMasked: true,
        },
    },
    render: (props) => <PasswordEditableInput {...props} />,
};

export const MaskedOverrides: Story = {
    args: {
        label: 'Password',
        description: 'Use your secure credential',
        maskedFieldProps: {
            enabled: true,
            defaultMasked: true,
            label: 'Saved password',
            description: 'Password value is currently masked',
            placeholder: 'MASKED-●●●●-value',
        },
    },
    render: (props) => <PasswordEditableInput {...props} />,
};
