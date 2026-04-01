import {MultiSelect} from '@coveord/plasma-mantine/components/MultiSelect';
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

type MultiSelectStoryArgs = ComponentProps<typeof MultiSelect> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/array/MultiSelect',
    id: 'MultiSelect',
    component: MultiSelect,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: 'Pick values',
        data: ['Apple', 'Orange', 'Banana', 'Grape', 'Pineapple', 'Mango', 'Strawberry', 'Blueberry', 'Watermelon'],
        searchable: true,
        clearable: false,
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
            description: 'Allow clearing all selected values',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
    },
} satisfies Meta<MultiSelectStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <MultiSelect {...withLabelInfoProps(props)} w={300} />,
};
