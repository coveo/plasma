import classNames from 'classnames';
import {ReactNode, FunctionComponent} from 'react';

import {FlatSelectConnected, IFlatSelectOwnProps} from './FlatSelect.js';

export interface IFlatSelectWithPrependProps extends IFlatSelectOwnProps {
    prepend?: ReactNode;
    prependClassName?: string;
}

/**
 * @deprecated use Mantine SegmentedControl instead: https://mantine.dev/core/segmented-control/
 */
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
