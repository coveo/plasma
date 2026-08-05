import {Group} from '@coveord/plasma-mantine/components/Group';
import {Radio} from '@coveord/plasma-mantine/components/Radio';
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
    title: '@components/form/string/Radio',
    id: 'Radio',
    component: Radio,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type RadioItemStoryArgs = ComponentProps<typeof Radio> & InlineInputStoryArgs;
type RadioGroupStoryArgs = ComponentProps<typeof Radio.Group> & BaseInputStoryArgs & InputWrapperStoryArgs;

export const RadioItem: StoryObj<RadioItemStoryArgs> = {
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
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
    },
    render: (props) => (
        <Radio.Group {...withLabelInfoProps(props)}>
            <Group mt="xs">
                <Radio value="1" label="Option 1" readOnly={props.readOnly} />
                <Radio value="2" label="Option 2" readOnly={props.readOnly} />
                <Radio value="3" label="Option 3" readOnly={props.readOnly} />
                <Radio value="4" label="Option 4" readOnly={props.readOnly} />
            </Group>
        </Radio.Group>
    ),
};
