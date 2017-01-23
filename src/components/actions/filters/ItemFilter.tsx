import * as React from 'react';
import { Svg } from '../../svg/Svg';

export interface IItemFilterProps extends React.ClassAttributes<ItemFilter> {
  label: string;
  item: string;
  onClear: () => void;
}

export class ItemFilter extends React.Component<IItemFilterProps, any> {

  render() {

    return (
      <div className='coveo-table-actions item-filter'>
        <span className='item-filter-label'>{this.props.label}: </span>
        <span className='item-filter-item'>{this.props.item}</span>
        <button className='item-filter-clear' onClick={() => this.props.onClear()}>
          <Svg svgName='clear' svgClass='icon fill-dark-blue' />
        </button>
      </div>
    );
  }
}
