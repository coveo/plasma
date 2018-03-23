import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {KeyValue} from '../../utils/DataStructuresUtils';

export interface IColorBarProps {
    /**
     * key value pair object, in which
     * each key is a string defining a css legal color value https://www.w3schools.com/cssref/css_colors_legal.asp
     * and each value is an integer representing the percentage of 100% that this color must fill
     */
    widthPerColor: KeyValue<number>;
    height: string;
    className?: IClassName;
}

export class ColorBar extends React.Component<IColorBarProps> {
    static defaultProps: Partial<IColorBarProps> = {
        height: '5px',
    };

    render() {
        const totalWidthWithColor = _.reduce(this.props.widthPerColor, (totalWidth: number, width: number) => width + totalWidth, 0);
        const adjustedWidthPerColor = totalWidthWithColor <= 100
            ? {...this.props.widthPerColor, 'transparent': 100 - totalWidthWithColor}
            : _.mapObject(this.props.widthPerColor, (width: number) => Math.round(width / totalWidthWithColor * 100));

        return (
            <div className={classNames('full-content-x', this.props.className)}>
                {_.map(
                    adjustedWidthPerColor,
                    (width: number, color: string) => <div key={color} style={{height: this.props.height, width: `${width}%`, backgroundColor: color}}></div>,
                )}
            </div>
        );
    }
}
