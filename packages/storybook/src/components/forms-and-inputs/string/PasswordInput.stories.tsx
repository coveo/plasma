import {PasswordInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../../Args.js';

interface PasswordInputStoryArgs {
    label: string;
    description: string;
    placeholder: string;
    error?: string;
    required: boolean;
    disabled: boolean;
    readOnly: boolean;
}

const meta: Meta<PasswordInputStoryArgs> = {
    title: '@components/Forms and inputs/string/PasswordInput',
    id: 'PasswordInput',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        label: Args.label.type,
        description: Args.description.type,
        placeholder: Args.placeholder.type,
        error: Args.error.type,
        required: Args.required.type,
        disabled: Args.disabled.type,
        readOnly: Args.readOnly.type,
    },
    args: {
        label: 'Database password',
        description: 'Use at least 12 characters.',
        placeholder: 'Enter a password',
        error: undefined,
        required: false,
        disabled: false,
        readOnly: false,
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <PasswordInput {...props} />,
};
