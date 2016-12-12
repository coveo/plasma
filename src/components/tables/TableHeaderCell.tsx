import * as React from 'react';

export interface ITableHeaderCellOwnProps extends React.ClassAttributes<TableHeaderCell> {
  title: string;
  className?: string;
}

export interface ITableHeaderStateProps {
  cellContent?: JSX.Element;
}

export interface ITableHeaderDispatchProps {
  onClick?: () => void;
}

export interface ITableHeaderCellProps extends ITableHeaderCellOwnProps, ITableHeaderStateProps, ITableHeaderDispatchProps { }

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
