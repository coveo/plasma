import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {addToastContainer, removeToast, removeToastContainer} from './ToastActions';
import {
    IToastContainerDispatchProps,
    IToastContainerOwnProps,
    IToastContainerStateProps,
    ToastContainer,
} from './ToastContainer';

const mapStateToProps = (state: PlasmaState, ownProps: IToastContainerOwnProps): IToastContainerStateProps => {
    const container = _.findWhere(state.toastContainers, {id: ownProps.id}) || {id: null, toasts: []};
    return {
        toasts: container.toasts,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IToastContainerOwnProps): IToastContainerDispatchProps => ({
    onRender: () => dispatch(addToastContainer(ownProps.id)),
    onDestroy: () => dispatch(removeToastContainer(ownProps.id)),
    onCloseToast: (id: string) => dispatch(removeToast(ownProps.id, id)),
});

/**
 * @deprecated Use Mantine Notification instead: https://mantine.dev/core/notification/
 */
export const ToastContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(ToastContainer);
