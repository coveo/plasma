import {CrossSize16Px} from '@coveord/plasma-react-icons';
import {ClassAttributes, Component} from 'react';

import {ITooltipProps, Tooltip} from '../../tooltip/Tooltip.js';

export interface IItemFilterProps extends ClassAttributes<ItemFilter> {
    label: string;
    item: string;
    itemTooltipProps?: ITooltipProps;
    onClear: () => void;
    crop?: number;
}

export const ELLIPSIS: string = '...';

export class ItemFilter extends Component<IItemFilterProps, any> {
    render() {
        let itemFilterText: string = this.props.item;
        if (this.props.crop) {
            const itemFilterLength: number = itemFilterText.length;

            if (itemFilterLength > Math.abs(this.props.crop)) {
                itemFilterText =
                    this.props.crop > 0
                        ? itemFilterText.substring(0, this.props.crop) + ELLIPSIS
                        : ELLIPSIS + itemFilterText.substring(itemFilterLength + this.props.crop, itemFilterLength);
            }
        }

        const itemFilter: JSX.Element = this.props.itemTooltipProps ? (
            <Tooltip {...this.props.itemTooltipProps}>
                <span className="item-filter-item">{itemFilterText}</span>
            </Tooltip>
        ) : (
            <span className="item-filter-item">{itemFilterText}</span>
        );

        return (
            <div className="coveo-table-actions item-filter">
                <span className="item-filter-label">{this.props.label}: </span>
                {itemFilter}
                <button className="item-filter-clear" onClick={() => this.props.onClear()}>
                    <CrossSize16Px />
                </button>
            </div>
        );
    }
}
