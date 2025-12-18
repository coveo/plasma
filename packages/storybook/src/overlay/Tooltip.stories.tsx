import {Tooltip} from '@coveord/plasma-mantine/components/Tooltip';
import type {Meta, StoryObj} from '@storybook/react-vite';
import {forwardRef} from 'react';

const meta: Meta<typeof Tooltip> = {
    title: '@components/overlay/Tooltip',
    component: Tooltip,
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Tooltip',
        position: undefined,
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
                defaultValue: {summary: undefined},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

const Content = forwardRef<HTMLDivElement>((props, ref) => (
    <div
        ref={ref}
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
    render: (props: any) => (
        <Tooltip position={props.position} label={props.label}>
            <Content />
        </Tooltip>
    ),
};
