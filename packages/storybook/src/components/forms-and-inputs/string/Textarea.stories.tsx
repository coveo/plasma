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
        label: {
            control: 'text',
            description: 'Content displayed as the field label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        labelInfo: {
            control: 'text',
            description: 'Sets the Input.LabelInfo tooltip content in this example.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Additional information'"}},
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
            description: 'Prevents users from changing the value.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        placeholder: {
            ...Args.placeholder.type,
            description: 'Text displayed when the field is empty.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
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
