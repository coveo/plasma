import moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from './Tooltip';

export interface DateTooltipsProps {
    date: moment.MomentInput;
    format?: ((date: moment.MomentInput) => string) | string;
    tooltipFormat?: string;
}

export const DateTooltip: React.FunctionComponent<DateTooltipsProps> = ({date, format, tooltipFormat}) => {
    let content: string;
    const title = moment(date).format(tooltipFormat ?? 'LLL');
    const momentDate = moment.isMoment(date) ? date : moment(date);
    if (format) {
        content = _.isFunction(format) ? format(momentDate) : momentDate.format(format);
    } else {
        content = momentDate.format();
    }
    return <Tooltip title={title}>{content}</Tooltip>;
};
