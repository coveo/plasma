import {shallow} from 'enzyme';
import {Color} from '../Color.js';

describe('ColorBar', () => {
    it('should render without error in different prop scenarios', () => {
        expect(() => shallow(<Color color="red" />)).not.toThrow();
        expect(() => shallow(<Color color="blue" />)).not.toThrow();
        expect(() => shallow(<Color color="tahiti-gold" />)).not.toThrow();
        expect(() => shallow(<Color color="rgba(0, 55, 124)" />)).not.toThrow();
        expect(() => shallow(<Color color="#145855" />)).not.toThrow();
    });

    it('should add a backgroundColor', () => {
        const expectedColor = 'rebeccapurple';
        const color = shallow(<Color color={expectedColor} />);

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
