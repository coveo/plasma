import {Tooltip} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {type ComponentPropsWithoutRef, forwardRef} from 'react';

type TooltipStoryArgs = Omit<ComponentPropsWithoutRef<typeof Tooltip>, 'children' | 'opened'> & {
    freezeOpen: boolean;
};

const meta = {
    title: '@components/feedback/Tooltip',
    id: 'Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Tooltip',
        freezeOpen: false,
    },
    argTypes: {
        label: {
            control: 'text',
            table: {
                defaultValue: {summary: ''},
            },
        },
        position: {
            control: 'select',
            options: ['top', 'bottom', 'left', 'right'],
            table: {
                defaultValue: {summary: 'undefined'},
            },
        },
        freezeOpen: {
            control: 'boolean',
            description: 'Keep the tooltip visible without hovering',
            table: {
                defaultValue: {summary: 'false'},
                type: {summary: 'boolean'},
            },
        },
    },
} satisfies Meta<TooltipStoryArgs>;
export default meta;
type Story = StoryObj<TooltipStoryArgs>;

const Content = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>((props, ref) => (
    <div
        ref={ref}
        {...props}
        style={{
            width: 100,
            height: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
            borderRadius: 8,
            backgroundColor: 'var(--mantine-color-blue-2)',
        }}
    >
        Hover me
    </div>
));
Content.displayName = 'HoverMe';

export const Demo: Story = {
    render: ({freezeOpen, label = 'Tooltip', ...props}) => (
        <Tooltip {...props} label={label} opened={freezeOpen ? true : undefined}>
            <Content />
        </Tooltip>
    ),
};
