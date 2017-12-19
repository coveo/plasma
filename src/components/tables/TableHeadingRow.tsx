import * as classNames from 'classnames';
import { TableCollapsibleRowToggle } from './TableCollapsibleRowToggle';
import * as React from 'react';

export interface ITableHeadingRowOwnProps extends React.ClassAttributes<TableHeadingRow> {
  id?: string;
  tableId?: string;
  isCollapsible: boolean;
  onClickCallback?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}

export interface ITableHeadingRowStateProps {
  opened?: boolean;
  selected?: boolean;
}

export interface ITableHeadingRowDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onClick?: () => void;
}

export interface ITableHeadingRowProps extends ITableHeadingRowOwnProps, ITableHeadingRowStateProps,
  ITableHeadingRowDispatchProps { }

export class TableHeadingRow extends React.Component<ITableHeadingRowProps, any> {

  private handleClick (e: React.MouseEvent<HTMLTableRowElement>) {
    if (this.props.onClick) {
      this.props.onClick();
    }

    if (this.props.onClickCallback) {
      this.props.onClickCallback(e);
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
    const toggle: JSX.Element = this.props.isCollapsible
      ? <TableCollapsibleRowToggle isExpanded={this.props.opened} />
      : <td></td>;
    const rowClasses = classNames({
      'heading-row': this.props.isCollapsible,
      'selected': this.props.selected,
      'opened': this.props.opened,
    });

    return (
      <tr className={rowClasses} onClick={(e: React.MouseEvent<HTMLTableRowElement>) => this.handleClick(e)}>
        {this.props.children}
        {toggle}
      </tr>
    );
  }
}
