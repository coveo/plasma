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
import { ITableCompositeState, ITableData } from './TableReducers';
import { ITableDispatchProps } from './TableConnected';
import { getTableChildComponentId } from './TableUtils';
import { TableChildComponent, TOGGLE_ARROW_CELL_COUNT, DEFAULT_TABLE_DATA } from './TableConstants';
import { JSXRenderable } from '../../utils/JSXUtils';
import { convertUndefinedAndNullToEmptyString } from '../../utils/FalsyValuesUtils';
import { TableCollapsibleRowConnected } from './TableCollapsibleRowConnected';
import { INavigationChildrenProps } from '../navigation/Navigation';
import { NavigationConnected } from '../navigation/NavigationConnected';
import { IDropdownOption } from '../dropdownSearch/DropdownSearch';
import { Loading } from '../loading/Loading';
import * as classNames from 'classnames';
import { ThunkAction } from '../../utils/ReduxUtils';

export interface IData {
  id: string;
  [attribute: string]: any;
};

export interface ITableRowData {
  [id: string]: IData;
};

export type IAttributeFormatter = (attributeValue: any, attributeName?: string) => JSXRenderable;
export type IAttributeNameOrValueFormatter = (attributeNameOrValue: string) => string;

export interface ITableHeadingAttribute {
  attributeName: string;
  titleFormatter: IAttributeNameOrValueFormatter;
  filterFormatter?: IAttributeNameOrValueFormatter; // use this for filter if you render JSX through the attribute formatter
  sort?: boolean;
  sortByMethod?: IAttributeNameOrValueFormatter;
  attributeFormatter?: IAttributeFormatter;
}

export interface ITablePredicate {
  props: IDropdownSearchProps;
  attributeName: string;
  attributeNameFormatter: IAttributeNameOrValueFormatter;
};

export interface ITableOwnProps extends React.ClassAttributes<Table> {
  id: string;
  initialTableData?: ITableData;
  headingAttributes: ITableHeadingAttribute[];
  collapsibleFormatter?: (tableRowData: ITableRowData, props: ITableProps) => JSXRenderable;
  actionBar?: IActionBarProps;
  getActions?: (rowData?: ITableRowData, props?: ITableProps) => IActionOptions[];
  blankSlateDefault: IBlankSlateProps;
  blankSlateNoResultsOnAction?: IBlankSlateProps;
  blankSlateOnError?: IBlankSlateProps;
  filter?: IFilterBoxProps;
  filterMethod?: (attributeValue: any, props: ITableOwnProps) => boolean;
  predicates?: ITablePredicate[];
  navigation?: INavigationChildrenProps;
  lastUpdatedLabel?: string;
  manual?: (
    tableOwnProps: ITableOwnProps,
    shouldResetPage: boolean,
    tableCompositeState: ITableCompositeState,
    previousTableCompositeState: ITableCompositeState,
  ) => ThunkAction;
};

export interface ItableCompositeStateProps {
  readonly tableCompositeState?: ITableCompositeState;
};

export interface ITableProps extends ITableOwnProps, ItableCompositeStateProps, Partial<ITableDispatchProps> { }

export class Table extends React.Component<ITableProps, any> {
  private updateCountForLoadingBehavior: number = 0;
  private isInitialLoad: boolean;

  static defaultProps = {
    tableCompositeState: { sortState: {} } as any,
    initialTableData: DEFAULT_TABLE_DATA,
  } as Partial<ITableOwnProps>;

  constructor(props: ITableProps) {
    super(props);

    this.isInitialLoad = props.initialTableData == DEFAULT_TABLE_DATA;
  }

  componentDidMount() {
    if (this.props.onDidMount) {
      this.props.onDidMount();
    }
  }

  componentDidUpdate() {
    if (this.updateCountForLoadingBehavior < 2) {
      this.updateCountForLoadingBehavior += 1;
    } else {
      // used for proper loading behavior
      // the first update occurs after mount,
      // and the second update occurs after the real data has loaded in the table
      // after which the initial load is completed
      this.isInitialLoad = false;
    }
  }

