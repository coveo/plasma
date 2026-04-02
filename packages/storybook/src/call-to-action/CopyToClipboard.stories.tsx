import {CopyToClipboard} from '@coveord/plasma-mantine/components/CopyToClipboard';
import type {Meta, StoryObj} from '@storybook/react-vite';

type Variant = 'Button' | 'Input' | 'Menu';

interface StoryArgs {
    variant: Variant;
    value: string;
    label: string;
    description: string;
    menuItem1Value: string;
    menuItem2Value: string;
}

const meta: Meta<StoryArgs> = {
    title: '@components/call-to-action/CopyToClipboard',
    id: 'CopyToClipboard',
    component: CopyToClipboard,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['Button', 'Input', 'Menu'] satisfies Variant[],
            description: 'Which CopyToClipboard variant to display',
            table: {
                defaultValue: {summary: 'Button'},
            },
        },
        value: {
            control: 'text',
            description: 'The value to be copied to clipboard',
            if: {arg: 'variant', neq: 'Menu'},
        },
        label: {
            control: 'text',
            description: 'Label for the Input field',
            if: {arg: 'variant', eq: 'Input'},
        },
        description: {
            control: 'text',
            description: 'Description for the Input field',
            if: {arg: 'variant', eq: 'Input'},
        },
        menuItem1Value: {
            control: 'text',
            description: 'The value to be copied to clipboard for the first MenuItem',
            if: {arg: 'variant', eq: 'Menu'},
        },
        menuItem2Value: {
            control: 'text',
            description: 'The value to be copied to clipboard for the second MenuItem',
            if: {arg: 'variant', eq: 'Menu'},
        },
    },
    args: {
        variant: 'Button',
        value: 'Copy me!',
        label: 'My Label',
        description: 'My Description',
        menuItem1Value: 'name-123',
        menuItem2Value: 'source-id-123',
    },
};
export default meta;
type Story = StoryObj<StoryArgs>;

export const Demo: Story = {
    render: ({variant, value, label, description, menuItem1Value, menuItem2Value}) => {
        if (variant === 'Input') {
            return <CopyToClipboard.Input label={label} description={description} value={value} />;
        }
        if (variant === 'Menu') {
            return (
                <CopyToClipboard.Menu>
                    <CopyToClipboard.MenuTarget />
                    <CopyToClipboard.MenuItem value={menuItem1Value}>Copy name to clipboard</CopyToClipboard.MenuItem>
                    <CopyToClipboard.MenuItem value={menuItem2Value}>
                        Copy source ID to clipboard
                    </CopyToClipboard.MenuItem>
                </CopyToClipboard.Menu>
            );
        }
        return <CopyToClipboard.Button value={value} />;
    },
};
