import {DatePickerInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import dayjs from 'dayjs';
import type {ComponentProps} from 'react';
import {Args} from '../../../Args.js';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';

type DatePickerInputStoryArgs = ComponentProps<typeof DatePickerInput> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/Forms and inputs/date/DatePickerInput',
    id: 'DatePickerInput',
    component: DatePickerInput,
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
                'placeholder',
                'type',
                'clearable',
                'presets',
                'numberOfColumns',
                'columnsToScroll',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a date range',
        type: 'range',
        presets: [
            {
                value: [
                    dayjs().subtract(1, 'week').startOf('week').format('YYYY-MM-DD'),
                    dayjs().subtract(1, 'week').endOf('week').format('YYYY-MM-DD'),
                ],
                label: 'Last week',
            },
            {
                value: [dayjs().subtract(6, 'days').format('YYYY-MM-DD'), dayjs().format('YYYY-MM-DD')],
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
            description: 'Provides predefined date ranges when range mode is selected.',
            table: {
                type: {summary: 'DatePickerPreset<Type>[]'},
                defaultValue: {summary: 'undefined'},
            },
        },
        numberOfColumns: {
            if: {arg: 'type', eq: 'range'},
            control: 'number',
            description: 'Sets the number of calendar months displayed side by side.',
            table: {
                defaultValue: {summary: '1'},
                type: {summary: 'number'},
            },
        },
        columnsToScroll: {
            if: {arg: 'type', eq: 'range'},
            control: 'number',
            description: 'Sets how many months calendar navigation advances.',
            table: {
                defaultValue: {summary: 'numberOfColumns'},
                type: {summary: 'number'},
            },
        },
        clearable: Args.clearable.type,
    },
} satisfies Meta<DatePickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <DatePickerInput {...withLabelContextualHelpProps(props)} />,
};
