import { FilterBox } from '../FilterBox';
import * as React from 'react';

export class FilterBoxExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2' style={{ width: 400 }}>
        <div className='form-group'>
          <label className='form-control-label'>Filter box</label>
          <FilterBox id='FilterBoxExampleComponent' />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Filter box with custom placeholder</label>
          <FilterBox id='FilterBoxExampleComponentWithPlaceholder' filterPlaceholder='Filter through results' />
        </div>
      </div>
    );
  };
}
