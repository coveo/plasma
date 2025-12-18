import type {StoryObj, Meta} from '@storybook/react-vite';
import {InlineConfirm} from '@coveord/plasma-mantine/components/InlineConfirm';
import {DeleteSize24Px, CrossSize24Px} from '@coveord/plasma-react-icons';
import {Button, Group, showNotification, Menu, Text} from '@coveord/plasma-mantine';

const meta: Meta<typeof InlineConfirm> = {
    title: '@components/form/InlineConfirm',
    component: InlineConfirm,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof InlineConfirm>;

export const Default: Story = {
    render: () => (
        <InlineConfirm>
            <Group gap="sm">
                <Button.Primary disabled>I will hide</Button.Primary>
                <InlineConfirm.Target inlineConfirmId="delete">Delete</InlineConfirm.Target>
            </Group>
            <InlineConfirm.Prompt
                inlineConfirmId="delete"
                onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
                onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
            />
        </InlineConfirm>
    ),
};

export const InlineConfirmMenu: Story = {
    render: () => (
        <InlineConfirm>
            <Menu>
                <Menu.Target>
                    <Button.Primary>Menu</Button.Primary>
                </Menu.Target>
                <Menu.Dropdown>
                    <InlineConfirm.Target component={Menu.Item} inlineConfirmId="delete">
                        Delete
                    </InlineConfirm.Target>

                    <InlineConfirm.Target
                        component={Menu.Item}
                        inlineConfirmId="delete2"
                        disabled
                        disabledTooltip="Will not trigger since its disabled"
                    >
                        Delete 2
                    </InlineConfirm.Target>
                </Menu.Dropdown>
            </Menu>
            <InlineConfirm.Prompt
                inlineConfirmId="delete"
                onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
                onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
            />
            <InlineConfirm.Prompt inlineConfirmId="delete2" />
        </InlineConfirm>
    ),
};

export const InlineConfirmStyle: Story = {
    render: () => (
        <InlineConfirm>
            <InlineConfirm.Target inlineConfirmId="delete" variant="subtle" color="critical">
                <DeleteSize24Px />
            </InlineConfirm.Target>

            <InlineConfirm.Prompt
                inlineConfirmId="delete"
                label={
                    <Text c="critical" fw={500}>
                        Delete?
                    </Text>
                }
                confirm={<Button.DestructiveTertiary leftSection={<DeleteSize24Px />}>Yes</Button.DestructiveTertiary>}
                cancel={<Button.Tertiary leftSection={<CrossSize24Px />}>No</Button.Tertiary>}
                onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
                onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
            />
        </InlineConfirm>
    ),
};
