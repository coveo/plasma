import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {KeyValue} from '../../utils/DataStructuresUtils';
import {Color} from '../color/Color';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IColorBarProps {
    /**
     * key value pair object, in which
     * each key is a string defining a css legal color value https://www.w3schools.com/cssref/css_colors_legal.asp
     * and each value is an integer representing the percentage of 100% that this color must fill
     */
    widthPerColor: KeyValue<number>;
    tooltipPerColor?: KeyValue<ITooltipProps>;
    height?: string;
    className?: IClassName;
}

export class ColorBar extends React.Component<IColorBarProps> {
    static defaultProps: Partial<IColorBarProps> = {
        height: '5px',
        tooltipPerColor: {},
    };

    render() {
        return (
            <div className={classNames('full-content-x color-bar', this.props.className)}>
                {_.map(
                    this.getAdjustedWidthPerColor(),
                    (width: number, color: string) => {
                        const colorBarSection: JSX.Element = (
                            <Color
                                key={color}
                                className='inline-block color-bar-color'
                                color={color}
                                style={{height: this.props.height, width: `${width}%`}}>
                            </Color>
                        );

                        return this.props.tooltipPerColor[color]
                            ? (
                                <Tooltip key={color} {...this.props.tooltipPerColor[color]}>
                                    {colorBarSection}
                                </Tooltip>
                            )
                            : colorBarSection;
                    },
                )}
            </div>
        );
    }

    getAdjustedWidthPerColor(): KeyValue<number> {
        const nonZeroWidthColors = _.omit(this.props.widthPerColor, (width: number) => !width);
        const totalColoredWidth = _.reduce(nonZeroWidthColors, (totalWidth: number, width: number) => width + totalWidth, 0);

        if (totalColoredWidth === 0) {
            return {transparent: 100};
        } else if (totalColoredWidth < 100) {
            return {...nonZeroWidthColors, transparent: 100 - totalColoredWidth};
        } else if (totalColoredWidth === 100) {
            return nonZeroWidthColors;
        } else {
            return _.mapObject(
                nonZeroWidthColors,
                (width: number) => Math.round(width / totalColoredWidth * 100),
            );
        }
    }
}
