import {Card} from '@coveord/plasma-mantine/components/Card';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {useArgs} from 'storybook/preview-api';

const meta: Meta<typeof Card> = {
    title: '@components/data-display/Card',
    id: 'Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    args: {
        variant: undefined,
        disabled: false,
        selected: false,
    },
    argTypes: {
        variant: {
            control: 'select',
            options: [undefined, 'hover'],
            table: {
                defaultValue: {summary: 'Default'},
            },
        },
        disabled: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            table: {
                defaultValue: {summary: false},
            },
        },
        selected: {
            control: 'boolean',
            if: {arg: 'variant', eq: 'hover'},
            table: {
                defaultValue: {summary: false},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Card>;

const PlaceholderContent = () => (
    <div
        style={{
            height: 100,
            width: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        Content
    </div>
);
PlaceholderContent.displayName = 'PlaceholderContent';

export const Demo: Story = {
    render: (props: any) => {
        const [{selected}, updateArgs] = useArgs();
        const actionable = props.variant === 'hover';
        const onClick = actionable
            ? () => {
                  updateArgs({selected: !selected});
              }
            : undefined;
        const mods = actionable ? {disabled: props.disabled, selected} : undefined;
        return (
            <Card variant={props.variant} mod={mods} onClick={onClick}>
                <PlaceholderContent />
            </Card>
        );
    },
};
