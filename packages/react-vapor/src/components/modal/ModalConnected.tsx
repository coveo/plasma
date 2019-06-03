import {connect} from 'react-redux';
import {IReactVaporState, IReduxActionsPayload} from '../../ReactVapor';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IModalDispatchProps, IModalOwnProps, IModalProps, IModalStateProps, Modal} from './Modal';
import {addModal, removeModal} from './ModalActions';

const mapStateToProps = (
    state: IReactVaporState,
    ownProps: IModalOwnProps,
): IModalStateProps => {
    return {
        isOpened: state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IModalOwnProps,
): IModalDispatchProps => ({
    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),
    onDestroy: () => dispatch(removeModal(ownProps.id)),
});

/**
 * @deprecated use ModalCompositeConnected instead
 */
export const ModalConnected: React.ComponentClass<IModalProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Modal);
