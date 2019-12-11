import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from './Tooltip';

export interface DateTooltipsProps {
    date: moment.Moment | string;
    format?: ((date: moment.Moment) => string) | string;
    tooltipFormat?: string;
}

export const DateTooltip: React.FunctionComponent<DateTooltipsProps> = (props) => {
    let content: moment.Moment | string;
    const title = props.tooltipFormat ? moment(props.date).format(props.tooltipFormat) : moment(props.date).format();
    if (_.isString(props.date)) {
        content = props.date;
        if (_.isString(props.format)) {
            content = moment(props.date).format(props.format);
        }
    } else if (moment.isMoment(props.date)) {
        if (_.isFunction(props.format)) {
            content = props.format(props.date);
        } else if (_.isString(props.format)) {
            content = props.date.format(props.format);
        } else {
            content = props.date.format();
        }
    }
    return <Tooltip title={title}>{content}</Tooltip>;
};
