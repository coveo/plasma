import {connect} from 'react-redux';
import {ReduxUtils} from '../../utils/ReduxUtils.js';
import {IPrimaryActionStateProps, PrimaryAction} from './PrimaryAction.js';

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
    ReduxUtils.mergeProps
)(PrimaryAction);
