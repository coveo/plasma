import {PropsWithChildren, HTMLAttributes, FunctionComponent, useState, useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IDispatch} from '../../utils/ReduxUtils';

import {PlasmaState} from '../../PlasmaState';
import {TableHOCActions} from './actions/TableHOCActions';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface TableWithEmptyStateProps {
    emptyState: JSX.Element;
}

const UPDATE_DELAY = 50; // ms

/**
 * @deprecated Use Mantine instead
 */
export const tableWithEmptyState = (
    Component: FunctionComponent<ITableHOCOwnProps & HTMLAttributes<HTMLTableElement>>,
) => {
    const mapStateToProps = (state: PlasmaState, ownProps: ITableHOCOwnProps) => {
        const isTrulyEmpty = TableSelectors.getIsTrulyEmpty(state, ownProps);
        return {
            isTrulyEmpty,
            data: isTrulyEmpty ? null : ownProps.data,
            isEmptyStateAlreadySet: TableSelectors.isEmptyStateAlreadySet(state, ownProps),
        };
    };

    const mapDispatchToProps = (dispatch: IDispatch, ownProps: ITableHOCOwnProps) => ({
        setEmptyState: () => dispatch(TableHOCActions.setEmptyState(ownProps.id, true)),
    });

    const TableEmptyState: FunctionComponent<
        PropsWithChildren<
            ITableHOCOwnProps &
                TableWithEmptyStateProps &
                ReturnType<typeof mapStateToProps> &
                ReturnType<typeof mapDispatchToProps>
        >
    > = (props) => {
        const {emptyState, isTrulyEmpty: isTrulyEmpty, setEmptyState, isEmptyStateAlreadySet, ...tableProps} = props;
        const [shouldRenderEmptyState, setShouldRenderEmptyState_immediate] = useState(false);

        const setShouldRenderEmptyState_debounced = useRef(
            _.debounce((value: boolean) => setShouldRenderEmptyState_immediate(value), UPDATE_DELAY),
        ).current;

        // Cancelling the debounced function on unmount to prevent calling setState on an unmounted component
        useEffect(() => setShouldRenderEmptyState_debounced.cancel, []);

        useEffect(() => {
            !isEmptyStateAlreadySet && props.setEmptyState();
        }, [isEmptyStateAlreadySet]);

        useEffect(() => {
            setShouldRenderEmptyState_debounced(isTrulyEmpty && !props.isLoading);
        }, [isTrulyEmpty, props.isLoading]);

        return shouldRenderEmptyState ? emptyState : <Component {...tableProps} />;
    };

    return connect<
        ReturnType<typeof mapStateToProps>,
        ReturnType<typeof mapDispatchToProps>,
        ITableHOCOwnProps & TableWithEmptyStateProps
    >(
        mapStateToProps,
        mapDispatchToProps,
    )(TableEmptyState as any);
};
