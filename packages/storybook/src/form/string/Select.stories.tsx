import {Select} from '@coveord/plasma-mantine/components/Select';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {Args} from '../../Args.js';
import {BaseInputArgs, InputWrapperArgs} from '../InputWrapperArgs.js';

const meta: Meta<typeof Select> = {
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
};
export default meta;
type Story = StoryObj<typeof Select>;

export const Demo: Story = {
    render: (props: any) => <Select {...props} />,
};
