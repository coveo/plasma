import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {turnOffLoading} from '../loading/LoadingActions';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';
import {NavigationConnected} from '../navigation/NavigationConnected';
import {NavigationSelectors} from '../navigation/NavigationSelectors';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions';
import {IMaybeServerConfig, ITableHOCOwnProps} from './TableHOC';
import {TableHOCUtils} from './TableHOCUtils';
import {TableSelectors} from './TableSelectors';

export interface ITableWithPaginationConfig extends IMaybeServerConfig {}

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

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export const tableWithPagination = (config: ITableWithPaginationConfig & Partial<INavigationOwnProps & INavigationChildrenProps> = {}) => (Component: (React.ComponentClass<ITableHOCOwnProps> | React.StatelessComponent<ITableHOCOwnProps>)): React.ComponentClass<ITableWithPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps): ITableWithPaginationStateProps | ITableHOCOwnProps => {
        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});
        const perPage = NavigationSelectors.getPerPage(state, {id: ownProps.id});
        const length = TableSelectors.getDataCount(state, {id: ownProps.id, data: ownProps.data, isServer: config.isServer});

        const startingIndex = pageNb * perPage;
        const endingIndex = startingIndex + perPage;

        return {
            pageNb,
            perPage,
            totalEntries: length,
            totalPages: Math.ceil(length / perPage),
            data: config.isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
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
            const newProps = _.omit(this.props, [...TableWithPaginationPropsToOmit]);
            return (
                <Component {...newProps}>
                    <NavigationConnected
                        id={this.props.id}
                        {..._.pick(this.props, TableWithPaginationPropsToOmit)}
                        {..._.omit(config, [...TableWithPaginationConfigToOmit])}
                        loadingIds={[this.props.id]}
                    />
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithPagination;
};
