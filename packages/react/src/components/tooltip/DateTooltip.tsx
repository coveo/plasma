import moment from 'moment';
import {FunctionComponent} from 'react';
import * as _ from 'underscore';
import {Tooltip} from './Tooltip.js';

export interface DateTooltipsProps {
    date: moment.MomentInput;
    format?: ((date: moment.MomentInput) => string) | string;
    tooltipFormat?: string;
}

/**
 * @deprecated Use Mantine Tooltip instead: https://mantine.dev/core/tooltip/
 */
export const DateTooltip: FunctionComponent<DateTooltipsProps> = ({date, format, tooltipFormat}) => {
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
