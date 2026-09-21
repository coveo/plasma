import {TextInput} from '@coveord/plasma-mantine';
import {IconSearch, IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../../Args.js';
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
    title: '@components/Forms and inputs/string/TextInput',
    id: 'TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'labelInfo',
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
        label: {
            control: 'text',
            description: 'Content displayed as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        labelInfo: {
            control: 'text',
            description: 'Sets the Input.LabelInfo tooltip content in this example.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Additional information'"}},
        },
        description: {
            control: 'text',
            description: 'Helper content displayed below the label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        error: {
            control: 'text',
            description: 'Validation feedback displayed below the input.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        required: {
            control: 'boolean',
            description: 'Marks the field as required and displays a required indicator.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        readOnly: {
            control: 'boolean',
            description: 'Prevents users from changing the value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        placeholder: {
            ...Args.placeholder.type,
            description: 'Text displayed when the field is empty.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
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
            {...withLabelInfoProps(props)}
        />
    ),
};
