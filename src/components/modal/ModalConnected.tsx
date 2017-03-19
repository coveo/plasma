import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IModalOwnProps, IModalStateProps, IModalDispatchProps, IModalProps, Modal } from './Modal';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { addModal, removeModal, closeModal } from './ModalActions';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReactVaporState,
  ownProps: IModalOwnProps): IModalStateProps => {
  return {
    isOpened: state.modals.some(modal => {
      return modal.id === ownProps.id && modal.isOpened;
    })
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IModalDispatchProps => ({
  onRender: (id: string) => dispatch(addModal(id)),
  onDestroy: (id: string) => dispatch(removeModal(id)),
  onClose: (id: string) => dispatch(closeModal(id))
});

export const ModalConnected: React.ComponentClass<IModalProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Modal);
