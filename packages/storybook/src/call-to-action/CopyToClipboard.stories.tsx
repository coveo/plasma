import type {StoryObj, Meta} from '@storybook/react-vite';
import {CopyToClipboard} from '@coveord/plasma-mantine/components/CopyToClipboard';

const meta: Meta<typeof CopyToClipboard> = {
    title: '@components/call-to-action/CopyToClipboard',
    id: 'CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
    render: () => <CopyToClipboard value="Copy me!" />,
};

export const CopyToClipboardWithLabel: Story = {
    render: () => <CopyToClipboard value="Copy me!" withLabel />,
};
