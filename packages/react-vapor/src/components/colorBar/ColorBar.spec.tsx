import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {KeyValue} from '../../utils/DataStructuresUtils';
import {ITooltipProps, Tooltip} from '../tooltip/Tooltip';
import {ColorBar, IColorBarProps} from './ColorBar';
import {noColorsPropsScenarios, withColorsPropsScenarios} from './ColorBarPropsScenarios.spec';

describe('ColorBar', () => {
    it('should render without error in different prop scenarios', () => {
        [...noColorsPropsScenarios, ...withColorsPropsScenarios].forEach((props) => {
            expect(() => shallow(<ColorBar {...props} />)).not.toThrow();
        });
    });

    it('should render a div with only a transparent color with width 100% if no colors are passed', () => {
        noColorsPropsScenarios.forEach((props) => {
            const colorBars = shallow(<ColorBar {...props} />).find('.color-bar-color');
            const {width} = colorBars.first().prop('style');
            const colorProp = colorBars.first().prop('color');

            expect(colorBars.length).toBe(1);
            expect(colorProp).toBe('transparent');
            expect(width).toBe('100%');
        });
    });

    it('should fill the no-color width with transparent if colored width does not reach 100%', () => {
        const colorBars = shallow(<ColorBar widthPerColor={{blue: 20}} />).find('.color-bar-color');
        expect(colorBars.length).toBe(2);

        const coloredStyle = colorBars.first().prop('style');
        const coloredColorProp = colorBars.first().prop('color');
        expect(coloredColorProp).toBe('blue');
        expect(coloredStyle.width).toBe('20%');

        const transparentStyle = colorBars.last().prop('style');
        const transparentColorProp = colorBars.last().prop('color');
        expect(transparentColorProp).toBe('transparent');
        expect(transparentStyle.width).toBe('80%');
    });

    it('should render a div for each non-zero width color with the proper width', () => {
        withColorsPropsScenarios.forEach((props) => {
            const nonZeroNonTransparentColors = _.omit(props.widthPerColor, (width: number, color: string) => !width);

            shallow(<ColorBar {...props} />).find('.color-bar-color').forEach((color) => {
                const {width} = color.first().prop('style');
                const colorProp = color.first().prop('color');

                if (colorProp !== 'transparent') {
                    expect(nonZeroNonTransparentColors[colorProp]).toBe(parseInt(width.toString(), 10));
                } else {
                    expect(colorProp).toBe('transparent');
                }
            });
        });
    });

    it('should adjust the width of each color if the total width exceeds 100%', () => {
        const doubledWidthProps: IColorBarProps = {
            widthPerColor: {
                blue: 20 * 2,
                yellow: 50 * 2,
                brown: 30 * 2,
            },
        };

        shallow(<ColorBar {...doubledWidthProps} />).find('.color-bar-color').forEach((color) => {
            const {width} = color.prop('style');
            const colorProp = color.first().prop('color');
            expect(doubledWidthProps.widthPerColor[colorProp] / 2).toBe(parseInt(width.toString(), 10));
        });
    });

    it('should have a 5px height by default', () => {
        const {height} = shallow(<ColorBar widthPerColor={{blue: 10}} />).find('.color-bar-color').first().prop('style');

        expect(height).toBe('5px');
    });

    it('should change the default height if height is passed as prop', () => {
        const {height} = shallow(<ColorBar widthPerColor={{blue: 10}} height='10px' />).find('.color-bar-color').first().prop('style');

        expect(height).toBe('10px');
    });

    it('should pass extra classes to container if passed as prop', () => {
        const colorBar = shallow(<ColorBar widthPerColor={{blue: 10}} className='extra-class' />).find('div').first();

        expect(colorBar.prop('className')).toContain('extra-class');
    });

    it('should render without tooltip if no tooltipPerColor is passed', () => {
        const colorBar = shallow(<ColorBar widthPerColor={{blue: 10}} className='extra-class' />);

        expect(colorBar.find(Tooltip).length).toBe(0);
    });

    it('should render with a tooltip on the right color if some tooltipPerColor values are passed', () => {
        const widthPerColor: KeyValue<number> = {blue: 10, green: 90};
        const tooltipPerColor: KeyValue<ITooltipProps> = {blue: {title: 'superTooltipPropsForBlue'}, green: {title: 'superTooltipPropsForGreen'}};

        const colorBar = shallow(<ColorBar {...{widthPerColor, tooltipPerColor}} className='extra-class' />);

        _.keys(widthPerColor).map((color: string, index: number) => {
            expect(colorBar.find(Tooltip).at(index).props()).toEqual(jasmine.objectContaining(tooltipPerColor[color]));
            expect(colorBar.find(Tooltip).at(index).find('.color-bar-color').html()).toContain(color);
        });
    });
});
