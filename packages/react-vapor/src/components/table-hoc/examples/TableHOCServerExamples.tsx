import * as $ from 'jquery';
import * as moment from 'moment';
import * as React from 'react';
import {connect} from 'react-redux';
import {RouteComponentProps, withRouter} from 'react-router';
import * as _ from 'underscore';

import {ExampleComponent} from '../../../../docs/src/components/ComponentsInterface';
import {withServerSideProcessing} from '../../../hoc/withServerSideProcessing/withServerSideProcessing';
import {DateUtils} from '../../../utils/DateUtils';
import {IDispatch, IReduxAction, IThunkAction} from '../../../utils/ReduxUtils';
import {SELECTION_BOXES_LONG} from '../../datePicker/examples/DatePickerExamplesCommon';
import {LastUpdated} from '../../lastUpdated/LastUpdated';
import {turnOffLoading} from '../../loading/LoadingActions';
import {Section} from '../../section/Section';
import {TableWithPaginationActions} from '../actions/TableWithPaginationActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';
import {TableHOC} from '../TableHOC';
import {ITableHOCCompositeState, TableHOCUtils} from '../TableHOCUtils';
import {TableRowConnected} from '../TableRowConnected';
import {TableRowNumberColumn} from '../TableRowNumberColumn';
import {TableRowNumberHeader} from '../TableRowNumberHeader';
import {tableWithActions} from '../TableWithActions';
import {tableWithBlankSlate} from '../TableWithBlankSlate';
import {tableWithDatePicker} from '../TableWithDatePicker';
import {tableWithFilter} from '../TableWithFilter';
import {tableWithPagination} from '../TableWithPagination';
import {tableWithPredicate} from '../TableWithPredicate';
import {tableWithSort} from '../TableWithSort';
import {tableWithUrlState} from '../TableWithUrlState';

type TableHOCServerProps = RouteComponentProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

export interface IExampleRowData {
    city: string;
    email: string;

    username: string;
    dateOfBirth: Date;
    id: string;
}

export interface IExampleServerTableState {
    data: IExampleRowData[];
    isLoading: boolean;
}

interface ISetExampleDataPayload {
    data: any[];
}

interface ISetExampleIsLoadingPayload {
    isLoading: boolean;
}

type IExamplePayload = ISetExampleDataPayload | ISetExampleIsLoadingPayload;

export const TableHOCServerExamples: ExampleComponent = () => <TableHOCServer />;

TableHOCServerExamples.title = 'TableHOC server';

// start-print
export const TableHOCServerExampleId = 'complex-example';

const tableActions = (username: string) => [
    {
        primary: true,
        icon: 'edit',
        name: 'edit',
        enabled: true,
        trigger: () => alert(username),
        callOnDoubleClick: true,
    },
];

const generateRows = (allData: IExampleRowData[]) =>
    allData.map((data: IExampleRowData, i: number) => (
        <TableRowConnected
            id={data.username}
            tableId={TableHOCServerExampleId}
            key={data.username}
            actions={tableActions(data.username)}
            isMultiselect
            disabled={i % 3 === 0}
            collapsible={{content: <div className="py2">👋</div>}}
        >
            <TableRowNumberColumn number={i + 1} />
            <td key="city">{data.city}</td>
            <td key="email">{data.email.toLowerCase()}</td>
            <td key="username">{data.username.toLowerCase()}</td>
            <td key="date-of-birth">{data.dateOfBirth.toLocaleDateString()}</td>
        </TableRowConnected>
    ));

const renderHeader = () => (
    <thead>
        <tr>
            <TableRowNumberHeader />
            <TableHeaderWithSort id="address.city" tableId={TableHOCServerExampleId}>
                City
            </TableHeaderWithSort>
            <TableHeaderWithSort id="email" tableId={TableHOCServerExampleId}>
                Email
            </TableHeaderWithSort>
            <TableHeaderWithSort id="username" tableId={TableHOCServerExampleId} isDefault>
                Username
            </TableHeaderWithSort>
            <th key="date-of-birth">Date of Birth</th>
            <th>{/* Empty th for the collapsible */}</th>
        </tr>
    </thead>
);

const tablePredicates = [
    {
        id: 'address.city',
        prepend: <span className="mr1 text-medium-grey">City:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'Lebsackbury', value: 'Lebsackbury'},
        ],
    },
    {
        id: 'username',
        prepend: <span className="mr1 text-medium-grey">Username:</span>,
        values: [
            {displayValue: 'All', value: '', selected: true},
            {displayValue: 'bret', value: 'Bret'},
        ],
    },
];

