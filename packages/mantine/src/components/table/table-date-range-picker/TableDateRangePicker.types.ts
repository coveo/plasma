import {DefaultProps, Selectors} from '@mantine/core';
import {DateRangePickerInlineCalendarProps, DateRangePickerPreset} from '../../date-range-picker';
import useStyles from './TableDateRangePicker.styles';

type TableDateRangePickerStylesNames = Selectors<typeof useStyles>;

export interface TableDateRangePickerProps
    extends Pick<DateRangePickerInlineCalendarProps, 'startProps' | 'endProps' | 'rangeCalendarProps'>,
        DefaultProps<TableDateRangePickerStylesNames> {
    /**
     * An object containing date presets.
     * If empty the preset dropdown won't be shown
     *
     * @example
     * {
     *     january: {label: 'January', range: [new Date(2022, 0, 1), new Date(2022, 0, 31)]},
     *     february: {label: 'February', range: [new Date(2022, 1, 1), new Date(2022, 1, 28)]}
     * }
     * @default {}
     */
    presets?: Record<string, DateRangePickerPreset>;
}
