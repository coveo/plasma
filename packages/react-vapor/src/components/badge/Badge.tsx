import classNames from 'classnames';
import * as React from 'react';

export const DEFAULT_BADGE_CLASSNAME = 'badge';

export interface IBadgeProps {
    label: string;
    extraClasses?: string[];
}

export class Badge extends React.Component<IBadgeProps> {
    static defaultProps: Partial<IBadgeProps> = {
        extraClasses: [],
    };

    render() {
        const className = classNames(DEFAULT_BADGE_CLASSNAME, this.props.extraClasses);
        return <span className={className}>{this.props.label}</span>;
    }
}
