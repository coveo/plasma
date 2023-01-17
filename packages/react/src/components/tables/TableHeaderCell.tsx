import {DoubleArrowHeadVSize16Px} from '@coveord/plasma-react-icons';
import classNames from 'classnames';
import {ClassAttributes, Component, MouseEvent, ReactNode} from 'react';
import * as _ from 'underscore';

import {IClassName} from '../../utils/ClassNameUtils.js';
import {TableSortingOrder} from './TableConstants.js';

export interface ITableHeaderCellOwnProps extends ClassAttributes<TableHeaderCell> {
    title: ReactNode;
    id?: string;
    attributeToSort?: string;
    tableId?: string;
    className?: IClassName;
    withFixedHeader?: boolean;
    onClickCallback?: (e: MouseEvent<HTMLTableHeaderCellElement>) => void;
}

export interface ITableHeaderStateProps {
    sorted?: TableSortingOrder;
}

export interface ITableHeaderCellDispatchProps {
    onMount?: () => void;
    onSort?: () => void;
    onUnmount?: () => void;
}

export interface ITableHeaderCellProps
    extends ITableHeaderCellOwnProps,
        ITableHeaderStateProps,
        ITableHeaderCellDispatchProps {}

/**
 * @deprecated Use Mantine instead
 */
export class TableHeaderCell extends Component<ITableHeaderCellProps, any> {
    static defaultProps: Partial<ITableHeaderCellProps> = {
        sorted: TableSortingOrder.UNSORTED,
    };

    private handleClick(e: MouseEvent<HTMLTableHeaderCellElement>) {
        if (this.props.onSort && this.props.attributeToSort) {
            this.props.onSort();
        }

        if (this.props.onClickCallback) {
            this.props.onClickCallback(e);
        }
    }

    private setWithFixedHeaderWrapper(titleNode: ReactNode, sortIcon: ReactNode) {
        return (
            <div className="fixed-header-container">
                {titleNode}
                {sortIcon}
            </div>
        );
    }

    componentDidMount() {
        if (this.props.onMount && this.props.attributeToSort) {
            this.props.onMount();
        }
    }

    componentWillUnmount() {
        if (this.props.onUnmount) {
            this.props.onUnmount();
        }
    }

    render() {
        const tableCellHasSort = !_.isUndefined(this.props.sorted) && !!this.props.attributeToSort;
        const sortIcon: JSX.Element = tableCellHasSort ? (
            <div className="admin-sort-icon">
                <DoubleArrowHeadVSize16Px className="tables-sort" />
            </div>
        ) : null;

        const headerCellClasses = classNames(this.props.className, {
            'admin-sort': tableCellHasSort,
            'admin-sort-ascending': this.props.sorted === TableSortingOrder.ASCENDING,
            'admin-sort-descending': this.props.sorted === TableSortingOrder.DESCENDING,
        });

        return (
            <th
                className={headerCellClasses}
                onClick={(e: MouseEvent<HTMLTableHeaderCellElement>) => this.handleClick(e)}
            >
                {this.setWithFixedHeaderWrapper(this.props.title, sortIcon)}
            </th>
        );
    }
}
