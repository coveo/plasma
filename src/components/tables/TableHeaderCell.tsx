import * as React from 'react';

export interface ITableHeaderCellProps extends React.ClassAttributes<TableHeaderCell> {
  title: string;
  className?: string;
  cellContent?: JSX.Element;
  onClick?: () => void;
}

export class TableHeaderCell extends React.Component<ITableHeaderCellProps, any> {

  private handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    return (
      <th className={this.props.className || ''} onClick={() => this.handleClick()}>
        {this.props.title}
        {this.props.cellContent}
      </th>
    );
  }
}
