import * as React from 'react';
import { Title } from '../Title';
import { ILinkSvgProps } from '../../svg/LinkSvg';

export class TitleExamples extends React.Component<any, any> {

  render() {
    const defaultTitle: string = 'Title test';

    const documentationLink: ILinkSvgProps = {
      url: 'https://www.google.ca',
      target: '_blank',
      svg: {
        svgName: 'help',
        svgClass: 'fill-orange icon mod-20',
      },
    };

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Title List</h1>
        <div className='form-group'>
          <label className='form-control-label'>Default Title</label>
          <div className='form-control'>
            <Title title={defaultTitle} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Title with a prefix</label>
          <div className='form-control'>
            <Title title={defaultTitle} prefix='Edit:' />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Title with a tooltip on title</label>
          <div className='form-control'>
            <Title title={defaultTitle} prefix='Edit:' withTitleTooltip={true} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Title with a documentation link</label>
          <div className='form-control'>
            <Title title={defaultTitle} prefix='Edit:' documentationLink={documentationLink} />
          </div>
        </div>
      </div>
    );
  }
}
