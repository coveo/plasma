import {PasswordInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

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
        label: {
            control: 'text',
            description: 'Content rendered as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        description: {
            control: 'text',
            description: 'Help text rendered below the label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        placeholder: {
            control: 'text',
            description: 'Hint shown when the field is empty.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
        error: {
            control: 'text',
            description: 'Validation feedback rendered below the field.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        required: {
            control: 'boolean',
            description: 'Marks the field as required.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the field.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        readOnly: {
            control: 'boolean',
            description: 'Prevents edits while preserving the read-only field presentation.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
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
