import {Component, ComponentType, PropsWithChildren} from 'react';
import {connect} from 'react-redux';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/index.js';
import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch} from '../../utils/index.js';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils.js';
import {FlatSelectSelectors} from '../flatSelect/FlatSelectSelectors.js';
import {INavigationChildrenProps, INavigationOwnProps} from '../navigation/index.js';
import {NavigationSelectors} from '../navigation/NavigationSelectors.js';
import {PER_PAGE_NUMBERS} from '../navigation/perPage/NavigationPerPage.js';
import {PaginationUtils} from '../pagination/PaginationUtils.js';
import {TablePagination} from '../pagination/TablePagination.js';
import {TableWithPaginationActions} from './actions/TableWithPaginationActions.js';
import {ITableHOCOwnProps} from './TableHOC.js';
import {TableSelectors} from './TableSelectors.js';
import {TableHOCUtils} from './utils/TableHOCUtils.js';

const sliceData = (data: any[], startingIndex: number, endingIndex: number) => data.slice(startingIndex, endingIndex);

export interface ITableWithNewPaginationConfig
    extends WithServerSideProcessingProps,
        Partial<INavigationOwnProps>,
        Partial<INavigationChildrenProps> {}

export interface ITableWithNewPaginationProps extends ITableHOCOwnProps, WithServerSideProcessingProps {}

/**
 * @deprecated Use Mantine instead
 */
export const tableWithNewPagination =
    (supplier: ConfigSupplier<ITableWithNewPaginationConfig> = {perPageNumbers: PER_PAGE_NUMBERS}) =>
    (WrappedComponent: ComponentType<PropsWithChildren<ITableWithNewPaginationProps>>) => {
        const config = HocUtils.supplyConfig(supplier);

        const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableWithNewPaginationProps) => ({
            onMount: () => dispatch(TableWithPaginationActions.add(ownProps.id)),
            onUnmount: () => dispatch(TableWithPaginationActions.remove(ownProps.id)),
        });
        const mapStateToProps = (state: PlasmaState, ownProps: ITableWithNewPaginationProps) => {
            const pageNb = NavigationSelectors.getPaginationPage(state, {
                id: TableHOCUtils.getPaginationId(ownProps.id),
            });

            const perPage =
                parseInt(
                    FlatSelectSelectors.getSelectedOptionId(state, {
                        id: PaginationUtils.getPaginationPerPageId(ownProps.id),
                    }),
                    10
                ) || PER_PAGE_NUMBERS[1];

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
                totalPages: length ? Math.max(Math.ceil(length / perPage), 1) : undefined,
                data: isServer ? ownProps.data : ownProps.data && sliceData(ownProps.data, startingIndex, endingIndex),
            };
        };

        class TableWithNewPaginationDisconnected extends Component<
            ITableWithNewPaginationProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
        > {
            componentDidMount() {
                this.props.onMount();
            }

            componentWillUnmount() {
                this.props.onUnmount();
            }

            componentDidUpdate(prevProps: ITableWithNewPaginationProps & ReturnType<typeof mapStateToProps>) {
                if (prevProps.pageNb !== this.props.pageNb || prevProps.perPage !== this.props.perPage) {
                    this.props.onUpdate?.();
                }
            }

            render() {
                const {onMount, onUnmount, pageNb, perPage, totalEntries, totalPages, ...rest} = this.props;
                return (
                    <WrappedComponent {...rest}>
                        <TablePagination
                            id={this.props.id}
                            disabled={this.props.isLoading}
                            totalPages={this.props.totalPages}
                            defaultPerPageSelected={
                                config?.perPageNumbers?.length > 1
                                    ? config?.perPageNumbers[1]
                                    : config?.perPageNumbers[0] ?? PER_PAGE_NUMBERS[1]
                            }
                            totalEntries={this.props.totalEntries}
                            perPageNumbers={config.perPageNumbers}
                        />
                        {this.props.children}
                    </WrappedComponent>
                );
            }
        }

        return connect<
            ReturnType<typeof mapStateToProps>,
            ReturnType<typeof mapDispatchToProps>,
            ITableWithNewPaginationProps
        >(
            mapStateToProps,
            mapDispatchToProps
        )(TableWithNewPaginationDisconnected as any);
    };
