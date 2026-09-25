import {Group, Radio} from '@coveord/plasma-mantine';
import {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {
    BaseInputArgs,
    InlineInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InlineInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

const meta: Meta<typeof Radio> = {
    title: '@components/Forms and inputs/string/Radio',
    id: 'Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type RadioItemStoryArgs = ComponentProps<typeof Radio> & InlineInputStoryArgs;
type RadioGroupStoryArgs = ComponentProps<typeof Radio.Group> & BaseInputStoryArgs & InputWrapperStoryArgs;

export const Demo: StoryObj<RadioItemStoryArgs> = {
    name: 'Radio',
    argTypes: {
        ...InlineInputArgs.ArgsTypes,
    },
    args: {
        checked: false,
        ...InlineInputArgs.Args,
    },
    render: (props) => <Radio {...withLabelInfoProps(props)} />,
};

export const RadioGroup: StoryObj<RadioGroupStoryArgs> = {
    name: 'Radio.Group',
    parameters: {
        controls: {
            include: ['label', 'labelInfo', 'description', 'error', 'required', 'disabled', 'readOnly'],
        },
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        label: {
            control: 'text',
            description: 'Content displayed as the group label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        labelInfo: {
            control: 'text',
            description: 'Sets the Input.LabelInfo tooltip content in this example.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'You can change this later.'"}},
        },
        description: {
            control: 'text',
            description: 'Helper content displayed below the group label.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        error: {
            control: 'text',
            description: 'Validation feedback displayed below the group.',
            table: {type: {summary: 'ReactNode'}, defaultValue: {summary: 'undefined'}},
        },
        required: {
            control: 'boolean',
            description: 'Marks the group as required and displays a required indicator.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        disabled: {
            control: 'boolean',
            description: 'Disables every radio item in this example.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
        readOnly: {
            control: 'boolean',
            description: 'Makes every radio item read-only in this example.',
            table: {type: {summary: 'boolean'}, defaultValue: {summary: 'false'}},
        },
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
        label: 'Notification frequency',
        labelInfo: 'You can change this later.',
        description: 'Choose how often to receive account alerts.',
    },
    render: (props) => (
        <Radio.Group {...withLabelInfoProps(props)}>
            <Group>
                <Radio value="immediately" label="Immediately" disabled={props.disabled} readOnly={props.readOnly} />
                <Radio value="daily" label="Daily digest" disabled={props.disabled} readOnly={props.readOnly} />
                <Radio value="weekly" label="Weekly digest" disabled={props.disabled} readOnly={props.readOnly} />
            </Group>
        </Radio.Group>
    ),
};
