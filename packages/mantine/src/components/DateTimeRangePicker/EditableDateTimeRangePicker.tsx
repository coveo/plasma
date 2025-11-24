import {DatePickerProps, DatesRangeValue, DateStringValue, DateTimePicker} from '@mantine/dates';
import dayjs from 'dayjs';

export interface EditableDateTimeRangePickerProps {
    value: DatesRangeValue<DateStringValue | null>;
    onChange?(value: DatesRangeValue<DateStringValue | null>): void;
    /**
     * Props for the start input
     */
    startProps?: Omit<Partial<DatePickerProps>, 'value' | 'onChange' | 'onFocus'>;
    /**
     * Props for the end input
     */
    endProps?: Omit<Partial<DatePickerProps>, 'value' | 'onChange' | 'onFocus'>;
}

export const EditableDateTimeRangePicker = ({
    value,
    onChange,
    startProps = {},
    endProps = {},
}: EditableDateTimeRangePickerProps) => {
    const onStartDateChange = (startDate: string) => {
        if (value?.[1] && dayjs(startDate) > dayjs(value[1])) {
            onChange?.([startDate, null]);
        } else {
            onChange?.([startDate, value?.[1]]);
        }
    };

    return (
        <>
            <DateTimePicker
                clearable={false}
                label="Start"
                value={value?.[0]}
                onChange={onStartDateChange}
                w={150}
                styles={{...startProps.styles}}
                timePickerProps={{
                    popoverProps: {withinPortal: false},
                }}
            />
            <DateTimePicker
                clearable={false}
                label="End"
                value={value?.[1]}
                minDate={value?.[0]}
                onChange={(endDate) => onChange?.([value?.[0], endDate])}
                w={150}
                styles={{...endProps.styles}}
                timePickerProps={{
                    popoverProps: {withinPortal: false},
                }}
            />
        </>
    );
};
