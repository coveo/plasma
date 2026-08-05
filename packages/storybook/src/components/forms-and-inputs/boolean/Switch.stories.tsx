import {Group} from '@coveord/plasma-mantine/components/Group';
import {Switch} from '@coveord/plasma-mantine/components/Switch';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';
import {useArgs} from 'storybook/preview-api';
import {
    BaseInputArgs,
    InlineInputArgs,
    InputWrapperArgs,
    type BaseInputStoryArgs,
    type InlineInputStoryArgs,
    type InputWrapperStoryArgs,
} from '../InputWrapperArgs.js';
import {withLabelInfoProps} from '../LabelInfoArgs.js';

const meta: Meta<typeof Switch> = {
    title: '@components/form/boolean/Switch',
    id: 'Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type SwitchStoryArgs = ComponentProps<typeof Switch> & InlineInputStoryArgs;
type SwitchGroupStoryArgs = ComponentProps<typeof Switch.Group> & BaseInputStoryArgs & InputWrapperStoryArgs;

export const Default: StoryObj<SwitchStoryArgs> = {
    argTypes: {
        ...InlineInputArgs.ArgsTypes,
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
    },
    args: {
        ...InlineInputArgs.Args,
        checked: false,
    },
    render: (props) => {
        const [{checked}, updateArgs] = useArgs<SwitchStoryArgs>();
        return <Switch {...withLabelInfoProps(props)} onChange={() => updateArgs({checked: !checked})} />;
    },
};

export const SwitchGroup: StoryObj<SwitchGroupStoryArgs> = {
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
    },
    render: (props) => (
        <Switch.Group {...withLabelInfoProps(props)}>
            <Group>
                <Switch value="option1" label="Option 1" />
                <Switch value="option2" label="Option 2" />
                <Switch value="option3" label="Option 3" />
                <Switch value="option4" label="Option 4" />
            </Group>
        </Switch.Group>
    ),
};
