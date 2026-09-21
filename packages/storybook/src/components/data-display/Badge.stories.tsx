import {Badge, type BadgeOverloadFactory, type SemanticBadge} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import type {ComponentProps} from 'react';

type BadgeVariants = BadgeOverloadFactory['staticComponents'];

type BadgeStoryArgs = Omit<ComponentProps<SemanticBadge>, 'children'> & {
    semanticVariant: keyof BadgeVariants;
    label: string;
};

const meta = {
    title: '@components/Data display/Badge',
    id: 'Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
    },
    args: {
        semanticVariant: 'Primary',
        label: 'Active',
        size: 'small',
    },
    argTypes: {
        semanticVariant: {
            control: 'select',
            options: ['Primary', 'Secondary', 'Success', 'Warning', 'Critical', 'Disabled'] as Array<
                keyof BadgeVariants
            >,
            description: 'Selects the semantic Badge sub-component used by this example.',
            table: {
                type: {summary: "'Primary' | 'Secondary' | 'Success' | 'Warning' | 'Critical' | 'Disabled'"},
                defaultValue: {summary: "'Primary'"},
            },
        },
        label: {
            control: 'text',
            description: 'Sets the text displayed by the badge in this example.',
            table: {
                type: {summary: 'string'},
                defaultValue: {summary: "'Active'"},
            },
        },
        size: {
            control: 'select',
            options: ['small', 'large'],
            description: 'Sets the badge height and text size.',
            table: {
                defaultValue: {summary: "'small'"},
                type: {summary: "'small' | 'large'"},
            },
        },
    },
} satisfies Meta<BadgeStoryArgs>;
export default meta;
type Story = StoryObj<BadgeStoryArgs>;

export const Demo: Story = {
    render: ({label, semanticVariant, ...props}) => {
        const BadgeComponent = Badge[semanticVariant];
        return <BadgeComponent {...props}>{label}</BadgeComponent>;
    },
};
