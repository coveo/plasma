import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {ColorBar, IColorBarProps} from './ColorBar';
import {noColorsPropsScenarios, withColorsPropsScenarios} from './ColorBarPropsScenarios.spec.ts';

describe('ColorBar', () => {
    it('should render without error in different prop scenarios', () => {
        [...noColorsPropsScenarios, ...withColorsPropsScenarios].forEach((props) => {
            expect(() => shallow(<ColorBar {...props} />)).not.toThrow();
        });
    });

    it('should render a div with only a transparent color with width 100% if no colors are passed', () => {
        noColorsPropsScenarios.forEach((props) => {
            const colorBars = shallow(<ColorBar widthPerColor={{blue: 100}} />).find('.color-bar-color');
            expect(colorBars.length).toBe(1);
            expect(colorBars.first().prop('style').backgroundColor).toBe('blue');
            expect(colorBars.first().prop('style').width).toBe('100%');
        });
    });

    it('should render a div for each non-zero width color with the proper width', () => {
        withColorsPropsScenarios.forEach((props) => {
            const nonZeroNonTransparentColors = _.omit(props.widthPerColor, (width: number, color: string) => !width);

            shallow(<ColorBar {...props} />).find('.color-bar-color').forEach((color) => {
                if (color.prop('style').backgroundColor !== 'transparent') {
                    expect(nonZeroNonTransparentColors[color.first().prop('style').backgroundColor])
                        .toBe(parseInt(color.prop('style').width, 10));
                } else {
                    expect(color.prop('style').backgroundColor).toBe('transparent');
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
            expect(doubledWidthProps.widthPerColor[color.prop('style').backgroundColor] / 2)
                .toBe(parseInt(color.prop('style').width, 10));
        });
    });

    it('should have a 5px height by default', () => {
        expect(shallow(<ColorBar widthPerColor={{blue: 10}} />).find('.color-bar-color').first().prop('style').height)
            .toBe('5px');
    });

    it('should change the default height if height is passed as prop', () => {
        expect(shallow(<ColorBar widthPerColor={{blue: 10}} height='10px' />).find('.color-bar-color').first().prop('style').height)
            .toBe('10px');
    });

    it('should pass extra classes to container if passed as prop', () => {
        expect(shallow(<ColorBar widthPerColor={{blue: 10}} className='extra-class' />).find('div').first().prop('className'))
            .toContain('extra-class');
    });
});
