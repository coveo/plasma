import * as moment from 'moment';
import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from './Tooltip';

interface TimeTooltipsProps {
    time: number;
    formating?: string;
}

export const TimeTooltip: React.FunctionComponent<TimeTooltipsProps> = (props) => {
    let isoDate;
    props.formating
        ? (isoDate = moment(props.time).format(props.formating))
        : (isoDate = moment(props.time).toISOString());
    return <Tooltip title={isoDate}>{props.children}</Tooltip>;
};
