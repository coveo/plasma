import {TimePicker} from '@coveord/plasma-mantine';
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
        clearable: {...Args.clearable.type, description: 'Displays a clear button when any time segment has a value.'},
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
    render: (props) => <TimePicker {...withLabelContextualHelpProps(props)} />,
};
