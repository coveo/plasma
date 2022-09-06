import {connect} from 'react-redux';

import {IDispatch, ReduxUtils} from '../../utils/ReduxUtils';
import {closeModal} from './ModalActions';
import {IModalHeaderDispatchProps, IModalHeaderOwnProps, ModalHeader} from './ModalHeader';

const mapDispatchToProps = (dispatch: IDispatch, ownProps: IModalHeaderOwnProps): IModalHeaderDispatchProps => ({
    onClose: () => dispatch(closeModal(ownProps.id)),
});

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export const ModalHeaderConnected = connect(undefined, mapDispatchToProps, ReduxUtils.mergeProps)(ModalHeader);
