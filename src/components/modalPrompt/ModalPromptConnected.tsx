import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IModalPromptOwnProps, IModalPromptStateProps, IModalPromptDispatchProps, IModalPromptProps, ModalPrompt } from './ModalPrompt';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import {addModalPrompt, removeModalPrompt, cancelModalPrompt, confirmModalPrompt} from './ModalPromptActions';
import { connect } from 'react-redux';

const mapStateToProps = (state: IReactVaporState,
                         ownProps: IModalPromptOwnProps): IModalPromptStateProps => {
  return {
    isOpened: state.modalPrompts.some(modalPrompt => modalPrompt.id === ownProps.id && modalPrompt.isOpened)
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IModalPromptDispatchProps => ({
  onRender: (id: string) => dispatch(addModalPrompt(id)),
  onDestroy: (id: string) => dispatch(removeModalPrompt(id)),
  onCancel: (id: string) => dispatch(cancelModalPrompt(id)),
  onConfirm: (id: string) => dispatch(confirmModalPrompt(id)),
});

export const ModalPromptConnected: React.ComponentClass<IModalPromptProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalPrompt);
