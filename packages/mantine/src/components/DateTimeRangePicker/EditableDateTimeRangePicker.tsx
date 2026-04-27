import {DatesRangeValue, DateStringValue, DateTimePicker} from '@mantine/dates';
import dayjs from 'dayjs';
import {ComponentProps} from 'react';

export interface EditableDateTimeRangePickerProps {
    value: DatesRangeValue<DateStringValue | null>;
    /**
     * The format of the date in the input
     */
    dateFormat?: string;
    /**
     * The format of the time in the time picker, either 12h or 24h
     */
    timePickerFormat?: '12h' | '24h';
    onChange?(value: DatesRangeValue<DateStringValue | null>): void;
    /**
     * Props for the start input
     */
    startProps?: Omit<Partial<ComponentProps<typeof DateTimePicker>>, 'value' | 'onChange' | 'onFocus'>;
    /**
     * Props for the end input
     */
    endProps?: Omit<Partial<ComponentProps<typeof DateTimePicker>>, 'value' | 'onChange' | 'onFocus'>;
}

export const EditableDateTimeRangePicker = ({
    value,
    dateFormat,
    onChange,
    timePickerFormat = '12h',
    startProps = {},
    endProps = {},
}: EditableDateTimeRangePickerProps) => {
    const onStartDateChange = (startDate: string | null) => {
        if (startDate === null) {
            onChange?.([null, value?.[1] ?? null]);
            return;
        }
        if (value?.[1] && dayjs(startDate) > dayjs(value[1])) {
            onChange?.([startDate, null]);
        } else {
            onChange?.([startDate, value?.[1] ?? null]);
        }
    };

    return (
        <>
            <DateTimePicker
                clearable={false}
                label="Start"
                value={value?.[0]}
                onChange={onStartDateChange}
                valueFormat={dateFormat}
                w={150}
                styles={{...startProps.styles}}
                timePickerProps={{
                    format: timePickerFormat,
                    popoverProps: {withinPortal: false},
                }}
            />
            <DateTimePicker
                clearable={false}
                label="End"
                value={value?.[1] ?? undefined}
                minDate={value?.[0] ?? undefined}
                onChange={(endDate) => onChange?.([value?.[0] ?? null, endDate])}
                valueFormat={dateFormat}
                w={150}
                styles={{...endProps.styles}}
                timePickerProps={{
                    format: timePickerFormat,
                    popoverProps: {withinPortal: false},
                }}
            />
        </>
    );
};
