import {shallow} from 'enzyme';
import * as React from 'react';

import {XGrid} from '../XGrid';

describe('<XGrid />', () => {
    it('should not throw', () => {
        expect(() => {
            shallow(<XGrid />);
            shallow(<XGrid padding={10} />);
            shallow(<XGrid padding={30} color='red' />);
        }).not.toThrow();
    });

    it('should render a line', () => {
        const component = shallow(<XGrid />);
        expect(component.find('line').exists()).toBe(true);
    });
});
