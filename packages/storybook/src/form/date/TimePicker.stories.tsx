import {TimePicker} from '@coveord/plasma-mantine/components/TimePicker';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof TimePicker> = {
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
};
export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Demo: Story = {
    render: (props) => <TimePicker {...props} />,
};
