import { ITableHeaderCellOwnProps } from './TableHeaderCell';
import { IActionOptions } from '../actions/Action';
import { TableHeader } from './TableHeader';
import { TableHeadingRowConnected } from './TableHeadingRowConnected';
import { TableRowWrapper } from './TableRowWrapper';
import { ActionBar, IActionBarProps } from '../actions/ActionBar';
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
import { ITableState } from './TableReducers';
import { getChildComponentId } from './TableUtils';
import { TableChildComponent } from './TableConstants';
import { JSXRenderable } from '../../utils/JSXUtils';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TableCollapsibleRowConnected } from './TableCollapsibleRowConnected';

export interface IData {
  id: string;
  [attribute: string]: any;
};

export interface ITableRowData {
  [id: string]: {
    id: string;
    [attribute: string]: any;
  };
};

export interface ITableData {
  byId: ITableRowData;
  allIds: string[];
  displayedIds: string[];
}

export type IAttributeFormatter = (attributeValue: any, attributeName: string) => JSXRenderable;
export type IAttributeNameFormatter = (attributeName: string) => string;

export interface IHeadingAttribute {
  attributeName: string;
  rowKeyGenerator?: (attributeName: string, attributeValue: any) => string;
  titleFormatter: (attributeName: string) => string;
  sort?: boolean | ((attributeValue: any) => string);
  attributeFormatter?: IAttributeFormatter;
}

export interface IPredicate {
  props: IDropdownSearchProps;
  attributeName: string;
  attributeNameFormatter: IAttributeNameFormatter;
};

export interface ITableOwnProps extends React.ClassAttributes<Table> {
  id: string;
  initialTableData: ITableData;
  headingAttributes: IHeadingAttribute[];
  predicateMethods?: {
    [attributeName: string]: (attributeValue: any, attributeName?: string) => boolean;
  };
  getActions?: () => IActionOptions[];
  filterMethod?: (rowData: ITableRowData, ) => boolean;
  sortByMethod?: (attributeValue: any, attributeName: string) => string;
  collapsibleFormatter?: (tableRowData: ITableRowData) => JSXRenderable;
  modifyState?: (state: ITableState, newTableData?: any) => ITableState;
};

export interface ITableChildrenProps {
  blankSlates: {
    noResults: IBlankSlateProps;
    noResultsOnFilterOrPredicates?: IBlankSlateProps;
    noResultsOnError?: IBlankSlateProps;
  };
  actionBar?: IActionBarProps;
  filter?: IFilterBoxProps;
  predicates?: IPredicate[];
  perPage?: INavigationPerPageProps;
  pagination?: INavigationPaginationProps;
  lastUpdated?: ILastUpdatedProps;
  styles?: {
    tableHeaderClass?: string[]
    tableActionClasses?: string[];
    navigationClasses?: string[];
  };
}

export interface ITableStateProps {
  tableState: ITableState;
};

export interface ITableDispatchProps {
  onMount?: (id: string) => void;
  onUnmount?: (id: string) => void;
  onRowClick?: (id: string) => void;
  onModifyData?: (id: string) => void;
}

export interface ITableProps extends ITableOwnProps, ITableChildrenProps, ITableStateProps, ITableDispatchProps { }

export class Table extends React.Component<ITableProps, any> {
  componentWillMount() {

  }

  componentDidMount() {

  }

  componentWillReceiveProps() {

  }

  onMount() {
    if (this.props.onMount) {
      this.props.onMount(this.props.id);
    }
  }

  onUnmount() {
    if (this.props.onMount) {
      this.props.onUnmount(this.props.id);
    }
  }

  onModifyData() {
    this.props.onModifyData();
  }

  onRowClick() {
    this.props.onRowClick();
  }

  buildLoadingRow(): JSX.Element {
    return this.props.tableState.isLoading
      ? <LoadingConnected
        id={getChildComponentId(this.props.id, TableChildComponent.LOADING_TABLE)}
        rowStyle={{ nbColumns: this.props.headingAttributes.length }} />
      : null;
  }

  buildLoadingNavigation(): JSX.Element {
    return this.props.tableState.isLoading
      ? <LoadingConnected
        id={getChildComponentId(this.props.id, TableChildComponent.LOADING_NAVIGATION)} />
      : null;
  }

  buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates, styles } = this.props;

    const filterBoxConnected: JSX.Element = actionBar && filter
      ? <FilterBoxConnected
        {...filter}
        id={getChildComponentId(this.props.id, TableChildComponent.FILTER)} />
      : null;

    const predicatesConnected: JSX.Element[] = actionBar && predicates
      ? predicates.map((predicate: IPredicate, i: number) => {
        const predicateId = `${getChildComponentId(this.props.id, TableChildComponent.PREDICATE)}-${predicate.attributeName}`;
        const containerClasses = i ? 'ml1' : '';
        return (
          <DropdownSearchConnected
            {...predicate.props}
            key={predicateId}
            fixedPrepend={predicate.attributeNameFormatter(predicate.attributeName)}
            id={predicateId}
            containerClasses={containerClasses} />
        );
      })
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
    const tableHeaderCells: ITableHeaderCellOwnProps[] = this.props.headingAttributes.map((headingAttribute: IHeadingAttribute) => {
      const id = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_HEADER_CELL)}-${headingAttribute.attributeName}`;
      const title = headingAttribute.titleFormatter(headingAttribute.attributeName);
      const tableRefForSort = !!headingAttribute.sort
        ? { tableId: this.props.id, attributeToSort: headingAttribute.attributeName }
        : undefined;

      return { id, title, tableRefForSort };
    });

    const { styles } = this.props;
    return (
      <TableHeader
        headerClass={styles && styles.tableHeaderClass && styles.tableHeaderClass.join(' ')}
        columns={tableHeaderCells}
        connectCell />
    );
  }

  buildTableHeadingRowContent(
    attributeValue: any,
    attributeName: string,
    attributeFormatter?: IAttributeFormatter,
  ): JSXRenderable {
    return attributeFormatter
      ? attributeFormatter(attributeValue, attributeName)
      : convertUndefinedAndNullToEmptyString(attributeValue);
  }

  buildTableBody(): JSX.Element[] {
    const tableRowWrappers: JSX.Element[] = [];
    const tableData = this.props.tableState.data || this.props.initialTableData;

    tableData.displayedIds.forEach((id: string) => {
      const rowData: ITableRowData = tableData.byId[id];
      const toggleArrowCellCount = 1;
      const rowWrapperId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_ROW_WRAPPER)}-${rowData.id}`;
      const headingRowId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_HEADING_ROW)}-${rowData.id}`;
      const collapsibleRowId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_COLLAPSIBLE_ROW)}-${rowData.id}`;
      const collapsibleData = this.props.collapsibleFormatter && this.props.collapsibleFormatter(rowData);

      tableRowWrappers.push(
        <TableRowWrapper key={rowWrapperId}>
          <TableHeadingRowConnected
            id={headingRowId}
            key={headingRowId}
            isCollapsible={!!collapsibleData}
            onClickCallback={(e: React.MouseEvent<any>) => this.props.onRowClick(this.props.getActions())}>
            {this.props.headingAttributes.map((headingAttribute: IHeadingAttribute) => {
              const { attributeName, attributeFormatter } = headingAttribute;
              return this.buildTableHeadingRowContent(rowData[attributeName], attributeName, attributeFormatter);
            })}
          </TableHeadingRowConnected>
          {collapsibleData
            ? (
              <TableCollapsibleRowConnected
                id={collapsibleRowId}
                nbColumns={this.props.headingAttributes.length + toggleArrowCellCount}>
                {collapsibleData}
              </TableCollapsibleRowConnected>
            )
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
            noResults,
      noResultsOnFilterOrPredicates,
      noResultsOnError,
    } = this.props.blankSlates;

    let blankSlatePropsToUse: IBlankSlateProps;

    if (tableData.displayedIds.length || _.isEmpty(this.props.blankSlates)) {
      return null;
    }

    if (this.props.isFiltered || this.props.hasPredicate) {
      blankSlatePropsToUse = noResultsOnFilterOrPredicates || noResults;
    } else if (this.props.isInError) {
      blankSlatePropsToUse = noResultsOnError || noResults;
    } else {
      blankSlatePropsToUse = noResults;
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
        <div className='flex-auto'>{this.buildLoadingNavigation()}</div>
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
        {!this.props.tableState.isLoading ? this.buildActionBar() : <ActionBar />}
        <table className='mod-collapsible-rows'>
          {this.buildTableHeader()}
          {this.buildTableBody()}
        </table>
        {this.buildLoadingRow()}
        {this.buildBlankSlate()}
        {this.buildNavigation()}
        {this.buildLastUpdated()}
      </div>
    );
  }
}
