import {TimePicker} from '@coveord/plasma-mantine';
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

type TimePickerStoryArgs = ComponentProps<typeof TimePicker> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/Forms and inputs/date/TimePicker',
    id: 'TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'format',
                'withDropdown',
                'withSeconds',
                'clearable',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        format: '12h',
        withDropdown: true,
        clearable: Args.clearable.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        label: {
            control: 'text',
            description: 'Content displayed as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
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
            description: 'Prevents users from changing the time.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        format: {
            control: 'radio',
            options: ['12h', '24h'],
            description: 'Sets 12-hour or 24-hour time entry.',
            table: {
                defaultValue: {summary: "'12h'"},
                type: {summary: "'12h' | '24h'"},
            },
        },
        withDropdown: {
            control: 'boolean',
            description: 'Displays selectable time values when the input receives focus.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'true'}},
        },
        clearable: {
            ...Args.clearable.type,
            description: 'Displays a clear button when any time segment has a value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        withSeconds: {
            control: 'boolean',
            description: 'Adds a seconds segment to the time input.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
    },
} satisfies Meta<TimePickerStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <TimePicker {...withLabelInfoProps(props)} />,
};
