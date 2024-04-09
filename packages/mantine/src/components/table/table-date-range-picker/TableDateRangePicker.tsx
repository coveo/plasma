import {CalendarSize16Px} from '@coveord/plasma-react-icons';
import {BoxProps, Factory, Grid, InputBase, Popover, factory, useProps} from '@mantine/core';
import {CompoundStylesApiProps} from '@mantine/core/lib/core/styles-api/styles-api.types';
import dayjs from 'dayjs';

import {useState} from 'react';
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
    const [opened, setOpened] = useState(false);
    const {form} = useTable();

    const onApply = (dates: DateRangePickerValue) => {
        form.setFieldValue('dateRange', dates);
        setOpened(false);
    };
    const onCancel = () => {
        setOpened(false);
    };

    const formatDate = (date: Date) => dayjs(date).format('MMM DD, YYYY');
    const formattedRange = `${formatDate(form.values.dateRange[0])} - ${formatDate(form.values.dateRange[1])}`;
    const dateRangeInitialized = form.values.dateRange.every((date) => date instanceof Date);

    const stylesApiProps = {classNames, styles};

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.DateRangePicker}
            ref={ref}
            {...ctx.getStyles('dateRangeRoot', {className, style, ...stylesApiProps})}
            {...others}
        >
            <Popover withinPortal opened={opened}>
                <Popover.Target>
                    <InputBase
                        component="button"
                        leftSection={<CalendarSize16Px height={16} />}
                        miw={220}
                        onClick={() => setOpened(true)}
                    >
                        {dateRangeInitialized ? formattedRange : 'Select date range'}
                    </InputBase>
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
