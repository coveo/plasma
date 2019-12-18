import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from './Tooltip';

export type DateTooltips = moment.Moment | string;

export interface DateTooltipsProps {
    date: DateTooltips;
    format?: ((date: moment.Moment) => string) | string;
    tooltipFormat?: string;
}

export const DateTooltip: React.FunctionComponent<DateTooltipsProps> = ({date, format, tooltipFormat}) => {
    let content: string;
    const title = tooltipFormat ? moment(date).format(tooltipFormat) : moment(date).format('LLL');
    const momentDate = _.isString(date) ? moment(date) : date;
    if (format) {
        content = _.isFunction(format) ? format(momentDate) : momentDate.format(format);
    } else {
        content = momentDate.format();
    }
    return <Tooltip title={title}>{content}</Tooltip>;
};
