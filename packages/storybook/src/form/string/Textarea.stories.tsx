import {Textarea} from '@coveord/plasma-mantine';
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

type TextareaStoryArgs = ComponentProps<typeof Textarea> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/form/string/Textarea',
    id: 'Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: Args.placeholder.initialValue,
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        placeholder: Args.placeholder.type,
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
} satisfies Meta<TextareaStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <Textarea {...withLabelInfoProps(props)} />,
};
