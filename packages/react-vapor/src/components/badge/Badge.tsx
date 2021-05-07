import classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg';

export const DEFAULT_BADGE_CLASSNAME = 'badge';

export interface IBadgeProps {
    label: string;
    icon?: string;
    extraClasses?: string[];
}

export class Badge extends React.Component<IBadgeProps> {
    static defaultProps: Partial<IBadgeProps> = {
        extraClasses: [],
    };

    render() {
        const className = classNames(DEFAULT_BADGE_CLASSNAME, this.props.extraClasses);
        return (
            <span className={className} aria-label="badge">
                {this.props.icon?.length && <Svg svgName={this.props.icon} svgClass="icon" className="pr1 py1" />}
                <span>{this.props.label}</span>
            </span>
        );
    }
}
