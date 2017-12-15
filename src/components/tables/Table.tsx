import { IActionOptions } from '../actions/Action';
import { IActionBarProps } from '../actions/ActionBar';
import { IBlankSlateProps } from '../blankSlate/BlankSlate';
import { IDropdownSearchProps } from '../dropdownSearch/DropdownSearch';
import { IFilterBoxProps } from '../filterBox/FilterBox';
import * as React from 'react';
import * as _ from 'underscore';
import { ITableCompositeState, ITableData } from './TableReducers';
import { ITableDispatchProps } from './TableConnected';
import { DEFAULT_TABLE_DATA } from './TableConstants';
import { JSXRenderable } from '../../utils/JSXUtils';
import { INavigationChildrenProps } from '../navigation/Navigation';
import * as classNames from 'classnames';
import { ThunkAction } from '../../utils/ReduxUtils';
import { TableChildActionBar } from './table-children/TableChildActionBar';
import { TableChildHeader } from './table-children/TableChildHeader';
import { TableChildLoadingRow } from './table-children/TableChildLoadingRow';
import { TableChildBlankSlate } from './table-children/TableChildBlankSlate';
import { TableChildNavigation } from './table-children/TableChildNavigation';
import { TableChildLastUpdated } from './table-children/TableChildLastUpdated';
import { TableChildBody } from './table-children/TableChildBody';

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
  headingAttributes: ITableHeadingAttribute[];
  blankSlateDefault: IBlankSlateProps;
  tableContainerClasses?: string[];
  initialTableData?: ITableData;
  collapsibleFormatter?: (tableRowData: ITableRowData, props: ITableProps) => JSXRenderable;
  actionBar?: true | IActionBarProps;
  getActions?: (rowData?: ITableRowData, props?: ITableProps) => IActionOptions[];
  blankSlateNoResultsOnAction?: IBlankSlateProps;
  blankSlateOnError?: IBlankSlateProps;
  filter?: true | IFilterBoxProps;
  filterMethod?: (attributeValue: any, props: ITableOwnProps) => boolean;
  predicates?: ITablePredicate[];
  navigation?: true | INavigationChildrenProps;
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

    // Only use the initial load strategy for tables that do not provide initialTableData in their own props
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
      /**
       *  A count is utilized for a clean loading behavior during the initial load of the table
       *  The first count occurs after mount
       *  The second count occurs after the real data has loaded in the table
       *  And the initial load is completed after the above two counts
       */
      this.isInitialLoad = false;
    }
  }

  componentWillReceiveProps(nextProps: ITableProps) {
    const { tableCompositeState } = this.props;

    if (this.hasTableCompositeStateChanged(tableCompositeState, nextProps.tableCompositeState)) {
      // if the change occurs outside the navigation (per page, pagination), reset the pagination 0
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

  private hasTableCompositeStateChanged(currentTableCompositeState: ITableCompositeState, nextTableCompositeState: ITableCompositeState): boolean {
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
      <div className={classNames('table-container', this.props.tableContainerClasses)}>
        <TableChildActionBar {...this.props} />
        <table className={tableClasses}>
          <TableChildLoadingRow {...this.props} isInitialLoad={this.isInitialLoad} />
          <TableChildHeader {...this.props} />
          {TableChildBody(this.props)}
        </table>
        <TableChildBlankSlate {...this.props} />
        <TableChildNavigation {...this.props} />
        <TableChildLastUpdated {...this.props} />
      </div>
    );
  }
};
