import * as React from 'react';

export interface ITableHeaderCellProps extends React.ClassAttributes<TableHeaderCell> {
  title: string;
  className?: string;
}

export class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {

  render() {
    return (
      <th className={this.props.className || ''}>{this.props.title}</th>
    );
  }
}
