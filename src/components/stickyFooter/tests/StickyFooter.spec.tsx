import {mount, shallow} from 'enzyme';
import * as React from 'react';
import {StickyFooter} from '../StickyFooter';
import {SideNavigation} from '../../sideNavigation/SideNavigation';
import * as styles from '../StickyFooter.scss';

describe('StickyFooter', () => {
    it('should render without error', () => {
        expect(() => shallow(<StickyFooter />)).not.toThrow();
        expect(() => shallow(<StickyFooter classes='someclass' />)).not.toThrow();
    });

    it('should render with extra classes on container if classes is passed as prop', () => {
        const classes = 'some classes';
        const component = shallow(<StickyFooter classes={classes} />);
        expect(component.find('div').first().hasClass(classes)).toBe(true);
    });

    describe('with side nav', () => {
        it('should render with state withSideNav to true if .navigation-wrapper-opened is in the dom', () => {
            document.querySelector('.navigation-wrapper').classList.add('navigation-wrapper-opened');

            const component = shallow(<StickyFooter />);

            expect(component.state('withSideNav')).toBe(true);
        });

        it('should render with stickyFooterWithSideNavClass if .navigation-wrapper-opened is in the dom', () => {
            document.querySelector('.navigation-wrapper').classList.add('navigation-wrapper-opened');

            expect(shallow(<StickyFooter />).hasClass(styles.stickyFooterWithSideNavClass)).toBe(true);
        });

        it('should render with state withSideNav to false if .navigation-wrapper-opened is in the dom', () => {
            document.querySelector('.navigation-wrapper').classList.remove('navigation-wrapper-opened');

            const component = shallow(<StickyFooter />);

            expect(component.state('withSideNav')).toBe(false);
        });

        it('should toggle withSideNav on toggle side nav event', () => {
            document.querySelector('.navigation-wrapper').classList.add('navigation-wrapper-opened');

            const component = mount(<StickyFooter />);

            expect(component.state('withSideNav')).toBe(true);

            document.dispatchEvent(new Event(SideNavigation.toggleEvent));

            expect(component.state('withSideNav')).toBe(false);
        });
    });
});
