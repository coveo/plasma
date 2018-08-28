import * as classNames from 'classnames';
import * as React from 'react';

import {Svg} from '../svg/Svg';
import * as styles from './styles/StatusCard.scss';

export interface StatusCardProps {
    color: string;
    icon: string;
    title: string;
}

export class StatusCard extends React.Component<StatusCardProps> {
    render() {
        const cardClasses: string = classNames(
            styles.statusCard,
            [`border-color-${this.props.color}`],
            'flex',
        );

        const titleClasses: string = classNames(
            'text-medium-blue',
            styles.statusCardTitle,
        );

        return (
            <div className={cardClasses}>
                <Svg svgName={this.props.icon} svgClass='icon mod-2x' className={styles.statusCardIcon} />
                <div>
                    <h3 className={titleClasses}>{this.props.title}</h3>
                    <div className={styles.statusCardInfo}>{this.props.children}</div>
                </div>
            </div>
        );
    }
}
