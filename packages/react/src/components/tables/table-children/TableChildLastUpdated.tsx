import {LastUpdatedConnected} from '../../lastUpdated/LastUpdatedConnected.js';
import {ITableProps} from '../Table.js';
import {TableChildComponent} from '../TableConstants.js';
import {getTableChildComponentId} from '../TableUtils.js';

export interface TableChildLastUpdatedProps extends ITableProps {
    pullLeft?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableChildLastUpdated = (props: TableChildLastUpdatedProps): JSX.Element => (
    <LastUpdatedConnected
        className={props.pullLeft && 'left'}
        label={props.lastUpdatedLabel}
        id={getTableChildComponentId(props.id, TableChildComponent.LAST_UPDATED)}
    />
);
