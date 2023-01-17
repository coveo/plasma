import {ClassAttributes, Component} from 'react';

import {DATES_SEPARATOR, DateUtils} from '../../utils/DateUtils.js';
import {DatePicker, IDatePickerProps} from './DatePicker.js';
import {DatePickerDateRange} from './DatePickerConstants.js';

export interface IRangeLimit {
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    message?: string;
}

export interface IDatesSelectionOwnProps
    extends Pick<
            IDatePickerProps,
            'selectionRules' | 'withTime' | 'hasSetToNowButton' | 'setToNowTooltip' | 'isSelecting' | 'color'
        >,
        ClassAttributes<DatesSelection> {
    id?: string;
    isRange?: boolean;
    /**
     * Whether the datepicker can be set to empty
     *
     * @default false
     */
    isClearable?: boolean;
    rangeLimit?: IRangeLimit;
    minimalRangeLimit?: IRangeLimit;
    calendarId?: string;
    defaultLowerLimit?: Date;
    defaultUpperLimit?: Date;
    /**
     * The text displayed in the start date text input when no start date is selected
     *
     * @default "Select a start date"
     */
    lowerLimitPlaceholder?: string;
    /**
     * The text displayed in the end date text input when no end date is selected
     *
     * @default "Select an end date"
     */
    upperLimitPlaceholder?: string;
    /**
     * Whether the datepicker is intially empty
     *
     * @default false
     */
    initiallyUnselected?: boolean;
    /**
     * The dates initially selected. Eventhough no dates are set here by default, the current date will be selected by default
     *
     * @default []
     */
    initialDateRange?: DatePickerDateRange;
}

export interface IDatesSelectionStateProps {
    lowerLimit?: Date;
    upperLimit?: Date;
    inputLowerLimit?: Date;
    inputUpperLimit?: Date;
    quickOption?: string;
    isSelecting?: string;
}

export interface IDatesSelectionDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: (isUpperLimit: boolean) => void;
    onBlur?: (date: Date, isUpperLimit: boolean, datePicker?: boolean) => void;
}

export interface IDatesSelectionProps
    extends IDatesSelectionOwnProps,
        IDatesSelectionStateProps,
        IDatesSelectionDispatchProps {}

export const LOWER_LIMIT_PLACEHOLDER: string = 'Select a start date';
export const UPPER_LIMIT_PLACEHOLDER: string = 'Select an end date';

/**
 * @deprecated Use Mantine DatePicker instead
 */
export class DatesSelection extends Component<IDatesSelectionProps, any> {
    static defaultProps: Partial<IDatesSelectionProps> = {
        lowerLimitPlaceholder: LOWER_LIMIT_PLACEHOLDER,
        upperLimitPlaceholder: UPPER_LIMIT_PLACEHOLDER,
        quickOption: '',
        isSelecting: '',
    };

    private onDateChange(date: Date, isUpperLimit: boolean, datePicker?: boolean) {
        if (this.props.onBlur) {
            this.props.onBlur(date, isUpperLimit, datePicker);
        }
    }

    private onDateClick(isUpperLimit: boolean) {
        if (this.props.onClick) {
            this.props.onClick(isUpperLimit);
        }
    }

    componentDidMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    componentDidUpdate(prevProps: IDatesSelectionProps) {
        if (this.props.quickOption && this.props.quickOption !== prevProps.quickOption) {
            const dates: string[] = this.props.quickOption.split(DATES_SEPARATOR);

            this.onDateChange(new Date(dates[0]), false, true);

            if (dates.length > 1) {
                this.onDateChange(new Date(dates[1]), true, true);
            }
        }
    }

    private handleOnBlur(date: Date, isUpperLimit: boolean = false) {
        const formattedLowerLimit: string = DateUtils.getDateWithTimeString(this.props.inputLowerLimit);
        const formattedUpperLimit: string = DateUtils.getDateWithTimeString(this.props.inputUpperLimit);
        const formattedInputDate: string = DateUtils.getDateWithTimeString(date);

        if (
            (!isUpperLimit && formattedLowerLimit !== formattedInputDate) ||
            (isUpperLimit && formattedUpperLimit !== formattedInputDate)
        ) {
            this.onDateChange(date, isUpperLimit);
        }
    }

    render() {
        const isSmallSplit = this.props.isRange && !this.props.hasSetToNowButton;
        const isLarge = this.props.withTime || (this.props.isRange && this.props.hasSetToNowButton);
        const wrapperClasses: string = !isSmallSplit || isLarge ? '' : 'mod-inline flex';
        const datePickerProps: IDatePickerProps = {
            selectionRules: this.props.selectionRules,
            withTime: this.props.withTime,
            hasSetToNowButton: this.props.hasSetToNowButton,
            setToNowTooltip: this.props.setToNowTooltip,
            isSelecting: this.props.isSelecting,
            onClick: (isUpperLimit: boolean) => this.onDateClick(isUpperLimit),
            onBlur: (date: Date, isUpperLimit: boolean) => this.handleOnBlur(date, isUpperLimit),
            placeholder: '',
        };
        const endDatePickerProps = {...datePickerProps, minimalRangeLimit: this.props.minimalRangeLimit};
        const separatorClasses: string[] = ['date-separator'];
        if (isLarge) {
            separatorClasses.push('mod-vertical');
        }
        const separator: JSX.Element = this.props.isRange ? (
            <span className={separatorClasses.join(' ')}>
                <span>-</span>
            </span>
        ) : null;
        const toDate: JSX.Element = this.props.isRange ? (
            <DatePicker
                upperLimit
                date={this.props.upperLimit}
                {...endDatePickerProps}
                placeholder={this.props.upperLimitPlaceholder}
            />
        ) : null;

        return (
            <div className={wrapperClasses}>
                <DatePicker
                    date={this.props.lowerLimit}
                    {...datePickerProps}
                    placeholder={this.props.lowerLimitPlaceholder}
                />
                {separator}
                {toDate}
            </div>
        );
    }
}
