import {Textarea} from '@coveord/plasma-mantine';
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

type TextareaStoryArgs = ComponentProps<typeof Textarea> & BaseInputStoryArgs & InputWrapperStoryArgs;

const meta = {
    title: '@components/Forms and inputs/string/Textarea',
    id: 'Textarea',
    component: Textarea,
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
                'rows',
                'autosize',
                'minRows',
                'maxRows',
                'resize',
            ],
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        placeholder: Args.placeholder.initialValue,
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
        rows: {
            control: 'number',
            description: 'Sets the fixed number of visible text lines.',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 'undefined'},
            },
        },
        autosize: {
            control: 'boolean',
            description: 'Grows the field vertically to fit its content.',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
        minRows: {
            control: 'number',
            description: 'Sets the minimum visible rows when autosize is active.',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 'undefined'},
            },
        },
        maxRows: {
            control: 'number',
            description: 'Sets the maximum visible rows when autosize is active.',
            table: {
                type: {summary: 'number'},
                defaultValue: {summary: 'undefined'},
            },
        },
        resize: {
            control: 'select',
            options: ['none', 'both', 'horizontal', 'vertical'],
            description: 'Sets the directions in which users can resize the field.',
            table: {
                defaultValue: {summary: "'none'"},
                type: {summary: 'Resize'},
            },
        },
    },
} satisfies Meta<TextareaStoryArgs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => <Textarea {...withLabelInfoProps(props)} />,
};
