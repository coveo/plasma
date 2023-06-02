import {CalendarSize24Px} from '@coveord/plasma-react-icons';
import {createStyles, DefaultProps, Grid, Group, Popover, Selectors, Text} from '@mantine/core';
import {useToggle} from '@mantine/hooks';
import dayjs from 'dayjs';
import {FunctionComponent} from 'react';

import {Button} from '../button';
import {
    DateRangePickerInlineCalendar,
    DateRangePickerInlineCalendarProps,
    DateRangePickerPreset,
    DateRangePickerValue,
} from '../date-range-picker';
import {TableComponentsOrder} from './Table.styles';
import {useTable} from './TableContext';

const useStyles = createStyles((theme) => ({
    root: {},
    wrapper: {},
    label: {},
}));

type TableDateRangePickerStylesNames = Selectors<typeof useStyles>;
interface TableDateRangePickerProps
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

export const TableDateRangePicker: FunctionComponent<TableDateRangePickerProps> = ({
    presets = {},
    rangeCalendarProps,
    classNames,
    styles,
    unstyled,
    ...others
}) => {
    const {classes} = useStyles(null, {name: 'TableDateRangePicker', classNames, styles, unstyled});
    const [opened, toggleOpened] = useToggle();
    const {form} = useTable();

    const onApply = (dates: DateRangePickerValue) => {
        form.setFieldValue('dateRange', dates);
        toggleOpened(false);
    };
    const onCancel = () => {
        toggleOpened(false);
    };

    const formatDate = (date: Date) => dayjs(date).format('MMM DD, YYYY');
    const formattedRange = `${formatDate(form.values.dateRange[0])} - ${formatDate(form.values.dateRange[1])}`;

    return (
        <Grid.Col
            span="content"
            order={TableComponentsOrder.DateRangePicker}
            py="sm"
            className={classes.root}
            {...others}
        >
            <Group spacing="xs" className={classes.wrapper}>
                <Text span className={classes.label}>
                    {formattedRange}
                </Text>
                <Popover opened={opened} onChange={toggleOpened} withinPortal>
                    <Popover.Target>
                        <Button variant="outline" color="gray" onClick={() => toggleOpened()} px="xs">
                            <CalendarSize24Px width={24} height={24} />
                        </Button>
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
            </Group>
        </Grid.Col>
    );
};
