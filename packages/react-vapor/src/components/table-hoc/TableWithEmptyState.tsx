import * as React from 'react';
import {connect} from 'react-redux';
import {IDispatch} from 'react-vapor';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {TableHOCActions} from './actions/TableHOCActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface TableWithEmptyStateProps {
    emptyState: JSX.Element;
}

const UPDATE_DELAY = 50; // ms

export const tableWithEmptyState = (
    Component: React.ComponentClass<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement>>
): React.ComponentType<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement> & TableWithEmptyStateProps> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps) => {
        const isTrulyEmpty = TableSelectors.getIsTrulyEmpty(state, ownProps);
        return {
            isTrulyEmpty,
            data: isTrulyEmpty ? null : ownProps.data,
        };
    };

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({
        setEmptyState: () => dispatch(TableHOCActions.setEmptyState(ownProps.id, true)),
    });

    const TableEmptyState: React.FunctionComponent<
        ITableHOCOwnProps &
            TableWithEmptyStateProps &
            ReturnType<typeof mapStateToProps> &
            ReturnType<typeof mapDispatchToProps>
    > = (props) => {
        const {emptyState, isTrulyEmpty: isTrulyEmpty, setEmptyState, ...tableProps} = props;
        const [shouldRenderEmptyState, setShouldRenderEmptyState_immediate] = React.useState(false);

        const setShouldRenderEmptyState_debounced = React.useRef(
            _.debounce((value: boolean) => setShouldRenderEmptyState_immediate(value), UPDATE_DELAY)
        ).current;

        // Cancelling the debounced function on unmount to prevent calling setState on an unmounted component
        React.useEffect(() => {
            props.setEmptyState();
            setShouldRenderEmptyState_debounced.cancel;
        }, []);

        React.useEffect(() => {
            setShouldRenderEmptyState_debounced(isTrulyEmpty && !props.isLoading);
        }, [isTrulyEmpty, props.isLoading]);

        return shouldRenderEmptyState ? emptyState : <Component {...tableProps} />;
    };

    return connect(mapStateToProps, mapDispatchToProps)(TableEmptyState);
};
