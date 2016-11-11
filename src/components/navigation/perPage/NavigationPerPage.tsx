import * as React from 'react';
import { IReduxStatePossibleProps } from '../../../utils/ReduxUtils';
import { NavigationPerPageSelectConnected } from './NavigationPerPageSelectConnected';
import { NavigationPerPageSelect } from './NavigationPerPageSelect';
import * as _ from 'underscore';

export interface INavigationPerPageOwnProps extends React.ClassAttributes<NavigationPerPage> {
  id?: string;
  totalEntries: number;
  label?: string;
  perPageNumbers?: number[];
  loadingIds?: string[];
}

export interface INavigationPerPageChildrenProps {
  onPerPageClick?: () => void;
}

export interface INavigationPerPageStateProps extends IReduxStatePossibleProps { }

export interface INavigationPerPageDispatchProps {
  onRender?: (perPageNb: number) => void;
  onDestroy?: () => void;
}

export interface INavigationPerPageProps extends INavigationPerPageOwnProps,
  INavigationPerPageChildrenProps, INavigationPerPageStateProps, INavigationPerPageDispatchProps { }

export const PER_PAGE_NUMBERS = [10, 20, 30];
export const PER_PAGE_LABEL = 'Results per page';

export class NavigationPerPage extends React.Component<INavigationPerPageProps, any> {
  private perPageNumbers: number[];

  componentWillMount() {
    this.perPageNumbers = this.props.perPageNumbers || PER_PAGE_NUMBERS;
  }

  componentDidMount() {
    if (this.props.onRender) {
      this.props.onRender(this.perPageNumbers[0]);
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    let topNumber = this.props.totalEntries + 10;
    let label = this.props.label || PER_PAGE_LABEL;

    let perPageSelects = _.map(this.perPageNumbers, (number) => {
      if (topNumber > number) {
        let selectId = 'perpage-' + this.props.id + number;
        return (
          this.props.withReduxState ?
            <NavigationPerPageSelectConnected id={selectId} loadingIds={this.props.loadingIds} perPageNumber={number} key={selectId} /> :
            <NavigationPerPageSelect onPerPageClick={this.props.onPerPageClick} perPageNumber={number} key={selectId} />
        );
      }
    });

    return (
      <div className='items-per-page prepended-flat-select'>
        <div className='flat-select-prepend'>{label}:</div>
        <div className='flat-select clearfix'>
          {perPageSelects}
        </div>
      </div>
    );
  }
}
