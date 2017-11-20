import * as React from 'react';
import { IOption } from '../../optionPicker/Option';
import { FlatSelectStandalone } from '../FlatSelectStandalone';

export class FlatSelectExamples extends React.Component<any, any> {
  private flatSelectStandalone: FlatSelectStandalone;

  render() {
    const options: IOption[] = [
      {
        label: 'Option 1',
        value: () => 'option1'
      },
      {
        label: 'Option 2',
        value: () => 'option2'
      },
      {
        label: 'Option 3',
        value: () => 'option3'
      }
    ];

    return (
      <div className='mt2' style={{ width: 400 }}>
        <div className='form-group'>
          <label className='form-control-label'>Flat select</label>
          <FlatSelectStandalone options={options} ref={(f: FlatSelectStandalone) => this.flatSelectStandalone = f} />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat select mod-btn-group</label>
          <FlatSelectStandalone options={options} className='mod-btn-group' />
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Flat select mod-option-picker</label>
          <FlatSelectStandalone options={options} className='mod-option-picker' />
        </div>
      </div>
    );
  }
}
