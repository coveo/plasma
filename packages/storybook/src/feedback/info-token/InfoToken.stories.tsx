import type {StoryObj, Meta} from '@storybook/react-vite';
import {InfoToken} from '@coveord/plasma-mantine/components/InfoToken';
import {Group, Stack} from '@coveord/plasma-mantine';

const meta: Meta<typeof InfoToken> = {
    title: '@components/feedback/InfoToken',
    component: InfoToken,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof InfoToken>;

export const Default: Story = {
    render: () => (
        <Stack gap="sm">
            <Group>
                <InfoToken.Information />
                <InfoToken.InformationOutline />
            </Group>
            <InfoToken.Advice />
            <InfoToken.Warning />
            <InfoToken.Error />
            <InfoToken.Question />
        </Stack>
    ),
};
