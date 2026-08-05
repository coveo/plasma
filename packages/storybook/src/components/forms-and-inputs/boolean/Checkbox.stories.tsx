import {Checkbox} from '@coveord/plasma-mantine/components/Checkbox';
import {Group} from '@coveord/plasma-mantine/components/Group';
import {Meta, StoryObj} from '@storybook/react-vite';
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

const meta: Meta<typeof Checkbox> = {
    title: '@components/form/boolean/Checkbox',
    id: 'Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
};

export default meta;
type CheckboxItemStoryArgs = ComponentProps<typeof Checkbox> & InlineInputStoryArgs;
type CheckboxGroupStoryArgs = ComponentProps<typeof Checkbox.Group> & BaseInputStoryArgs & InputWrapperStoryArgs;

export const CheckboxItem: StoryObj<CheckboxItemStoryArgs> = {
    argTypes: {
        ...InlineInputArgs.ArgsTypes,
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
        indeterminate: {
            control: 'boolean',
            description: 'Indeterminate checked state',
        },
    },
    args: {
        ...InlineInputArgs.Args,
        checked: false,
        indeterminate: false,
    },
    render: (props) => {
        const [{checked}, updateArgs] = useArgs<CheckboxItemStoryArgs>();
        const onClick = () => updateArgs({checked: !checked});
        return <Checkbox {...withLabelInfoProps(props)} onClick={onClick} />;
    },
};

export const CheckboxGroup: StoryObj<CheckboxGroupStoryArgs> = {
    argTypes: {
        ...InputWrapperArgs.ArgsTypes,
        ...BaseInputArgs.ArgsTypes,
    },
    args: {
        ...InputWrapperArgs.Args,
        ...BaseInputArgs.Args,
    },
    render: (props) => (
        <Checkbox.Group {...withLabelInfoProps(props)}>
            <Group mt="xs">
                <Checkbox value="1" label="Option 1" readOnly={props.readOnly} />
                <Checkbox value="2" label="Option 2" readOnly={props.readOnly} />
                <Checkbox value="3" label="Option 3" readOnly={props.readOnly} />
                <Checkbox value="4" label="Option 4" readOnly={props.readOnly} />
            </Group>
        </Checkbox.Group>
    ),
};
