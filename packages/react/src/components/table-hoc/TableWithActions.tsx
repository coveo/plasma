import {Component, ComponentClass, PropsWithChildren} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {WithServerSideProcessingProps} from '../../hoc';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils/ReduxUtils';
import {TableHOCRowActions} from './actions/TableHOCRowActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithActionsProps extends ITableHOCOwnProps {}

type TableWithActionsComponent = ComponentClass<ITableWithActionsProps>;

/**
 * @deprecated Use Mantine instead
 */
export const tableWithActions = () => (WrappedComponent: TableWithActionsComponent) => {
    const mapStateToProps = (state: PlasmaState, ownProps: ITableHOCOwnProps) => ({
        hasSelectedRow: TableSelectors.getSelectedRows(state, ownProps).length > 0,
    });

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({
        deselectRows: () => dispatch(TableHOCRowActions.deselectAll(ownProps.id)),
    });

    class TableWithActions extends Component<
        ITableWithActionsProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
    > {
        componentDidMount() {
            document.addEventListener('mousedown', this.handleDocumentClick);
        }

        componentWillUnmount() {
            document.removeEventListener('mousedown', this.handleDocumentClick);
        }

        render() {
            return (
                <WrappedComponent {..._.omit(this.props, 'hasSelectedRow', 'deselectRows')} hasActionButtons>
                    {this.props.children}
                </WrappedComponent>
            );
        }

        private handleDocumentClick = (e: MouseEvent) => {
            if (this.props.hasSelectedRow && document.body.contains(e.target as HTMLElement)) {
                const target = e.target as HTMLElement;
                const isNotInTable = !target.closest('.table-container');

                if (isNotInTable) {
                    this.props.deselectRows();
                }
            }
        };
    }

    return connect<
        ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps>,
        PropsWithChildren<ITableHOCOwnProps & WithServerSideProcessingProps>
    >(
        mapStateToProps,
        mapDispatchToProps,
    )(TableWithActions as any);
};
