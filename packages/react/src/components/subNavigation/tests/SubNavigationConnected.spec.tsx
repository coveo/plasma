import {mount, ReactWrapper} from 'enzyme';
import {act} from 'react-dom/test-utils';
import {Provider} from 'react-redux';
import {Store} from 'redux';
import {findWhere} from 'underscore';

import {PlasmaState} from '../../../PlasmaState';
import {TestUtils} from '../../../utils/tests/TestUtils';
import {ISubNavigationProps, SubNavigation} from '../SubNavigation';
import {SubNavigationConnected} from '../SubNavigationConnected';

describe('SubNavigation', () => {
    let wrapper: ReactWrapper<any, any>;
    let subNavigation: ReactWrapper<ISubNavigationProps, any>;
    let store: Store<PlasmaState>;

    describe('<SubNavigationConnected />', () => {
        const basicProps: ISubNavigationProps = {
            id: 'sub-nav-id',
            items: [
                {id: 'a', label: 'A'},
                {id: 'b', label: 'B'},
            ],
            defaultSelected: 'b',
        };

        beforeEach(() => {
            store = TestUtils.buildStore();

            wrapper = mount(
                <Provider store={store}>
                    <SubNavigationConnected {...basicProps} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            );
            act(() => {
                wrapper.update();
            });
            subNavigation = wrapper.find(SubNavigation);
        });

        it('should get what to do on render as a prop', () => {
            const view = subNavigation.props().onRender;

            expect(view).toBeDefined();
        });

        it('should get what to do on destroy as a prop', () => {
            const onDestroyProp = subNavigation.props().onDestroy;

            expect(onDestroyProp).toBeDefined();
        });

        it('should get what to do on item click as a prop', () => {
            const onClickItemProp = subNavigation.props().onClickItem;

            expect(onClickItemProp).toBeDefined();
        });

        it('should add the sub navigation in the store on mount', () => {
            expect(store.getState().subNavigations.length).toBe(1);
        });

        it('should remove the dropdown from the store when unmounting', () => {
            wrapper.unmount();

            expect(store.getState().subNavigations.length).toBe(0);
        });

        it('should set the selected property of the sub navigation on item click', () => {
            expect(findWhere(store.getState().subNavigations, {id: basicProps.id}).selected).toBe(
                basicProps.defaultSelected,
            );

            const li = subNavigation
                .find('.sub-navigation-item')
                .filterWhere((item) => item.key() !== basicProps.defaultSelected)
                .first();
            li.find('.sub-navigation-item-link').simulate('click');

            expect(findWhere(store.getState().subNavigations, {id: basicProps.id}).selected).toBe(li.key());
        });
    });

    it('should select the first menu item when mounting', () => {
        store = TestUtils.buildStore();
        const props: ISubNavigationProps = {
            id: 'sub-nav-id',
            items: [
                {id: 'a', label: 'A'},
                {id: 'b', label: 'B'},
            ],
        };

        wrapper = mount(
            <Provider store={store}>
                <SubNavigationConnected {...props} />
            </Provider>,
            {attachTo: document.getElementById('App')},
        );
        act(() => {
            wrapper.update();
        });

        expect(findWhere(store.getState().subNavigations, {id: props.id}).selected).toBe(props.items[0].id);
        wrapper.unmount();
    });

    it('should not throw when there is no items', () => {
        store = TestUtils.buildStore();
        const props: ISubNavigationProps = {
            id: 'sub-nav-id',
            items: [],
        };

        expect(() =>
            mount(
                <Provider store={store}>
                    <SubNavigationConnected {...props} />
                </Provider>,
                {attachTo: document.getElementById('App')},
            ).unmount(),
        ).not.toThrow();
    });
});
