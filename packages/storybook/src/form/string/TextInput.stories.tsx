import {TextInput} from '@coveord/plasma-mantine/components/TextInput';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof TextInput> = {
    title: '@components/form/string/TextInput',
    id: 'TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: Args.placeholder.initialValue,
        leftSection: false,
        rightSection: false,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: Args.placeholder.type,
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
