import * as React from 'react';
import { LogoCard } from '../LogoCard';
import { BETA_RIBBON_PROPS, MULTIPLE_BADGES } from './LogoCardExamplesCommon';

export class LogoCardExamples extends React.Component<any, any> {

  render() {
    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>LogoCard List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default LogoCard</label>
          <div className='form-control'>
            <LogoCard
              title='Card title'
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>LogoCard with badges</label>
          <div className='form-control'>
            <LogoCard
              title='Card title'
              badges={MULTIPLE_BADGES}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>LogoCard with badges and ribbon</label>
          <div className='form-control'>
            <LogoCard
              title='Card title'
              badges={MULTIPLE_BADGES}
              ribbon={BETA_RIBBON_PROPS}
            />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Disabled logo card</label>
          <div className='form-control'>
            <LogoCard
              title='Card title'
              badges={MULTIPLE_BADGES}
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}
