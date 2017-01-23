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
      <div className='coveo-table-actions coveo-item-filter'>
        <span className='coveo-item-filter-label'>{this.props.label}: </span>
        <span className='coveo-item-filter-item'>{this.props.item}</span>
        <button className='coveo-item-filter-clear' onClick={() => this.props.onClear()}>
          <Svg svgName='clear' svgClass='icon fill-dark-blue' />
        </button>
      </div>
    );
  }
}
