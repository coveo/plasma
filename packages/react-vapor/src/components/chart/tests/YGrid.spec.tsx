import {shallow} from 'enzyme';
import * as React from 'react';

import {YGrid} from '../YGrid';

describe('<YGrid />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<YGrid />);
            shallow(<YGrid padding={10} />);
            shallow(<YGrid padding={30} color="red" />);
        }).not.toThrow();
    });

    it('should render a line', () => {
        const component = shallow(<YGrid />);
        expect(component.find('line').exists()).toBe(true);
    });
});
