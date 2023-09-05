import {CalendarSize24Px} from '@coveord/plasma-react-icons';
import {Grid, Group, Popover, Text} from '@mantine/core';
import {useToggle} from '@mantine/hooks';
import dayjs from 'dayjs';
import {FunctionComponent} from 'react';

import {Button} from '../../button';
import {DateRangePickerInlineCalendar, DateRangePickerValue} from '../../date-range-picker';
import {TableComponentsOrder} from '../Table.styles';
import {useTable} from '../TableContext';
import useStyles from './TableDateRangePicker.styles';
import {TableDateRangePickerProps} from './TableDateRangePicker.types';

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
