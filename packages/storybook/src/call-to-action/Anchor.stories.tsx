import {Anchor} from '@coveord/plasma-mantine/components/Anchor';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Anchor> = {
    title: '@components/call-to-action/Anchor',
    id: 'Anchor',
    component: Anchor,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm'],
            description: 'Size of the Anchor',
            table: {
                defaultValue: {summary: 'sm'},
                type: {summary: 'xs | sm'},
            },
        },
        href: {
            control: 'text',
            description: 'Link URL',
            table: {
                type: {summary: 'string'},
            },
        },
        children: {
            control: 'text',
            description: 'Link text content',
            table: {
                type: {summary: 'ReactNode'},
            },
        },
        target: {
            control: 'select',
            options: ['_self', '_blank', '_parent', '_top'],
            description: 'Link target attribute',
            table: {
                defaultValue: {summary: '_self'},
                type: {summary: 'string'},
            },
        },
    },
    args: {
        href: 'https://plasma.coveo.com',
        children: 'Plasma Design System',
        target: '_blank',
        size: 'sm',
    },
};
export default meta;
type Story = StoryObj<typeof Anchor>;

export const Demo: Story = {
    render: ({href, children, target, size}: any) => (
        <Anchor size={size} href={href} target={target}>
            {children}
        </Anchor>
    ),
};
