import {MonthPickerInput} from '@coveord/plasma-mantine/components/MonthPickerInput';
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

type MonthPickerInputStoryArgs = ComponentProps<typeof MonthPickerInput> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/date/MonthPickerInput',
    id: 'MonthPickerInput',
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
} satisfies Meta<MonthPickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <MonthPickerInput {...withLabelInfoProps(props)} />,
};
