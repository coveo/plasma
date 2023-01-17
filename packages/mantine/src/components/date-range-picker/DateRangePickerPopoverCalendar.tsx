import {DateRangePickerValue, RangeCalendar, RangeCalendarProps} from '@mantine/dates';
import {Group, Popover, Space} from '@mantine/core';
import {useClickOutside, useUncontrolled} from '@mantine/hooks';
import {useState} from 'react';

import {EditableDateRangePicker, EditableDateRangePickerProps} from './EditableDateRangePicker.js';
import {DateRangePickerPresetSelect, DateRangePickerPreset} from './DateRangePickerPresetSelect.js';

interface DateRangePickerPopoverCalendarProps<T> extends Pick<EditableDateRangePickerProps, 'startProps' | 'endProps'> {
    /** Default value for uncontrolled input */
    defaultValue?: DateRangePickerValue;
    /** Value for controlled input */
    value?: DateRangePickerValue;
    /** onChange value for controlled input */
    onChange?(value: DateRangePickerValue): void;
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
    rangeCalendarProps?: Omit<RangeCalendarProps, 'value' | 'onChange'>;
}

export const DateRangePickerPopoverCalendar = <T extends unknown>({
    presets,
    value,
    defaultValue,
    onChange,
    startProps,
    endProps,
    rangeCalendarProps,
}: DateRangePickerPopoverCalendarProps<T>) => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const [_value, handleChange] = useUncontrolled<DateRangePickerValue>({
        value,
        defaultValue,
        onChange,
        finalValue: [null, null],
    });

    const onCalendarChange = (dates: DateRangePickerValue) => {
        handleChange?.(dates);
        if (dates[1] !== null) {
            setOpened(false);
        }
    };

    return (
        <>
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

            <Popover opened={opened} onChange={setOpened} trapFocus>
                <Popover.Dropdown>
                    <RangeCalendar
                        ref={ref}
                        styles={{cell: {textAlign: 'center'}}}
                        amountOfMonths={2}
                        firstDayOfWeek="sunday"
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
