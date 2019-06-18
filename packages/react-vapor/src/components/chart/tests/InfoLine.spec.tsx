import {shallow} from 'enzyme';
import * as React from 'react';

import {InfoLine} from '../InfoLine';

describe('<InfoLine />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<InfoLine value={1} />);
            shallow(<InfoLine value={10} isVertical />);
            shallow(<InfoLine value={10} isVertical={false} padding={10} stroke="blue" />);
        }).not.toThrow();
    });

    it('should render a line', () => {
        const component = shallow(<InfoLine value={1} />);
        expect(component.find('line').exists()).toBe(true);
    });

    it('should not render a text if label is undefined', () => {
        const component = shallow(<InfoLine value={1} />);
        expect(component.find('text').exists()).toBe(false);
    });

    it('should render the label if defined', () => {
        const component = shallow(<InfoLine value={1} label="this is it" />);
        expect(component.find('text').exists()).toBe(true);
    });

    it('should render a transformed label if isVertical is true', () => {
        const component = shallow(<InfoLine value={1} label="this is it" isVertical />);
        expect(component.find('text').prop('transform')).toBe('rotate(-90)');
    });
});
