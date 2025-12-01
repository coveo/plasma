import {DateInput, DatePickerProps, DateStringValue, type DatesRangeValue} from '@mantine/dates';
import dayjs from 'dayjs';

export interface EditableDateRangePickerProps {
    value: DatesRangeValue<DateStringValue | null>;
    onChange?(value: DatesRangeValue<DateStringValue> | null): void;
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
    const onChangeStart = (date: DateStringValue | null) => {
        onChange?.([dayjs(date).startOf('day').toISOString(), value?.[1]]);
    };
    const onChangeEnd = (date: DateStringValue | null) => {
        onChange?.([value?.[0], dayjs(date).endOf('day').toISOString()]);
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
                {...startProps}
            />
            <DateInput
                clearable={false}
                label="End"
                value={value?.[1]}
                onChange={onChangeEnd}
                onFocus={onFocus}
                popoverProps={{styles: {dropdown: {display: 'none'}}}}
                {...endProps}
            />
        </>
    );
};
export type {DateRangePickerPreset} from './DateRangePickerPresetSelect';
