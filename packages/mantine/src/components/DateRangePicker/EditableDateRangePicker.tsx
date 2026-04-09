import {DateInput, DateStringValue, type DatesRangeValue} from '@mantine/dates';
import dayjs from 'dayjs';
import {ComponentProps} from 'react';

export interface EditableDateRangePickerProps {
    value: DatesRangeValue<DateStringValue | null>;
    onChange?(value: DatesRangeValue<DateStringValue | null>): void;
    onFocus?: () => void;
    /**
     * Props for the start input
     */
    startProps?: Omit<Partial<ComponentProps<typeof DateInput>>, 'value' | 'onChange' | 'onFocus'>;
    /**
     * Props for the end input
     */
    endProps?: Omit<Partial<ComponentProps<typeof DateInput>>, 'value' | 'onChange' | 'onFocus'>;
}

export const EditableDateRangePicker = ({
    value,
    onChange,
    onFocus,
    startProps = {},
    endProps = {},
}: EditableDateRangePickerProps) => {
    const onChangeStart = (date: DateStringValue | null) => {
        onChange?.([date ? dayjs(date).startOf('day').toISOString() : null, value?.[1] ?? null]);
    };
    const onChangeEnd = (date: DateStringValue | null) => {
        onChange?.([value?.[0] ?? null, date ? dayjs(date).endOf('day').toISOString() : null]);
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
