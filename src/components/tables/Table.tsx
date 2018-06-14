import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {JSXRenderable} from '../../utils/JSXUtils';
import {IThunkAction} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {IActionBarProps} from '../actions/ActionBar';
import {IBlankSlateProps} from '../blankSlate/BlankSlate';
import {IContentProps} from '../content/Content';
import {IDatePickerDropdownProps} from '../datePicker/DatePickerDropdown';
import {IDropdownOption, IDropdownSearchProps} from '../dropdownSearch/DropdownSearch';
import {IFilterBoxProps} from '../filterBox/FilterBox';
import {INavigationChildrenProps} from '../navigation/Navigation';
import {TableChildActionBar} from './table-children/TableChildActionBar';
import {TableChildBlankSlate} from './table-children/TableChildBlankSlate';
import {ITableBodyInheritedFromTableProps, TableChildBody} from './table-children/TableChildBody';
import {TableChildHeader} from './table-children/TableChildHeader';
import {TableChildLastUpdated} from './table-children/TableChildLastUpdated';
import {TableChildLoadingRow} from './table-children/TableChildLoadingRow';
import {TableChildNavigation} from './table-children/TableChildNavigation';
import {DEFAULT_TABLE_DATA, DEFAULT_TABLE_PER_PAGE, TableSortingOrder} from './TableConstants';
import {ITableCompositeState, ITableData} from './TableReducers';

export interface IData {
    id: string;
    [attribute: string]: any;
}

export interface ITableRowData {
    [id: string]: IData;
}

export type IAttributeValue = any;
export interface IPredicateAttributes {
    [attributeName: string]: IAttributeValue;
}

export type IAttributeFormatter = (attributeValue: any, attributeName?: string, data?: IData) => JSXRenderable;
export type IAttributeNameOrValueFormatter = (attributeNameOrValue: string, data?: IData) => React.ReactNode;

export interface ITableHeadingAttribute {
    attributeName: string;
    titleFormatter: IAttributeNameOrValueFormatter | IAttributeFormatter;
    filterFormatter?: IAttributeNameOrValueFormatter; // use this for filter if you render JSX through the attribute formatter
    sort?: boolean;
    sortByMethod?: (attributeValue: any, data?: IData) => string;
    attributeFormatter?: IAttributeFormatter;
}

export interface ITablePredicate {
    props: IDropdownSearchProps;
    attributeName: string;
    attributeNameFormatter?: IAttributeNameOrValueFormatter;
}

export interface ITableOwnProps extends React.ClassAttributes<Table>, ITableBodyInheritedFromTableProps {
    id: string;
    blankSlateDefault: IBlankSlateProps;
    tableContainerClasses?: string[];
    tableClasses?: string[];
    tableBodyClasses?: string[];
    initialTableData?: ITableData;
    actionBar?: true | IActionBarProps;
    blankSlateNoResultsOnAction?: IBlankSlateProps;
    blankSlateOnError?: IBlankSlateProps;
    datePicker?: IDatePickerDropdownProps;
    filter?: true | IFilterBoxProps;
    filterMethod?: (attributeValue: any, props: ITableOwnProps, filterValue: string) => boolean;
    predicates?: ITablePredicate[];
    prefixContent?: IContentProps;
    navigation?: true | INavigationChildrenProps;
    lastUpdatedLabel?: string;
    withoutLastUpdated?: boolean;
    withFixedHeader?: boolean;
    handleOnRowClick?: (actions: IActionOptions[], rowData: IData) => void;
    rowsMultiSelect?: boolean;
    manual?: (
        tableOwnProps: ITableOwnProps,
        shouldResetPage: boolean,
        tableCompositeState: ITableCompositeState,
        previousTableCompositeState: ITableCompositeState,
    ) => IThunkAction;
}

export interface ITableCompositeStateProps {
    readonly tableCompositeState?: ITableCompositeState;
    actions?: IActionOptions[];
}

export interface ITableDispatchProps {
    onDidMount?: () => void;
    onUnmount?: () => void;
    onWillUpdate?: (actions: IActionOptions[]) => void;
    onModifyData?: (
        shouldResetPage: boolean,
        tableCompositeState: ITableCompositeState,
        previousTableCompositeState?: ITableCompositeState,
    ) => void;
    onPredicateOptionClick?: (predicateId: string, option: IDropdownOption) => void;
    onRowClick?: (actions: IActionOptions[], numberOfSelectedIds: number) => void;
}

export interface ITableProps extends ITableOwnProps, ITableCompositeStateProps, ITableDispatchProps {}

export class Table extends React.Component<ITableProps> {
    private isInitialLoad: boolean;

