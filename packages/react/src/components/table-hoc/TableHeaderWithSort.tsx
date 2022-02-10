import {SvgName} from '@coveord/plasma-style';
import classNames from 'classnames';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {Svg} from '../svg';
import {TableHeaderActions} from './actions/TableHeaderActions';
import {ITableWithSortState} from './reducers/TableWithSortReducers';
import {useFixedWidthWhileLoading} from './utils/TableHooks';

export interface ITableHeaderWithSortOwnProps {
    id: string;
    tableId: string;
    isLoading?: boolean;
    isDefault?: boolean;
}

export interface HOCTableHeaderStateProps {
    sorted: boolean;
}

export interface ITableHeaderWithSortProps extends ITableHeaderWithSortOwnProps, Partial<HOCTableHeaderStateProps> {}

export const TableHeaderWithSort: React.FunctionComponent<
    ITableHeaderWithSortProps & React.HTMLAttributes<HTMLTableHeaderCellElement>
> = ({className, isLoading, id, tableId, isDefault, children}) => {
    const dispatch = useDispatch();
    const sorted = useSelector((state: PlasmaState) => {
        const tableSort: ITableWithSortState = _.findWhere(state.tableHOCHeader, {id});
        return tableSort && tableSort.isAsc;
    });

    const onMount = () => dispatch(TableHeaderActions.addTableHeader(id, tableId, isDefault));
    const onSort = () => dispatch(TableHeaderActions.sortTable(id));
    const onUnmount = () => dispatch(TableHeaderActions.removeTableHeader(id));

    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    React.useEffect(() => {
        onMount();

        return () => void onUnmount();
    }, []);

    const headerCellClasses = classNames(className, 'admin-sort', {
        'admin-sort-ascending': sorted === true,
        'admin-sort-descending': sorted === false,
    });

    const getSvg = classNames({
        sortedAsc: sorted === true,
        sortedDesc: sorted === false,
        ascDesc: sorted === undefined,
    }) as SvgName;

    if (isLoading) {
        return (
            <th id={id} ref={tableHeaderRef} style={style}>
                {children}
            </th>
        );
    }

    return (
        <th id={id} className={headerCellClasses} onClick={onSort} ref={tableHeaderRef} style={style}>
            {children}
            <div className="admin-sort-icon">
                <Svg svgName={getSvg} className="tables-sort icon" />
            </div>
        </th>
    );
};