const tableDatePickerConfig = {
    datesSelectionBoxes: SELECTION_BOXES_LONG,
    years: [...DateUtils.getPreviousYears(25), DateUtils.currentYear.toString()],
    initialDateRange: [
        moment()
            .subtract(25, 'years')
            .toDate(),
        moment().toDate(),
    ],
};

const mapStateToProps = (state: any) => ({
    isLoading: state.tableHOCExample.isLoading,
    serverData: state.tableHOCExample.data,
});
const mapDispatchToProps = (dispatch: IDispatch) => ({
    fetch: _.debounce(() => dispatch(TableHOCServerActions.fetchData()), 400),
});

const TableExampleDisconnected: React.FunctionComponent<TableHOCServerProps> = (props) => {
    const onUpdate = () => {
        props.fetch();
    };

    const updateUrl = (query: string) => {
        props.history.push({search: query});
    };

    return (
        <Section title="Server table with numbered rows">
            <span className="block my2 text-grey-7">
                Please note that the backend service doesn't support dates but we still make a request for every change
                in the date range.
            </span>
            <ServerTableComposed
                id={TableHOCServerExampleId}
                className="table table-numbered mod-collapsible-rows"
                data={props.serverData}
                renderBody={generateRows}
                tableHeader={renderHeader()}
                onUpdate={onUpdate}
                onUpdateUrl={updateUrl}
                isLoading={props.isLoading}
            >
                <LastUpdated time={new Date()} />
            </ServerTableComposed>
        </Section>
    );
};

const ServerTableComposed = _.compose(
    withServerSideProcessing,
    tableWithUrlState,
    tableWithBlankSlate({title: 'No data fetched from the server'}),
    tableWithPredicate({...tablePredicates[0]}),
    tableWithPredicate({...tablePredicates[1]}),
    tableWithFilter(),
    tableWithDatePicker({...(tableDatePickerConfig as any)}),
    tableWithSort(),
    tableWithPagination({perPageNumbers: [3, 5, 10]}),
    tableWithActions()
)(TableHOC);

const TableHOCServer = connect(
    mapStateToProps,

    mapDispatchToProps
)(withRouter(TableExampleDisconnected));

/* ACTIONS */

export const TableHOCServerActionsType = {
    setData: 'TABLE_HOC_SET_DATA',
    setIsLoading: 'TABLE_HOC_SET_IS_LOADING',
    fetch: 'TABLE_HOC_FETCH_DATA',
};

const setData = (data: any[]): IReduxAction<ISetExampleDataPayload> => ({
    type: TableHOCServerActionsType.setData,
    payload: {data},
});

const setIsLoading = (isLoading: boolean): IReduxAction<ISetExampleIsLoadingPayload> => ({
    type: TableHOCServerActionsType.setIsLoading,
    payload: {isLoading},
});

const fetchData = (): IThunkAction => (dispatch: IDispatch, getState) => {
    const compositeState: ITableHOCCompositeState = TableHOCUtils.getCompositeState(
        TableHOCServerExampleId,
        getState()
    );
    const [from, to] = _.map(compositeState.dateLimits, (limit) => limit && limit.toISOString());
    const params: any = {
        _page: compositeState.pageNb + 1,
        _limit: compositeState.perPage,
        _sort: compositeState.sortKey,
        _order: compositeState.sortAscending ? 'asc' : 'desc',
        q: compositeState.filter || undefined,
        from,
        to,
    };
    _.each(compositeState.predicates, (predicate: {id: string; value: string}) => {
        params[predicate.id] = predicate.value;
    });
    dispatch(setIsLoading(true));
    $.get('https://jsonplaceholder.typicode.com/users', params).done((response: any[], status, request) => {
        const count = request.getResponseHeader('x-total-count');
        const users = response.map((user: any) => ({
            city: user.address.city,
            username: user.username,
            email: user.email,
            dateOfBirth: moment()
                .subtract(user.address.city.length, 'years')
                .toDate(), // fake a year of birth
        }));
        dispatch(setData(users));
        dispatch(turnOffLoading([TableHOCServerExampleId]));
        dispatch(TableWithPaginationActions.setCount(TableHOCServerExampleId, count));
    });
};

export const TableHOCServerActions = {
    setData,
    setIsLoading,
    fetchData,
};

/* REDUCER */

export const TableHOCServerExampleReducer = (
    state: IExampleServerTableState = {data: [], isLoading: true},
    action: IReduxAction<IExamplePayload>
) => {
    if (action.type === TableHOCServerActionsType.setData) {
        const payload = action.payload as ISetExampleDataPayload;
        return {
            ...state,
            data: [...payload.data],
            isLoading: false,
        };
    }
    if (action.type === TableHOCServerActionsType.setIsLoading) {
        const payload = action.payload as ISetExampleIsLoadingPayload;
        return {
            ...state,
            isLoading: payload.isLoading,
        };
    }
    return state;
};
