import {connect} from 'react-redux';

import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils.js';
import {closeModal} from './ModalActions.js';
import {IModalHeaderDispatchProps, IModalHeaderOwnProps, ModalHeader} from './ModalHeader.js';

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalHeaderOwnProps): IModalHeaderDispatchProps => ({
    onClose: () => dispatch(closeModal(ownProps.id)),
});

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalHeaderConnected = connect(undefined, mapDispatchToProps, ReduxUtils.mergeProps)(ModalHeader);