  componentWillReceiveProps(nextProps: ITableProps) {
    const { tableCompositeState } = this.props;

    if (this.hastableCompositeStateChanged(tableCompositeState, nextProps.tableCompositeState)) {
      // if the change occurs outside the navigation (per page, pagination) of the table, we should reset the pagination to page 0
      const shouldResetPage = tableCompositeState.page === nextProps.tableCompositeState.page
        && tableCompositeState.perPage === nextProps.tableCompositeState.perPage;

      this.props.onModifyData(shouldResetPage, nextProps.tableCompositeState, tableCompositeState);
    }
  }

  componentWillUnmount() {
    if (this.props.onUnmount) {
      this.props.onUnmount();
    }
  }

  private hastableCompositeStateChanged(currentTableCompositeState: ITableCompositeState, nextTableCompositeState: ITableCompositeState): boolean {
    return !!currentTableCompositeState && (
      currentTableCompositeState.filter !== nextTableCompositeState.filter
      || currentTableCompositeState.perPage !== nextTableCompositeState.perPage
      || currentTableCompositeState.page !== nextTableCompositeState.page
      || currentTableCompositeState.sortState.attribute !== nextTableCompositeState.sortState.attribute
      || currentTableCompositeState.sortState.order !== nextTableCompositeState.sortState.order
      || (_.isEmpty(currentTableCompositeState.predicates) && !_.isEmpty(nextTableCompositeState.predicates))
      || _.some(
        currentTableCompositeState.predicates,
        (attributeValue: any, attributeName: string) => attributeValue !== nextTableCompositeState.predicates[attributeName],
      )
    );
  }

