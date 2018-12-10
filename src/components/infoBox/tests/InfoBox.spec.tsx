import {shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {InfoBox} from '../InfoBox';

describe('InfoBox', () => {
    it('should not throw', () => {
        expect(() => shallow(<InfoBox />)).not.toThrow();
        expect(() => shallow(<InfoBox>Content</InfoBox>)).not.toThrow();
        expect(() => shallow(<InfoBox onClick={_.noop}>Content</InfoBox>)).not.toThrow();
    });

    it('should allow custom classes', () => {
        const expectedClass = 'some-content-class';
        const wrapper = shallow(<InfoBox className={expectedClass} />);

        expect(wrapper.hasClass(expectedClass)).toBe(true);
    });

    it('should render children', () => {
        const expectedChildren = <div className='to-find' />;
        const wrapper = shallow(<InfoBox>{expectedChildren}</InfoBox>);

        expect(wrapper.find('.to-find').exists()).toBe(true);
    });
});
