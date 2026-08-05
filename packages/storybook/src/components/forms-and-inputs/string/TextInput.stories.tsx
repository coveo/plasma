import {TextInput} from '@coveord/plasma-mantine/components/TextInput';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../Args.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';

type TextInputStoryArgs = Omit<ComponentProps<typeof TextInput>, 'leftSection' | 'rightSection'> &
    BaseInputStoryArgs &
    InputWrapperStoryArgs & {
        leftSection: boolean;
        rightSection: boolean;
    };

const meta = {
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
} satisfies Meta<TextInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({leftSection, rightSection, ...props}) => (
        <TextInput
            rightSection={rightSection ? <IconX size={16} /> : undefined}
            leftSection={leftSection ? <IconSearch size={16} /> : undefined}
            {...withLabelInfoProps(props)}
        />
    ),
};
