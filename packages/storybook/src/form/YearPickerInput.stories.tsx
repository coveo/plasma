import {YearPickerInput} from '@coveord/plasma-mantine/components/YearPickerInput';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {BaseInputArgs, InputWrapperArgs} from './InputWrapperArgs.js';

const meta: Meta<typeof YearPickerInput> = {
    title: '@components/form/YearPickerInput',
    component: YearPickerInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a year',
        type: 'default',
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
            table: {
                type: {summary: 'string'},
            },
        },
        clearable: {
            control: 'boolean',
            description: 'Display clear button when value is present',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        type: {
            control: 'radio',
            options: ['default', 'multiple', 'range'],
            description: 'Picker type',
            table: {
                defaultValue: {summary: 'default'},
                type: {summary: "'default' | 'multiple' | 'range'"},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof YearPickerInput>;

export const Demo: Story = {
    render: (props) => <YearPickerInput {...props} />,
};
