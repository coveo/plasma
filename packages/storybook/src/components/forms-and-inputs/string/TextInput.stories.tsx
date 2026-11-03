import {TextInput} from '@coveord/plasma-mantine';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../../Args.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';
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
    title: '@components/Forms and inputs/string/TextInput',
    id: 'TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'contextualHelp',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'placeholder',
                'leftSection',
                'rightSection',
            ],
        },
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
        contextualHelp: Args.contextualHelp.type,
        placeholder: Args.placeholder.type,
        leftSection: {
            control: 'boolean',
            description: 'Toggles a representative search icon before the value in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
            },
        },
        rightSection: {
            control: 'boolean',
            description: 'Toggles a representative clear icon after the value in this example.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'false'},
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
            {...withLabelContextualHelpProps(props)}
        />
    ),
};
