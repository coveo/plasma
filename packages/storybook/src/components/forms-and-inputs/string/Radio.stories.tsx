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
import {Args} from '../../../Args.js';
import {withLabelContextualHelpProps} from '../ContextualHelpArgs.js';

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
    render: (props) => <Radio {...withLabelContextualHelpProps(props)} />,
};

export const RadioGroup: StoryObj<RadioGroupStoryArgs> = {
    name: 'Radio.Group',
    parameters: {
        controls: {
            include: ['label', 'contextualHelp', 'description', 'error', 'required', 'disabled', 'readOnly'],
        },
    },
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
        contextualHelp: Args.contextualHelp.type,
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
        contextualHelp: 'You can change this later.',
        description: 'Choose how often to receive account alerts.',
    },
    render: (props) => (
        <Radio.Group {...withLabelContextualHelpProps(props)}>
            <Group>
                <Radio value="immediately" label="Immediately" disabled={props.disabled} readOnly={props.readOnly} />
                <Radio value="daily" label="Daily digest" disabled={props.disabled} readOnly={props.readOnly} />
                <Radio value="weekly" label="Weekly digest" disabled={props.disabled} readOnly={props.readOnly} />
            </Group>
        </Radio.Group>
    ),
};
