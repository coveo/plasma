import {MonthPickerInput} from '@coveord/plasma-mantine/components/MonthPickerInput';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../Args.js';
import {BaseInputArgs, InputWrapperArgs} from './InputWrapperArgs.js';

const meta: Meta<typeof MonthPickerInput> = {
    title: '@components/form/MonthPickerInput',
    component: MonthPickerInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a month',
        type: Args.type.initialValue,
        clearable: Args.clearable.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: Args.placeholder.type,
        type: Args.type.type,
        clearable: Args.clearable.type,
    },
};
export default meta;
type Story = StoryObj<typeof MonthPickerInput>;

export const Demo: Story = {
    render: (props) => <MonthPickerInput {...props} />,
};
