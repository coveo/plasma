import {Badge, type BadgeOverloadFactory, type SemanticBadge} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';

type BadgeVariants = BadgeOverloadFactory['staticComponents'];

type BadgeStoryArgs = Omit<ComponentProps<SemanticBadge>, 'children'> & {
    variant: keyof BadgeVariants;
    text: string;
};

const meta = {
    title: '@components/data-display/Badge',
    id: 'Badge',
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
            options: ['Primary', 'Secondary', 'Success', 'Warning', 'Critical', 'Disabled'] as Array<
                keyof BadgeVariants
            >,
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
} satisfies Meta<BadgeStoryArgs>;
export default meta;
type Story = StoryObj<BadgeStoryArgs>;

export const Demo: Story = {
    render: ({text, variant, ...props}) => {
        const BadgeComponent = Badge[variant];
        return <BadgeComponent {...props}>{text}</BadgeComponent>;
    },
};