    static defaultProps = {
        tableCompositeState: {
            sortState: {
                attribute: undefined,
                order: TableSortingOrder.UNSORTED,
            },
            filter: '',
            page: 0,
            perPage: DEFAULT_TABLE_PER_PAGE,
        } as Partial<ITableCompositeState>,
        initialTableData: DEFAULT_TABLE_DATA,
        rowsMultiSelect: false,
    } as Partial<ITableOwnProps>;

    constructor(props: ITableProps) {
        super(props);

        // tslint:disable
        // Only use the initial load strategy for tables that do not provide initialTableData in their own props
        this.isInitialLoad = props.initialTableData == DEFAULT_TABLE_DATA;
        // tslint:enable
    }

    componentDidMount() {
        if (this.props.onDidMount) {
            this.props.onDidMount();
        }
    }

    componentWillUpdate(nextProps: ITableProps) {
        if (this.props.onWillUpdate && JSON.stringify(nextProps.actions) !== JSON.stringify(this.props.actions)) {
            this.props.onWillUpdate(nextProps.actions);
        }
    }

    componentDidUpdate() {
        if (this.isInitialLoad && JSON.stringify(this.props.tableCompositeState.data) !== JSON.stringify(DEFAULT_TABLE_DATA)) {
            this.isInitialLoad = false;
        }
    }

    componentWillReceiveProps(nextProps: ITableProps) {
        const {tableCompositeState} = this.props;

        if (this.hasTableCompositeStateChanged(tableCompositeState, nextProps.tableCompositeState)) {
            // if the change occurs outside the navigation (per page, pagination), reset the pagination to 0
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

    render() {
        const tableClasses = classNames(
            'mod-collapsible-rows',
            'mod-align-header',
            {
                'mod-loading-content': !!(this.props.tableCompositeState && this.props.tableCompositeState.isLoading),
                'loading-component': this.isInitialLoad,
            },
            this.props.tableClasses,
        );

        const tableBodyNode: React.ReactNode = this.shouldShowTableBody()
            ? this.getTableBody()
            : <TableChildBlankSlate {...this.props} />;

        const tableChildLastUpdatedNode: React.ReactNode = !this.props.withoutLastUpdated
            ? <TableChildLastUpdated {...this.props} />
            : null;

        return (
            <div className={classNames('table-container', this.props.tableContainerClasses)}>
                <TableChildActionBar {...this.props} />
                {this.setFixedHeaderWrapper(
                    <table id={`table-${this.props.id}`} className={tableClasses}>
                        <TableChildLoadingRow {...this.props} isInitialLoad={this.isInitialLoad} />
                        <TableChildHeader {...this.props} />
                        {tableBodyNode}
                    </table>,
                )}
                <TableChildNavigation {...this.props} />
                {tableChildLastUpdatedNode}
            </div>
        );
    }

    private setFixedHeaderWrapper(tableElement: React.ReactNode) {
        return this.props.withFixedHeader
            ? (
                <div className='fixed-header-table-container'>
                    <div className='fixed-header-table'>
                        {tableElement}
                    </div>
                </div>
            )
            : tableElement;
    }

    private hasTableCompositeStateChanged(
        currentTableCompositeState: ITableCompositeState,
        nextTableCompositeState: ITableCompositeState,
    ): boolean {
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
            || currentTableCompositeState.from !== nextTableCompositeState.from
            || currentTableCompositeState.to !== nextTableCompositeState.to
        );
    }

    private getTableBody() {
        const tableData = this.props.tableCompositeState.data || this.props.initialTableData;
        const numberOfSelectedIds: number = tableData.selectedIds ? tableData.selectedIds.length : 0;

        const tableBodyNode: React.ReactNode = tableData.displayedIds.map((id: string, yPosition: number): JSX.Element => {
            const currentRowData: IData = tableData.byId[id];

            return (
                <TableChildBody
                    key={id}
                    tableId={this.props.id}
                    rowData={currentRowData}
                    isLoading={this.props.tableCompositeState.isLoading}
                    getActions={(rowData?: IData) => (this.props.getActions && this.props.getActions(rowData)) || []}
                    headingAttributes={this.props.headingAttributes}
                    collapsibleFormatter={this.props.collapsibleFormatter}
                    onRowClick={(actions: IActionOptions[]) => this.props.onRowClick(actions, numberOfSelectedIds)}
                    handleOnRowClick={this.props.handleOnRowClick}
                    additionalRowClasses={this.props.additionalRowClasses}
                    isMultiSelect={this.props.rowsMultiSelect}
                />
            );
        });

        return this.props.collapsibleFormatter
            ? tableBodyNode
            : (
                <tbody className={classNames(this.props.tableBodyClasses)}>
                    {tableBodyNode}
                </tbody>
            );
    }

    private shouldShowTableBody(): boolean {
        const tableData = this.props.tableCompositeState.data || this.props.initialTableData;

        return !this.props.tableCompositeState.isInError
            && !!(tableData.displayedIds.length || this.props.tableCompositeState.isLoading || this.isInitialLoad);
    }
}
