import {AddSize16Px} from '@coveord/plasma-react-icons';
import {screen} from '@test-utils';
import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';
import {Store} from 'redux';

import {PlasmaState} from '../../../PlasmaState.js';
import {clearState} from '../../../utils/ReduxUtils.js';
import {TestUtils} from '../../../utils/tests/TestUtils.js';
import {IItemBoxProps} from '../../itemBox/ItemBox.js';
import {IMenuProps, MenuConnected} from '../MenuConnected.js';

describe('Menu', () => {
    describe('<MenuConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let menuWrapper: ReactWrapper<IMenuProps, void>;
        let store: Store<PlasmaState>;

        const id: string = 'menu-test';

        const mountMenuConnected = (items: IItemBoxProps[] = [], props: Partial<IMenuProps> = {}) => {
            wrapper = mount(
                <Provider store={store}>
                    <MenuConnected id={id} {...props} />
                </Provider>,
                {attachTo: document.getElementById('app')}
            );
            menuWrapper = wrapper.find(MenuConnected).first();
        };

        beforeEach(() => {
            store = TestUtils.buildStore();
        });

        afterEach(() => {
            store.dispatch(clearState());
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
            it('should add custom classes on the element', () => {
                mountMenuConnected([], {className: 'test'});

                expect(menuWrapper.find('.dropdown').hasClass('test')).toBe(true);
            });

            it('should add custom classes on the toggle element', () => {
                const expectedClass = 'test';
                mountMenuConnected([], {toggleClassName: expectedClass});

                expect(menuWrapper.find('.menu-toggle').hasClass(expectedClass)).toBe(true);
            });

            it('should add custom classes on the dropdown element', () => {
                const expectedClass = 'test';
                mountMenuConnected([], {dropdownClassName: expectedClass});

                expect(menuWrapper.find('.select-dropdown-container').hasClass(expectedClass)).toBe(true);
            });

            it('should add the custom svg', async () => {
                mountMenuConnected([], {buttonSvg: <AddSize16Px />});

                expect(await screen.findByRole('img', {name: /add/i})).toBeInTheDocument();
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

                expect(store.getState().menus[id].open).toBe(true);

                clickOnEl(menuWrapper.find('.select-dropdown-container').getDOMNode());

                expect(store.getState().menus[id].open).toBe(true);

                clickOnEl();

                expect(store.getState().menus[id].open).toBe(false);
            });

            it('should not open the menu when the user click outside the menu', () => {
                mountMenuConnected();

                expect(store.getState().menus[id].open).toBe(false);

                clickOnEl();

                expect(store.getState().menus[id].open).toBe(false);
            });

            it('should close the menu when the user click inside the menu and the menu is open', () => {
                mountMenuConnected();

                menuWrapper.find('.menu-toggle').simulate('mouseUp');

                expect(store.getState().menus[id].open).toBe(true);

                menuWrapper.find('.select-dropdown-container').simulate('click');

                expect(store.getState().menus[id].open).toBe(false);
            });

            it('should not close the menu when the user click inside the menu and the menu is open if the props closeOnSelectItem is set to false', () => {
                mountMenuConnected([], {closeOnSelectItem: false});

                menuWrapper.find('.menu-toggle').simulate('mouseUp');

                expect(store.getState().menus[id].open).toBe(true);

                menuWrapper.find('.select-dropdown-container').simulate('click');

                expect(store.getState().menus[id].open).toBe(true);
            });
        });
    });
});
