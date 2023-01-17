import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState.js';
import {ReduxUtils} from '../../utils/ReduxUtils.js';
import {ILoadingState} from '../loading/LoadingReducers.js';
import {INavigationOwnProps, INavigationStateProps, Navigation} from './Navigation.js';

const mapStateToProps = (state: PlasmaState, ownProps: INavigationOwnProps): INavigationStateProps => {
    const item: ILoadingState = _.findWhere(state.loadings, {id: 'loading-' + ownProps.id});

    return {
        isLoading: (item && item.isOn) || false,
        withReduxState: true,
    };
};

/**
 * @deprecated Use Mantine instead
 */
export const NavigationConnected = connect(mapStateToProps, undefined, ReduxUtils.mergeProps)(Navigation);
