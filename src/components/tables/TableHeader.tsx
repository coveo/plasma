import { ITableHeaderCellProps, TableHeaderCell } from './TableHeaderCell';
import { TableHeaderCellConnected } from './TableHeaderCellConnected';
import * as React from 'react';
import * as _ from 'underscore';

export interface ITableHeaderProps extends React.ClassAttributes<TableHeader> {
  columns: ITableHeaderCellProps[];
  headerClass?: string;
  connectCell?: true;
}

export class TableHeader extends React.Component<ITableHeaderProps, any> {
  render() {
    const columns: JSX.Element[] = _.map(this.props.columns, (column: ITableHeaderCellProps, index: number): JSX.Element => {
      const TableHeaderCellClass = this.props.connectCell && column.tableRefForSort
        ? TableHeaderCellConnected
        : TableHeaderCell;

      return (
        <TableHeaderCellClass
          key={`th-${column.id || index}`}
          id={column.id}
          title={column.title}
          className={column.className}
          tableRefForSort={column.tableRefForSort}
          onClickCallback={column.onClickCallback}
        />
      );
    });

    return (
      <thead className={this.props.headerClass}>
        <tr>{columns}</tr>
      </thead>
    );
  }
}
