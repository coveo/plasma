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
import {withLabelInfoProps} from '../LabelInfoArgs.js';

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
        label: {
            control: 'text',
            description: 'Content displayed as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        description: {
            control: 'text',
            description: 'Helper content displayed below the label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        error: {
            control: 'text',
            description: 'Validation feedback displayed below the input.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        required: {
            control: 'boolean',
            description: 'Marks the field as required and displays a required indicator.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the input.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        readOnly: {
            control: 'boolean',
            description: 'Prevents users from changing the selected value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        placeholder: {
            control: 'text',
            description: 'Text displayed when no date is selected.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
        type: {
            ...Args.type.type,
            description: 'Selects single-date, multiple-date, or date-range mode.',
            table: {
                type: {summary: "'default' | 'multiple' | 'range'"},
                defaultValue: {summary: "'default'"},
            },
        },
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
        clearable: {
            ...Args.clearable.type,
            description: 'Displays a clear button when the input has a value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
} satisfies Meta<DatePickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <DatePickerInput {...withLabelInfoProps(props)} />,
};
