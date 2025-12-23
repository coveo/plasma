import {TextInput} from '@coveord/plasma-mantine/components/TextInput';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {InputWrapperArgs, InputWrapperArgTypes} from './InputWrapperArgs.js';

const meta: Meta<typeof TextInput> = {
    title: '@components/form/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs,
        placeholder: 'Placeholder',
        leftSection: false,
        rightSection: false,
    },
    argTypes: {
        ...InputWrapperArgTypes,
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
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
        leftSection: {
            control: 'boolean',
            description: 'Show icon in left section',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        rightSection: {
            control: 'boolean',
            description: 'Show text in right section',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof TextInput>;

export const Demo: Story = {
    render: ({leftSection, rightSection, ...props}: any) => (
        <TextInput
            rightSection={rightSection ? <IconX size={16} /> : undefined}
            leftSection={leftSection ? <IconSearch size={16} /> : undefined}
            {...props}
        />
    ),
};
