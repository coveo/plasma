import classNames from 'classnames';
import * as React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {TextLoadingPlaceholder} from '../loading/components/TextLoadingPlaceholder';
import {Svg} from '../svg/Svg';
import {TableHeaderActions} from './actions/TableHeaderActions';
import {ITableWithSortState} from './reducers/TableWithSortReducers';

export interface ITableHeaderWithSortOwnProps {
    id: string;
    tableId: string;
    isLoading?: boolean;
    isDefault?: boolean;
    fixWidth?: boolean;
}

export interface HOCTableHeaderStateProps {
    sorted: boolean;
}

export interface ITableHeaderWithSortDispatchProps {
    onMount: () => void;
    onSort: () => void;
    onUnmount: () => void;
}

export interface ITableHeaderWithSortProps
    extends ITableHeaderWithSortOwnProps,
        Partial<HOCTableHeaderStateProps>,
        Partial<ITableHeaderWithSortDispatchProps> {}

export const TableHeaderWithSort: React.FC<
    ITableHeaderWithSortProps & React.HTMLAttributes<HTMLTableHeaderCellElement>
> = ({className, isLoading, id, tableId, isDefault, fixWidth, children}) => {
    const dispatch = useDispatch();
    const {sorted} = useSelector((state: IReactVaporState) => {
        const tableSort: ITableWithSortState = _.findWhere(state.tableHOCHeader, {id});

        return {
            sorted: tableSort && tableSort.isAsc,
        };
    });

    const onMount = () => dispatch(TableHeaderActions.addTableHeader(id, tableId, isDefault));
    const onSort = () => dispatch(TableHeaderActions.sortTable(id));
    const onUnmount = () => dispatch(TableHeaderActions.removeTableHeader(id));

    const targetRef = React.useRef<HTMLTableHeaderCellElement>();
    const [dimensions, setDimensions] = React.useState({width: 0, height: 0});

    // set column width in localStorage if fixWidth prop is passed
    // could use a hook since section is repeated?
    React.useLayoutEffect(() => {
        if (fixWidth && targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight,
            });
        }
    }, []);

    React.useEffect(() => {
        if (fixWidth && dimensions.height && dimensions.width) {
            window.localStorage.setItem(`th-dimensions-${id}`, JSON.stringify(dimensions));
            targetRef.current.style.width = `${dimensions.width}px`;
        }
    }, [isLoading]);

    React.useEffect(() => {
        onMount();

        const local = window.localStorage.getItem(`th-dimensions-${id}`);

        if (local) {
            // sets the column width for the table
            targetRef.current.style.width = `${JSON.parse(local).width}px`;
        }

        return () => {
            onUnmount();
        };
    }, []);

    const headerCellClasses = classNames(className, 'admin-sort', {
        'admin-sort-ascending': sorted === true,
        'admin-sort-descending': sorted === false,
    });

    const getSvg = classNames({
        'sorted-asc': sorted === true,
        'sorted-desc': sorted === false,
        'asc-desc': sorted === undefined,
    });

    if (isLoading) {
        return (
            <th id={id} ref={targetRef}>
                <TextLoadingPlaceholder small />
            </th>
        );
    }

    return (
        <th id={id} className={headerCellClasses} onClick={() => onSort()} ref={targetRef}>
            {children}
            <div className="admin-sort-icon">
                <Svg svgName={getSvg} className="tables-sort icon" />
            </div>
        </th>
    );
};
