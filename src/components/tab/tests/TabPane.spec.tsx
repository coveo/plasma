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
            tab.detach();
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
