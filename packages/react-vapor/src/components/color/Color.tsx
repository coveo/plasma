import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {webpackVaporColors} from './VaporColors';

export interface ColorProps {
    color: string;
}

export const VaporColors: Record<string, string> = webpackVaporColors;

export class Color extends React.Component<ColorProps & React.HTMLProps<HTMLDivElement>> {
    static defaultprops: Partial<ColorProps> = {
        color: 'pure-white',
    };

    render() {
        const isHex = _.keys(VaporColors).indexOf(this.props.color) === -1;
        let colorStyle: React.CSSProperties = (isHex && {backgroundColor: this.props.color}) || {};
        if (this.props.style) {
            colorStyle = {...colorStyle, ...this.props.style};
        }
        return (
            <div
                {..._.omit(this.props, 'color', 'hex')}
                style={colorStyle}
                className={classNames(this.props.className, {
                    [`bg-${this.props.color}`]: !isHex,
                })}
            >
                {this.props.children}
            </div>
        );
    }
}
