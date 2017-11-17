import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
// import {TableHeadingRowConnected} from './TableHeadingRowConnected';
// import {TableCollapsibleRowConnected} from './TableCollapsibleRowConnected';
import { NavigationPerPageConnected } from '../navigation/perPage/NavigationPerPageConnected';
import { INavigationPerPageProps } from '../navigation/perPage/NavigationPerPage';
import { FilterBoxConnected } from '../filterBox/FilterBoxConnected';
import { IFilterBoxProps } from '../filterBox/FilterBox';
import { DropdownSearchConnected } from '../dropdownSearch/DropdownSearchConnected';
import { IDropdownSearchProps } from '../dropdownSearch/DropdownSearch';
import { NavigationPaginationConnected } from '../navigation/pagination/NavigationPaginationConnected';
import { INavigationPaginationProps } from '../navigation/pagination/NavigationPagination';
import { ILastUpdatedProps, LastUpdated } from '../lastUpdated/LastUpdated';
import { ActionBarConnected } from '../actions/ActionBarConnected';
import { IActionBarProps } from '../actions/ActionBar';
import { ITableHeaderProps, TableHeader } from './TableHeader';
import { IBlankSlateProps } from '../blankSlate/BlankSlate';

const REST_PREDICATES_DEFAULT_CLASSES = ['ml1'];

export interface ITableProps extends React.ClassAttributes<TableBase> {
  id: string;
  blankSlates: {
    noResultsDefault: IBlankSlateProps;
    noResultsOnFilterOrPredicates?: IBlankSlateProps;
  };
  actionBar?: IActionBarProps;
  filter?: IFilterBoxProps;
  filterMethod?: (tableState: any) => void;
  predicates?: IDropdownSearchProps[];
  predicateMethods?: ((tableState: any) => void)[];
  perPage?: INavigationPerPageProps;
  pagination?: INavigationPaginationProps;
  lastUpdated?: ILastUpdatedProps;
  tableHeader?: ITableHeaderProps;
  tableSortMethods?: {
    [attribute: string]: (tableState: any) => void;
  };
  styles?: {
    tableActionClasses?: string[];
    navigationClasses?: string[];
  };
}

export class Table extends React.Component<ITableProps, any> {
  buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates, styles } = this.props;

    const filterBoxConnected: FilterBoxConnected = actionBar && filter
      ? <FilterBoxConnected {...filter} />
      : null;

    const predicatesConnected: DropdownSearchConnected = actionBar && predicates
      ? predicates.map((predicateProps: IDropdownSearchProps, i: number) => <DropdownSearchConnected {...predicateProps} />)
      : null;

    const tableActionClasses: string[] = styles && styles.tableActionClasses || [];

    return actionBar
      ? (
        <ActionBarConnected {...actionBar}>
          <div className={classNames('coveo-table-actions', ...tableActionClasses)}>
            {predicatesConnected}
            {filterBoxConnected}
          </div>
        </ActionBarConnected>
      )
      : null;
  }

  buildTableHeader(): JSX.Element {
    return this.props.tableHeader
      ? <TableHeader {...this.props.tableHeader} />
      : null;
  }

  buildNavigation(): JSX.Element {
    const { perPage, pagination, styles } = this.props;

    if (!perPage && !pagination) {
      return null;
    }


    const perPageConnected = perPage
      ? <NavigationPerPageConnected {...perPage} />
      : null;

    const paginationConnected = pagination
      ? <NavigationPaginationConnected {...pagination} />
      : null;

    const navigationClasses: string[] = styles && styles.navigationClasses || [];

    return (
      <div className={classNames('pagination-container', ...navigationClasses)}>
        {perPageConnected}
        <div className='flex-auto'></div>
        {paginationConnected}
      </div>
    );
  }

  buildLastUpdated(): JSX.Element {
    return this.props.lastUpdated
      ? <LastUpdatedConnected {...this.props.lastUpdated} />
      : null;
  }

  render() {
    return (
      <div>
        {this.buildActionBar()}
        <table className='mod-collapsible-rows'>
          {this.buildTableHeader()}
        </table>
        {this.buildNavigation()}
        {this.buildLastUpdated()}

      </div>
    );
  }
}
