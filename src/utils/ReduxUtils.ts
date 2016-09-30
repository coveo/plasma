import * as _ from 'underscore';

export class ReduxUtils {
  static mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return _.extend({}, stateProps, dispatchProps, ownProps);
  }
}
