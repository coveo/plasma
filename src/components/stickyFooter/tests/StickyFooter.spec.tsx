import {shallow} from 'enzyme';
import * as React from 'react';
import {StickyFooter} from '../StickyFooter';

describe('StickyFooter', () => {
    it('should render without error', () => {
        expect(() => shallow(<StickyFooter />)).not.toThrow();
        expect(() => shallow(<StickyFooter className='someclass' />)).not.toThrow();
    });

    it('should render with extra classes on container if classes is passed as prop', () => {
        const classes = 'some classes';
        const component = shallow(<StickyFooter className={classes} />);
        expect(component.find('.some.classes').exists()).toBe(true);
    });
});
