import {mount, ReactWrapper, shallow} from 'enzyme';

import {ISideNavLoadingItemProps, SideNavigationLoadingItem} from '../SideNavigationLoadingItem.js';

describe('<SideNavigationLoadingItem />', () => {
    let wrapper: ReactWrapper<ISideNavLoadingItemProps, any>;

    beforeEach(() => {
        wrapper = mount(<SideNavigationLoadingItem />, {attachTo: document.getElementById('App')});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigationLoadingItem />);
        }).not.toThrow();
    });

    it('should render a <SideNavigationLoadingItem /> with classes prop', () => {
        const className = 'mod-width-30';
        wrapper.setProps({className}).mount().update();

        expect(wrapper.find('div').first().hasClass(className)).toBe(true);
    });
});
