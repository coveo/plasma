import * as React from 'react';
import { IActionOptions } from '../Action';
import { ActionBarConnected } from '../ActionBarConnected';
import { ReactVaporStore } from '../../../../docs/ReactVaporStore';
import { addActionsToActionBar } from '../ActionBarActions';

const actionBarId = 'action-bar-connected';

export class ActionBarConnectedExamples extends React.Component<any, any> {

  componentDidMount() {
    let actions: IActionOptions[] = [
      {
        name: 'Link to Coveo',
        link: 'http://coveo.com',
        target: '_blank',
        icon: 'edit',
        primary: true,
        enabled: true
      }, {
        name: 'Action 1',
        trigger: () => alert('Action 1 was triggered'),
        enabled: true,
        requiresConfirmation: {
          confirmType: 'danger',
          buttonLabels: {
            confirm: 'Yes',
            cancel: 'Cancel'
          }
        }
      }, {
        separator: true,
        enabled: true
      }, {
        name: 'Action 2',
        trigger: () => alert('Action 2 was triggered'),
        enabled: true,
        requiresConfirmation: {
          confirmType: 'danger',
          buttonLabels: {
            confirm: 'Pretty sure!',
            cancel: 'Cancel'
          }
        }
      }];
    setTimeout(() => {
      ReactVaporStore.dispatch(addActionsToActionBar(actionBarId, actions));
    }, 4000);
  }

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Action bar with Redux state and inline prompt (actions appear after 4 seconds)</label>
          <ActionBarConnected id={actionBarId} />
        </div>
      </div>
    );
  }
}
