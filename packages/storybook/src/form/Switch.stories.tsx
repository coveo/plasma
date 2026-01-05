import {Group} from '@coveord/plasma-mantine/components/Group';
import {Switch} from '@coveord/plasma-mantine/components/Switch';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta: Meta<typeof Switch> = {
    title: '@components/form/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Label',
        description: 'Description',
        error: 'Error',
        disabled: false,
        readOnly: false,
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Switch label',
        },
        description: {
            control: 'text',
            description: 'Switch description',
        },
        error: {
            control: 'text',
            description: 'Error message',
        },
        readOnly: {
            control: 'boolean',
            description: 'Whether the switch is read-only',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the switch is disabled',
            table: {
                defaultValue: {summary: 'false'},
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Switch>;
type StoryGroup = StoryObj<typeof Switch.Group>;

export const Default: Story = {
    argTypes: {
        checked: {
            control: 'boolean',
            description: 'Checked state',
        },
    },
    args: {
        checked: false,
    },
    render: (props) => {
        const [{checked}, updateArgs] = useArgs();
        return <Switch {...props} onChange={() => updateArgs({checked: !checked})} />;
    },
};

export const SwitchGroup: StoryGroup = {
    argTypes: {
        required: {
            control: 'boolean',
            description: 'Whether the switch is required',
        },
    },
    args: {
        required: false,
    },
    render: (props) => (
        <Switch.Group {...props}>
            <Group>
                <Switch value="option1" label="Option 1" />
                <Switch value="option2" label="Option 2" />
                <Switch value="option3" label="Option 3" />
                <Switch value="option4" label="Option 4" />
            </Group>
        </Switch.Group>
    ),
};
