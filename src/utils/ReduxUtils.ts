import * as _ from 'underscore';
import { ILastUpdatedState } from '../components/lastUpdated/LastUpdatedReducers';
import * as Redux from 'redux';
import { connect } from 'react-redux';

export class ReduxUtils {
  static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return _.extend({}, stateProps, dispatchProps, ownProps);
  }
}

export interface IReactVaporState {
  lastUpdatedComposite?: ILastUpdatedState[];
}

export const commonActions = {
  clearState: 'CLEAR_STATE'
};

export const clearState = (): Redux.Action => {
  return {
    type: commonActions.clearState
  };
};

export function ReduxConnect(mapStateToProps?: any, mapDispatchToProps?: any, mergeProps?: any, options?: any): (target: any) => any {
  return target => (connect(mapStateToProps, mapDispatchToProps, mergeProps, options)(target) as any);
}

export interface IReduxAction<T> extends Redux.Action {
  payload?: T;
}

export interface IReduxProps {
  dispatch?: (action: IReduxAction<any> | JQueryDeferred<any> | JQueryXHR | ((dispatch: Redux.Dispatch<any>) => void)) => void;
}
