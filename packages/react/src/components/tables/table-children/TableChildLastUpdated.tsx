import {LastUpdatedConnected} from '../../lastUpdated/LastUpdatedConnected';
import {ITableProps} from '../Table';
import {TableChildComponent} from '../TableConstants';
import {getTableChildComponentId} from '../TableUtils';

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
