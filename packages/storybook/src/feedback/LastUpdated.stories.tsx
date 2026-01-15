import {LastUpdated} from '@coveord/plasma-mantine/components/LastUpdated';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof LastUpdated> = {
    title: '@components/feedback/LastUpdated',
    id: 'LastUpdated',
    component: LastUpdated,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        time: {
            control: 'date',
            description: 'The unformatted time to display that can be parsed by dayjs.',
        },
        label: {control: 'text', description: 'Label to contextualize the time.', defaultValue: 'Last update:'},
    },
    args: {
        time: undefined,
        label: 'Last update:',
    },
} as any;
export default meta;
type Story = StoryObj<typeof LastUpdated>;

export const Default: Story = {
    render: ({time, label}: any) => {
        if (time) {
            return <LastUpdated time={time} label={label} />;
        }

        return <LastUpdated label={label} />;
    },
};
