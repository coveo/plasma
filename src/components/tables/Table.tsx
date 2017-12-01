import { ITableHeaderCellOwnProps } from './TableHeaderCell';
import { IActionOptions } from '../actions/Action';
import { TableHeader } from './TableHeader';
import { TableHeadingRowConnected } from './TableHeadingRowConnected';
import { TableRowWrapper } from './TableRowWrapper';
import { IActionBarProps } from '../actions/ActionBar';
import { ActionBarConnected } from '../actions/ActionBarConnected';
import { BlankSlate, IBlankSlateProps } from '../blankSlate/BlankSlate';
import { IDropdownSearchProps } from '../dropdownSearch/DropdownSearch';
import { DropdownSearchConnected } from '../dropdownSearch/DropdownSearchConnected';
import { IFilterBoxProps } from '../filterBox/FilterBox';
import { FilterBoxConnected } from '../filterBox/FilterBoxConnected';
import { LastUpdatedConnected } from '../lastUpdated/LastUpdatedConnected';
import * as React from 'react';
import * as _ from 'underscore';
import { ITableState, ITableData } from './TableReducers';
import { ITableDispatchProps } from './TableConnected';
import { getChildComponentId } from './TableUtils';
import { TableChildComponent } from './TableConstants';
import { JSXRenderable } from '../../utils/JSXUtils';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TableCollapsibleRowConnected } from './TableCollapsibleRowConnected';
import { LoadingConnected } from '../loading/LoadingConnected';
import { LoadingTableConnected } from '../loading/LoadingTableConnected';
import { INavigationChildrenProps } from '../navigation/Navigation';
import { NavigationConnected } from '../navigation/NavigationConnected';
import { IDropdownOption } from '../dropdownSearch/DropdownSearch';

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

export type IAttributeFormatter = (attributeValue: any, attributeName?: string) => JSXRenderable;
export type IAttributeNameFormatter = (attributeName: string) => string;

export interface ITableHeadingAttribute {
  attributeName: string;
  titleFormatter: (attributeName: string) => string;
  sort?: boolean;
  sortByMethod?: (attributeValue: any) => string;
  attributeFormatter?: IAttributeFormatter;
}

export interface ITablePredicate {
  props: IDropdownSearchProps;
  attributeName: string;
  attributeNameFormatter: IAttributeNameFormatter;
};

export interface ITableOwnProps extends React.ClassAttributes<Table> {
  id: string;

  // table content props
  initialTableData: ITableData;
  headingAttributes: ITableHeadingAttribute[];
  collapsibleFormatter?: (tableRowData: ITableRowData, props: ITableProps) => JSXRenderable;

  // action bar props
  actionBar?: IActionBarProps;
  getActions?: (rowData?: ITableRowData, props?: ITableProps) => IActionOptions[];

  // blankslate props
  blankSlates: {
    noResults: IBlankSlateProps;
    noResultsOnFilterOrPredicates?: IBlankSlateProps;
    noResultsOnError?: IBlankSlateProps;
  };

  // filter props
  filter?: IFilterBoxProps;
  filterMethod?: (attributeValue: any, props: ITableOwnProps) => boolean;

  // predicate props
  predicates?: ITablePredicate[];

  // navigation props
  navigation?: INavigationChildrenProps;
  noNavigation?: boolean;

  // last update label
  lastUpdatedLabel?: string;

  // modes
  serverMode?: {
    url: (tableState?: ITableState, ownProps?: ITableOwnProps) => string;
    rawDataToTableData: (data: any, ownProps?: ITableOwnProps, tableState?: ITableState) => ITableData;
  };
  customMode?: {
    thunkActionCreator: (tableOwnProps: ITableOwnProps) => ((dispatch: any, getState?: () => any) => void);
  };
};

export interface ITableStateProps {
  tableState?: ITableState;
};

export interface ITableProps extends ITableOwnProps, ITableStateProps, Partial<ITableDispatchProps> { }

