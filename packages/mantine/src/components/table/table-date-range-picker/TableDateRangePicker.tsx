import {CalendarSize16Px} from '@coveord/plasma-react-icons';
import {BoxProps, Factory, Grid, Popover, factory, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import {useToggle} from '@mantine/hooks';

import {DatePickerInput} from '@mantine/dates';
import {
    DateRangePickerInlineCalendar,
    DateRangePickerInlineCalendarProps,
    DateRangePickerPreset,
    DateRangePickerValue,
} from '../../date-range-picker';
import {TableComponentsOrder} from '../Table';
import {useTable, useTableStyles} from '../TableContext';

export type TableDateRangePickerStylesNames = 'dateRangeRoot';

export interface TableDateRangePickerProps
    extends BoxProps,
        CompoundStylesApiProps<TableDateRangePickerFactory>,
        Pick<DateRangePickerInlineCalendarProps, 'startProps' | 'endProps' | 'rangeCalendarProps'> {
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
    const ctx = useTableStyles();
    const {presets, rangeCalendarProps, classNames, className, styles, style, vars, ...others} = useProps(
        'PlasmaTableDateRangePicker',
        defaultProps,
        props,
    );
    const [opened, toggleOpened] = useToggle();
    const {form} = useTable();

    const onApply = (dates: DateRangePickerValue) => {
        form.setFieldValue('dateRange', dates);
        toggleOpened(false);
    };
    const onCancel = () => {
        toggleOpened(false);
    };

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.DateRangePicker}
            ref={ref}
            {...ctx.getStyles('dateRangeRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Popover opened={opened} onChange={toggleOpened} withinPortal>
                <Popover.Target>
                    <DatePickerInput
                        type="range"
                        valueFormat="MMM DD, YYYY"
                        placeholder="Pick date range"
                        clearable
                        {...form.getInputProps('dateRange')}
                        leftSection={<CalendarSize16Px height={16} />}
                        miw={220}
                    />
                </Popover.Target>
                <Popover.Dropdown p={0}>
                    <DateRangePickerInlineCalendar
                        initialRange={form.values.dateRange}
                        onApply={onApply}
                        onCancel={onCancel}
                        presets={presets}
                        rangeCalendarProps={rangeCalendarProps}
                    />
                </Popover.Dropdown>
            </Popover>
        </Grid.Col>
    );
});
