import {connect} from 'react-redux';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {IPrimaryActionStateProps, PrimaryAction} from './PrimaryAction';

const mapStateToProps = (): IPrimaryActionStateProps => ({
    withReduxState: true,
});

const mapDispatchToProps = () => ({});

/**
 * @deprecated Use Mantine instead
 */
export const PrimaryActionConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    ReduxUtils.mergeProps,
)(PrimaryAction);
