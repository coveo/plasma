import {Group} from '@mantine/core';
import {useUncontrolled} from '@mantine/hooks';

import {DatesRangeValue, DateStringValue} from '@mantine/dates';
import {DateRangePickerPreset, DateRangePickerPresetSelect} from '../DateRangePicker/DateRangePickerPresetSelect.js';
import {EditableDateTimeRangePicker, EditableDateTimeRangePickerProps} from './EditableDateTimeRangePicker.js';

interface DateTimeRangePickerProps extends Pick<EditableDateTimeRangePickerProps, 'startProps' | 'endProps'> {
    /** Default value for uncontrolled input */
    defaultValue?: DatesRangeValue<DateStringValue | null>;
    /** Value for controlled input */
    value?: DatesRangeValue<DateStringValue | null>;
    /** onChange value for controlled input */
    onChange?(value: DatesRangeValue<DateStringValue | null>): void;
    /**
     * The presets to display
     *
     * @default {}
     * @example
     * {
     *     january: {label: 'January', range: [new Date(2022, 0, 1, 0, 0, 0), new Date(2022, 0, 31, 23, 59, 59)]},
     *     february: {label: 'February', range: [new Date(2022, 1, 1, 0, 0, 0), new Date(2022, 1, 28, 23, 59, 59)]}
     * }
     */
    presets?: Record<string, DateRangePickerPreset>;
}

export const DateTimeRangePicker = ({
    presets,
    value,
    defaultValue,
    onChange,
    startProps,
    endProps,
}: DateTimeRangePickerProps) => {
    const [_value, handleChange] = useUncontrolled<DatesRangeValue<DateStringValue | null>>({
        value,
        defaultValue,
        onChange,
        finalValue: [null, null],
    });

    return (
        <Group align="center">
            <EditableDateTimeRangePicker
                value={_value}
                onChange={handleChange}
                startProps={startProps}
                endProps={endProps}
            />
            {presets && (
                <DateRangePickerPresetSelect
                    presets={presets}
                    value={_value}
                    onChange={handleChange}
                    selectProps={{ml: 'sm'}}
                />
            )}
        </Group>
    );
};
