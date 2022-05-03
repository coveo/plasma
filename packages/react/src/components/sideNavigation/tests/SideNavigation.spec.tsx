import {mount, ReactWrapper, shallow} from 'enzyme';
import {ISideNavProps, SideNavigation} from '../SideNavigation';

describe('<SideNavigation />', () => {
    let wrapper: ReactWrapper<ISideNavProps, any>;

    beforeEach(() => {
        wrapper = mount(<SideNavigation />, {attachTo: document.getElementById('App')});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigation />);
        }).not.toThrow();
    });

    it('should render a <SideNavigation /> with classes prop', () => {
        const className = 'foo';
        wrapper.setProps({className}).mount().update();

        expect(wrapper.find('nav').first().hasClass(className)).toBe(true);
    });

    it('should not have class navigation-opened if opened prop is true and withReduxState prop is false.', () => {
        const container = wrapper.find('nav').first();

        expect(container.hasClass('navigation-opened')).toBe(true);

        wrapper.setProps({opened: true});
        wrapper.mount();

        expect(container.hasClass('navigation-opened')).toBe(true);
    });

    it('should have class navigation-opened if opened prop is true and withReduxState prop is true.', () => {
        wrapper.setProps({opened: false, withReduxState: true});
        wrapper.update();

        expect(wrapper.find('nav').hasClass('navigation-opened')).toBe(false);

        wrapper.setProps({opened: true, withReduxState: true});
        wrapper.update();

        expect(wrapper.find('nav').hasClass('navigation-opened')).toBe(true);
    });
});
