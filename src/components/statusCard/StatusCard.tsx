import * as classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import * as styles from './styles/StatusCard.scss';

export interface StatusCardProps {
    color: string;
    title: string;
    icon?: string;
    simple?: boolean;
}

export class StatusCard extends React.Component<StatusCardProps> {
    render() {
        const cardClasses: string = classNames(
            styles.statusCard,
            [`border-color-${this.props.color}`],
            'flex',
            {
                simple: this.props.simple,
            },
        );

        const titleClasses: string = classNames(
            'text-medium-blue',
            styles.statusCardTitle,
        );

        return (
            <div className={cardClasses}>
                {this.props.icon && <Svg svgName={this.props.icon} svgClass='icon mod-2x' className={styles.statusCardIcon} />}
                <div>
                    <h3 className={titleClasses}>{this.props.title}</h3>
                    <div className={styles.statusCardInfo}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
