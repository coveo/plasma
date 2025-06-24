import {Group, Popover, Space} from '@mantine/core';
import {CalendarBaseProps, DateTimePicker} from '@mantine/dates';
import {useClickOutside, useUncontrolled} from '@mantine/hooks';
import {useState} from 'react';
import {DateTimeRangePickerPreset, DateTimeRangePickerPresetSelect} from './DateTimeRangePickerPresetSelect';
import {EditableDateTimeRangePicker, EditableDateTimeRangePickerProps} from './EditableDateTimeRangePicker';

export type DateTimeRangePickerValue = [Date | null, Date | null];

interface DateTimeRangePickerPopoverCalendarProps
    extends Pick<EditableDateTimeRangePickerProps, 'startProps' | 'endProps'> {
    /** Default value for uncontrolled input */
    defaultValue?: DateTimeRangePickerValue;
    /** Value for controlled input */
    value?: DateTimeRangePickerValue;
    /** onChange value for controlled input */
    onChange?(value: DateTimeRangePickerValue): void;
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
    presets?: Record<string, DateTimeRangePickerPreset>;

    /**
     * Props for RangeCalendar
     */
    rangeCalendarProps?: Omit<
        CalendarBaseProps,
        'value' | 'onChange' | 'isDateInRange' | 'isDateFirstInRange' | 'isDateLastInRange'
    >;
}

export const DateTimeRangePickerPopoverCalendar = ({
    presets,
    value,
    defaultValue,
    onChange,
    startProps,
    endProps,
    rangeCalendarProps,
}: DateTimeRangePickerPopoverCalendarProps) => {
    const [opened, setOpened] = useState(false);
    const ref = useClickOutside(() => setOpened(false));

    const [_value, handleChange] = useUncontrolled<DateTimeRangePickerValue>({
        value,
        defaultValue,
        onChange,
        finalValue: [null, null],
    });

    const onCalendarChange = (dates: DateTimeRangePickerValue) => {
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
                        <EditableDateTimeRangePicker
                            value={_value}
                            onChange={handleChange}
                            onFocus={() => setOpened(true)}
                            startProps={startProps}
                            endProps={endProps}
                        />
                        {presets ? (
                            <>
                                <Space w="sm" />
                                <DateTimeRangePickerPresetSelect
                                    presets={presets}
                                    value={_value}
                                    onChange={handleChange}
                                />
                            </>
                        ) : null}
                    </Group>
                </Popover.Target>
                <Popover.Dropdown>
                    <DateTimePicker
                        ref={ref}
                        styles={{day: {textAlign: 'center'}}}
                        numberOfColumns={2}
                        columnsToScroll={1}
                        firstDayOfWeek={0}
                        value={_value}
                        onChange={onCalendarChange}
                        {...rangeCalendarProps}
                    />
                </Popover.Dropdown>
            </Popover>
        </>
    );
};
