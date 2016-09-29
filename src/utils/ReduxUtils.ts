import * as _ from 'underscore';

export const mergeProps = (stateProps: any, dispatchProps: any, ownProps: any) => {
  return _.extend({}, stateProps, dispatchProps, ownProps);
};
