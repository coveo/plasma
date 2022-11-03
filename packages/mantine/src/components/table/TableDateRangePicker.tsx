import {CalendarSize24Px} from '@coveord/plasma-react-icons';
import {Popover, Button} from '@mantine/core';
import {DateRangePickerValue} from '@mantine/dates';
import dayjs from 'dayjs';
import {FunctionComponent, useState} from 'react';
import {DateRangePickerInlineCalendar, DateRangePickerInlineCalendarProps} from '../date-range-picker';
import {DateRangePickerPreset} from '../date-range-picker/DateRangePickerPresetSelect';
import {useTable} from './useTable';

interface TableDateRangePickerProps
    extends Pick<DateRangePickerInlineCalendarProps, 'startProps' | 'endProps' | 'rangeCalendarProps'> {
    /**
     * An object containing date presets.
     * If empty the preset dropdown won't be shown
     *
     * @example
     * {
     *     january: {label: 'January', range: [new Date(2022, 0, 1), new Date(2022, 0, 31)]},
     *     february: {label: 'February', range: [new Date(2022, 1, 1), new Date(2022, 1, 28)]}
     * }
     * @default {}
     */
    presets?: Record<string, DateRangePickerPreset>;
}

export const TableDateRangePicker: FunctionComponent<TableDateRangePickerProps> = ({
    presets = {},
    rangeCalendarProps,
}) => {
    const [opened, setOpened] = useState(false);
    const {form} = useTable();

    const onApply = (dates: DateRangePickerValue) => {
        if (dates[0] !== null && dates[1] !== null) {
            form.setFieldValue('dateRange', [dayjs(dates[0]).toDate(), dayjs(dates[1]).toDate()]);
        } else if (dates[1] === null) {
            form.setFieldValue('dateRange', [
                dayjs(dates[0]).startOf('day').toDate(),
                dayjs(dates[0]).endOf('day').toDate(),
            ]);
        } else {
            form.setFieldValue('dateRange', [
                dayjs(dates[1]).startOf('day').toDate(),
                dayjs(dates[1]).endOf('day').toDate(),
            ]);
        }
        setOpened(false);
    };
    const onCancel = () => {
        setOpened(false);
    };

    const formatDate = (date: Date) => dayjs(date).format('MMM DD, YYYY');
    const formatedRange = `${formatDate(form.values.dateRange[0])} - ${formatDate(form.values.dateRange[1])}`;

    return (
        <>
            {formatedRange}
            <Popover opened={opened} onChange={setOpened}>
                <Popover.Target>
                    <Button variant="outline" color="gray" onClick={() => setOpened(true)} px="xs">
                        <CalendarSize24Px width={24} height={24} />
                    </Button>
                </Popover.Target>
                <Popover.Dropdown p={0}>
                    <DateRangePickerInlineCalendar
                        initialRange={form.values.dateRange}
                        onApply={onApply}
                        onCancel={onCancel}
                        presets={presets}
                        rangeCalendarProps={rangeCalendarProps}
                    />
                </Popover.Dropdown>
            </Popover>
        </>
    );
};
