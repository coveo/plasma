import { Svg } from '../../svg/Svg';
import { NavigationPaginationSelect } from './NavigationPaginationSelect';
import * as React from 'react';
import * as _ from 'underscore';

export interface INavigationPaginationOwnProps extends React.ClassAttributes<NavigationPagination> {
  id?: string;
  totalPages: number;
  numberOfPagesToShow?: number;
  previousLabel?: string;
  nextLabel?: string;
  loadingIds?: string[];
}

export interface INavigationPaginationStateProps {
  currentPage?: number;
}

export interface INavigationPaginationDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onPageClick?: (pageNb: number) => void;
}

export interface INavigationPaginationProps extends INavigationPaginationOwnProps,
  INavigationPaginationStateProps, INavigationPaginationDispatchProps { }

export const NUMBER_OF_PAGES_SHOWING = 7;
export const PREVIOUS_LABEL = 'Previous';
export const NEXT_LABEL = 'Next';

export class NavigationPagination extends React.Component<INavigationPaginationProps, any> {

  componentDidMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  handlePageClick = (pageNb: number) => {
    if (this.props.onPageClick && pageNb >= 0) {
      this.props.onPageClick(pageNb);
    }
  };

  render() {
    let currentPage = this.props.currentPage || 0;
    let showXPages = Math.abs((this.props.numberOfPagesToShow || NUMBER_OF_PAGES_SHOWING) - 1);
    let previousLabel = this.props.previousLabel || PREVIOUS_LABEL;
    let nextLabel = this.props.nextLabel || NEXT_LABEL;
    let start = 0;
    let end = showXPages;
    let lastPage = this.props.totalPages - 1;
    let previousClasses = 'flat-select-option mod-link ' + (currentPage === 0 ? 'disabled' : 'selectable');
    let nextClasses = 'flat-select-option mod-link ' + (currentPage === lastPage ? 'disabled' : 'selectable');
    let pageSelects: JSX.Element[] = [];

    if (currentPage + showXPages / 2 > lastPage) {
      end = lastPage;
      start = Math.max(lastPage - showXPages, 0);
    } else {
      start = Math.max(Math.floor(currentPage - showXPages / 2), 0);
      end = Math.min(start + showXPages, lastPage);
    }

    _.each(_.range(start, end + 1), (p) => {
      pageSelects.push(<NavigationPaginationSelect
        key={'page-' + p}
        onPageClick={this.handlePageClick}
        pageNb={p}
        selected={p === currentPage}
        />);
    });

    return (
      <div className='pagination'>
        <div className='flat-select'>
          <a className={previousClasses}
            data-page={currentPage - 1}
            onClick={() => this.handlePageClick(currentPage - 1)}>
            <Svg svgName='arrow-left-rounded' className='pagination-icon' svgClass='icon icon-small mod-lg' />
            {previousLabel}
          </a>
          {pageSelects}
          <a className={nextClasses}
            data-page={currentPage + 1}
            onClick={() => this.handlePageClick(currentPage + 1)}>
            {nextLabel}
            <Svg svgName='arrow-right-rounded' className='pagination-icon' svgClass='icon icon-small mod-lg' />
          </a>
        </div>
      </div>
    );
  }
}
