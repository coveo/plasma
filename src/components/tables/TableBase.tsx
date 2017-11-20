import * as React from 'react';
import * as classNames from 'classnames';
import * as _ from 'underscore';
import { TableHeadingRowConnected } from './TableHeadingRowConnected';
import { TableCollapsibleRowConnected } from './TableCollapsibleRowConnected';
import { NavigationPerPageConnected } from '../navigation/perPage/NavigationPerPageConnected';
import { INavigationPerPageProps } from '../navigation/perPage/NavigationPerPage';
import { FilterBoxConnected } from '../filterBox/FilterBoxConnected';
import { IFilterBoxProps } from '../filterBox/FilterBox';
import { DropdownSearchConnected } from '../dropdownSearch/DropdownSearchConnected';
import { IDropdownSearchProps } from '../dropdownSearch/DropdownSearch';
import { NavigationPaginationConnected } from '../navigation/pagination/NavigationPaginationConnected';
import { INavigationPaginationProps } from '../navigation/pagination/NavigationPagination';
import { ILastUpdatedProps } from '../lastUpdated/LastUpdated';
import { LastUpdatedConnected } from '../lastUpdated/LastUpdatedConnected';
import { ActionBarConnected } from '../actions/ActionBarConnected';
import { IActionBarProps } from '../actions/ActionBar';
import { ITableHeaderProps, TableHeader } from './TableHeader';
import { IBlankSlateProps, BlankSlate } from '../blankSlate/BlankSlate';
import { TableHeadingRowConnected } from './TableHeadingRowConnected';
import { TableCollapsibleRowConnected } from './TableCollapsibleRowConnected';
import { TableRowWrapper } from './TableRowWrapper';

const REST_PREDICATES_DEFAULT_CLASSES = ['ml1'];

export interface IHeadingOrCollapsibleData {
  [attribute: string]: any;
};

export interface ITableRowData {
  id: string;
  headingData: IHeadingOrCollapsibleData;
  collapsibleData?: IHeadingOrCollapsibleData;
};

export interface ITableRowsData {
  [id: string]: ITableRowData;
};

export interface ITableData {
  byId: ITableRowsData;
  allIds: string[];
  displayedIds: string[];
}

export interface ITableOwnProps extends React.ClassAttributes<TableBase> {
  id: string;
  initialTableData: ITableData;
  rawDataReceivedOnFetchOrElseParser: (data: any) => ITableRowsData;
  headingRowDataParser: (rowData: ITableRowData) => JSX.Element;
  collapsibleRowDataParser?: (rowData: ITableRowData) => JSX.Element;
};

export interface ITableChildrenProps {
  blankSlates: {
    noResultsDefault: IBlankSlateProps;
    noResultsOnFilterOrPredicates?: IBlankSlateProps;
    noResultsOnError?: IBlankSlateProps;
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

export interface ITableStateProps {
  tableData?: ITableData;
  hasPredicate?: boolean;
  isFiltered?: boolean;
  isInError?: boolean;
  currentPerPage?: number;
  currentPage?: number;
};

export interface ITableProps extends ITableOwnProps, ITableChildrenProps, ITableStateProps { }

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

  buildTableBody(): JSX.Element[] {
    const tableRowWrappers: JSX.Element[] = [];
    const tableData = this.props.tableData || this.props.initialTableData;

    tableData.displayedIds.forEach((id: string) => {
      const rowData: ITableRowData = tableData.byId[id];
      tableRowWrappers.push(
        <TableRowWrapper key={rowData.id}>
          {this.props.headingRowDataParser(rowData)}
          {rowData.collapsibleData
            ? this.props.collapsibleRowDataParser && this.props.collapsibleRowDataParser(rowData)
            : null
          }
        </TableRowWrapper>
      );
    });

    console.log(tableRowWrappers);
    return tableRowWrappers;
  }

  buildBlankSlate(): JSX.Element {
    const tableData = this.props.tableData || this.props.initialTableData;
    const {
      noResultsDefault,
      noResultsOnFilterOrPredicates,
      noResultsOnError,
    } = this.props.blankSlates;

    let blankSlatePropsToUse: IBlankSlateProps;

    if (tableData.displayedIds.length || _.isEmpty(this.props.blankSlates)) {
      return null;
    }

    if (this.props.isFiltered || this.props.hasPredicate) {
      blankSlatePropsToUse = noResultsOnFilterOrPredicates || noResultsDefault;
    } else if (this.props.isInError) {
      blankSlatePropsToUse = noResultsOnError || noResultsDefault;
    } else {
      blankSlatePropsToUse = noResultsDefault;
    }

    return <BlankSlate {...blankSlatePropsToUse} />;
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
          {this.buildTableBody()}
        </table>
        {this.buildBlankSlate()}
        {this.buildNavigation()}
        {this.buildLastUpdated()}
      </div>
    );
  }
}
