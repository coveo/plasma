import {connect} from 'react-redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {closeModal} from './ModalActions';
import {
    IModalHeaderDispatchProps, IModalHeaderOwnProps, IModalHeaderProps, IModalHeaderStateProps,
    ModalHeader,
} from './ModalHeader';

const mapStateToProps = (state: IReactVaporState, ownProps: IModalHeaderOwnProps): IModalHeaderStateProps => {
    const lastOpenedModal = _.last(state.openModals);

    return {
        lastOpened: ownProps.id === lastOpenedModal,
    };
};

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalHeaderOwnProps): IModalHeaderDispatchProps => ({
    onClose: () => dispatch(closeModal(ownProps.id)),
});

export const ModalHeaderConnected: React.ComponentClass<IModalHeaderProps> = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalHeader);
