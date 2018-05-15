import * as moment from 'moment';
import {DATES_SEPARATOR} from '../../../utils/DateUtils';
import {CalendarSelectionRuleType, ICalendarSelectionRule} from '../../calendar/Calendar';
import {DatePickerColors} from '../DatePicker';
import {IDatesSelectionBox} from '../DatePickerBox';

export const SELECTION_BOXES: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: [
            {
                label: 'Last 10 seconds',
                value: () => moment().subtract(10, 'seconds').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last minute',
                value: () => moment().subtract(1, 'minute').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last 5 minutes',
                value: () => moment().subtract(5, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last 30 minutes',
                value: () => moment().subtract(30, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last hour',
                value: () => moment().subtract(1, 'hour').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last day',
                value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
        ],
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

const defaultQuickOptions = [
    {
        label: 'Last day',
        value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
    },
    {
        label: 'Last week',
        value: () => moment().subtract(1, 'week').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
    },
    {
        label: 'Last month',
        value: () => moment().subtract(1, 'month').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
    },
    {
        label: 'Last year',
        value: () => moment().subtract(1, 'year').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
    },
];

export const SELECTION_BOXES_LONG: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: defaultQuickOptions,
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

export const SELECTION_BOXES_LONG_WITHOUT_TIME: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: defaultQuickOptions,
        isRange: true,
        withTime: false,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

export const SELECTION_BOXES_WITHOUT_TIME_AND_NOW: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: defaultQuickOptions,
        isRange: true,
        withTime: false,
        hasSetToNowButton: false,
        color: DatePickerColors.blue,
    },
];

export const FOUR_SELECTION_BOXES: IDatesSelectionBox[] = [
    {
        title: 'Date range',
        quickOptions: [
            {
                label: 'Last 5 minutes',
                value: () => moment().subtract(5, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last 30 minutes',
                value: () => moment().subtract(30, 'minutes').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last hour',
                value: () => moment().subtract(1, 'hour').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
            {
                label: 'Last day',
                value: () => moment().subtract(1, 'day').toDate().toString() + DATES_SEPARATOR + new Date().toString(),
            },
        ],
        isRange: true,
        withTime: true,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

export const CALENDAR_SELECTION_RULES: ICalendarSelectionRule[] = [
    {
        test: (date: Date) => date >= moment().startOf('day').toDate(), // You cannot select a date in the past
        isFor: CalendarSelectionRuleType.all,
    },
    {
        test: (date: Date) => date.getDay() !== 6, // You cannot start your selection on a Saturday
        isFor: CalendarSelectionRuleType.lower,
    },
    {
        test: (date: Date) => date.getDay() !== 0, // You cannot end your selection on a Sunday
        isFor: CalendarSelectionRuleType.upper,
    },
    {
        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') >= 0, // The end of your selection cannot be before the start of your selection
        isFor: CalendarSelectionRuleType.range,
    },
    {
        test: (date: Date, endDate: Date) => moment(endDate).diff(moment(date), 'day') <= 7, // You cannot select more than 7 days at a time
        isFor: CalendarSelectionRuleType.range,
    },
];

export const SELECTION_BOX: IDatesSelectionBox[] = [
    {
        title: 'Select date',
        quickOptions: [
            {
                label: 'A year ago',
                value: () => moment().subtract(1, 'year').toDate().toString(),
            },
            {
                label: 'A month ago',
                value: () => moment().subtract(1, 'month').toDate().toString(),
            },
            {
                label: 'A week ago',
                value: () => moment().subtract(1, 'week').toDate().toString(),
            },
            {
                label: 'Yesterday',
                value: () => moment().subtract(1, 'day').toDate().toString(),
            },
        ],
        isRange: false,
        withTime: false,
        hasSetToNowButton: true,
        color: DatePickerColors.blue,
    },
];

export const CALENDAR_SELECTION_RULES_SINGLE_DATE: ICalendarSelectionRule[] = [
    {
        test: (date: Date) => date.getFullYear() > 1700 || date.getFullYear() < 4000, // You cannot select a date before year 1700 and over 4000
        isFor: CalendarSelectionRuleType.all,
    },
];
