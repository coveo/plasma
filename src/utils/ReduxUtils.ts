import { extend } from 'underscore';
import * as ReactRedux from 'react-redux';
import * as Redux from 'redux';

export class ReduxUtils {
  static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return extend({}, stateProps, dispatchProps, ownProps);
  }
}

export const CommonActions = {
  clearState: 'CLEAR_STATE'
};

export const clearState = (): Redux.Action => ({
  type: CommonActions.clearState
});

export function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any {
  return target => (ReactRedux.connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export interface IReduxAction<T> extends Redux.Action {
  type: string;
  payload?: T;
}

export interface IReduxProps {
  dispatch?: (action: IReduxAction<any> | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)) => void;
}

export interface IReduxStatePossibleProps {
  withReduxState?: boolean;
}
