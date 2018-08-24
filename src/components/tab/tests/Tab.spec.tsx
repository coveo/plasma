import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {ITabProps, Tab} from '../Tab';

describe('Tab', () => {
    const id: string = 'tab';
    const title: string = 'Title';

    describe('<Tab />', () => {
        it('should render without errors', () => {
            expect(() => {
                shallow(
                    <Tab
                        id={id}
                        title={title}
                    />,
                );
            }).not.toThrow();
        });
    });

    describe('<Tab />', () => {
        let tab: ReactWrapper<ITabProps, any>;
        let tabInstance: Tab;

        beforeEach(() => {
            tab = mount(
                <Tab
                    id={id}
                    title={title}
                />,
                {attachTo: document.getElementById('App')},
            );
            tabInstance = tab.instance() as Tab;
        });

        afterEach(() => {
            tab.detach();
        });

        it('should call prop onRender on mounting if set', () => {
            const renderSpy = jasmine.createSpy('onRender');

            expect(() => tabInstance.componentWillMount()).not.toThrow();

            tab.setProps({id: id, title: title, onRender: renderSpy});
            tab.unmount();
            tab.mount();
            expect(renderSpy.calls.count()).toBe(1);
        });

        it('should call prop onDestroy on unmounting if set', () => {
            const destroySpy = jasmine.createSpy('onDestroy');

            expect(() => tabInstance.componentWillUnmount()).not.toThrow();

            tab.setProps({id: id, title: title, onDestroy: destroySpy});
            tab.mount();
            tab.unmount();
            expect(destroySpy.calls.count()).toBe(1);
        });

        it('should call prop onSelect when tab is clicked and prop is set', () => {
            const selectSpy = jasmine.createSpy('onSelect');

            tab.simulate('click');
            expect(selectSpy.calls.count()).toBe(0);

            tab.setProps({id: id, title: title, onSelect: selectSpy});
            tab.mount();
            tab.simulate('click');
            expect(selectSpy.calls.count()).toBe(1);
        });

        it('should set active class on container when isActive is true', () => {
            expect(tab.find('div').first().hasClass('active')).toBe(false);

            tab.setProps({id, title, isActive: true}).mount().update();
            expect(tab.find('div').first().hasClass('active')).toBe(true);
        });
    });
});
