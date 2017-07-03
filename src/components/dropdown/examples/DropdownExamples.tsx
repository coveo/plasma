import * as React from 'react';
import { Dropdown } from '../Dropdown';
import * as _ from 'underscore';

export class DropdownExamples extends React.Component<any, any> {

  private getContent() {
    return [<span key='action-dropdown-toggle-label' className='action-label'>Dropdown button</span>];
  }

  private getItems() {
    return _.times(20, (n: number) => <li key={n}><span key={n} className='enabled'>Option {n}</span></li>);
  }

  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Dropdown List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default Dropdown</label>
          <div className='form-control'>
            <Dropdown toggleContent={this.getContent()} dropdownItems={this.getItems()} />
          </div>
        </div>
      </div>
    );
  };
}
