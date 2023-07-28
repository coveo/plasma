import {ComponentType, PropsWithChildren, PureComponent} from 'react';
import {connect} from 'react-redux';
import {debounce, isBoolean, map, noop, omit, reduce} from 'underscore';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch, IThunkAction} from '../../utils/ReduxUtils';
import {UrlUtils} from '../../utils/UrlUtils';
import {applyDatePicker, changeDatePickerLowerLimit, changeDatePickerUpperLimit} from '../datePicker/DatePickerActions';
import {filterThrough} from '../filterBox/FilterBoxActions';
import {selectFlatSelect} from '../flatSelect';
import {selectListBoxOption} from '../listBox/ListBoxActions';
import {changePage} from '../navigation/pagination/NavigationPaginationActions';
import {changePerPage} from '../navigation/perPage/NavigationPerPageActions';
import {PaginationUtils} from '../pagination';
import {TableHeaderActions} from './actions/TableHeaderActions';
import {ITableHOCOwnProps} from './TableHOC';
import {ITableHOCPredicateValue, TableHOCUtils} from './utils/TableHOCUtils';

export interface TableWithUrlStateProps {
    onUpdateUrl: (queryString: string) => void;
}

enum SortOrderValues {
    ascending = 'asc',
    descending = 'desc',
}

export const Params = {
    pageNumber: 'page',
    pageSize: 'pageSize',
    sortKey: 'sortBy',
    sortOrder: 'order',
    lowerDateLimit: 'from',
    upperDateLimit: 'to',
    filter: 'q',
};

function tableWithUrlState<P extends ITableHOCOwnProps>(Component: ComponentType<PropsWithChildren<P>>) {
    type Props = P &
        TableWithUrlStateProps &
        ReturnType<typeof mapStateToProps> &
        ReturnType<typeof mapDispatchToProps>;

    const mapStateToProps = (state: PlasmaState, ownProps: P) => ({
        query: getQuery(state, ownProps.id),
    });

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: P) => ({
        initializeFromUrl: () => dispatch(updateTableStateFromUrl(ownProps.id)),
    });

    class WrappedComponentDisconnected extends PureComponent<Props> {
        static displayName = `withUrlState(${Component.displayName})`;

        render() {
            const wrappedProps = omit(this.props, 'onUpdate', 'onUpdateUrl', 'query', 'initializeFromUrl');
            return <Component {...(wrappedProps as P)} onUpdate={this.onUpdate} />;
        }

        componentDidMount() {
            this.props.initializeFromUrl();
        }

        private onUpdate = () => {
            this.updateUrl(this.props.query);
            this.props.onUpdate?.();
        };

        private updateUrl = debounce(this.props.onUpdateUrl || noop, 100);
    }

    return connect(
        mapStateToProps,
        mapDispatchToProps,
        // @ts-ignore
    )(WrappedComponentDisconnected as any);
}

const getQuery = (state: PlasmaState, tableId: string): string => {
    let order: SortOrderValues.ascending | SortOrderValues.descending;
    const tableState = TableHOCUtils.getCompositeState(tableId, state);
    const [from, to] = map(tableState.dateLimits, (limit) => limit && limit.toISOString());

    if (isBoolean(tableState.sortAscending)) {
        order = tableState.sortAscending ? SortOrderValues.ascending : SortOrderValues.descending;
    }

    return UrlUtils.toQueryString({
        [Params.filter]: tableState.filter || undefined,
        [Params.pageNumber]: tableState.pageNb,
        [Params.pageSize]: tableState.perPage,
        [Params.sortKey]: tableState.sortKey,
        [Params.sortOrder]: order,
        ...reduce(
            tableState.predicates,
            (memo, {id, value}: ITableHOCPredicateValue) => ({
                ...memo,
                [id]: value,
            }),
            {},
        ),
        [Params.lowerDateLimit]: from || undefined,
        [Params.upperDateLimit]: to || undefined,
    });
};

const updateTableStateFromUrl =
    (tableId: string): IThunkAction =>
    (dispatch: IDispatch, getState) => {
        const urlParams = UrlUtils.getSearchParams();
        const possiblePredicates = TableHOCUtils.getPredicateIds(tableId, getState());

        Object.keys(urlParams)
            .filter((key) => possiblePredicates.includes(key))
            .forEach((key) =>
                dispatch(selectListBoxOption(TableHOCUtils.getPredicateId(tableId, key), false, urlParams[key])),
            );

        if (urlParams.hasOwnProperty(Params.lowerDateLimit)) {
            dispatch(
                changeDatePickerLowerLimit(
                    TableHOCUtils.getDatePickerId(tableId),
                    new Date(urlParams[Params.lowerDateLimit]),
                ),
            );
        }

        if (urlParams.hasOwnProperty(Params.upperDateLimit)) {
            dispatch(
                changeDatePickerUpperLimit(
                    TableHOCUtils.getDatePickerId(tableId),
                    new Date(urlParams[Params.upperDateLimit]),
                ),
            );
        }

        if (urlParams.hasOwnProperty(Params.lowerDateLimit) || urlParams.hasOwnProperty(Params.upperDateLimit)) {
            dispatch(applyDatePicker(tableId));
        }

        if (urlParams.hasOwnProperty(Params.filter)) {
            dispatch(filterThrough(tableId, urlParams[Params.filter]));
        }

        if (urlParams.hasOwnProperty(Params.sortKey) && urlParams.hasOwnProperty(Params.sortOrder)) {
            dispatch(
                TableHeaderActions.sortTable(
                    urlParams[Params.sortKey],
                    urlParams[Params.sortOrder] === SortOrderValues.ascending,
                ),
            );
        }

        if (urlParams.hasOwnProperty(Params.pageSize)) {
            dispatch(changePerPage(tableId, urlParams[Params.pageSize]));
            dispatch(
                selectFlatSelect(PaginationUtils.getPaginationPerPageId(tableId), urlParams[Params.pageSize] + ''),
            );
        }

        if (urlParams.hasOwnProperty(Params.pageNumber)) {
            dispatch(changePage(TableHOCUtils.getPaginationId(tableId), urlParams[Params.pageNumber]));
        }
    };

/**
 * @deprecated Use Mantine instead
 */
export {tableWithUrlState, Params as TableWithUrlStateParameters};
