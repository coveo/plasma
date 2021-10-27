import classNames from 'classnames';
import {Moment} from 'moment';
import React, {FunctionComponent, useEffect} from 'react';

export interface IDay {
    // eslint-disable-next-line id-blacklist
    number: number;
    isCurrentMonth: boolean;
    isToday: boolean;
    date: Moment;
    isSelected?: boolean;
    isLowerLimit?: boolean;
    isUpperLimit?: boolean;
    color?: string;
    isSelectable?: boolean;
    isCountdown?: boolean;
}

export interface ICalendarDayProps {
    day: IDay;
    onClick: (value: Date) => void;
    onSelectUnselectable: () => void;
}

export const CalendarDay: FunctionComponent<ICalendarDayProps> = ({day, onClick, onSelectUnselectable}) => {
    const DEFAULT_DATE_CLASS: string = 'calendar-day';

    const handleClick = () => {
        if (day.isSelectable) {
            onClick(day.date.toDate());
        }
    };

    useEffect(() => {
        if (!day.isSelectable && day.isSelected && (day.isLowerLimit || day.isUpperLimit)) {
            onSelectUnselectable();
        }
    }, [day]);

    const isSelectableAndSelected = day.isSelected && day.isSelectable;

    const dayClassNames: string = classNames({
        'other-month-date': !day.isCurrentMonth,
        'todays-date': day.isToday,
        countdown: day.isCountdown,
        'selected-date': isSelectableAndSelected,
        'lower-limit': isSelectableAndSelected && day.isLowerLimit,
        'upper-limit': isSelectableAndSelected && day.isUpperLimit,
    });

    const dayCellClassNames: string = classNames(DEFAULT_DATE_CLASS, {
        'un-selectable': !day.isSelectable,
    });

    const bothLimitsElement: JSX.Element = day.isLowerLimit && day.isUpperLimit ? <span /> : null;

    const isCountdownAndToday = day.isCountdown && day.isToday;

    return (
        <td className={dayCellClassNames} onClick={() => handleClick()}>
            <span className={dayClassNames}>
                {(isCountdownAndToday || !day.isCountdown) && day.number}
                {bothLimitsElement}
            </span>
        </td>
    );
};
