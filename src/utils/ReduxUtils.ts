import * as _ from 'underscore';
import * as React from 'react';
import * as Redux from 'redux';
import { connect } from 'react-redux';

export class ReduxUtils {
  static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return _.extend({}, stateProps, dispatchProps, ownProps);
  }
}

export function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any {
  return target => (connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export interface IReduxAction extends Redux.Action {
  payload?: any;
}

export interface IReduxProps<T> extends React.ClassAttributes<T> {
  dispatch?: (action: IReduxAction | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)) => void;
}
