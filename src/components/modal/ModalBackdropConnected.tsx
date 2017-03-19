import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IModalBackDropOwnProps, IModalBackdropStateProps, IModalBackdropProps, IModalBackdropDispatchProps, ModalBackdrop } from './ModalBackdrop';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { connect } from 'react-redux';


const mapStateToProps = (state: IReactVaporState, ownProps: IModalBackDropOwnProps): IModalBackdropStateProps => {
  let modals = state.modals;
  if (ownProps.displayFor && ownProps.displayFor.length > 0) {
    modals = modals.filter(modal => {
      return ownProps.displayFor.indexOf(modal.id) > -1;
    });
  }

  return {
    display: modals.some(modal => {
      return modal.isOpened;
    })
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void): IModalBackdropDispatchProps => ({
});

export const ModalBackdropConnected: React.ComponentClass<IModalBackdropProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalBackdrop);
