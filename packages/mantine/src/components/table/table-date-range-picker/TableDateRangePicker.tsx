import {BoxProps, CompoundStylesApiProps, Factory, factory, Grid, useProps} from '@mantine/core';

import {type DatesRangeValue, type DateStringValue} from '@mantine/dates';
import {DateRangePicker, DateRangePickerProps} from '../../date-range-picker/DateRangePicker.js';
import {DateRangePickerPreset} from '../../date-range-picker/DateRangePickerPresetSelect.js';
import {TableComponentsOrder} from '../Table.js';
import {useTableContext} from '../TableContext.js';

export type TableDateRangePickerStylesNames = 'dateRangeRoot';

export interface TableDateRangePickerProps
    extends BoxProps,
        CompoundStylesApiProps<TableDateRangePickerFactory>,
        Pick<DateRangePickerProps, 'placeholder' | 'startProps' | 'endProps' | 'rangeCalendarProps'> {
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

export type TableDateRangePickerFactory = Factory<{
    props: TableDateRangePickerProps;
    ref: HTMLDivElement;
    stylesNames: TableDateRangePickerStylesNames;
    compound: true;
}>;

const defaultProps: Partial<TableDateRangePickerProps> = {
    presets: {},
};

export const TableDateRangePicker = factory<TableDateRangePickerFactory>((props, ref) => {
    const {store, getStyles} = useTableContext();
    const {
        presets,
        rangeCalendarProps,
        startProps,
        endProps,
        placeholder,
        classNames,
        className,
        styles,
        style,
        vars,
        ...others
    } = useProps('PlasmaTableDateRangePicker', defaultProps, props);

    const onChange = (dates: DatesRangeValue<DateStringValue | null>) => {
        store.setDateRange(dates);
        store.setPagination({pageIndex: 0, pageSize: store.state.pagination.pageSize});
    };

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.DateRangePicker}
            ref={ref}
            {...getStyles('dateRangeRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <DateRangePicker
                value={store.state.dateRange}
                onChange={onChange}
                presets={presets}
                rangeCalendarProps={rangeCalendarProps}
                startProps={startProps}
                endProps={endProps}
                placeholder={placeholder}
                miw={220}
            />
        </Grid.Col>
    );
});
