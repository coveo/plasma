import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { LoadingConnected } from '../loading/LoadingConnected';
import { Loading } from '../loading/Loading';
import { NavigationPaginationConnected } from './pagination/NavigationPaginationConnected';
import { NavigationPerPageConnected } from './perPage/NavigationPerPageConnected';
import { NavigationPagination, INavigationPaginationProps } from './pagination/NavigationPagination';
import { NavigationPerPage, INavigationPerPageProps, PER_PAGE_NUMBERS } from './perPage/NavigationPerPage';
import * as React from 'react';

export interface INavigationOwnProps extends React.ClassAttributes<Navigation> {
  id?: string;
  totalPages: number;
  totalEntries: number;
  loadingIds?: string[];
}

export interface INavigationChildrenProps {
  numberOfPagesToShow?: number;
  previousLabel?: string;
  nextLabel?: string;
  currentPage?: number;
  currentPerPage?: number;
  onPageClick?: (pageNb: number) => void;
  perPageLabel?: string;
  perPageNumbers?: number[];
  onPerPageClick?: () => void;
  hidePages?: boolean;
}

export interface INavigationStateProps extends IReduxStatePossibleProps {
  isLoading?: boolean;
}

export interface INavigationProps extends INavigationOwnProps, INavigationChildrenProps, INavigationStateProps { }

export class Navigation extends React.Component<INavigationProps, any> {

  render() {
    let pagination: JSX.Element = null;
    if (this.props.totalPages > 1) {
      let paginationProps: INavigationPaginationProps = {
        totalPages: this.props.totalPages,
        numberOfPagesToShow: this.props.numberOfPagesToShow,
        previousLabel: this.props.previousLabel,
        nextLabel: this.props.nextLabel,
        hidePages: this.props.hidePages
      };
      pagination = this.props.withReduxState ?
        <NavigationPaginationConnected id={'pagination-' + this.props.id} loadingIds={this.props.loadingIds} {...paginationProps} /> :
        <NavigationPagination currentPage={this.props.currentPage} onPageClick={this.props.onPageClick} {...paginationProps} />;
    }

    let perPage: JSX.Element = null;
    let perPageNumbers: number[] = (this.props.perPageNumbers || PER_PAGE_NUMBERS);
    if (perPageNumbers.length && this.props.totalEntries > perPageNumbers[0]) {
      let perPageProps: INavigationPerPageProps = {
        label: this.props.perPageLabel,
        perPageNumbers: this.props.perPageNumbers,
        totalEntries: this.props.totalEntries,
        currentPerPage: this.props.currentPerPage,
        currentPage: this.props.currentPage
      };
      perPage = this.props.withReduxState ?
        <NavigationPerPageConnected id={this.props.id} loadingIds={this.props.loadingIds} {...perPageProps} /> :
        <NavigationPerPage onPerPageClick={this.props.onPerPageClick} {...perPageProps} />;
    }

    let navigationClasses: string = 'pagination-container' + (this.props.isLoading ? ' loading-view' : '');
    let loading: JSX.Element = this.props.withReduxState ? <LoadingConnected id={'loading-' + this.props.id} /> : <Loading />;

    return (
      <div className={navigationClasses}>
        {perPage}
        <div className='flex-auto'>
          {loading}
        </div>
        {pagination}
      </div>
    );
  }
}
