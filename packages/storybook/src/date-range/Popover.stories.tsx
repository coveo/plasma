import {DateRangePickerPopoverCalendar} from '@coveord/plasma-mantine';
import type {Meta, StoryObj} from '@storybook/react-vite';
import dayjs from 'dayjs';

const meta: Meta<typeof DateRangePickerPopoverCalendar> = {
    title: '@components/date-range/Popover',
    component: DateRangePickerPopoverCalendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DateRangePickerPopoverCalendar>;

export const Default: Story = {
    render: () => (
        <DateRangePickerPopoverCalendar
            presets={{
                year2k: {
                    label: 'Year 2K',
                    range: [new Date('2000/01/01').toISOString(), new Date('2000/12/31').toISOString()],
                },
                currentMonth: {
                    label: 'Month',
                    range: [dayjs().startOf('month').toISOString(), dayjs().endOf('month').toISOString()],
                },
            }}
        />
    ),
};
