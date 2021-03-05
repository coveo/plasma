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
            <div {..._.omit(this.props, 'actions', 'onItemClick', 'dropProps', 'containerClassName')}>
                <div
                    className={classNames(
                        {'cursor-pointer': !!this.props.onItemClick},
                        'actionable-item-content align-middle inline-block mod-border',
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
                                    'actionable-item-dots align-middle cursor-pointer inline-block mod-border-top mod-border-right mod-border-bottom',
                                    styles.actionableItemDots,
                                    styles.actionableItemContainer
                                )}
                            >
                                <Svg svgName="more-append" svgClass="icon mod-12 flex" />
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
