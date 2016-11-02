import {
  ILastUpdatedOwnProps, ILastUpdatedProps, LastUpdated, ILastUpdatedDispatchProps,
  ILastUpdatedStateProps
} from './LastUpdated';
import { IReactVaporState, ReduxUtils, IReduxAction } from '../../utils/ReduxUtils';
import { addLastUpdated, removeLastUpdated, ILastUpdatedPayload } from './LastUpdatedActions';
import { connect } from 'react-redux';
import * as _ from 'underscore';
import * as React from 'react';

const mapStateToProps = (state: IReactVaporState, ownProps: ILastUpdatedOwnProps): ILastUpdatedStateProps => {
  let item = _.findWhere(state.lastUpdatedComposite, { id: ownProps.id });

  return {
    time: item ? item.time : new Date()
  };
};

const mapDispatchToProps = (dispatch: (action: IReduxAction<ILastUpdatedPayload>) => void, ownProps: ILastUpdatedOwnProps): ILastUpdatedDispatchProps => {
  return {
    onRender: () => { dispatch(addLastUpdated(ownProps.id)); },
    onDestroy: () => { dispatch(removeLastUpdated(ownProps.id)); }
  };
};

export const LastUpdatedConnected: React.ComponentClass<ILastUpdatedProps> =
  connect(mapStateToProps, mapDispatchToProps, ReduxUtils.mergeProps)(LastUpdated);
