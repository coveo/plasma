import {connect} from 'react-redux';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {IModalDispatchProps, IModalOwnProps, IModalStateProps, Modal} from './Modal';
import {addModal, removeModal} from './ModalActions';

const mapStateToProps = (state: PlasmaState, ownProps: IModalOwnProps): IModalStateProps => ({
    isOpened: state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),
});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IModalOwnProps,
): IModalDispatchProps => ({
    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),
    onDestroy: () => dispatch(removeModal(ownProps.id)),
});

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Modal);
