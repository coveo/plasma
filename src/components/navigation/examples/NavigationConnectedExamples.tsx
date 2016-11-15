import { NavigationConnected } from '../NavigationConnected';
import { INavigationOwnProps } from '../Navigation';
import { turnOffLoading, LoadingActions } from '../../loading/LoadingActions';
import { ReactVaporStore } from '../../../../docs/ReactVaporStore';
import * as React from 'react';
import * as _ from 'underscore';

const navigationConnectedExampleId = 'navigation-connected';
const navigationConnectedExampleLoadingIds = ['loading-' + navigationConnectedExampleId];

export class NavigationConnectedExamples extends React.Component<any, any> {

  // Remove loading after a few seconds
  componentWillMount() {
    ReactVaporStore.subscribe(() => {
      if (_.contains([LoadingActions.turnOn, LoadingActions.add], ReactVaporStore.getState().lastAction.type)) {
        setTimeout(() => {
          ReactVaporStore.dispatch(turnOffLoading(navigationConnectedExampleLoadingIds));
        }, 2000);
      }
    });
  }

  render() {
    let navigationProps: INavigationOwnProps = {
      id: navigationConnectedExampleId,
      totalPages: 10,
      totalEntries: 50,
      loadingIds: navigationConnectedExampleLoadingIds
    };
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Navigation with Redux state and loading</label>
          <NavigationConnected {...navigationProps}  />
        </div>
      </div>
    );
  };
}
