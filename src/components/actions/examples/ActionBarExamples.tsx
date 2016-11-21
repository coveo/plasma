import * as React from 'react';
import { ActionBar } from '../ActionBar';
import { IActionOptions } from '../Action';

export class ActionBarExamples extends React.Component<any, any> {

  render() {
    let actions: IActionOptions[] = [
      {
        name: 'Link to Coveo',
        link: 'http://coveo.com',
        target: '_blank',
        icon: 'exit',
        primary: true,
        enabled: true
      }, {
        name: 'action1',
        trigger: () => alert('Action 1 was triggered'),
        enabled: true
      }, {
        separator: true,
        enabled: true
      }, {
        name: 'action2',
        trigger: () => alert('Action 2 was triggered'),
        enabled: true
      }];

    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>Action bar without actions</label>
          <ActionBar />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Action bar without actions</label>
          <ActionBar actions={actions} />
        </div>
      </div>
    );
  };
}
