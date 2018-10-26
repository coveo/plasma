import * as React from 'react';
import {LastUpdatedConnected} from '../../lastUpdated/LastUpdatedConnected';
import {ITableProps} from '../Table';
import {TableChildComponent} from '../TableConstants';
import {getTableChildComponentId} from '../TableUtils';

export const TableChildLastUpdated = (props: ITableProps & {pullLeft: boolean}): JSX.Element =>
    <LastUpdatedConnected
        className={props.pullLeft && 'left'}
        label={props.lastUpdatedLabel}
        id={getTableChildComponentId(props.id, TableChildComponent.LAST_UPDATED)}
    />;
