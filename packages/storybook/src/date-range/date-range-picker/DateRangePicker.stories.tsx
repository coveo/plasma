import type {StoryObj, Meta} from '@storybook/react-vite';
import {DateRangePicker} from '@coveord/plasma-mantine/components/DateRangePicker';
import dayjs from 'dayjs';
import {useState} from 'react';
import {DatesRangeValue, Stack, Text, Button, useForm} from '@coveord/plasma-mantine';

const meta: Meta<typeof DateRangePicker> = {
    title: '@components/date-range/DateRangePicker',
    component: DateRangePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof DateRangePicker>;

export const Default: Story = {
    render: () => <DateRangePicker defaultValue={[null, null]} />,
};

export const DateRangePickerConfiguration: Story = {
    render: () => {
        const MIN_DATE = dayjs().subtract(2, 'month').toDate();
        const MAX_DATE = dayjs().endOf('day').toDate();
        const DATE_BOUNDARIES = {
            minDate: MIN_DATE,
            maxDate: MAX_DATE,
        };
        return (
            <DateRangePicker
                placeholder="Custom placeholder"
                formatter={(time) => dayjs(time).format('YYYY-MM-DD HH:mm:ss')}
                rangeCalendarProps={DATE_BOUNDARIES}
                presets={{
                    lastHour: {
                        label: 'Last hour',
                        range: [
                            dayjs().startOf('hour').toISOString(),
                            dayjs().endOf('hour').second(0).millisecond(0).toISOString(),
                        ],
                    },
                    currentMonth: {
                        label: 'Month',
                        range: [
                            dayjs().startOf('month').toISOString(),
                            dayjs().endOf('month').second(0).millisecond(0).toISOString(),
                        ],
                    },
                }}
                startProps={DATE_BOUNDARIES}
                endProps={DATE_BOUNDARIES}
            />
        );
    },
};

export const DateRangePickerControlled: Story = {
    render: () => {
        const [opened, setOpened] = useState(false);
        const [value, setValue] = useState<DatesRangeValue<string>>([null, null]);
        return (
            <Stack gap="xs">
                <DateRangePicker value={value} onChange={setValue} opened={opened} onOpenedChange={setOpened} />
                <Text>
                    <b>Selected range</b>: {`${value[0]} - ${value[1]}`}
                </Text>
                <Text>
                    <b>Popover state</b>: {opened ? 'open' : 'closed'}
                </Text>
            </Stack>
        );
    },
};

export const DateRangePickerForm: Story = {
    render: () => {
        const form = useForm<{dateRange: DatesRangeValue<string>}>({
            initialValues: {
                dateRange: [null, null],
            },
            validate: {
                dateRange: (value) => {
                    if (value[0] === null || value[1] === null) {
                        return 'Please select a date range';
                    }
                    if (new Date(value[0]) > new Date(value[1])) {
                        return 'Start date must be before end date';
                    }
                    return null;
                },
            },
        });
        return (
            <Stack gap="xs">
                <DateRangePicker {...form.getInputProps('dateRange')} />
                <Text>
                    <b>Selected range</b>: {`${form.values.dateRange[0]} - ${form.values.dateRange[1]}`}
                </Text>
                <Button type="submit" onClick={() => form.validate()}>
                    Validate
                </Button>
            </Stack>
        );
    },
};

export const DateRangePickerURLSync: Story = {
    render: () => {
        const INITIAL_DATE_RANGE: DatesRangeValue<string> = [
            dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
            dayjs().format('YYYY-MM-DD'),
        ];
        return <DateRangePicker defaultValue={INITIAL_DATE_RANGE} syncWithUrl />;
    },
};

export const DateRangePickerUncontrolled: Story = {
    render: () => {
        const INITIAL_DATE_RANGE: DatesRangeValue<string> = [
            dayjs().subtract(7, 'day').format('YYYY-MM-DD'),
            dayjs().format('YYYY-MM-DD'),
        ];
        return <DateRangePicker defaultValue={INITIAL_DATE_RANGE} onChange={(range) => alert(`New range: ${range}`)} />;
    },
};
