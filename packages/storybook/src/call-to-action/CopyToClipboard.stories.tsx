import {CopyToClipboard} from '@coveord/plasma-mantine/components/CopyToClipboard';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof CopyToClipboard> = {
    title: '@components/call-to-action/CopyToClipboard',
    id: 'CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        value: {
            control: 'text',
            description: 'The value to be copied to clipboard',
        },
        withLabel: {
            control: 'boolean',
            description: 'Whether to show the "Copy to clipboard" label',
        },
    },
    args: {
        value: 'Copy me!',
        withLabel: false,
    },
};
export default meta;
type Story = StoryObj<typeof CopyToClipboard>;

export const Default: Story = {
    render: ({value, withLabel}) => <CopyToClipboard value={value} withLabel={withLabel} />,
};
