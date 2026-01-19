import {YearPickerInput} from '@coveord/plasma-mantine/components/YearPickerInput';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof YearPickerInput> = {
    title: '@components/form/date/YearPickerInput',
    id: 'YearPickerInput',
    component: YearPickerInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a year',
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
type Story = StoryObj<typeof YearPickerInput>;

export const Demo: Story = {
    render: (props) => <YearPickerInput {...props} />,
};
