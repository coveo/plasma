import * as _ from 'underscore';
import {NavigationConnected} from '../../navigation/NavigationConnected.js';
import {ITableProps} from '../Table.js';
import {TableChildComponent} from '../TableConstants.js';
import {getTableChildComponentId} from '../TableUtils.js';

/**
 * @deprecated Use Mantine instead
 */
export const TableChildNavigation = (props: ITableProps): JSX.Element => {
    const tableData = props.tableCompositeState.data || props.initialTableData;
    const navigationProps = _.isBoolean(props.navigation) ? {} : props.navigation;

    return !!navigationProps ? (
        <NavigationConnected
            {...navigationProps}
            totalEntries={tableData.totalEntries}
            totalPages={tableData.totalPages}
            id={getTableChildComponentId(props.id, TableChildComponent.NAVIGATION)}
            loadingIds={[getTableChildComponentId(props.id, TableChildComponent.LOADING_NAVIGATION)]}
        />
    ) : null;
};
