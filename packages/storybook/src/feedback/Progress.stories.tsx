import {Progress} from '@coveord/plasma-mantine/components/Progress';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof Progress> = {
    title: '@components/feedback/Progress',
    component: Progress,
    parameters: {
        layout: 'centered',
    },
    args: {
        value: 50,
    },
    argTypes: {
        value: {
            control: {type: 'range', min: 0, max: 100, step: 1},
            description: 'Progress value',
            table: {
                type: {summary: 'number'},
            },
        },
        variant: {
            control: 'select',
            options: ['info', 'success', 'caution', 'error'],
            description: 'Progress color',
            table: {
                type: {summary: 'info | success | caution | error'},
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Progress>;

const colorMapping = {
    info: 'var(--mantine-primary-color-filled)',
    success: 'success',
    caution: 'yellow',
    error: 'red',
} as const;

export const Demo: Story = {
    render: (props: {value: number; variant?: 'info' | 'success' | 'caution' | 'error'}) => (
        <Progress value={props.value} w={300} color={colorMapping[props.variant ?? 'info']} />
    ),
};
