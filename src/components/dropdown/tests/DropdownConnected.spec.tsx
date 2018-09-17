import {mount, ReactWrapper} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import * as _ from 'underscore';
import {IReactVaporState} from '../../../ReactVapor';
import {TestUtils} from '../../../utils/TestUtils';
import {Dropdown, IDropdownProps} from '../Dropdown';
import {toggleDropdown} from '../DropdownActions';
import {DropdownConnected} from '../DropdownConnected';

describe('Dropdown', () => {
    describe('<DropdownConnected />', () => {
        let wrapper: ReactWrapper<any, any>;
        let dropdown: ReactWrapper<IDropdownProps, any>;
        let store: Store<IReactVaporState>;
        const basicDropdownProps: IDropdownProps = {
            id: 'dropdown-id',
            toggleContent: [<span key='toggle'>Toggle</span>],
            dropdownItems: [
                <li key='option1'>Option 1</li>,
                <li key='options2'>Option 2</li>,
            ],
        };

        beforeEach(() => {

            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <DropdownConnected {...basicDropdownProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            dropdown = wrapper.find(Dropdown);
        });

        afterEach(() => {
            wrapper.detach();
        });

        it('should get if dropdown is opened as a prop', () => {
            const isOpenedProp = dropdown.props().isOpened;

            expect(isOpenedProp).toBeDefined();
            expect(isOpenedProp).toBe(false);
        });

        it('should get what to do on render as a prop', () => {
            const onRenderProp = dropdown.props().onRender;

            expect(onRenderProp).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = dropdown.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on click as a prop', () => {
            const onClickProp = dropdown.props().onClick;

            expect(onClickProp).toBeDefined();
        });

        it('should get what to do on document click as a prop', () => {
            const onDocumentClickProp = dropdown.props().onDocumentClick;

            expect(onDocumentClickProp).toBeDefined();
        });

        it('should add the dropdown in the store on mount', () => {
            expect(store.getState().dropdowns.length).toBe(1);
        });

        it('should remove the dropdown from the store when unmounting', () => {
            wrapper.unmount();
            expect(store.getState().dropdowns.length).toBe(0);
        });

        it('should toggle the open property of the dropdown on click', () => {
            expect(_.findWhere(store.getState().dropdowns, {id: basicDropdownProps.id}).opened).toBe(false);

            dropdown.find('.dropdown-toggle').simulate('click');
            expect(_.findWhere(store.getState().dropdowns, {id: basicDropdownProps.id}).opened).toBe(true);
        });

        it('should close the dropdown menu when clicking elsewhere', () => {
            store.dispatch(toggleDropdown(basicDropdownProps.id));
            expect(_.findWhere(store.getState().dropdowns, {id: basicDropdownProps.id}).opened).toBe(true);

            document.getElementById('App').click();
            expect(_.findWhere(store.getState().dropdowns, {id: basicDropdownProps.id}).opened).toBe(false);
        });
    });
});
