import * as React from 'react';
import { Tooltip } from '../Tooltip';

export class TooltipExamples extends React.Component<any, void> {

  render() {
    return (
      <div className='mt2'>
        <div className='form-group'>
          <label className='form-control-label'>
            Tooltip example
        </label>
          <div className='form-control'>
            <Tooltip title='I am a tooltip!' placement='right'>
              <button type='button' className='btn'>Hover me!</button>
            </Tooltip>
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>
            Tooltip example with a footer
        </label>
          <div className='form-control'>
            <Tooltip title='I am a tooltip!' footer='I have a footer' placement='right'>
              <button type='button' className='btn'>Hover me!</button>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  };
}
