import type {StoryObj, Meta} from '@storybook/react-vite';
import {EllipsisText} from '@coveord/plasma-mantine/components/EllipsisText';
import {Chip} from '@mantine/core';

const meta: Meta<typeof EllipsisText> = {
    title: '@components/layout/EllipsisText',
    component: EllipsisText,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof EllipsisText>;

export const EllipsisTextDefaultLong: Story = {
    render: () => <EllipsisText maw={250}>This is a very long text that is truncated with an ellipsis.</EllipsisText>,
};

export const EllipsisTextDefaultShort: Story = {
    render: () => <EllipsisText maw={250}>This short text is not truncated.</EllipsisText>,
};

export const EllipsisTextLineClampLong: Story = {
    render: () => (
        <EllipsisText maw={250} lineClamp={2}>
            This is a very long text that is truncated with an ellipsis since clamp limit is not enough to display the
            full text.
        </EllipsisText>
    ),
};

export const EllipsisTextLineClampShort: Story = {
    render: () => (
        <EllipsisText maw={300} lineClamp={2}>
            This is a very long text that is not truncated since clamp limit is not reached.
        </EllipsisText>
    ),
};

export const EllipsisTextNoWrapContainer: Story = {
    render: () => (
        <Chip>
            <EllipsisText maw={250}>
                This is a very long text within a special container is truncated with an ellipsis.
            </EllipsisText>
        </Chip>
    ),
};
