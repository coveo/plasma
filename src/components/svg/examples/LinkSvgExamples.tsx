import * as React from 'react';
import { LinkSvg } from '../LinkSvg';
import { defaultSvgProps, defaultTooltipProps } from '../../../utils/TestUtils';

export class LinkSvgExamples extends React.Component<any, any> {

  render() {
    const defaultLink: string = 'https://www.google.ca';

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>LinkSvg List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default LinkSvg</label>
          <div className='form-control'>
            <LinkSvg link={{ url: defaultLink }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>LinkSvg with a tooltip</label>
          <div className='form-control'>
            <LinkSvg link={{ url: defaultLink, target: '_blank' }} tooltip={defaultTooltipProps} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>LinkSvg with a custom svg</label>
          <div className='form-control'>
            <LinkSvg link={{ url: defaultLink, target: '_blank' }} svg={defaultSvgProps} />
          </div>
        </div>
      </div>
    );
  }
}
