import { IReactVaporState, IReduxActionsPayload } from '../../ReactVapor';
import { IReduxAction, ReduxUtils } from '../../utils/ReduxUtils';
import { closeModal } from './ModalActions';
import { connect } from 'react-redux';
import { ModalHeader, IModalHeaderProps, IModalHeaderOwnProps, IModalHeaderDispatchProps, IModalHeaderStateProps } from './ModalHeader';

const mapStateToProps = () => { };

const mapDispatchToProps = (dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
  ownProps: IModalHeaderOwnProps): IModalHeaderDispatchProps => ({
    onClose: () => dispatch(closeModal(ownProps.id))
  });

export const ModalHeaderConnected: React.ComponentClass<IModalHeaderProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalHeader);
