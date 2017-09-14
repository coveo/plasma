import * as React from 'react';
import { BoxItem } from '../BoxItem';
import { ITooltipProps } from '../../tooltip/Tooltip';
import { ISvgProps, Svg } from '../../svg/Svg';
import { IContentProps } from '../../content/Content';

export class BoxItemExamples extends React.Component<any, any> {
  render() {
    const tooltip: ITooltipProps = {
      title: 'title test for the box item',
      placement: 'bottom',
      container: 'body',
    };

    const svg: ISvgProps = {
      svgName: 'domain-google',
      svgClass: 'icon',
    };
    const getSvgPrepend: IContentProps = { content: () => <Svg {...svg} />, classes: ['mr1'] };
    const getSvgAppend: IContentProps = { content: () => <Svg {...svg} />, classes: ['ml1'] };

    const triggerAlertFunction = () => {
      alert('Event onClick triggered');
    };

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>Box Item</h1>

        <div className='form-group'>
          <label className='form-control-label'>Default Box Item</label>
          <div className='form-control'>
            <BoxItem value='test' />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with an displayValue</label>
          <div className='form-control'>
            <BoxItem value='test' displayValue='Display test' />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with a prepend text</label>
          <div className='form-control'>
            <BoxItem value='test' prepend={{ content: 'Prefix', classes: ['text-medium-grey', 'mr1'] }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with a prepend icon</label>
          <div className='form-control'>
            <BoxItem value='test' prepend={getSvgPrepend} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with a append icon</label>
          <div className='form-control'>
            <BoxItem value='test' append={getSvgAppend} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with a title</label>
          <div className='form-control'>
            <BoxItem value='test' tooltip={tooltip} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with selected</label>
          <div className='form-control'>
            <BoxItem value='test' selected={true} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with active</label>
          <div className='form-control'>
            <BoxItem value='test' active={true} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item disabled</label>
          <div className='form-control'>
            <BoxItem value='test' disabled={true} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>Box Item with an onClick event</label>
          <div className='form-control'>
            <BoxItem value='test' onOptionClick={triggerAlertFunction} />
          </div>
        </div>
      </div>
    );
  }
}
