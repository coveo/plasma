import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';

import {IFlatSelectOwnProps} from './FlatSelect';

export interface IFlatSelectWithPrependProps extends IFlatSelectOwnProps {
    prepend?: ReactNode;
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
