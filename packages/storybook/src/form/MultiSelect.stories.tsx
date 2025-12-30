import {MultiSelect} from '@coveord/plasma-mantine/components/MultiSelect';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {InputArgs, InputArgTypes, InputWrapperArgs, InputWrapperArgTypes} from './InputArgs.js';

const meta: Meta<typeof MultiSelect> = {
    title: '@components/form/MultiSelect',
    component: MultiSelect,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs,
        ...InputArgs,
        data: ['Apple', 'Orange', 'Banana', 'Grape', 'Pineapple', 'Mango', 'Strawberry', 'Blueberry', 'Watermelon'],
        searchable: true,
        clearable: false,
    },
    argTypes: {
        ...InputWrapperArgTypes,
        ...InputArgTypes,
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
};
export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Demo: Story = {
    render: (props: any) => <MultiSelect {...props} w={300} />,
};
