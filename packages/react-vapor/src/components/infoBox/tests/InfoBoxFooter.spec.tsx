import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {InfoBoxFooter} from '../InfoBoxFooter';

describe('InfoBoxFooter', () => {
    it('should not throw', () => {
        expect(() => shallow(<InfoBoxFooter />)).not.toThrow();
        expect(() => shallow(<InfoBoxFooter>Footer</InfoBoxFooter>)).not.toThrow();
        expect(() => shallow(<InfoBoxFooter onClick={_.noop}>Footer</InfoBoxFooter>)).not.toThrow();
    });

    it('should allow custom classes', () => {
        const expectedClass = 'some-footer-class';
        const wrapper = shallow(<InfoBoxFooter className={expectedClass} />);

        expect(wrapper.hasClass(expectedClass)).toBe(true);
    });

    it('should render children', () => {
        const expectedChildren = <div className='to-find' />;
        const wrapper = shallow(<InfoBoxFooter>{expectedChildren}</InfoBoxFooter>);

        expect(wrapper.contains(expectedChildren)).toBe(true);
    });
});
