import {Select} from '@coveord/plasma-mantine';
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

type SelectStoryArgs = ComponentProps<typeof Select> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/Forms and inputs/string/Select',
    id: 'Select',
    component: Select,
    parameters: {
        layout: 'centered',
        controls: {
            include: [
                'label',
                'labelInfo',
                'description',
                'error',
                'required',
                'disabled',
                'readOnly',
                'placeholder',
                'searchable',
                'clearable',
                'allowDeselect',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick a value',
        data: ['Apple', 'Orange', 'Banana', 'Grape', 'Pineapple', 'Mango', 'Strawberry', 'Blueberry', 'Watermelon'],
        searchable: false,
        clearable: false,
        allowDeselect: true,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        labelInfo: {
            control: 'text',
            description: 'Sets the Input.LabelInfo tooltip content in this example.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Additional information'"}},
        },
        placeholder: Args.placeholder.type,
        searchable: {
            control: 'boolean',
            description: 'Lets users filter options by typing.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        clearable: Args.clearable.type,
        allowDeselect: {
            control: 'boolean',
            description: 'Lets users clear the value by selecting the active option again.',
            table: {
                defaultValue: {summary: 'true'},
                type: {summary: 'boolean'},
            },
        },
    },
} satisfies Meta<SelectStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <Select {...withLabelInfoProps(props)} />,
};
