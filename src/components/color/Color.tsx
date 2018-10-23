import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';

export interface ColorProps {
    color: string;
}

// tslint:disable-next-line
const VaporColors: {[key: string]: string} = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');

export class Color extends React.Component<ColorProps & React.HTMLProps<HTMLDivElement>> {
    static defaultprops: Partial<ColorProps> = {
        color: 'pure-white',
    };

    render() {
        const isHex = _.keys(VaporColors).indexOf(this.props.color) === -1;
        let colorStyle: React.CSSProperties = isHex && {backgroundColor: this.props.color} || {};
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
            >{this.props.children}</div>
        );
    }
}
