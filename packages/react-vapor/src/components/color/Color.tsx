import * as React from 'react';
import * as _ from 'underscore';
import {webpackVaporColors} from './VaporColors';

export interface ColorProps {
    color: string;
}

export const VaporColors: Record<string, string> = webpackVaporColors;

export class Color extends React.Component<ColorProps & React.HTMLProps<HTMLDivElement>> {
    static defaultprops: Partial<ColorProps> = {
        color: '#FFFFFF', // var(--white)?
    };

    render() {
        let colorStyle: React.CSSProperties = {backgroundColor: this.props.color} || {};
        if (this.props.style) {
            colorStyle = {...colorStyle, ...this.props.style};
        } // TODO: see if this break something...
        return (
            <div
                {..._.omit(this.props, 'color', 'hex')}
                style={{backgroundColor: this.props.color}}
                className={this.props.className}
            >
                {this.props.children}
            </div>
        );
    }
}
