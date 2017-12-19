import { NavigationPerPageSelect } from './NavigationPerPageSelect';
import * as React from 'react';
import * as _ from 'underscore';

export interface INavigationPerPageOwnProps extends React.ClassAttributes<NavigationPerPage> {
  id?: string;
  totalEntries: number;
  label?: string;
  perPageNumbers?: number[];
  loadingIds?: string[];
}

export interface INavigationPerPageStateProps {
  currentPerPage?: number;
  currentPage?: number;
}

export interface INavigationPerPageDispatchProps {
  onRender?: (perPageNb: number) => void;
  onDestroy?: () => void;
  onPerPageClick?: (perPageNb: number, oldPerPageNb: number, currentPage: number) => void;
}

export interface INavigationPerPageProps extends INavigationPerPageOwnProps, INavigationPerPageStateProps,
  INavigationPerPageDispatchProps { }

export const PER_PAGE_NUMBERS: number[] = [10, 20, 30];
export const PER_PAGE_LABEL: string = 'Results per page';

export class NavigationPerPage extends React.Component<INavigationPerPageProps, any> {
  private perPageNumbers: number[];

  private handleClick(newPerPage: number) {
    if (this.props.onPerPageClick && this.props.currentPerPage !== newPerPage) {
      this.props.onPerPageClick(newPerPage, this.props.currentPerPage, this.props.currentPage);
    }
  }

  componentWillMount() {
    this.perPageNumbers = this.props.perPageNumbers || PER_PAGE_NUMBERS;
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
    this.perPageNumbers = this.props.perPageNumbers || PER_PAGE_NUMBERS;

    let currentPerPage: number = this.props.currentPerPage || this.perPageNumbers[0];
    let topNumber: number = this.props.totalEntries;
    let label: string = this.props.label || PER_PAGE_LABEL;

    let perPageSelects: JSX.Element[] = _.map(this.perPageNumbers, (number: number, index: number): JSX.Element => {
      let shouldShowPerPageSelect: boolean =
        topNumber > (this.perPageNumbers[index - 1] || 0);

      if (shouldShowPerPageSelect) {
        let selectId: string = 'perpage-' + (this.props.id || '') + number;
        let isSelected: boolean = currentPerPage === number;
        return (
          <NavigationPerPageSelect
            onPerPageClick={(newPerPageNb: number) => this.handleClick(newPerPageNb)}
            perPageNb={number}
            key={selectId}
            selected={isSelected}
          />
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
