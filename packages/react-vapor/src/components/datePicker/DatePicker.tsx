import classNames from 'classnames';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';

import {DateUtils} from '../../utils/DateUtils';
import {DateLimits} from './DatePickerActions';
import {DEFAULT_DATE_PICKER_COLOR} from './DatePickerConstants';
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
    color = DEFAULT_DATE_PICKER_COLOR,
    date,
    hasSetToNowButton,
    isSelecting,
    minimalRangeLimit,
    onBlur,
    onClick,
    placeholder,
    setToNowTooltip,
    upperLimit,
    withTime,
}) => {
    const dateRef = useRef<string>();

    const [isSelected, setIsSelected] = useState<boolean>(false);

    const getStringFromDate = (d: Date): string =>
        withTime ? DateUtils.getDateWithTimeString(d) : DateUtils.getSimpleDate(d);

    const setToToday = () => {
        const d = new Date();
        dateRef.current = minimalRangeLimit
            ? getStringFromDate(updateDateBasedOnMinimalLimit(d))
            : getStringFromDate(d);
        handleChangeDate();
    };

    const updateDateBasedOnMinimalLimit = (d: Date) => {
        const minimalLimitInMinutes: number = DateUtils.convertRangeToMinutes(minimalRangeLimit);
        const diff = moment().diff(moment(d), 'minutes');
        if (Math.abs(diff) < minimalLimitInMinutes) {
            return moment(d).add(minimalLimitInMinutes, 'minutes').toDate();
        }

        return date;
    };

    const handleChangeDate = () => {
        if (dateRef.current !== '') {
            const d: Date = withTime
                ? DateUtils.getDateFromTimeString(dateRef.current)
                : DateUtils.getDateFromSimpleDateString(dateRef.current);

            if (d.getDate()) {
                onBlur(d, upperLimit);
            }
        }
    };

    const handleClick = () => {
        onClick(upperLimit);
    };

    useEffect(() => {
        if (date) {
            const dateValue: string = getStringFromDate(date);

            if (dateRef.current !== dateValue) {
                dateRef.current = dateValue;
            }
        } else {
            dateRef.current = '';
        }
        const selected =
            (isSelecting === DateLimits.upper && upperLimit) || (isSelecting === DateLimits.lower && !upperLimit);

        setIsSelected(selected);
    }, [date]);

    const nowButton: JSX.Element = hasSetToNowButton ? (
        <SetToNowButton onClick={setToToday} tooltip={setToNowTooltip} />
    ) : null;

    const inputClasses = classNames({
        'picking-date': isSelected,
        'date-picked': !isSelected && !!date,
    });
    return (
        <div className="date-picker flex">
            <input
                className={inputClasses}
                ref={(d: HTMLInputElement) => (dateRef.current = d?.value)}
                onBlur={handleChangeDate}
                onFocus={handleClick}
                placeholder={placeholder}
                required
            />
            {nowButton}
        </div>
    );
};
