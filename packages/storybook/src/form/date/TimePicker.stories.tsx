import {TimePicker} from '@coveord/plasma-mantine/components/TimePicker';
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

type TimePickerStoryArgs = ComponentProps<typeof TimePicker> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/date/TimePicker',
    id: 'TimePicker',
    component: TimePicker,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        format: '12h',
        clearable: Args.clearable.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        format: {
            control: 'radio',
            options: ['12h', '24h'],
            description: 'Time format (12-hour or 24-hour)',
            table: {
                defaultValue: {summary: '12h'},
                type: {summary: "'12h' | '24h'"},
            },
        },
        clearable: Args.clearable.type,
        withSeconds: {
            control: 'boolean',
            description: 'Include seconds in the time picker',
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