export class Table extends React.Component<ITableProps, any> {
  componentDidMount() {
    if (this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  componentWillReceiveProps(nextProps: ITableProps) {
    const { tableState } = this.props;

    if (this.hasTableStateChanged(tableState, nextProps.tableState)) {
      const shouldResetPage =
        tableState.page === nextProps.tableState.page
        || tableState.perPage !== nextProps.tableState.perPage;

      this.props.onModifyData(shouldResetPage);
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  hasTableStateChanged(currentTableState: ITableState, nextTableState: ITableState): boolean {
    return !!currentTableState && (
      currentTableState.filter !== nextTableState.filter
      || currentTableState.perPage !== nextTableState.perPage
      || currentTableState.page !== nextTableState.page
      || currentTableState.sortState.attribute !== nextTableState.sortState.attribute
      || currentTableState.sortState.order !== nextTableState.sortState.order
      || (_.isEmpty(currentTableState.predicates) && !_.isEmpty(nextTableState.predicates))
      || _.some(
        currentTableState.predicates,
        (attributeValue: any, attributeName: string) => attributeValue !== nextTableState.predicates[attributeName],
      )
    );
  }

  buildLoadingTable(): JSX.Element {
    return <LoadingTableConnected
      id={getChildComponentId(this.props.id, TableChildComponent.LOADING_TABLE)}
      hide={!this.props.tableState.isLoading}
      columnsPerRow={this.props.headingAttributes.length + 1}
      numberOfRows={
        this.props.tableState.data && this.props.tableState.data.displayedIds.length
        || this.props.tableState.perPage
      } />;
  }

  buildLoadingNavigation(): JSX.Element {
    return <LoadingConnected
      id={getChildComponentId(this.props.id, TableChildComponent.LOADING_NAVIGATION)}
      hide={!this.props.tableState.isLoading} />;
  }

  buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates } = this.props;

    const filterBoxConnected: JSX.Element = actionBar && filter
      ? <FilterBoxConnected
        {...filter}
        id={getChildComponentId(this.props.id, TableChildComponent.FILTER)}
        key={getChildComponentId(this.props.id, TableChildComponent.FILTER)} />
      : null;

    const predicatesConnected: JSX.Element[] = actionBar && predicates
      ? predicates.map((predicate: ITablePredicate, i: number) => {
        const predicateId = `${getChildComponentId(this.props.id, TableChildComponent.PREDICATE)}-${predicate.attributeName}`;
        const containerClasses = i ? ['ml1'] : [''];
        return (
          <DropdownSearchConnected
            turnOffSearch={true}
            {...predicate.props}
            key={predicateId}
            fixedPrepend={predicate.attributeNameFormatter(predicate.attributeName)}
            id={predicateId}
            containerClasses={containerClasses}
            onOptionClickCallBack={(option: IDropdownOption) => {
              if (this.props.onPredicateOptionClick) {
                this.props.onPredicateOptionClick(predicateId, option);
              }
            }} />
        );
      })
      : null;

    return actionBar
      ? (
        <ActionBarConnected {...actionBar} id={getChildComponentId(this.props.id, TableChildComponent.ACTION_BAR)}>
          <div className='coveo-table-actions'>
            {predicatesConnected}
            {filterBoxConnected}
          </div>
        </ActionBarConnected>
      )
      : null;
  }

  buildTableHeader(): JSX.Element {
    const tableHeaderCells: ITableHeaderCellOwnProps[] = this.props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
      const id = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_HEADER_CELL)}-${headingAttribute.attributeName}`;
      const title = headingAttribute.titleFormatter(headingAttribute.attributeName);
      const tableRefForSort = !!headingAttribute.sort
        ? { tableId: this.props.id, attributeToSort: headingAttribute.attributeName }
        : undefined;

      return { id, title, tableRefForSort };
    });

    return (
      <TableHeader
        headerClass='mod-no-border-top'
        columns={[...tableHeaderCells, { title: '' }]}
        connectCell />
    );
  }

  buildTableHeadingRowContent(
    attributeValue: any,
    attributeName: string,
    tableCoordinate: string,
    attributeFormatter?: IAttributeFormatter,
  ): JSXRenderable {
    return attributeFormatter
      ? <td key={tableCoordinate}>{attributeFormatter(attributeValue, attributeName)}</td>
      : <td key={tableCoordinate}>{convertUndefinedAndNullToEmptyString(attributeValue)}</td>;
  }

  buildTableBody(): JSX.Element[] {
    const tableData = this.props.tableState.data || this.props.initialTableData;
    return tableData.displayedIds.map((id: string, yPosition: number): JSX.Element => {
      const rowData: ITableRowData = tableData.byId[id];
      const toggleArrowCellCount = 1;
      const rowWrapperId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_ROW_WRAPPER)}-${rowData.id}`;
      const headingAndCollapsibleId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_HEADING_ROW)}-${rowData.id}`;
      const collapsibleRowKey = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_COLLAPSIBLE_ROW)}-${rowData.id}`;
      const collapsibleData = this.props.collapsibleFormatter && this.props.collapsibleFormatter(rowData, this.props);

      const tableHeadingRowContent = this.props.headingAttributes.map((headingAttribute: ITableHeadingAttribute, xPosition: number) => {
        const { attributeName, attributeFormatter } = headingAttribute;
        const tableCoordinate = `${xPosition}${yPosition}`;
        return this.buildTableHeadingRowContent(rowData[attributeName], attributeName, tableCoordinate, attributeFormatter);
      });

      const collapsibleRow = collapsibleData
        ? (
          <TableCollapsibleRowConnected
            id={headingAndCollapsibleId}
            key={collapsibleRowKey}
            nbColumns={this.props.headingAttributes.length + toggleArrowCellCount}>
            {collapsibleData}
          </TableCollapsibleRowConnected>
        )
        : null;

      return (
        <TableRowWrapper key={rowWrapperId}>
          <TableHeadingRowConnected
            id={headingAndCollapsibleId}
            key={headingAndCollapsibleId}
            tableId={this.props.id}
            hide={this.props.tableState.isLoading || this.props.tableState.isInError}
            isCollapsible={!!collapsibleData}
            onClickCallback={(e: React.MouseEvent<any>) =>
              this.props.onRowClick(this.props.getActions && this.props.getActions(rowData, this.props))
            }>
            {tableHeadingRowContent}
          </TableHeadingRowConnected>
          {collapsibleRow}
        </TableRowWrapper>
      );
    });
  }

  buildBlankSlate(): JSX.Element {
    const { tableState } = this.props;
    const tableData = tableState && tableState.data || this.props.initialTableData;
    const {
      noResults,
      noResultsOnFilterOrPredicates,
      noResultsOnError,
    } = this.props.blankSlates;

    let blankSlatePropsToUse: IBlankSlateProps;

    if (tableData.displayedIds.length
      || _.isEmpty(this.props.blankSlates)
      || this.props.tableState.isLoading) {
      return null;
    }

    if (tableState
      && (tableState.filter || _.some(tableState.predicates, (value: any) => !_.isUndefined(value)))) {
      blankSlatePropsToUse = noResultsOnFilterOrPredicates || noResults;
    } else if (tableState && tableState.isInError) {
      blankSlatePropsToUse = noResultsOnError || noResults;
    } else {
      blankSlatePropsToUse = noResults;
    }

    return <BlankSlate {...blankSlatePropsToUse} />;
  }

  hideSectionOnLoading() {
    return this.props.tableState.isLoading ? { display: 'none' } : undefined;
  }

  buildNavigation(): JSX.Element {
    const tableData = this.props.tableState && this.props.tableState.data || this.props.initialTableData;

    return !this.props.noNavigation ? (
      <NavigationConnected
        {...this.props.navigation}
        totalEntries={tableData.totalEntries}
        totalPages={tableData.totalPages}
        id={getChildComponentId(this.props.id, TableChildComponent.NAVIGATION)}
        loadingIds={[`loading-${getChildComponentId(this.props.id, TableChildComponent.NAVIGATION)}`]}
        currentPage={this.props.tableState.page} />
    ) : null;
  }

  buildLastUpdated(): JSX.Element {
    return <LastUpdatedConnected
      label={this.props.lastUpdatedLabel}
      id={getChildComponentId(this.props.id, TableChildComponent.LAST_UPDATED)} />;
  }

  render() {
    return (
      <div>
        {this.buildActionBar()}
        <table className='mod-collapsible-rows'>
          {this.buildTableHeader()}
          {this.buildTableBody()}
        </table>
        {this.buildLoadingTable()}
        {this.buildBlankSlate()}
        {this.buildNavigation()}
        {this.buildLastUpdated()}
      </div>
    );
  }
};
