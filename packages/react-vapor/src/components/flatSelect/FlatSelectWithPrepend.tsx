import classNames from 'classnames';
import {FunctionComponent} from 'react';
import * as React from 'react';
import {IFlatSelectOwnProps} from './FlatSelect';
import {FlatSelectConnected} from './FlatSelectConnected';

export interface IFlatSelectWithPrependProps extends IFlatSelectOwnProps {
    prepend?: React.ReactNode;
    prependClassName?: string;
}

export const FlatSelectWithPrepend: FunctionComponent<IFlatSelectWithPrependProps> = ({
    prepend,
    prependClassName = '',
    ...flatSelectProps
}) => (
    <div className={classNames('prepended-flat-select', prependClassName)}>
        <div className="flat-select-prepend">{prepend}</div>
        <FlatSelectConnected {...flatSelectProps} />
    </div>
);
