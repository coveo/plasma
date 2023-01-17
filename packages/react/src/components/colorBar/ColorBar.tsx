import classNames from 'clsx';
import {Component} from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {KeyValue} from '../../utils/DataStructuresUtils';
import {Color} from '../color/Color';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';

export interface IColorBarProps {
    /**
     * An object where the keys are legal CSS color as per https://www.w3schools.com/cssref/css_colors_legal.asp and the values a percentage.
     * If the total is above 100 we normalize the value.
     * If the total is under 100 the visible portion of the color bar won't take the full width
     */
    widthPerColor: Record<string, number>;
    /**
     * An object where the keys are the colors of widthPerColor and the value are ITooltipProps
     *
     * @default {}
     */
    tooltipPerColor?: Record<string, ITooltipProps>;
    /**
     * Height in px of the color bar
     *
     * @default "5px"
     */
    height?: string;
    /**
     * Additionnal CSS class to add on the color bar
     */
    className?: IClassName;
}

/**
 * @deprecated Use Mantine instead
 */
export class ColorBar extends Component<IColorBarProps> {
    static defaultProps: Partial<IColorBarProps> = {
        height: '5px',
        tooltipPerColor: {},
    };

    render() {
        return (
            <div className={classNames('full-content-x color-bar', this.props.className)}>
                {_.map(this.getAdjustedWidthPerColor(), (width: number, color: string) => {
                    const colorBarSection: JSX.Element = (
                        <Color
                            key={color}
                            className="inline-block color-bar-color"
                            color={color}
                            style={{height: this.props.height, width: `${width}%`}}
                        />
                    );

                    return this.props.tooltipPerColor[color] ? (
                        <Tooltip key={color} {...this.props.tooltipPerColor[color]}>
                            {colorBarSection}
                        </Tooltip>
                    ) : (
                        colorBarSection
                    );
                })}
            </div>
        );
    }

    getAdjustedWidthPerColor(): KeyValue<number> {
        const nonZeroWidthColors = _.omit(this.props.widthPerColor, (width: number) => !width);
        const totalColoredWidth = _.reduce(
            nonZeroWidthColors,
            (totalWidth: number, width: number) => width + totalWidth,
            0
        );

        if (totalColoredWidth === 0) {
            return {transparent: 100};
        } else if (totalColoredWidth < 100) {
            return {...nonZeroWidthColors, transparent: 100 - totalColoredWidth};
        } else if (totalColoredWidth === 100) {
            return nonZeroWidthColors;
        } else {
            return _.mapObject(nonZeroWidthColors, (width: number) => Math.round((width / totalColoredWidth) * 100));
        }
    }
}
