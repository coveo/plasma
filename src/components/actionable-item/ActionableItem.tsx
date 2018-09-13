import * as classNames from 'classnames';
import * as React from 'react';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';
import {PopoverConnected} from '../popover/PopoverConnected';
import {Svg} from '../svg/Svg';
import {actionableItemContent, actionableItemDots, actionableItemDotsWidthWithPadding} from './styles/ActionableItem.scss';

export interface IActionableItemProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string;
    actions: IItemBoxProps[];
}

export class ActionableItem extends React.Component<any> {
    static defaultProps: Partial<IActionableItemProps> = {
        actions: [],
    };

    render() {
        return (
            <div {...this.props}>
                <div className={classNames('actionable-item-content inline-block text-medium-blue border-color-medium-grey mod-border', actionableItemContent)}>
                    {this.props.children}
                </div>
                <PopoverConnected
                    id={this.props.id}
                    attachment='top right'
                    classPrefix='actionable-item'
                    offset={`0 -${actionableItemDotsWidthWithPadding}`}
                >
                    <div className={classNames('actionable-item-dots cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom', actionableItemDots)}>
                        <Svg svgName='more-append' svgClass='icon mod-12' />
                    </div>
                    <ListBox items={this.props.actions} />
                </PopoverConnected>
            </div>
        );
    }
}
