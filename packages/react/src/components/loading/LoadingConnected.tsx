import {connect} from 'react-redux';
import {IReduxActionsPayload} from '../../PlasmaState.js';
import {IReduxAction, ReduxUtils} from '../../utils/ReduxUtils.js';
import {ILoadingDispatchProps, ILoadingOwnProps, Loading} from './Loading.js';
import {addLoading, removeLoading} from './LoadingActions.js';

const mapStateToProps = () => ({});

const mapDispatchToProps = (
    dispatch: (action: IReduxAction<IReduxActionsPayload>) => void,
    ownProps: ILoadingOwnProps
): ILoadingDispatchProps => ({
    onRender: () => dispatch(addLoading(ownProps.id)),
    onDestroy: () => dispatch(removeLoading(ownProps.id)),
});

/**
 * @deprecated Use Mantine Loader instead: https://mantine.dev/core/loader/
 * or use Mantine LoadingOverlay: https://mantine.dev/core/loading-overlay/
 */
export const LoadingConnected = connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(Loading);
