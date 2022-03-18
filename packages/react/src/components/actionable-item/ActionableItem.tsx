import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

import {DropPodPosition} from '../drop/DomPositionCalculator';
import {Drop, IDropOwnProps} from '../drop/Drop';
import {IItemBoxProps} from '../itemBox/ItemBox';
import {ListBox} from '../listBox/ListBox';
import {Svg} from '../svg';

export interface IActionableItemProps {
    /**
     * The id of the component
     */
    id: string;
    /**
     * A function to call when clicking on the button
     *
     * @param evt the mouse event
     */
    onItemClick?: (evt?: React.MouseEvent<HTMLDivElement>) => any;
    /**
     * The list of actions
     *
     * @default []
     */
    actions?: IItemBoxProps[];
    /**
     * Additionnal CSS class to add on the container
     */
    containerClassName?: string;
    /**
     * Overrides for the Drop props
     */
    dropProps?: Partial<IDropOwnProps>;
}

export class ActionableItem extends React.Component<IActionableItemProps & React.HTMLAttributes<HTMLDivElement>> {
    static defaultProps: Partial<IActionableItemProps> = {
        actions: [],
    };

    render() {
        const actionableItemClasses: string = classNames(
            {'cursor-pointer': !!this.props.onItemClick},
            'actionable-item-content actionable-item-container align-middle inline-block mod-border',
            this.props.containerClassName
        );
        const dropPodClasses: string =
            'actionable-item-container actionable-item-dots align-middle cursor-pointer inline-block mod-border-top mod-border-right mod-border-bottom';

        return (
            <div {..._.omit(this.props, 'actions', 'onItemClick', 'dropProps', 'containerClassName')}>
                <div
                    className={actionableItemClasses}
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
                            <div onClick={onClick} className={dropPodClasses}>
                                <Svg svgName="moreAppend" svgClass="icon mod-12 flex" />
                            </div>
                        )}
                        {...(this.props.dropProps || {})}
                    >
                        <ListBox items={this.props.actions} noActive />
                    </Drop>
                ) : null}
            </div>
        );
    }
}
