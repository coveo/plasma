import classNames from 'classnames';
import moment from 'moment';
import React, {useEffect, useState} from 'react';

import {DateUtils} from '../../utils/DateUtils';
import {DateLimits} from './DatePickerActions';
import {IRangeLimit} from './DatesSelection';
import {SetToNowButton} from './SetToNowButton';

export interface IDatePickerProps {
    onBlur: (date: Date, isUpperLimit: boolean) => void;
    onClick: (isUpperLimit: boolean) => void;
    placeholder: string;
    withTime?: boolean;
    hasSetToNowButton?: boolean;
    upperLimit?: boolean;
    minimalRangeLimit?: IRangeLimit;
    date?: Date;
    setToNowTooltip?: string;
    isSelecting?: string;
    color?: string;
}

export const DatePicker: React.FunctionComponent<IDatePickerProps> = ({
    hasSetToNowButton,
    isSelecting,
    minimalRangeLimit,
    onBlur,
    onClick,
    placeholder,
    setToNowTooltip,
    upperLimit,
    withTime,
    ...props
}) => {
    const getStringFromDate = (d: Date): string =>
        withTime ? DateUtils.getDateWithTimeString(d) : DateUtils.getSimpleDate(d);

    const [date, setDate] = useState(getStringFromDate(props.date));
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const setToToday = () => {
        const d = new Date();
        const newDateState = minimalRangeLimit
            ? getStringFromDate(updateDateBasedOnMinimalLimit(d))
            : getStringFromDate(d);
        setDate(newDateState);
        handleChangeDate();
    };

    const updateDateBasedOnMinimalLimit = (d: Date) => {
        const minimalLimitInMinutes: number = DateUtils.convertRangeToMinutes(minimalRangeLimit);
        const diff = moment().diff(moment(d), 'minutes');
        if (Math.abs(diff) < minimalLimitInMinutes) {
            return moment(d).add(minimalLimitInMinutes, 'minutes').toDate();
        }

        return props.date;
    };

    const handleChangeDate = (e?: React.FocusEvent<HTMLInputElement>) => {
        if (date !== '') {
            const d: Date = withTime
                ? DateUtils.getDateFromTimeString(date)
                : DateUtils.getDateFromSimpleDateString(date);

            if (d.getDate()) {
                onBlur(d, upperLimit);
            }
        }
    };

    const handleClick = () => {
        onClick(upperLimit);
    };

    useEffect(() => {
        if (props.date) {
            const dateValue: string = getStringFromDate(props.date);

            setDate(dateValue);
        } else {
            setDate('');
        }
        const selected =
            (isSelecting === DateLimits.upper && upperLimit) || (isSelecting === DateLimits.lower && !upperLimit);

        setIsSelected(selected);
    }, [props.date]);

    const nowButton: JSX.Element = hasSetToNowButton ? (
        <SetToNowButton onClick={setToToday} tooltip={setToNowTooltip} />
    ) : null;

    const inputClasses = classNames({
        'picking-date': isSelected,
        'date-picked': !isSelected && !!props.date,
    });

    return (
        <div className="date-picker flex">
            <input
                className={inputClasses}
                onBlur={handleChangeDate}
                onFocus={handleClick}
                placeholder={placeholder}
                value={date}
                required
            />
            {nowButton}
        </div>
    );
};
