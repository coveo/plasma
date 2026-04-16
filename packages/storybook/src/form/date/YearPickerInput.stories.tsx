import {YearPickerInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../Args.js';
import {
    BaseInputArgs,
    type BaseInputStoryArgs,
    InputWrapperArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

type YearPickerInputStoryArgs = ComponentProps<typeof YearPickerInput> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
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
} satisfies Meta<YearPickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <YearPickerInput {...withLabelInfoProps(props)} />,
};
