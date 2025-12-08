import {Badge} from '@coveord/plasma-mantine/components/Badge';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Badge> = {
    title: '@components/feedback/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: 'Primary',
        text: 'Badge',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['Primary', 'Secondary', 'Success', 'Critical', 'Warning', 'Disabled'],
            table: {
                defaultValue: {summary: 'Badge.Primary'},
            },
        },
        text: {
            control: 'text',
            table: {
                defaultValue: {summary: ''},
            },
        },
        size: {
            control: 'select',
            options: ['small', 'large'],
            table: {
                defaultValue: {summary: 'small'},
                type: {summary: 'small | large'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Badge>;

export const Demo: Story = {
    render: ({text, variant, ...props}: any) => {
        const BadgeComponent = (Badge as any)[variant];
        return <BadgeComponent {...props}>{text}</BadgeComponent>;
    },
};
