import {Component, ComponentType, PropsWithChildren, ReactNode} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {IReduxActionsPayload, PlasmaState} from '../../PlasmaState';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IReduxAction} from '../../utils/ReduxUtils';
import {turnOffLoading} from '../loading/LoadingActions';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/Navigation';
import {NavigationConnected} from '../navigation/NavigationConnected';
import {NavigationSelectors} from '../navigation/NavigationSelectors';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';
import {TableHOCUtils} from './utils/TableHOCUtils';

export interface ITableWithPaginationConfig
    extends WithServerSideProcessingProps,
        Partial<INavigationOwnProps>,
        Partial<INavigationChildrenProps> {}

export interface ITableWithPaginationStateProps {
    totalEntries: number;
    totalPages: number;
    pageNb: number;
    perPage: number;
    children?: ReactNode;
}

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ITableHOCOwnProps & WithServerSideProcessingProps,
) => ({
    onMount: () => {
        dispatch(turnOffLoading([`loading-${ownProps.id}`]));
        dispatch(TableWithPaginationActions.add(ownProps.id));
    },
    onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),
});

export interface ITableWithPaginationProps
    extends ITableHOCOwnProps,
        WithServerSideProcessingProps,
        Partial<ITableWithPaginationStateProps>,
        Partial<ReturnType<typeof mapDispatchToProps>> {}

const TableWithPaginationProps = ['totalEntries', 'totalPages', 'pageNb', 'perPage'];

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

/**
 * @deprecated Use Mantine instead
 */
export const tableWithPagination =
    (supplier: ConfigSupplier<ITableWithPaginationConfig> = {}) =>
    (WrappedComponent: ComponentType<PropsWithChildren<ITableWithPaginationProps>>) => {
        const config = HocUtils.supplyConfig(supplier);
        const mapStateToProps = (
            state: PlasmaState,
            ownProps: ITableHOCOwnProps & WithServerSideProcessingProps,
        ): ITableWithPaginationStateProps | ITableHOCOwnProps => {
            const pageNb = NavigationSelectors.getPaginationPage(state, {
                id: TableHOCUtils.getPaginationId(ownProps.id),
            });
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
                totalPages: Math.max(Math.ceil(length / perPage), 1),
                data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
            };
        };

        /**
         * @deprecated use tableWithNewPagination instead
         */
        class TableWithPagination extends Component<ITableWithPaginationProps> {
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
                const newProps = _.omit(this.props, TableWithPaginationProps);
                return (
                    <WrappedComponent {...newProps}>
                        <NavigationConnected
                            id={this.props.id}
                            loadingIds={[this.props.id]}
                            {...config}
                            {..._.pick(this.props, TableWithPaginationProps)}
                        />
                        {this.props.children}
                    </WrappedComponent>
                );
            }
        }

        return connect<
            ReturnType<typeof mapStateToProps>,
            ReturnType<typeof mapDispatchToProps>,
            PropsWithChildren<ITableHOCOwnProps & WithServerSideProcessingProps>
        >(
            mapStateToProps,
            mapDispatchToProps,
        )(TableWithPagination as any);
    };
