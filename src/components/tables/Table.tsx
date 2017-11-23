import { ITableCollapsibleRowProps } from './TableCollapsibleRow';
import { ITableHeaderProps, TableHeader } from './TableHeader';
import { ITableHeadingRowProps } from './TableHeadingRow';
import { TableRowWrapper } from './TableRowWrapper';
import { IActionBarProps } from '../actions/ActionBar';
import { ActionBarConnected } from '../actions/ActionBarConnected';
import { BlankSlate, IBlankSlateProps } from '../blankSlate/BlankSlate';
import { IDropdownSearchProps } from '../dropdownSearch/DropdownSearch';
import { DropdownSearchConnected } from '../dropdownSearch/DropdownSearchConnected';
import { IFilterBoxProps } from '../filterBox/FilterBox';
import { FilterBoxConnected } from '../filterBox/FilterBoxConnected';
import { ILastUpdatedProps } from '../lastUpdated/LastUpdated';
import { LastUpdatedConnected } from '../lastUpdated/LastUpdatedConnected';
import { INavigationPaginationProps } from '../navigation/pagination/NavigationPagination';
import { NavigationPaginationConnected } from '../navigation/pagination/NavigationPaginationConnected';
import { INavigationPerPageProps } from '../navigation/perPage/NavigationPerPage';
import { NavigationPerPageConnected } from '../navigation/perPage/NavigationPerPageConnected';
import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

export interface IData {
  [attribute: string]: any;
};

export interface ITableRowData {
  [id: string]: IData;
};

export interface ITableData {
  byId: ITableRowData;
  allIds: string[];
  displayedIds: string[];
}

export interface ITableOwnProps extends React.ClassAttributes<Table> {
  id: string;
  initialTableData: ITableData;
  tableRowDataToHeadingRowProps: (rowData: ITableRowData) => ITableHeadingRowProps;
  tableRowDataToCollapsibleRowProps?: (rowData: ITableRowData) => ITableCollapsibleRowProps;
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
  filteredWith?: string;
  isInError?: boolean;
  currentPerPage?: number;
  currentPage?: number;
};

export interface ITableDispatchProps {
  onMount?: (id: string) => void;
  onUnmount?: (id: string) => void;
  onFilter?: () => void;
  onPredicate?: () => void;
  onRowClick?: () => void;
  onSort?: () => void;
  onPageChange?: () => void;
  onPerPageChange?: () => void;
}

export interface ITableProps extends ITableOwnProps, ITableChildrenProps, ITableStateProps, ITableDispatchProps { }

export class Table extends React.Component<ITableProps, any> {
  constructor(props: ITableProps) {
    super(props);

    // registerComponentInStore with initial state
  }
  buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates, styles } = this.props;

    const filterBoxConnected: JSX.Element = actionBar && filter
      ? <FilterBoxConnected {...filter} />
      : null;

    const predicatesConnected: JSX.Element[] = actionBar && predicates
      ? predicates.map((predicateProps: IDropdownSearchProps, i: number) => <DropdownSearchConnected {...predicateProps} key={_.uniqueId()} />)
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
