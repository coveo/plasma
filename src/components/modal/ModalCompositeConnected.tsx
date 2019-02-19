import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {addModal, closeModal, removeModal} from './ModalActions';
import {
    IModalCompositeDispatchProps,
    IModalCompositeOwnProps,
    IModalCompositeProps,
    IModalCompositeStateProps,
    ModalComposite,
} from './ModalComposite';

const mapStateToProps = (state: IReactVaporState, ownProps: IModalCompositeOwnProps): IModalCompositeStateProps => ({
    withReduxState: true,
    isOpened: state.modals && state.modals.some((modal) => modal.id === ownProps.id && modal.isOpened),
});

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalCompositeOwnProps): IModalCompositeDispatchProps => ({
    onRender: () => dispatch(addModal(ownProps.id, ownProps.openOnMount)),
    onDestroy: () => dispatch(removeModal(ownProps.id)),
    onClose: () => dispatch(closeModal(ownProps.id)),
});

export const ModalCompositeConnected: React.ComponentClass<IModalCompositeProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalComposite);
