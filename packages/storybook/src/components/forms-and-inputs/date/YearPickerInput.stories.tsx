import {YearPickerInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {Args} from '../../../Args.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';
import {
    BaseInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';

type YearPickerInputStoryArgs = ComponentProps<typeof YearPickerInput> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/Forms and inputs/date/YearPickerInput',
    id: 'YearPickerInput',
    component: YearPickerInput,
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
            ],
        },
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
            description: 'Text displayed when no year is selected.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
        type: {
            ...Args.type.type,
            description: 'Selects single-year, multiple-year, or year-range mode.',
            table: {
                type: {summary: "'default' | 'multiple' | 'range'"},
                defaultValue: {summary: "'default'"},
            },
        },
        clearable: {
            ...Args.clearable.type,
            description: 'Displays a clear button when the input has a value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
} satisfies Meta<YearPickerInputStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <YearPickerInput {...withLabelInfoProps(props)} />,
};
