import {Center, Group, Space} from '@mantine/core';
import {DatePicker, DatePickerBaseProps, type DatesRangeValue, type DateValue} from '@mantine/dates';
import {useForm} from '@mantine/form';

import dayjs from 'dayjs';
import {Button} from '../button';
import DateRangeClasses from './DateRange.module.css';
import {DateRangePickerPreset, DateRangePickerPresetSelect} from './DateRangePickerPresetSelect';
import {EditableDateRangePicker, EditableDateRangePickerProps} from './EditableDateRangePicker';
export interface DateRangePickerInlineCalendarProps
    extends Pick<EditableDateRangePickerProps, 'startProps' | 'endProps'> {
    /**
     * Initial selected range
     */
    initialRange: DatesRangeValue;
    /**
     * Function called when the user applies the new date range
     *
     * @param range the newly selected dates
     */
    onApply: (range: DatesRangeValue) => void;
    /**
     * Function called when the user click on the cancel button
     */
    onCancel: () => void;
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
     * Props for RangeCalendar displayed in the popover
     */
    rangeCalendarProps?: Omit<
        DatePickerBaseProps,
        'value' | 'onChange' | 'isDateInRange' | 'isDateFirstInRange' | 'isDateLastInRange'
    >;
}

const isDateRangePickerValue = (value: unknown): value is DatesRangeValue => Array.isArray(value) && value.length === 2;

const endOfDay = (value: DateValue): DateValue => (value ? dayjs(value).endOf('day').toDate() : value);

export const DateRangePickerInlineCalendar = ({
    initialRange,
    onApply,
    onCancel,
    presets,
    startProps,
    endProps,
    rangeCalendarProps,
}: DateRangePickerInlineCalendarProps) => {
    const form = useForm({
        initialValues: {
            dates: initialRange,
        },
    });
    const calendarInputProps = form.getInputProps('dates');

    const onCalendarChange = (range: string | string[] | DatesRangeValue<DateValue>): void => {
        // If the current value is [null, null] and a date is selected, set [selectedValue, null]
        if (isDateRangePickerValue(range) && range[0] && range[1] === null) {
            calendarInputProps.onChange([dayjs(range[0]).toDate(), null]);
            return;
        }
        const normalized =
            isDateRangePickerValue(range) && range[1] ? [dayjs(range[0]).toDate(), endOfDay(range[1])] : range;
        calendarInputProps.onChange(normalized);
    };

    const onCalendarApply = () => {
        // In case the user only clicked the start date, but not the end date,
        // assume a single day was meant to be selected.
        if (!form.values.dates[1]) {
            form.values.dates[1] = endOfDay(form.values.dates[0]);
        }
        onApply(form.values.dates);
    };
    return (
        <>
            <Group align="center" gap="xs" grow px="md" py="sm" className={DateRangeClasses.picker}>
                <EditableDateRangePicker
                    value={calendarInputProps.value}
                    {...calendarInputProps}
                    startProps={startProps}
                    endProps={endProps}
                />
                {presets ? (
                    <>
                        <Space w="sm" />
                        <DateRangePickerPresetSelect
                            value={calendarInputProps.value}
                            presets={presets}
                            {...calendarInputProps}
                            selectProps={{comboboxProps: {withinPortal: false}}}
                        />
                    </>
                ) : null}
            </Group>
            <Center py="sm" px="md">
                <DatePicker
                    numberOfColumns={2}
                    columnsToScroll={1}
                    type="range"
                    styles={{day: {textAlign: 'center'}}}
                    firstDayOfWeek={0}
                    allowSingleDateInRange
                    {...rangeCalendarProps}
                    {...calendarInputProps}
                    onChange={onCalendarChange}
                />
            </Center>
            <Group justify="right" gap="xs" px="md" py="sm" className={DateRangeClasses.save}>
                <Button.Tertiary onClick={onCancel}>Cancel</Button.Tertiary>
                <Button.Primary onClick={onCalendarApply}>Apply</Button.Primary>
            </Group>
        </>
    );
};
