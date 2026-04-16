import {Select} from '@coveord/plasma-mantine';
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

type SelectStoryArgs = ComponentProps<typeof Select> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/string/Select',
    id: 'Select',
    component: Select,
    parameters: {
        layout: 'centered',
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
        placeholder: Args.placeholder.type,
        searchable: {
            control: 'boolean',
            description: 'Allow searching through options',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        clearable: {
            control: 'boolean',
            description: 'Allow clearing the value',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        allowDeselect: {
            control: 'boolean',
            description: 'Allow deselecting the value by clicking on the selected option',
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
