import {DatePicker, DatePickerProps, DateRangePickerValue} from '@mantine/dates';
import dayjs from 'dayjs';
import {ReactNode} from 'react';

export interface EditableDateRangePickerProps {
    value: DateRangePickerValue;
    onChange?(value: DateRangePickerValue): void;
    onFocus?: () => void;
    separator?: ReactNode;
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
    separator = 'to',
    startProps = {},
    endProps = {},
}: EditableDateRangePickerProps) => {
    const onChangeStart = (date: Date) => {
        onChange?.([dayjs(date).startOf('day').toDate(), value?.[1]]);
    };
    const onChangeEnd = (date: Date) => {
        onChange?.([value?.[0], dayjs(date).endOf('day').toDate()]);
    };

    return (
        <>
            <DatePicker
                allowFreeInput
                clearable={false}
                label="Start"
                {...startProps}
                value={value?.[0]}
                onChange={onChangeStart}
                onFocus={onFocus}
                styles={{...startProps.styles, dropdown: {display: 'none'}}}
            />
            {separator}
            <DatePicker
                allowFreeInput
                clearable={false}
                label="End"
                {...endProps}
                value={value?.[1]}
                onChange={onChangeEnd}
                onFocus={onFocus}
                styles={{...endProps.styles, dropdown: {display: 'none'}}}
            />
        </>
    );
};
