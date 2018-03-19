import {connect} from 'react-redux';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {IModalCompositeDispatchProps, IModalCompositeProps, IModalCompositeStateProps, ModalComposite} from './ModalComposite';

const mapStateToProps = (): IModalCompositeStateProps => ({
    withReduxState: true,
});

const mapDispatchToProps = (): IModalCompositeDispatchProps => ({});

export const ModalCompositeConnected: React.ComponentClass<IModalCompositeProps> =
    connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(ModalComposite);
