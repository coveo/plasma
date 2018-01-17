import * as React from 'react';
import { ListBox } from '../ListBox';
import { ITooltipProps } from '../../tooltip/Tooltip';
import { IItemBoxProps } from '../../itemBox/ItemBox';

export class ListBoxExamples extends React.Component {
  render() {
    const tooltip: ITooltipProps = {
      title: 'title test',
      placement: 'bottom',
      container: 'body',
    };
    const defaultItems: IItemBoxProps[] = [
      { value: 'test' },
      { value: 'test selected', selected: true },
      { value: 'test disabled', disabled: true },
      { value: 'test3', tooltip: tooltip },
      { value: 'test4' },
      { value: 'test5' },
      { value: 'test6' },
      { value: 'test7' },
    ];

    const triggerAlertFunction = (item: IItemBoxProps) => {
      alert(`The item value triggered is ${item.value}`);
    };

    return (
      <div className='mt2'>
        <h1 className='text-blue mb1'>List Box</h1>

        <div className='form-group'>
          <label className='form-control-label'>Default List Box</label>
          <div className='form-control'>
            <ListBox items={defaultItems} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>List Box with no items</label>
          <div className='form-control'>
            <ListBox items={[]} noResultItem={{ value: 'no items' }} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>List Box with an trigger on click items</label>
          <div className='form-control'>
            <ListBox items={defaultItems} onOptionClick={triggerAlertFunction} />
          </div>
        </div>
        <div className='form-group'>
          <label className='form-control-label'>List Box with custom classes</label>
          <div className='form-control'>
            <ListBox items={defaultItems} classes={['bg-light-blue']} />
          </div>
        </div>
      </div>
    );
  }
}

