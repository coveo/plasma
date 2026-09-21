import {CopyToClipboard, TextInput} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof CopyToClipboard> = {
    title: '@components/Call to action/CopyToClipboard',
    id: 'CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: {
            control: 'text',
            description: 'Sets the value copied to the clipboard.',
            table: {type: {summary: 'string'}, defaultValue: {summary: 'undefined'}},
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Sets the width and height of the copy action.',
            table: {type: {summary: 'MantineSize | number'}, defaultValue: {summary: "'md'"}},
        },
        tooltipLabelCopy: {
            control: 'text',
            description: 'Sets the tooltip shown before the value is copied.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Copy to clipboard'"}},
        },
        tooltipLabelCopied: {
            control: 'text',
            description: 'Sets the tooltip shown after the value is copied.',
            table: {type: {summary: 'string'}, defaultValue: {summary: "'Copied'"}},
        },
    },
    args: {
        size: 'md',
        value: 'sk_live_1234567890abcdef',
        tooltipLabelCopy: 'Copy to clipboard',
        tooltipLabelCopied: 'Copied',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (args) => (
        <TextInput label="API key" value={args.value} readOnly rightSection={<CopyToClipboard {...args} />} w={320} />
    ),
};
