import {DateInput, DatePickerProps, DatesRangeValue, DateValue} from '@mantine/dates';
import dayjs from 'dayjs';

export interface EditableDateRangePickerProps {
    value: DatesRangeValue;
    onChange?(value: DatesRangeValue): void;
    onFocus?: () => void;
    /**
     * Props for the start input
     */
    startProps?: Omit<Partial<DatePickerProps>, 'value' | 'onChange' | 'onFocus'>;
    /**
     * Props for the end input
     */
    endProps?: Omit<Partial<DatePickerProps>, 'value' | 'onChange' | 'onFocus'>;
}

export const EditableDateRangePicker = ({
    value,
    onChange,
    onFocus,
    startProps = {},
    endProps = {},
}: EditableDateRangePickerProps) => {
    const onChangeStart = (date: DateValue) => {
        onChange?.([dayjs(date).startOf('day').toDate(), value?.[1]]);
    };
    const onChangeEnd = (date: DateValue) => {
        onChange?.([value?.[0], dayjs(date).endOf('day').toDate()]);
    };

    return (
        <>
            <DateInput
                clearable={false}
                label="Start"
                value={value?.[0]}
                onChange={onChangeStart}
                onFocus={onFocus}
                popoverProps={{styles: {dropdown: {display: 'none'}}}}
                styles={{...startProps.styles}}
            />
            <DateInput
                clearable={false}
                label="End"
                value={value?.[1]}
                onChange={onChangeEnd}
                onFocus={onFocus}
                popoverProps={{styles: {dropdown: {display: 'none'}}}}
                styles={{...endProps.styles}}
            />
        </>
    );
};
