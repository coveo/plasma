import { ITableHeaderCellProps, TableHeaderCell } from './TableHeaderCell';
import { TableHeaderCellConnected } from './TableHeaderCellConnected';
import * as React from 'react';
import * as _ from 'underscore';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';

export interface ITableHeaderProps extends React.ClassAttributes<TableHeader>, IReduxStatePossibleProps {
  columns: ITableHeaderCellProps[];
  headerClass?: string;
  connectCell?: true;
}

export class TableHeader extends React.Component<ITableHeaderProps, any> {
  render() {
    const columns: JSX.Element[] = _.map(this.props.columns, (column: ITableHeaderCellProps, index: number): JSX.Element => {
      const TableHeaderCellClass = this.props.connectCell && column.attributeToSort
        ? TableHeaderCellConnected
        : TableHeaderCell;

      return (
        <TableHeaderCellClass
          key={`th-${column.id || index}`}
          {...column}
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
