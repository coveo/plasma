import {IconCalendar} from '@coveord/plasma-react-icons';
import {
    BoxProps,
    factory,
    Factory,
    InputBase,
    Popover,
    PopoverProps,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {DatesRangeValue, DateStringValue} from '@mantine/dates';
import {useUncontrolled} from '@mantine/hooks';
import dayjs from 'dayjs';
import {useUrlSyncedState, UseUrlSyncedStateOptions} from '../../hooks/use-url-synced-state';
import {DateRangePickerInlineCalendar, DateRangePickerInlineCalendarProps} from './DateRangePickerInlineCalendar';

const serialization = (input: Pick<UseUrlSyncedStateOptions<DatesRangeValue<string>>, 'serializer' | 'deserializer'>) =>
    Object.freeze(input);

const DATE_RANGE_SERIALIZATION = serialization({
    serializer: ([from, to]) => [
        ['from', from ? new Date(from).toISOString() : '', true],
        ['to', to ? new Date(to).toISOString() : '', true],
    ],
    deserializer: (params, initial) => [
        params.get('from') ? params.get('from') : initial[0],
        params.get('to') ? params.get('to') : initial[1],
    ],
});

export type DateRangePickerStylesNames = 'input';

export interface DateRangePickerProps
    extends BoxProps,
        Omit<DateRangePickerInlineCalendarProps, 'onApply' | 'onCancel' | 'initialRange'>,
        Pick<PopoverProps, 'opened' | 'defaultOpened'>,
        StylesApiProps<DateRangePickerFactory> {
    /**
     * Called when the target input is clicked
     */
    onClick?(): void;
    /**
     * Function called when the cancel button is clicked.
     */
    onCancel?(): void;
    /**
     * Function called when the date range value changes.
     */
    onChange?(dates: DatesRangeValue<string>): void;
    /**
     * Called when the popover opened state changes.
     */
    onOpenedChange?(opened: boolean): void;
    /**
     * Optional formatter function to format the time value.
     * Receives the time prop and should return a string.
     * @default (time) => dayjs(time).format('h:mm:ss A')
     */
    formatter?: (time: dayjs.ConfigType) => string;
    /**
     * The placeholder label to display when no date range is selected.
     *
     * @default "Select date range"
     */
    placeholder?: string;
    /**
     * Default value for uncontrolled input
     */
    defaultValue?: DatesRangeValue<string>;
    /**
     * Value for controlled input
     */
    value?: DatesRangeValue<string>;
    /**
     * Sync the selected dates to URL query parameters
     */
    syncWithUrl?: boolean;
    /**
     * Error message to display.
     */
    error?: string;
}

export type DateRangePickerFactory = Factory<{
    props: DateRangePickerProps;
    ref: HTMLDivElement;
    stylesNames: DateRangePickerStylesNames;
}>;

const defaultProps: Partial<DateRangePickerProps> = {
    placeholder: 'Select date range',
    formatter: (time) => dayjs(time).format('MMM D, YYYY'),
};

export const DateRangePicker = factory<DateRangePickerFactory>((props: DateRangePickerProps) => {
    const {
        defaultValue,
        value,
        opened,
        defaultOpened,
        onOpenedChange,
        onClick,
        onChange,
        presets,
        startProps,
        endProps,
        rangeCalendarProps,
        formatter,
        placeholder,
        syncWithUrl,
        error,
        className,
        classNames,
        style,
        styles,
        vars,
        unstyled,
        ...others
    } = useProps('PlasmaDateRangePicker', defaultProps as Partial<DateRangePickerProps>, props);

    const getStyles = useStyles<DateRangePickerFactory>({
        name: 'DateRangePicker',
        classes: {},
        props,
        className,
        classNames,
        style,
        styles,
        unstyled,
        vars,
    });
    const stylesApiProps = {classNames, styles};

    const [_opened, setOpened] = useUncontrolled({
        value: opened,
        defaultValue: defaultOpened,
        finalValue: false,
        onChange: onOpenedChange,
    });

    const [dateRange, setDateRange] = useUrlSyncedState<DatesRangeValue<string>>({
        ...DATE_RANGE_SERIALIZATION,
        initialState: defaultValue !== undefined ? defaultValue : [null, null],
        sync: !!syncWithUrl,
    });

    const handleApply = (dates: DatesRangeValue<string>) => {
        if (value === undefined) {
            setDateRange(dates);
        }
        onChange?.(dates);
        setOpened(false);
    };

    const _value = value ?? dateRange;
    const formattedRange = `${formatter(_value[0])} - ${formatter(_value[1])}`;
    const dateRangeInitialized = _value.every((date: DateStringValue) => typeof date === 'string' && date !== '');

    return (
        <Popover opened={_opened} onChange={setOpened}>
            <Popover.Target>
                <InputBase
                    component="button"
                    leftSection={<IconCalendar height={16} />}
                    onClick={() => setOpened(true)}
                    error={error}
                    {...getStyles('input', {className, style, ...stylesApiProps})}
                    {...others}
                >
                    {dateRangeInitialized ? formattedRange : placeholder}
                </InputBase>
            </Popover.Target>
            <Popover.Dropdown p={0}>
                <DateRangePickerInlineCalendar
                    initialRange={_value}
                    onApply={handleApply}
                    onCancel={() => {
                        setOpened(false);
                    }}
                    presets={presets}
                    rangeCalendarProps={rangeCalendarProps}
                    startProps={startProps}
                    endProps={endProps}
                />
            </Popover.Dropdown>
        </Popover>
    );
});
