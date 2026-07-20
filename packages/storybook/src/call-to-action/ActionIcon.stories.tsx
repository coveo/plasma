import {ActionIcon, type ActionIconProps} from '@coveord/plasma-mantine/components/ActionIcon';
import {IconX} from '@coveord/plasma-react-icons';
import type {Meta, StoryObj} from '@storybook/react-vite';

type ActionIconVariants = keyof typeof ActionIcon;

type ActionIconStoryArgs = ActionIconProps & {
    variant: ActionIconVariants;
};

const meta: Meta<ActionIconStoryArgs> = {
    title: '@components/call-to-action/ActionIcon',
    id: 'ActionIcon',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [
                'Primary',
                'Secondary',
                'Tertiary',
                'Quaternary',
                'DestructivePrimary',
                'DestructiveSecondary',
                'DestructiveTertiary',
                'DestructiveQuaternary',
            ] as ActionIconVariants[],
            description: 'ActionIcon variant',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Size of the ActionIcon',
            table: {defaultValue: {summary: 'md'}, type: {summary: 'sm | md | lg'}},
        },
    },
    args: {
        size: 'md',
        variant: 'Primary',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Demo: Story = {
    render: (props) => {
        const ActionIconComponent = ActionIcon[props.variant];
        return (
            <ActionIconComponent size={props.size}>
                <IconX />
            </ActionIconComponent>
        );
    },
};
