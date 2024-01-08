import {Center, Group, Space} from '@mantine/core';
import {DatePicker, DatePickerBaseProps} from '@mantine/dates';
import {useForm} from '@mantine/form';

import {Button} from '../button';
import DateRangeClasses from './DateRange.module.css';
import {DateRangePickerPreset, DateRangePickerPresetSelect} from './DateRangePickerPresetSelect';
import {EditableDateRangePicker, EditableDateRangePickerProps} from './EditableDateRangePicker';

export type DateRangePickerValue = [Date | null, Date | null];
export interface DateRangePickerInlineCalendarProps
    extends Pick<EditableDateRangePickerProps, 'startProps' | 'endProps'> {
    /**
     * Initial selected range
     */
    initialRange: DateRangePickerValue;
    /**
     * Function called when the user applies the new date range
     *
     * @param range the newly selected dates
     */
    onApply: (range: DateRangePickerValue) => void;
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

    const onCalendarApply = () => {
        if (!form.values.dates[1]) {
            form.values.dates[1] = form.values.dates[0]; // when date range is the same day
        }
        onApply(form.values.dates);
    };

    return (
        <>
            <Group align="center" gap="xs" grow px="md" py="sm" className={DateRangeClasses.picker}>
                <EditableDateRangePicker {...calendarInputProps} startProps={startProps} endProps={endProps} />
                {presets ? (
                    <>
                        <Space w="sm" />
                        <DateRangePickerPresetSelect
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
                    type="range"
                    styles={{day: {textAlign: 'center'}}}
                    firstDayOfWeek={0}
                    allowSingleDateInRange
                    {...rangeCalendarProps}
                    {...calendarInputProps}
                />
            </Center>

            <Group justify="right" gap="xs" px="md" py="sm" className={DateRangeClasses.save}>
                <Button variant="outline" size="xs" onClick={onCancel}>
                    Cancel
                </Button>
                <Button size="xs" onClick={onCalendarApply}>
                    Apply
                </Button>
            </Group>
        </>
    );
};
