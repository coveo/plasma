import {MultiSelect} from '@coveord/plasma-mantine/components/MultiSelect';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../Args.js';
import {BaseInputArgs, InputWrapperArgs} from './InputWrapperArgs.js';

const meta: Meta<typeof MultiSelect> = {
    title: '@components/form/MultiSelect',
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
};
export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Demo: Story = {
    render: (props: any) => <MultiSelect {...props} w={300} />,
};
