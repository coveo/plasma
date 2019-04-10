import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop} from '../drop/Drop';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';
import {Svg} from '../svg/Svg';
import {actionableItemContainer, actionableItemContent, actionableItemDots} from './styles/ActionableItem.scss';

export interface IActionableItemProps {
    id: string;
    onItemClick?: (e?: React.MouseEvent<HTMLDivElement>) => any;
    actions?: IItemBoxProps[];
    containerClassName?: string;
}

export class ActionableItem extends React.Component<IActionableItemProps & React.HTMLAttributes<HTMLDivElement>> {
    static defaultProps: Partial<IActionableItemProps> = {
        actions: [],
    };

    render() {
        return (
            <div {..._.omit(this.props, 'actions', 'onItemClick')}>
                <div
                    className={classNames(
                        {'cursor-pointer': !!this.props.onItemClick},
                        'actionable-item-content inline-block text-medium-blue border-color-medium-grey mod-border bg-pure-white',
                        actionableItemContent,
                        actionableItemContainer,
                        this.props.containerClassName,
                    )}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => callIfDefined(this.props.onItemClick, e)}
                >
                    {this.props.children}
                </div>
                {
                    this.props.actions && this.props.actions.length
                        ? (
                            <Drop
                                id={this.props.id}
                                positions={[DropPodPosition.bottom, DropPodPosition.top]}
                                buttonContainerProps={{className: 'inline-block'}}
                                renderOpenButton={(onClick: () => void) => (
                                    <div
                                        onClick={onClick}
                                        className={classNames('actionable-item-dots cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom bg-pure-white', actionableItemDots, actionableItemContainer)}
                                    >
                                        <Svg svgName='more-append' svgClass='icon mod-12 fill-medium-blue' />
                                    </div>
                                )}
                            >
                                <ListBox items={this.props.actions} />
                            </Drop>
                        )
                        : null
                }
            </div>
        );
    }
}
