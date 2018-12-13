import {shallow} from 'enzyme';
import * as React from 'react';
import {InfoBoxLink} from '../InfoBoxLink';

describe('InfoBoxLink', () => {
    it('should not throw', () => {
        expect(() => shallow(<InfoBoxLink />)).not.toThrow();
        expect(() => shallow(<InfoBoxLink>Link</InfoBoxLink>)).not.toThrow();
        expect(() => shallow(<InfoBoxLink href='#'>Link</InfoBoxLink>)).not.toThrow();
    });

    it('should allow custom classes', () => {
        const expectedClass = 'some-link-class';
        const wrapper = shallow(<InfoBoxLink className={expectedClass} />);

        expect(wrapper.hasClass(expectedClass)).toBe(true);
    });

    it('should render children', () => {
        const expectedChildren = <div className='to-find' />;
        const wrapper = shallow(<InfoBoxLink>{expectedChildren}</InfoBoxLink>);

        expect(wrapper.contains(expectedChildren)).toBe(true);
    });
});
