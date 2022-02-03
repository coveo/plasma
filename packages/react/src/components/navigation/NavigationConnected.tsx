import {connect} from 'react-redux';
import * as _ from 'underscore';
import {PlasmaState} from '../../PlasmaState';
import {ReduxUtils} from '../../utils/ReduxUtils';
import {ILoadingState} from '../loading/LoadingReducers';
import {INavigationOwnProps, INavigationStateProps, Navigation} from './Navigation';

const mapStateToProps = (state: PlasmaState, ownProps: INavigationOwnProps): INavigationStateProps => {
    const item: ILoadingState = _.findWhere(state.loadings, {id: 'loading-' + ownProps.id});

    return {
        isLoading: (item && item.isOn) || false,
        withReduxState: true,
    };
};

export const NavigationConnected = connect(mapStateToProps, undefined, ReduxUtils.mergeProps)(Navigation);
