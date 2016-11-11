import * as React from 'react';

export interface INavigationPerPageSelectOwnProps extends React.ClassAttributes<NavigationPerPageSelect> {
  perPageNumber: number;
  id?: string;
  loadingIds?: string[];
}

export interface INavigationPerPageSelectStateProps {
  selected?: boolean;
}

export interface INavigationPerPageSelectDispatchProps {
  onPerPageClick?: () => void;
}

export interface INavigationPerPageSelectProps extends INavigationPerPageSelectOwnProps,
  INavigationPerPageSelectStateProps, INavigationPerPageSelectDispatchProps { }

export class NavigationPerPageSelect extends React.Component<INavigationPerPageSelectProps, any> {

  handleClick = () => {
    if (this.props.onPerPageClick) {
      this.props.onPerPageClick();
    }
  };

  render() {
    let selectClasses = 'flat-select-option' + (this.props.selected ? '' : ' selectable');
    let spanClasses = 'enabled' + (this.props.selected ? ' selected-value state-selected' : '');

    return (
      <a className={selectClasses} onClick={() => this.handleClick()}>
        <span className={spanClasses}>{this.props.perPageNumber}</span>
      </a>
    );
  }
}
