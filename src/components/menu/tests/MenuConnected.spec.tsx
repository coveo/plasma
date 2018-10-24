import {mount, ReactWrapper} from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {IReactVaporState} from '../../../ReactVapor';
import {clearState} from '../../../utils/ReduxUtils';
import {TestUtils} from '../../../utils/TestUtils';
import {IItemBoxProps} from '../../itemBox/ItemBox';
import {Svg} from '../../svg/Svg';
import {IMenuProps, MenuConnected} from '../MenuConnected';

describe('Menu', () => {
    describe('<MenuConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let menuWrapper: ReactWrapper<IMenuProps, void>;
        let store: Store<IReactVaporState>;

        const id: string = 'menu-test';

        const mountMenuConnected = (items: IItemBoxProps[] = [], props: Partial<IMenuProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MenuConnected id={id} {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            menuWrapper = wrapper.find(MenuConnected).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
            wrapper.detach();
        });

        describe('mount and unmount', () => {
            it('should not throw on mount', () => {
                expect(() => mountMenuConnected()).not.toThrow();
            });

            it('should not throw on unmount', () => {
                mountMenuConnected();
                expect(() => wrapper.unmount()).not.toThrow();
            });

            it('should add the menu to the state when mounted', () => {
                expect(store.getState().menus).toEqual({});

                mountMenuConnected();

                expect(store.getState().menus[id]).toBeDefined();
            });

            it('should remove the menu from the state when the component unmount', () => {
                mountMenuConnected();

                expect(store.getState().menus[id]).toBeDefined();
                wrapper.unmount();

                expect(store.getState().menus).toEqual({});
            });
        });

        describe('custom props', () => {
            it('should add a style right on the menu to set the position right', () => {
                mountMenuConnected([], {positionRight: true});

                menuWrapper.find('.menu-toggle').simulate('mouseUp');

                expect((menuWrapper.find('.select-dropdown-container').instance() as any).style.right).toBe('8px');
            });

            it('should add custom classes on dropdown element', () => {
                mountMenuConnected([], {className: 'test'});

                expect(menuWrapper.find('.dropdown').hasClass('test')).toBe(true);
            });

            it('should add the custom svg', () => {
                mountMenuConnected([], {buttonSvg: <Svg svgName='add' />});

                expect(menuWrapper.find(Svg).props().svgName).toBe('add');
            });
        });

        describe('click handler', () => {
            beforeEach(() => {
                const otherElement: HTMLDivElement = document.createElement('div');
                otherElement.setAttribute('id', 'other');
                document.body.appendChild(otherElement);
            });

            afterEach(() => document.getElementById('other').remove());

            const clickOnEl = (el: Element = document.getElementById('other')) => {
                const evt = new MouseEvent('mousedown', {
                    view: window,
                    bubbles: true,
                    cancelable: true,
                    clientX: 20,
                });
                el.dispatchEvent(evt);
            };

            it('should close the menu when the user click outside the menu and the menu is open', () => {
                mountMenuConnected();

                menuWrapper.find('.menu-toggle').simulate('mouseUp');
                expect(store.getState().menus[id].open).toBe(true, '1');

                clickOnEl(menuWrapper.find('.select-dropdown-container').getDOMNode());
                expect(store.getState().menus[id].open).toBe(true, '2');

                clickOnEl();
                expect(store.getState().menus[id].open).toBe(false, '3');
            });

            it('should not open the menu when the user click outside the menu', () => {
                mountMenuConnected();

                expect(store.getState().menus[id].open).toBe(false);

                clickOnEl();
                expect(store.getState().menus[id].open).toBe(false);
            });

            it('should close the menu when the user click outside the menu and the menu is open', () => {
                mountMenuConnected();

                menuWrapper.find('.menu-toggle').simulate('mouseUp');
                expect(store.getState().menus[id].open).toBe(true, 'open menu');

                menuWrapper.find('.select-dropdown-container').simulate('click');
                expect(store.getState().menus[id].open).toBe(false, 'close menu');
            });
        });
    });
});
