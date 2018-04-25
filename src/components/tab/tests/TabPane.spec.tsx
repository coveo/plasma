import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {ITabPaneProps, TabPane} from '../TabPane';

describe('TabPane', () => {
    const id: string = 'tab';

    describe('<TabPane />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <TabPane
                        id={id}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<Tab />', () => {
        let tab: ReactWrapper<ITabPaneProps, any>;

        beforeEach(() => {
            tab = mount(
                <TabPane
                    id={id}
                />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            tab.unmount();
            tab.detach();
        });

        it('should set active class on container when isActive is true', () => {
            const container = tab.find('div').first();
            expect(container.hasClass('active')).toBe(false);

            tab.setProps({id, isActive: true});
            tab.mount();
            expect(container.hasClass('active')).toBe(true);
        });

        it('should add classNames when className prop set', () => {
            const container = tab.find('div').first();
            tab.setProps({id, className: 'hello'}).mount();
            expect(container.hasClass('hello')).toBe(true);
        });
    });
});
