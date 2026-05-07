import {CopyToClipboard} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof CopyToClipboard> = {
    title: '@components/call-to-action/CopyToClipboard',
    id: 'CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: {
            control: 'text',
            description: 'The value to be copied to clipboard',
            table: {type: {summary: 'string'}},
        },
        size: {
            control: 'select',
            options: ['md', 'lg'],
        },
    },
    args: {
        size: 'md',
        value: 'Copy me!',
        tooltipLabelCopy: 'Copy to clipboard',
        tooltipLabelCopied: 'Copied',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (args) => <CopyToClipboard {...args} />,
};
