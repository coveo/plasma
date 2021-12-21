import * as React from 'react';
import * as _ from 'underscore';
import {NavigationConnected} from '../../navigation/NavigationConnected';
import {ITableProps} from '../Table';
import {TableChildComponent} from '../TableConstants';
import {getTableChildComponentId} from '../TableUtils';

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
