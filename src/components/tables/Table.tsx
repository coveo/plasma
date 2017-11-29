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
import { ILastUpdatedProps } from '../lastUpdated/LastUpdated';
import { LastUpdatedConnected } from '../lastUpdated/LastUpdatedConnected';
import * as classNames from 'classnames';
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
  sort?: boolean | ((attributeValue: any) => string);
  attributeFormatter?: IAttributeFormatter;
}

export interface ITablePredicate {
  props: IDropdownSearchProps;
  attributeName: string;
  attributeNameFormatter: IAttributeNameFormatter;
};

export interface ITableOwnProps extends React.ClassAttributes<Table> {
  id: string;
  initialTableData: ITableData;
  headingAttributes: ITableHeadingAttribute[];
  getActions?: () => IActionOptions[];
  collapsibleFormatter?: (tableRowData: ITableRowData) => JSXRenderable;
  modifyState?: (state: ITableState, newTableData?: any) => ITableState;
  serverMode?: {
    url: (ownProps?: ITableOwnProps, tableState?: ITableState) => string;
    rawDataToTableData: (data: any, ownProps?: ITableOwnProps, tableState?: ITableState) => ITableData;
  };
  customMode?: {
    thunkActionCreator: (tableOwnProps: ITableOwnProps) => ((dispatch: any, getState?: () => any) => void);
  };
  blankSlates: {
    noResults: IBlankSlateProps;
    noResultsOnFilterOrPredicates?: IBlankSlateProps;
    noResultsOnError?: IBlankSlateProps;
  };
  actionBar?: IActionBarProps;
  filter?: IFilterBoxProps;
  predicates?: ITablePredicate[];
  navigationChildren?: INavigationChildrenProps;
  lastUpdated?: ILastUpdatedProps;
  styles?: {
    tableHeaderClass?: string[]
    tableActionClasses?: string[];
    navigationClasses?: string[];
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
      if (tableState.page !== nextProps.tableState.page) {
        this.props.onModifyData(tableState);
      } else {
        this.props.onModifyData(tableState);
        this.props.onResetPage();
      }
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

  buildLoadingRow(): JSX.Element {
    return <LoadingConnected
      id={getChildComponentId(this.props.id, TableChildComponent.LOADING_TABLE)}
      shouldHide={!this.props.tableState.isLoading}
      rowStyle={{ nbColumns: this.props.headingAttributes.length + 1 }} />;
  }

  buildLoadingNavigation(): JSX.Element {
    return <LoadingConnected
      id={getChildComponentId(this.props.id, TableChildComponent.LOADING_NAVIGATION)}
      shouldHide={!this.props.tableState.isLoading} />;
  }

  buildActionBar(): JSX.Element {
    const { actionBar, filter, predicates, styles } = this.props;

    const filterBoxConnected: JSX.Element = actionBar && filter
      ? <FilterBoxConnected
        {...filter}
        id={getChildComponentId(this.props.id, TableChildComponent.FILTER)} />
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
    const tableHeaderCells: ITableHeaderCellOwnProps[] = this.props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
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
        columns={[...tableHeaderCells, { title: '' }]}
        connectCell />
    );
  }

  buildTableHeadingRowContent(
    attributeValue: any,
    attributeName: string,
    attributeFormatter?: IAttributeFormatter,
  ): JSXRenderable {
    return attributeFormatter
      ? <td>{attributeFormatter(attributeValue, attributeName)}</td>
      : <td>{convertUndefinedAndNullToEmptyString(attributeValue)}</td>;
  }

  buildTableBody(): JSX.Element[] {
    const tableData = this.props.tableState.data || this.props.initialTableData;
    return tableData.displayedIds.map((id: string): JSX.Element => {
      const rowData: ITableRowData = tableData.byId[id];
      const toggleArrowCellCount = 1;
      const rowWrapperId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_ROW_WRAPPER)}-${rowData.id}`;
      const headingRowId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_HEADING_ROW)}-${rowData.id}`;
      const collapsibleRowId = `${getChildComponentId(this.props.id, TableChildComponent.TABLE_COLLAPSIBLE_ROW)}-${rowData.id}`;
      const collapsibleData = this.props.collapsibleFormatter && this.props.collapsibleFormatter(rowData);

      return (
        <TableRowWrapper key={rowWrapperId}>
          <TableHeadingRowConnected
            id={headingRowId}
            key={headingRowId}
            isCollapsible={!!collapsibleData}
            onClickCallback={(e: React.MouseEvent<any>) => this.props.onRowClick([])}>
            {this.props.headingAttributes.map((headingAttribute: ITableHeadingAttribute) => {
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

    if (tableData.displayedIds.length || _.isEmpty(this.props.blankSlates)) {
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

    return (
      <NavigationConnected
        {...this.props.navigationChildren}
        totalEntries={tableData.totalEntries}
        totalPages={tableData.totalPages}
        id={getChildComponentId(this.props.id, TableChildComponent.NAVIGATION)}
        loadingIds={[`loading-${getChildComponentId(this.props.id, TableChildComponent.NAVIGATION)}`]} />
    );
  }

  buildLastUpdated(): JSX.Element {
    return this.props.lastUpdated
      ? <LastUpdatedConnected
        {...this.props.lastUpdated}
        id={getChildComponentId(this.props.id, TableChildComponent.LAST_UPDATED)} />
      : null;
  }

  render() {
    return (
      <div>
        {this.buildActionBar()}
        <table className='mod-collapsible-rows'>
          {this.buildTableHeader()}
          {this.buildTableBody()}
          {this.buildLoadingRow()}
        </table>
        {this.buildBlankSlate()}
        {this.buildNavigation()}
        {this.buildLastUpdated()}
      </div>
    );
  }
};
