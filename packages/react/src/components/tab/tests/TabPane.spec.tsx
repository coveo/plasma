import {mount, ReactWrapper, shallow} from 'enzyme';

import {ITabPaneProps, TabPane} from '../TabPane.js';

describe('TabPane', () => {
    const id: string = 'tab';

    describe('<TabPane />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(<TabPane id={id} />);
            }).not.toThrow();
        });
    });

    describe('<Tab />', () => {
        let tab: ReactWrapper<ITabPaneProps, any>;

        beforeEach(() => {
            tab = mount(<TabPane id={id} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            tab?.unmount();
        });

        it('should set active class on container when isActive is true', () => {
            expect(tab.find('div').first().hasClass('active')).toBe(false);

            tab.setProps({id, isActive: true});
            tab.mount();

            expect(tab.find('div').first().hasClass('active')).toBe(true);
        });

        it('should add classNames when className prop set', () => {
            tab.setProps({id, className: 'hello'}).mount();

            expect(tab.find('div').first().hasClass('hello')).toBe(true);
        });
    });
});
