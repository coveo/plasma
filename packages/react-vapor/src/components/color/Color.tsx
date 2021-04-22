import * as React from 'react';
import * as _ from 'underscore';

export interface ColorProps {
    color: string;
}

export class Color extends React.Component<ColorProps & React.HTMLProps<HTMLDivElement>> {
    static defaultprops: Partial<ColorProps> = {
        color: 'var (--white)',
    };

    render() {
        let colorStyle: React.CSSProperties = {backgroundColor: this.props.color} || {};
        if (this.props.style) {
            colorStyle = {...colorStyle, ...this.props.style};
        }
        return (
            <div {..._.omit(this.props, 'color', 'hex')} style={colorStyle} className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}
