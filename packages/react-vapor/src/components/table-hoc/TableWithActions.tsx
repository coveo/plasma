import * as React from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch} from '../../utils/ReduxUtils';
import {TableHOCRowActions} from './actions/TableHOCRowActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithActionsProps extends ITableHOCOwnProps {}

type TableWithActionsComponent = React.ComponentClass<ITableWithActionsProps>;

export const tableWithActions = () => (Component: TableWithActionsComponent): TableWithActionsComponent => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps) => ({
        hasSelectedRow: TableSelectors.getSelectedRows(state, ownProps).length > 0,
    });

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({
        deselectRows: () => dispatch(TableHOCRowActions.deselectAll(ownProps.id)),
    });

    class TableWithActions extends React.Component<
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
                <Component {..._.omit(this.props, 'hasSelectedRow', 'deselectRows')} hasActionButtons>
                    {this.props.children}
                </Component>
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

    return connect(mapStateToProps, mapDispatchToProps)(TableWithActions);
};
