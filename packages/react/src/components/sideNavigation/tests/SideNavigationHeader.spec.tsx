import {SvgName} from '@coveord/plasma-style';
import {mount, ReactWrapper, shallow} from 'enzyme';

import {Svg} from '../../svg';
import {ISideNavigationHeaderProps} from '../SideNavigationHeader';

describe('SideNavigationHeader', () => {
    const title = 'hello';
    let wrapper: ReactWrapper<ISideNavigationHeaderProps, any>;

    beforeEach(() => {
        wrapper = mount(<SideNavigationHeader title={title} />, {attachTo: document.getElementById('App')});
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it('should render without errors', () => {
        expect(() => {
            shallow(<SideNavigationHeader title={title} />);
        }).not.toThrow();
    });

    it('should render an icon if svgTitle prop is specified.', () => {
        const svgName = 'menu-content' as SvgName;
        wrapper.setProps({svgName, title});
        wrapper.mount();

        const icon = wrapper.find(Svg).first();

        expect(icon).toBeDefined();
    });
});
