import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IReduxAction, ReduxConnect} from '../../utils/ReduxUtils';
import {turnOffLoading} from '../loading/LoadingActions';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';
import {NavigationConnected} from '../navigation/NavigationConnected';
import {NavigationSelectors} from '../navigation/NavigationSelectors';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableHOCUtils} from './TableHOCUtils';
import {TableSelectors} from './TableSelectors';

export interface ITableWithPaginationConfig
    extends WithServerSideProcessingProps,
        Partial<INavigationOwnProps>,
        Partial<INavigationChildrenProps> {}

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

export interface ITableWithPaginationProps
    extends Partial<ITableWithPaginationStateProps>,
        Partial<ITableWithPaginationDispatchProps>,
        ITableHOCOwnProps,
        WithServerSideProcessingProps {}

const TableWithPaginationProps = keys<ITableWithPaginationStateProps>();

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export const tableWithPagination = (supplier: ConfigSupplier<ITableWithPaginationConfig> = {}) => (
    Component: React.ComponentType<ITableWithPaginationProps>
): React.ComponentClass<ITableWithPaginationProps & React.HTMLAttributes<HTMLTableElement>> => {
    const config = HocUtils.supplyConfig(supplier);
    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableWithPaginationProps
    ): ITableWithPaginationStateProps | ITableHOCOwnProps => {
        const pageNb = NavigationSelectors.getPaginationPage(state, {id: TableHOCUtils.getPaginationId(ownProps.id)});
        const perPage = NavigationSelectors.getPerPage(state, {id: ownProps.id});
        const isServer = ownProps.isServer || config.isServer;
        const length = TableSelectors.getDataCount(state, {
            id: ownProps.id,
            data: ownProps.data,
            isServer,
        });

        const startingIndex = pageNb * perPage;
        const endingIndex = startingIndex + perPage;

        return {
            pageNb,
            perPage,
            totalEntries: length,
            totalPages: Math.ceil(length / perPage),
            data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
        };
    };

    const mapDispatchToProps = (
        dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
        ownProps: ITableHOCOwnProps
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
                this.props.onUpdate?.();
            }
        }

        render() {
            const newProps = _.omit(this.props, [...TableWithPaginationProps]);
            return (
                <Component {...newProps}>
                    <NavigationConnected
                        id={this.props.id}
                        loadingIds={[this.props.id]}
                        {...config}
                        {..._.pick(this.props, TableWithPaginationProps)}
                    />
                    {this.props.children}
                </Component>
            );
        }
    }

    return TableWithPagination;
};
