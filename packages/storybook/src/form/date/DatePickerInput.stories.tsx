import {DatePickerInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import dayjs from 'dayjs';
import type {ComponentProps} from 'react';
import {Args} from '../../Args.js';
import {
    BaseInputArgs,
    type BaseInputStoryArgs,
    InputWrapperArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

type DatePickerInputStoryArgs = ComponentProps<typeof DatePickerInput> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/date/DatePickerInput',
    id: 'DatePickerInput',
    component: DatePickerInput,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a date',
        type: Args.type.initialValue,
        presets: [
            {
                value: [
                    dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
                    dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
                ],
                label: 'Last week',
            },
            {
                value: [dayjs().subtract(1, 'week').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
                label: 'Last 7 days',
            },
            {
                value: [dayjs().startOf('week').format('YYYY-MM-DD'), dayjs().endOf('week').format('YYYY-MM-DD')],
                label: 'This week',
            },
        ],
        numberOfColumns: 2,
        columnsToScroll: 1,
        clearable: Args.clearable.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: Args.placeholder.type,
        type: Args.type.type,
        presets: {
            if: {arg: 'type', eq: 'range'},
            control: 'object',
            description: 'Array of preset ranges',
            table: {
                type: {summary: 'DatePickerPresets[]'},
            },
        },
        numberOfColumns: {
            if: {arg: 'type', eq: 'range'},
            control: 'number',
            description: 'Number of months to display',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        columnsToScroll: {
            if: {arg: 'type', eq: 'range'},
            control: 'number',
            description: 'Number of months to scroll on arrow click',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        clearable: Args.clearable.type,
    },
} satisfies Meta<DatePickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <DatePickerInput {...withLabelInfoProps(props)} />,
};
