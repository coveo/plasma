import {Anchor} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Anchor> = {
    title: '@components/Call to action/Anchor',
    id: 'Anchor',
    component: Anchor,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm'],
            description: 'Sets the font size and line height of the link.',
            table: {
                defaultValue: {summary: "'md'"},
                type: {summary: 'MantineSize | (string & {})'},
            },
        },
        href: {
            control: 'text',
            description: 'Sets the link destination.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: 'undefined'},
            },
        },
        children: {
            control: 'text',
            description: 'Content rendered inside the link.',
            table: {
                type: {summary: 'ReactNode'},
                defaultValue: {summary: 'undefined'},
            },
        },
        target: {
            control: 'select',
            options: ['_self', '_blank', '_parent', '_top'],
            description: 'Sets where the linked destination opens.',
            table: {
                defaultValue: {summary: 'undefined'},
                type: {summary: 'HTMLAttributeAnchorTarget'},
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
