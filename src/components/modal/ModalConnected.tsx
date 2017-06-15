import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IModalOwnProps, IModalStateProps, IModalDispatchProps, IModalProps, Modal } from './Modal';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { addModal, removeModal } from './ModalActions';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReactVaporState,
  ownProps: IModalOwnProps): IModalStateProps => {
  return {
    isOpened: state.modals.some(modal => modal.id === ownProps.id && modal.isOpened)
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IModalOwnProps): IModalDispatchProps => ({
    onRender: () => dispatch(addModal(ownProps.id)),
    onDestroy: () => dispatch(removeModal(ownProps.id))
  });

export const ModalConnected: React.ComponentClass<IModalProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Modal);
