import {
    PropsWithChildren,
    ArrowDownSize16Px,
    ArrowUpSize16Px,
    DoubleArrowHeadVSize16Px,
} from '@coveord/plasma-react-icons';
import {PropsWithChildren, FunctionComponent, HTMLAttributes, useEffect} from 'react';
import {PropsWithChildren, useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {PropsWithChildren, PlasmaState} from '../../PlasmaState';
import {PropsWithChildren, TableHeaderActions} from './actions/TableHeaderActions';
import {PropsWithChildren, ITableWithSortState} from './reducers/TableWithSortReducers';
import {PropsWithChildren, useFixedWidthWhileLoading} from './utils/TableHooks';

export interface ITableHeaderWithSortOwnProps {
    id: string;
    tableId: string;
    isLoading?: boolean;
    isDefault?: boolean;
}

type Order = 'ascending' | 'descending' | 'unsorted';

export interface ITableHeaderWithSortProps extends ITableHeaderWithSortOwnProps {}

/**
 * @deprecated Use Mantine instead
 */
export const TableHeaderWithSort: FunctionComponent<
    PropsWithChildren<ITableHeaderWithSortProps & HTMLAttributes<HTMLTableHeaderCellElement>>
> = ({isLoading, id, tableId, isDefault, children}) => {
    const dispatch = useDispatch();
    const order = useSelector((state: PlasmaState): Order => {
        const tableSort: ITableWithSortState = _.findWhere(state.tableHOCHeader, {id});
        if (tableSort?.isAsc === true) {
            return 'ascending';
        } else if (tableSort?.isAsc === false) {
            return 'descending';
        } else {
            return 'unsorted';
        }
    });

    const onMount = () => dispatch(TableHeaderActions.addTableHeader(id, tableId, isDefault));
    const onSort = () => dispatch(TableHeaderActions.sortTable(id));
    const onUnmount = () => dispatch(TableHeaderActions.removeTableHeader(id));

    const {style, tableHeaderRef} = useFixedWidthWhileLoading(isLoading);

    useEffect(() => {
        onMount();

        return () => void onUnmount();
    }, []);

    let IconComponent = DoubleArrowHeadVSize16Px;

    if (order === 'ascending') {
        IconComponent = ArrowUpSize16Px;
    }

    if (order === 'descending') {
        IconComponent = ArrowDownSize16Px;
    }

    if (isLoading) {
        return (
            <th id={id} ref={tableHeaderRef} style={style}>
                {children}
            </th>
        );
    }

    return (
        <th id={id} className="admin-sort" onClick={onSort} ref={tableHeaderRef} style={style}>
            <div className="inline-flex flex-center">
                {children}
                <IconComponent className="ml1" />
            </div>
        </th>
    );
};
