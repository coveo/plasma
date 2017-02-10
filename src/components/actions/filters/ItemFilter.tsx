import * as React from 'react';
import { Svg } from '../../svg/Svg';

export interface IItemFilterProps extends React.ClassAttributes<ItemFilter> {
  label: string;
  item: string;
  onClear: () => void;
  crop?: number;
}

export const ELLIPSIS: string = '...';

export class ItemFilter extends React.Component<IItemFilterProps, any> {

  render() {
    let itemFilter: string = this.props.item;
    if (this.props.crop) {
      let itemFilterLength: number = itemFilter.length;

      if (itemFilterLength > Math.abs(this.props.crop)) {
        itemFilter = this.props.crop > 0
          ? itemFilter.substring(0, this.props.crop) + ELLIPSIS
          : ELLIPSIS + itemFilter.substring(itemFilterLength + this.props.crop, itemFilterLength);
      }
    }

    return (
      <div className='coveo-table-actions item-filter'>
        <span className='item-filter-label'>{this.props.label}: </span>
        <span className='item-filter-item'>{itemFilter}</span>
        <button className='item-filter-clear' onClick={() => this.props.onClear()}>
          <Svg svgName='clear' svgClass='icon fill-dark-blue' />
        </button>
      </div>
    );
  }
}
