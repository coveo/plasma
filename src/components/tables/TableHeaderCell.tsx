import { TableSortingOrder } from './TableConstants';
import { Svg } from '../svg/Svg';
import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

export interface ITableHeaderCellOwnProps extends React.ClassAttributes<TableHeaderCell> {
  title: string;
  id?: string;
  tableRefForSort?: {
    tableId: string;
    attributeToSort?: string;
  };
  className?: string;
  onClickCallback?: (e: React.MouseEvent<any>) => void;
}

export interface ITableHeaderStateProps {
  sorted?: TableSortingOrder;
}

export interface ITableHeaderCellDispatchProps {
  onMount?: (id: string, tableId: string, attributeToSort: string) => void;
  onSort?: (id: string, tableId: string, attributeToSort: string) => void;
  onUnmount?: (id: string) => void;
}

export interface ITableHeaderCellProps extends
  ITableHeaderCellOwnProps,
  ITableHeaderStateProps,
  ITableHeaderCellDispatchProps { }

export class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {
  componentDidMount() {
    if (this.props.onMount) {
      this.props.onMount(this.props.id, this.props.tableRefForSort.tableId, this.props.tableRefForSort.attributeToSort);
    }
  }

  componentWillUnmount() {
    if (this.props.onMount) {
      this.props.onUnmount(this.props.id);
    }
  }

  handleClick(e: React.MouseEvent<any>) {
    if (this.props.onSort && this.props.tableRefForSort.tableId && this.props.tableRefForSort.attributeToSort) {
      this.props.onSort(this.props.id, this.props.tableRefForSort.tableId, this.props.tableRefForSort.attributeToSort);
    }

    if (this.props.onClickCallback) {
      this.props.onClickCallback(e);
    }
  }

  render() {
    const tableCellHasSort = !_.isUndefined(this.props.sorted) && !!this.props.tableRefForSort;
    const sortIcon: JSX.Element = tableCellHasSort
      ? <div className='admin-sort-icon'><Svg svgName='asc-desc' className='tables-sort icon' /></div>
      : null;

    const headerCellClasses = classNames(this.props.className, {
      'admin-sort': tableCellHasSort,
      'admin-sort-ascending': this.props.sorted === TableSortingOrder.ASCENDING,
      'admin-sort-descending': this.props.sorted === TableSortingOrder.DESCENDING,
    });

    return (
      <th
        className={headerCellClasses}
        onClick={(e: React.MouseEvent<any>) => this.handleClick(e)}>
        {this.props.title}
        {sortIcon}
      </th>
    );
  }
}
