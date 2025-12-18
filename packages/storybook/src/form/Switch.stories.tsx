import {Group} from '@coveord/plasma-mantine/components/Group';
import {Switch, SwitchProps} from '@coveord/plasma-mantine/components/Switch';
import {SwitchGroupProps} from '@mantine/core';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Switch> = {
    title: '@components/feedback/Switch',
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
            table: {
                defaultValue: {summary: ''},
            },
        },
        description: {
            control: 'text',
            table: {
                defaultValue: {summary: ''},
            },
        },
        error: {
            control: 'text',
            table: {
                defaultValue: {summary: ''},
            },
        },
        readOnly: {
            control: 'boolean',
            table: {
                defaultValue: {summary: ''},
            },
        },
        disabled: {
            control: 'boolean',
            table: {
                defaultValue: {summary: ''},
            },
        },
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;
type StoryGroup = StoryObj<typeof Switch.Group>;
const ContentSwitch = (props: SwitchProps) => <Switch {...props}></Switch>;
ContentSwitch.displayName = 'Switch';

const ContentSwitchGroup = (props: SwitchGroupProps) => <Switch.Group {...props} />;
ContentSwitchGroup.displayName = 'Switch.Group';

const ContentGroup = ({children}: {children: React.ReactNode}) => <Group>{children}</Group>;
ContentGroup.displayName = 'Group';

export const Default: Story = {
    render: (props) => <ContentSwitch {...props} />,
};

export const SwitchGroup: StoryGroup = {
    render: (props) => (
        <ContentSwitchGroup {...props}>
            <ContentGroup>
                <ContentSwitch value="option1" label="Option 1" />
                <ContentSwitch value="option2" label="Option 2" />
                <ContentSwitch value="option3" label="Option 3" />
                <ContentSwitch value="option4" label="Option 4" />
            </ContentGroup>
        </ContentSwitchGroup>
    ),
};