  private buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates } = this.props;

    const filterBoxConnected: JSX.Element = actionBar && filter
      ? (
        <div className='coveo-table-actions'>
          <FilterBoxConnected
            {...filter}
            id={getTableChildComponentId(this.props.id, TableChildComponent.FILTER)}
            key={getTableChildComponentId(this.props.id, TableChildComponent.FILTER)} />
        </div>
      )
      : null;

    const predicatesConnected: JSX.Element = actionBar && predicates
      ? (
        <div className='coveo-table-actions predicate-filters'>
          {predicates.map((predicate: ITablePredicate, i: number) => {
            const predicateId = `${getTableChildComponentId(this.props.id, TableChildComponent.PREDICATE)}${predicate.attributeName}`;
            const containerClasses = i ? ['ml1'] : [''];

            return (
              <DropdownSearchConnected
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
          })}
        </div>
      )
      : null;

    return actionBar
      ? (
        <ActionBarConnected
          {...actionBar}
          id={getTableChildComponentId(this.props.id, TableChildComponent.ACTION_BAR)}>
          {predicatesConnected}
          {filterBoxConnected}
        </ActionBarConnected>
      )
      : null;
  }

  private buildTableHeader(): JSX.Element {
    const tableHeaderCells: ITableHeaderCellOwnProps[] = this.props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
      const id = `${getTableChildComponentId(this.props.id, TableChildComponent.TABLE_HEADER_CELL)}${headingAttribute.attributeName}`;
      const title = headingAttribute.titleFormatter(headingAttribute.attributeName);
      const tableSortInformation = !!headingAttribute.sort
        ? { tableId: this.props.id, attributeToSort: headingAttribute.attributeName }
        : {};

      return { id, title, ...tableSortInformation };
    });

    const headerClass = classNames(
      'mod-no-border-top',
      { 'mod-deactivate-pointer': !!this.props.tableCompositeState.isLoading }
    );

    return (
      <TableHeader
        headerClass={headerClass}
        columns={[...tableHeaderCells, { title: '' }]}
        connectCell />
    );
  }

  private buildTableHeadingRowContent(
    attributeValue: any,
    attributeName: string,
    tableCoordinate: string,
    attributeFormatter?: IAttributeFormatter,
  ): JSXRenderable {
    return attributeFormatter
      ? <td key={tableCoordinate}>{attributeFormatter(attributeValue, attributeName)}</td>
      : <td key={tableCoordinate}>{convertUndefinedAndNullToEmptyString(attributeValue)}</td>;
  }

  private buildTableBody(): JSX.Element[] {
    const tableData = this.props.tableCompositeState.data || this.props.initialTableData;
    return tableData.displayedIds.map((id: string, yPosition: number): JSX.Element => {
      const rowData: ITableRowData = tableData.byId[id];
      const rowWrapperId = `${getTableChildComponentId(this.props.id, TableChildComponent.TABLE_ROW_WRAPPER)}${rowData.id}`;
      const headingAndCollapsibleId = `${getTableChildComponentId(this.props.id, TableChildComponent.TABLE_HEADING_ROW)}${rowData.id}`;
      const collapsibleRowKey = `${getTableChildComponentId(this.props.id, TableChildComponent.TABLE_COLLAPSIBLE_ROW)}${rowData.id}`;
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
            nbColumns={this.props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}>
            {collapsibleData}
          </TableCollapsibleRowConnected>
        )
        : null;

      const tableRowWrapperClasses = classNames({ 'table-body-loading': !!this.props.tableCompositeState.isLoading });
      return (
        <TableRowWrapper key={rowWrapperId} className={tableRowWrapperClasses}>
          <TableHeadingRowConnected
            id={headingAndCollapsibleId}
            key={headingAndCollapsibleId}
            tableId={this.props.id}
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

  private buildBlankSlate(): JSX.Element {
    const { tableCompositeState } = this.props;
    const tableData = tableCompositeState.data || this.props.initialTableData;
    const {
      blankSlateDefault,
      blankSlateNoResultsOnAction,
      blankSlateOnError,
    } = this.props;

    let blankSlatePropsToUse: IBlankSlateProps;

    if (tableData.displayedIds.length
      || this.props.tableCompositeState.isLoading) {
      return null;
    }

    if (tableCompositeState.filter || _.some(tableCompositeState.predicates, (value: any) => !_.isUndefined(value))) {
      blankSlatePropsToUse = blankSlateNoResultsOnAction || blankSlateDefault;
    } else if (tableCompositeState.isInError) {
      blankSlatePropsToUse = blankSlateOnError || blankSlateDefault;
    } else {
      blankSlatePropsToUse = blankSlateDefault;
    }

    return <BlankSlate {...blankSlatePropsToUse} />;
  }

  private buildNavigation(): JSX.Element {
    const tableData = this.props.tableCompositeState.data || this.props.initialTableData;

    return !!this.props.navigation ? (
      <NavigationConnected
        {...this.props.navigation}
        totalEntries={tableData.totalEntries}
        totalPages={tableData.totalPages}
        id={getTableChildComponentId(this.props.id, TableChildComponent.NAVIGATION)}
        loadingIds={[getTableChildComponentId(this.props.id, TableChildComponent.LOADING_NAVIGATION)]}
      />
    ) : null;
  }

  private buildLastUpdated(): JSX.Element {
    return <LastUpdatedConnected
      label={this.props.lastUpdatedLabel}
      id={getTableChildComponentId(this.props.id, TableChildComponent.LAST_UPDATED)} />;
  }

  private buildLoadingRow(): JSX.Element {
    return this.isInitialLoad ? (
      <tbody className='loading-row'>
        <tr>
          <td colSpan={this.props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}>
            <Loading />
          </td>
        </tr>
      </tbody>
    ) : null;
  }

  render() {
    const tableClasses = classNames(
      'mod-collapsible-rows',
      'mod-align-header',
      {
        'mod-loading-content': !!(this.props.tableCompositeState && this.props.tableCompositeState.isLoading),
        'loading-component': this.isInitialLoad,
      },
    );

    return (
      <div className='table-container'>
        {this.buildActionBar()}
        <table className={tableClasses}>
          {this.buildLoadingRow()}
          {this.buildTableHeader()}
          {this.buildTableBody()}
        </table>
        {this.buildBlankSlate()}
        {this.buildNavigation()}
        {this.buildLastUpdated()}
      </div>
    );
  }
};
