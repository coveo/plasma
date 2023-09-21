import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState, IReduxActionsPayload} from '../../PlasmaState';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils';
import {closeModals} from './ModalActions';
import {
    IModalBackdropDispatchProps,
    IModalBackdropOwnProps,
    IModalBackdropStateProps,
    ModalBackdrop,
} from './ModalBackdrop';

const mapStateToProps = (state: PlasmaState, ownProps: IModalBackdropOwnProps): IModalBackdropStateProps => {
    let modals = state.modals;
    if (ownProps.displayFor && ownProps.displayFor.length > 0) {
        modals = modals.filter((modal) => _.contains(ownProps.displayFor, modal.id));
    }
    const lastOpenedModal = _.last(state.openModals);

    return {
        display: modals.some((modal) => modal.isOpened),
        lastOpened: modals.some((modal) => modal.id === lastOpenedModal),
    };
};

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: IModalBackdropOwnProps,
): IModalBackdropDispatchProps => ({
    onClick: () => dispatch(closeModals(ownProps.displayFor)),
});

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalBackdropConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(ModalBackdrop);
