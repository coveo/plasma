import {connect, InferableComponentEnhancerWithProps} from 'react-redux';
import * as Redux from 'redux';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {extend} from 'underscore';

import {PlasmaState} from '../PlasmaState.js';

/**
 * use this type with an enhance function containing the connecting functions like such:
 *
 * enhance = connect(mapStateToProps, mapDispatchToProps)
 * const MyComponentBase: React.FC<ConnectedProps<typeof enhance>> = (props) => {}
 * export const MyComponent = enhance(MyComponentBase)
 */
export type ConnectedProps<T> = T extends InferableComponentEnhancerWithProps<infer Props, infer _> ? Props : never;

export type IThunkAction<R = any, S extends PlasmaState = PlasmaState> = ThunkAction<R, S, any, IReduxAction<any>>;
export type IDispatch<S extends PlasmaState = PlasmaState> = ThunkDispatch<S, any, IReduxAction<any>>;

export class ReduxUtils {
    static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
        return extend({}, stateProps, dispatchProps, ownProps);
    }

    // Default MergeProps by react-redux
    // https://github.com/reduxjs/react-redux/blob/master/docs/api.md
    static defaultMergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
        return extend({}, ownProps, stateProps, dispatchProps);
    }
}

export const CommonActions = {
    clearState: 'CLEAR_STATE',
};

export const clearState = (): Redux.Action => ({
    type: CommonActions.clearState,
});

/* @deprecated use react-redux connect instead */
export const ReduxConnect =
    (mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): ((target: any) => any) =>
    (target) =>
        connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any;

export interface BasePayload {
    id: string;
}

export interface IReduxAction<T = Record<string, unknown>> extends Redux.Action {
    type: string;
    payload?: T;
}

export interface IReduxProps {
    dispatch?: (action: IReduxAction<any> | ((dispatch: Redux.Dispatch<any>) => void)) => void;
}

export interface IReduxStatePossibleProps {
    /**
     * Wheter this component is connected to the state or not
     *
     * @default true if using a connected component, false otherwise
     */
    withReduxState?: boolean;
}
