import {CSSProperties, HTMLProps, Component} from 'react';
import * as _ from 'underscore';

export interface ColorProps {
    color: string;
}

/**
 * @deprecated Use Mantine instead
 */
export class Color extends Component<ColorProps & HTMLProps<HTMLDivElement>> {
    static defaultprops: Partial<ColorProps> = {
        color: 'var (--white)',
    };

    render() {
        let colorStyle: CSSProperties = {backgroundColor: this.props.color} || {};
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
