import {Group, Popover, Space} from '@mantine/core';
import {CalendarBaseProps, DatePicker, type DateStringValue, type DatesRangeValue} from '@mantine/dates';
import {useClickOutside, useUncontrolled} from '@mantine/hooks';
import {useState} from 'react';

import dayjs from 'dayjs';
import {DateRangePickerPreset, DateRangePickerPresetSelect} from './DateRangePickerPresetSelect.js';
import {EditableDateRangePicker, EditableDateRangePickerProps} from './EditableDateRangePicker.js';

interface DateRangePickerPopoverCalendarProps extends Pick<EditableDateRangePickerProps, 'startProps' | 'endProps'> {
    /** Default value for uncontrolled input */
    defaultValue?: DatesRangeValue<DateStringValue | null>;
    /** Value for controlled input */
    value?: DatesRangeValue<DateStringValue | null>;
    /** onChange value for controlled input */
    onChange?(value: DatesRangeValue<DateStringValue | null>): void;
    /**
     * The presets to display
     *
     * @default {}
     * @example
     * {
     *     january: {label: 'January', range: [new Date(2022, 0, 1), new Date(2022, 0, 31)]},
     *     february: {label: 'February', range: [new Date(2022, 1, 1), new Date(2022, 1, 28)]}
     * }
     */
    presets?: Record<string, DateRangePickerPreset>;
    /**
     * Props for RangeCalendar
     */
    rangeCalendarProps?: Omit<
        CalendarBaseProps,
        'value' | 'onChange' | 'isDateInRange' | 'isDateFirstInRange' | 'isDateLastInRange'
    >;
}

export const DateRangePickerPopoverCalendar = ({
    presets,
    value,
    defaultValue,
    onChange,
    startProps,
    endProps,
    rangeCalendarProps,
}: DateRangePickerPopoverCalendarProps) => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const [_value, handleChange] = useUncontrolled<DatesRangeValue<DateStringValue> | null>({
        value,
        defaultValue,
        onChange,
        finalValue: [null, null],
    });

    const onCalendarChange = (dates: DatesRangeValue<DateStringValue | null>) => {
        if (dates[0] !== null) {
            dates[0] = dayjs(dates[0]).toISOString();
        }
        if (dates[1] !== null) {
            dates[1] = dayjs(dates[1]).toISOString();
        }
        handleChange?.(dates);
        if (dates[1] !== null) {
            setOpened(false);
        }
    };

    return (
        <>
            <Popover opened={opened} onChange={setOpened} trapFocus>
                <Popover.Target>
                    <Group align="center">
                        <EditableDateRangePicker
                            value={_value}
                            onChange={handleChange}
                            onFocus={() => setOpened(true)}
                            startProps={startProps}
                            endProps={endProps}
                        />
                        {presets ? (
                            <>
                                <Space w="sm" />
                                <DateRangePickerPresetSelect presets={presets} value={_value} onChange={handleChange} />
                            </>
                        ) : null}
                    </Group>
                </Popover.Target>
                <Popover.Dropdown>
                    <DatePicker
                        ref={ref}
                        type="range"
                        styles={{day: {textAlign: 'center'}}}
                        numberOfColumns={2}
                        columnsToScroll={1}
                        firstDayOfWeek={0}
                        allowSingleDateInRange
                        value={_value}
                        onChange={onCalendarChange}
                        {...rangeCalendarProps}
                    />
                </Popover.Dropdown>
            </Popover>
        </>
    );
};
