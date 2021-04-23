import classNames from 'classnames';
import * as React from 'react';
import {Svg} from '../svg';

export const DEFAULT_INFO_TOKEN_CLASSNAME = 'info-token';

export interface IInfoTokenProps {
    icon: string;
    extraClasses?: string[];
}

export class InfoToken extends React.Component<IInfoTokenProps> {
    static defaultProps: Partial<IInfoTokenProps> = {
        extraClasses: [],
    };

    render() {
        const className = classNames(DEFAULT_INFO_TOKEN_CLASSNAME, this.props.extraClasses);
        return (
            <span className={className}>
                <Svg svgName={this.props.icon} className="pr1 py1" />
            </span>
        );
    }
}
