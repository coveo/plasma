import {SegmentedControl} from '@coveord/plasma-mantine/components/SegmentedControl';
import type {Meta, StoryObj} from '@storybook/react-vite';

const meta: Meta<typeof SegmentedControl> = {
    title: '@components/form/string/SegmentedControl',
    id: 'SegmentedControl',
    component: SegmentedControl,
    parameters: {
        layout: 'centered',
    },
    args: {
        data: [
            {label: 'First', value: 'one'},
            {label: 'Second', value: 'two', disabled: true},
            {label: 'Third', value: 'three'},
            {label: 'Fourth', value: 'four'},
        ],
        disabled: false,
    },
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Demo: Story = {
    render: (props: any) => <SegmentedControl {...props} />,
};
