import {ActionBar, ActionIcon, Button, Menu, Text} from '@coveord/plasma-mantine';
import {IconDots} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof ActionBar> = {
    title: 'Components/Buttons/ActionBar',
    id: 'ActionBar',
    component: ActionBar,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        opened: {
            control: 'boolean',
            description: 'Shows or hides the action bar.',
            table: {
                type: {summary: 'boolean'},
                defaultValue: {summary: 'undefined'},
            },
        },
        withinPortal: {table: {disable: true}},
    },
    args: {
        opened: true,
        // Renders the bar inside the story frame instead of a portal fixed to the page viewport.
        withinPortal: false,
    },
    decorators: [
        (Story) => (
            // `transform` makes this box the containing block of the fixed action bar.
            <div style={{height: 200, transform: 'translateZ(0)'}}>
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    name: 'ActionBar',
    render: (props) => (
        <ActionBar {...props}>
            <Text size="sm" fw={500} px="xs">
                3 selected
            </Text>
            <ActionBar.Divider />
            <Button.Tertiary>Select all</Button.Tertiary>
            <Button.Tertiary>Rescan</Button.Tertiary>
            <Button.DestructiveTertiary>Delete</Button.DestructiveTertiary>
            <Menu position="top-end">
                <Menu.Target>
                    <ActionIcon.Quaternary size="lg" aria-label="More actions">
                        <IconDots />
                    </ActionIcon.Quaternary>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>Export</Menu.Item>
                    <Menu.Item>Duplicate</Menu.Item>
                    <Menu.Item>Move to folder</Menu.Item>
                </Menu.Dropdown>
            </Menu>
            <ActionBar.Divider />
            <ActionBar.CloseButton aria-label="Clear selection" />
        </ActionBar>
    ),
};
