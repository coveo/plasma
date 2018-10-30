import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {turnOffLoading} from '../loading/LoadingActions';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';
import {NavigationConnected} from '../navigation/NavigationConnected';
import {TableWithPaginationActions} from './actions/TablePaginationActions';
import {ITableHOCOwnProps} from './TableHOC';

export interface ITableWithPaginationConfig {
    sliceData?: (data: any[], startingIndex: number, endingIndex: number) => any[];
    isServer?: boolean;
}

export interface ITableWithPaginationOwnProps {}

export interface ITableWithPaginationStateProps {
    totalEntries: number;
    totalPages: number;
    pageNb: number;
    perPage: number;
}

export interface ITableWithPaginationDispatchProps {
    onMount: () => void;
    onUnmount: () => void;
}

export interface ITableWithPaginationProps extends Partial<ITableWithPaginationStateProps>,
    Partial<ITableWithPaginationDispatchProps> {}

const TableWithPaginationPropsToOmit = keys<ITableWithPaginationStateProps>();
const TableWithPaginationConfigToOmit = keys<ITableWithPaginationConfig>();

const defaultSliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export const tableWithPagination = (config: ITableWithPaginationConfig & Partial<INavigationOwnProps & INavigationChildrenProps> = {}) => (Component: (React.ComponentClass<ITableHOCOwnProps> | React.StatelessComponent<ITableHOCOwnProps>)): React.ComponentClass<ITableWithPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps & ITableWithPaginationOwnProps): ITableWithPaginationStateProps | ITableHOCOwnProps => {
        const paginationState = _.findWhere(state.paginationComposite, {id: `pagination-${ownProps.id}`});
        const perPageState = _.findWhere(state.perPageComposite, {id: ownProps.id}) || {perPage: 20};
        const tablePaginationState = _.findWhere(state.tableHOCPagination, {id: ownProps.id});

        if (paginationState && perPageState) {
            const length = config.isServer
                ? tablePaginationState && tablePaginationState.count || 0
                : ownProps.data && ownProps.data.length || 0;

            const startingIndex = paginationState.pageNb * perPageState.perPage;
            const endingIndex = startingIndex + perPageState.perPage;
            const slice = config.sliceData || defaultSliceData;

            return {
                pageNb: paginationState.pageNb,
                perPage: perPageState.perPage,
                totalEntries: length,
                totalPages: Math.ceil(length / perPageState.perPage),
                data: config.isServer ? ownProps.data : ownProps.data && slice(ownProps.data, startingIndex, endingIndex),
            };
        }
        return {
            totalEntries: 0,
            totalPages: 0,
            perPage: 0,
            pageNb: 0,
        };
    };

    const mapDispatchToProps = (
        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
        ownProps: ITableHOCOwnProps,
    ): ITableWithPaginationDispatchProps => ({
        onMount: () => {
            dispatch(turnOffLoading([`loading-${ownProps.id}`]));
            dispatch(TableWithPaginationActions.add(ownProps.id));
        },
        onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),
    });

    @ReduxConnect(mapStateToProps, mapDispatchToProps)
    class TableWithPagination extends React.Component<ITableHOCOwnProps & ITableWithPaginationProps> {

        componentDidMount() {
            this.props.onMount();
        }

        componentWillUnmount() {
            this.props.onUnmount();
        }

        componentDidUpdate(prevProps: ITableWithPaginationProps) {
            if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {
                callIfDefined(this.props.onUpdate);
            }
        }

        render() {
            const newProps = {..._.omit(this.props, [...TableWithPaginationPropsToOmit])};
            return (
                <Component {...newProps}>
                    {this.props.children}
                    <NavigationConnected
                        id={this.props.id}
                        {..._.pick(this.props, [TableWithPaginationPropsToOmit])}
                        {..._.omit(config, [...TableWithPaginationConfigToOmit])}
                        loadingIds={[this.props.id]}
                    />
                </Component>
            );
        }
    }

    return TableWithPagination;
};
