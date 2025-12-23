import {Textarea} from '@coveord/plasma-mantine/components/Textarea';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {InputWrapperArgs, InputWrapperArgTypes} from './InputWrapperArgs.js';

const meta: Meta<typeof Textarea> = {
    title: '@components/form/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs,
        placeholder: 'Enter text...',
    },
    argTypes: {
        ...InputWrapperArgTypes,
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
            table: {
                type: {summary: 'string'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Disabled state',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        rows: {
            control: 'number',
            description: 'Number of visible text lines',
            table: {
                type: {summary: 'number'},
            },
        },
        autosize: {
            control: 'boolean',
            description: 'Autosize textarea to fit content',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        minRows: {
            control: 'number',
            description: 'Minimum number of rows (when autosize is true)',
            table: {
                type: {summary: 'number'},
            },
        },
        maxRows: {
            control: 'number',
            description: 'Maximum number of rows (when autosize is true)',
            table: {
                type: {summary: 'number'},
            },
        },
        resize: {
            control: 'select',
            options: ['none', 'both', 'horizontal', 'vertical'],
            description: 'CSS resize property',
            table: {
                defaultValue: {summary: "'both'"},
                type: {summary: "'none' | 'both' | 'horizontal' | 'vertical'"},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Demo: Story = {
    render: (props: any) => <Textarea {...props} />,
};
