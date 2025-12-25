import type {StoryObj, Meta} from '@storybook/react-vite';
import {LastUpdated} from '@coveord/plasma-mantine/components/LastUpdated';
import dayjs from 'dayjs';

const meta: Meta<typeof LastUpdated> = {
    title: '@components/feedback/LastUpdated',
    component: LastUpdated,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof LastUpdated>;

export const Default: Story = {
    render: () => <LastUpdated />,
};

export const LastUpdatedCustom: Story = {
    render: () => {
        const time = new Date('2023-01-01T12:34:56');
        return <LastUpdated time={time} label="Updated at:" />;
    },
};

export const LastUpdatedFormatter: Story = {
    render: () => <LastUpdated formatter={(time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')} />,
};
