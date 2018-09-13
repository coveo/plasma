import * as React from 'react';
import * as classNames from 'classnames';
import {IClassName} from '../../utils/ClassNameUtils';
import {Svg} from '../svg/Svg';
import {actionableItemDots, actionableItemContent} from './styles/ActionableItem.scss';

export interface IActionableItemProps extends React.HTMLAttributes<HTMLDivElement> {
    dotsClasses?: IClassName;
}

export class ActionableItem extends React.Component<any> {
    render() {
        return (
            <div {...this.props} className={classNames(this.props.className)}>
                <div className={classNames("inline-block text-medium-blue border-color-medium-grey mod-border", actionableItemContent)}>
                    {this.props.children}
                </div>
                <div className={classNames('cursor-pointer inline-block mod-border-top mod-border-right border-color-medium-grey mod-border-bottom', actionableItemDots)}>
                    <Svg svgName='more-append' svgClass='icon mod-12' />
                </div>
            </div>
        );
    }
};
