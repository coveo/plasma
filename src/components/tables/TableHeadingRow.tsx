import { TableCollapsibleRowToggle } from './TableCollapsibleRowToggle';
import * as React from 'react';

export interface ITableHeadingRowOwnProps extends React.ClassAttributes<TableHeadingRow> {
  id?: string;
  isCollapsible: boolean;
}

export interface ITableHeadingRowStateProps {
  opened?: boolean;
}

export interface ITableHeadingRowDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onClick?: () => void;
}

export interface ITableHeadingRowProps extends ITableHeadingRowOwnProps, ITableHeadingRowStateProps,
  ITableHeadingRowDispatchProps { }

export class TableHeadingRow extends React.Component<ITableHeadingRowProps, any> {

  private handleClick = () => {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {

    let toggle: JSX.Element = this.props.isCollapsible ? <TableCollapsibleRowToggle isExpanded={this.props.opened} /> : <td></td>;
    let rowClasses: string = this.props.isCollapsible ? 'heading-row ' : '';
    rowClasses += this.props.opened ? 'opened selected' : '';

    return (
      <tr className={rowClasses} onClick={() => this.handleClick()}>
        {this.props.children}
        {toggle}
      </tr>
    );
  }
}
