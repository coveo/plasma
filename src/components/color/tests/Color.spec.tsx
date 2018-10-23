import {shallow} from 'enzyme';
import * as React from 'react';
import {Color} from '../Color';

describe('ColorBar', () => {
    it('should render without error in different prop scenarios', () => {
        expect(() => shallow(<Color color='red' />)).not.toThrow();
        expect(() => shallow(<Color color='blue' />)).not.toThrow();
        expect(() => shallow(<Color color='tahiti-gold' />)).not.toThrow();
        expect(() => shallow(<Color color='rgba(0, 55, 124)' />)).not.toThrow();
        expect(() => shallow(<Color color='#145855' />)).not.toThrow();
    });

    it('should add a bg class if the color exists in the palette, even if it is a CSS color', () => {
        const expectedColor = 'white';
        const color = shallow(<Color color={expectedColor} />);

        expect(color.find(`.bg-${expectedColor}`).length).toBe(1);
    });

    it('should add a backgroundColor instead of bg class if the css color does not exists in the palette', () => {
        const expectedColor = 'rebeccapurple';
        const color = shallow(<Color color={expectedColor} />);

        expect(color.find(`.bg-${expectedColor}`).length).toBe(0);
        expect(color.find('div').prop('style').backgroundColor).toBe(expectedColor);
    });

    it('should add a backgroundColor if the color is an hex code', () => {
        const expectedColor = '#ff00ff';
        const color = shallow(<Color color={expectedColor} />);

        expect(color.find('div').prop('style').backgroundColor).toBe(expectedColor);
    });

    it('should add a backgroundColor if the color is an rgb code', () => {
        const expectedColor = 'rgb(255, 255, 000)';
        const color = shallow(<Color color={expectedColor} />);

        expect(color.find('div').prop('style').backgroundColor).toBe(expectedColor);
    });
});
