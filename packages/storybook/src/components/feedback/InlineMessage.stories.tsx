import {Anchor} from '@coveord/plasma-mantine/components/Anchor';
import {Button} from '@coveord/plasma-mantine/components/Button';
import {Group} from '@coveord/plasma-mantine/components/Group';
import {InlineMessage, type InlineMessageProps} from '@coveord/plasma-mantine/components/InlineMessage';
import {Stack} from '@coveord/plasma-mantine/components/Stack';
import {StatusToken} from '@coveord/plasma-mantine/components/StatusToken';
import {Text} from '@coveord/plasma-mantine/components/Text';
import {Title} from '@coveord/plasma-mantine/components/Title';
import type {Meta, StoryObj} from '@storybook/react-vite';

type InlineMessageStoryArgs = Omit<InlineMessageProps, 'children' | 'icon' | 'tooltip'> & {
    content: string;
    tooltip: string;
    withIcon: boolean;
};

const meta: Meta<InlineMessageStoryArgs> = {
    title: '@components/Feedback/InlineMessage',
    id: 'InlineMessage',
    component: InlineMessage,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'warning',
        content: 'Renaming triggers a full rebuild.',
        tooltip: '',
        withIcon: true,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['subtle', 'information', 'advice', 'warning', 'critical', 'success'],
            table: {
                defaultValue: {summary: 'subtle'},
            },
        },
        content: {
            control: 'text',
            description: 'Message content',
            table: {
                defaultValue: {summary: ''},
                type: {summary: 'ReactNode'},
            },
        },
        tooltip: {
            control: 'text',
            description: 'Additional detail revealed on hover and focus',
            table: {
                defaultValue: {summary: ''},
                type: {summary: 'ReactNode'},
            },
        },
        withIcon: {
            control: 'boolean',
            description: 'Whether the default semantic icon is rendered',
            table: {
                defaultValue: {summary: true},
                type: {summary: 'boolean'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: ({content, tooltip, withIcon, ...props}) => (
        <InlineMessage {...props} icon={withIcon ? undefined : null} tooltip={tooltip || undefined}>
            {content}
        </InlineMessage>
    ),
};

export const Variants: Story = {
    render: () => (
        <Stack gap="xs">
            <InlineMessage.Subtle>Subtle message with a gray icon.</InlineMessage.Subtle>
            <InlineMessage.Information>Last rebuild took 14 minutes.</InlineMessage.Information>
            <InlineMessage.Advice>Add a description to improve search relevance.</InlineMessage.Advice>
            <InlineMessage.Warning>Renaming triggers a full rebuild.</InlineMessage.Warning>
            <InlineMessage.Critical>The index could not be rebuilt.</InlineMessage.Critical>
            <InlineMessage.Success>Rebuild completed.</InlineMessage.Success>
        </Stack>
    ),
};

export const WithALink: Story = {
    render: () => (
        <Stack gap="xs">
            <InlineMessage.Subtle>
                Indexing is paused. <Anchor href="#">Resume indexing</Anchor>
            </InlineMessage.Subtle>
            <InlineMessage.Warning>
                Renaming triggers a full rebuild. <Anchor href="#">Learn more</Anchor>
            </InlineMessage.Warning>
            <InlineMessage.Critical>
                The index could not be rebuilt. <Anchor href="#">View the log</Anchor>
            </InlineMessage.Critical>
        </Stack>
    ),
};

export const Wrapping: Story = {
    render: () => (
        <InlineMessage.Warning maw={360}>
            Renaming this index triggers a full rebuild. Search results may be incomplete until it completes, which can
            take several minutes for large sources.
        </InlineMessage.Warning>
    ),
};

export const WithoutIcon: Story = {
    render: () => (
        <Stack gap="xs">
            <InlineMessage.Subtle icon={null}>Last 30 days, all merchandising solutions</InlineMessage.Subtle>
            <InlineMessage.Information icon={null}>Last rebuild took 14 minutes.</InlineMessage.Information>
        </Stack>
    ),
};

export const BesideAButton: Story = {
    render: () => (
        <Group>
            <Button.Secondary>Rebuild index</Button.Secondary>
            <InlineMessage.Information>Last rebuild took 14 minutes.</InlineMessage.Information>
        </Group>
    ),
};

export const WithStatusToken: Story = {
    render: () => (
        <Stack gap="xs">
            <InlineMessage.Subtle icon={<StatusToken variant="waiting" />}>Indexing in progress</InlineMessage.Subtle>
            <InlineMessage.Subtle icon={<StatusToken variant="success" />}>Synced 2 minutes ago</InlineMessage.Subtle>
        </Stack>
    ),
};

export const AsACaption: Story = {
    render: () => (
        <Group gap="xl" align="flex-start">
            <Stack gap={0}>
                <Text fw={500}>Attributed revenue</Text>
                <Title order={3}>$1.2M</Title>
                <InlineMessage.Subtle icon={null}>Last 30 days, all merchandising solutions</InlineMessage.Subtle>
            </Stack>
            <Stack gap={0}>
                <Text fw={500}>Conversion rate</Text>
                <Title order={3}>3.8%</Title>
                <InlineMessage.Warning tooltip="3 of the last 30 days have no data because tracking was interrupted.">
                    Based on partial data
                </InlineMessage.Warning>
            </Stack>
        </Group>
    ),
};
