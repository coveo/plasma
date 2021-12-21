import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {addToastContainer, removeToast, removeToastContainer} from './ToastActions';
import {
    IToastContainerDispatchProps,
    IToastContainerOwnProps,
    IToastContainerStateProps,
    ToastContainer,
} from './ToastContainer';

const mapStateToProps = (state: IReactVaporState, ownProps: IToastContainerOwnProps): IToastContainerStateProps => {
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

export const ToastContainerConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps
)(ToastContainer);
