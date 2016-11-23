import { ITableHeaderCellProps, TableHeaderCell } from './TableHeaderCell';
import * as React from 'react';
import * as _ from 'underscore';

export interface ITableHeaderProps extends React.ClassAttributes<TableHeader> {
  columns: ITableHeaderCellProps[];
  headerClass?: string;
}

export class TableHeader extends React.Component<ITableHeaderProps, any> {

  render() {
    let columns: JSX.Element[] = _.map(this.props.columns, (column: ITableHeaderCellProps, index: number): JSX.Element => {
      return <TableHeaderCell key={'th-' + index} title={column.title} className={column.className} />;
    });

    return (
      <thead className={this.props.headerClass}>
        <tr>{columns}</tr>
      </thead>
    );
  }
}
