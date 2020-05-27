import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop, IDropOwnProps} from '../drop/Drop';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';
import {Svg} from '../svg/Svg';
import * as styles from './styles/ActionableItem.scss';

export interface IActionableItemProps {
    id: string;
    onItemClick?: (e?: React.MouseEvent<HTMLDivElement>) => any;
    actions?: IItemBoxProps[];
    containerClassName?: string;
    dropProps?: Partial<IDropOwnProps>;
}

export class ActionableItem extends React.Component<IActionableItemProps & React.HTMLAttributes<HTMLDivElement>> {
    static defaultProps: Partial<IActionableItemProps> = {
        actions: [],
    };

    render() {
        return (
            <div {..._.omit(this.props, 'actions', 'onItemClick', 'dropProps')}>
                <div
                    className={classNames(
                        {'cursor-pointer': !!this.props.onItemClick},
                        'actionable-item-content inline-block text-medium-blue border-color-medium-grey mod-border bg-pure-white',
                        styles.actionableItemContent,
                        styles.actionableItemContainer,
                        this.props.containerClassName
                    )}
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => this.props.onItemClick?.(e)}
                >
                    {this.props.children}
                </div>
                {this.props.actions && this.props.actions.length ? (
                    <Drop
                        id={this.props.id}
                        positions={[DropPodPosition.bottom, DropPodPosition.top]}
                        buttonContainerProps={{className: 'inline-block'}}
                        renderOpenButton={(onClick: () => void) => (
                            <div
                                onClick={onClick}
                                className={classNames(
                                    'actionable-item-dots cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom bg-pure-white',
                                    styles.actionableItemDots,
                                    styles.actionableItemContainer
                                )}
                            >
                                <Svg svgName="more-append" svgClass="icon mod-12 fill-medium-blue" />
                            </div>
                        )}
                        {...(this.props.dropProps || {})}
                    >
                        <ListBox items={this.props.actions} />
                    </Drop>
                ) : null}
            </div>
        );
    }
}
