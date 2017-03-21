import { ReactWrapper, mount } from 'enzyme';
import { ISubNavigationProps, SubNavigation } from '../SubNavigation';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { SubNavigationConnected } from '../SubNavigationConnected';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { findWhere } from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('SubNavigation', () => {
  let wrapper: ReactWrapper<any, any>;
  let subNavigation: ReactWrapper<ISubNavigationProps, any>;
  let store: Store<IReactVaporState>;

  describe('<SubNavigationConnected />', () => {
    let basicProps: ISubNavigationProps = {
      id: 'sub-nav-id',
      items: [
        { id: 'a', label: 'A' },
        { id: 'b', label: 'B' },
      ],
      defaultSelected: 'b',
    };

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <SubNavigationConnected {...basicProps} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      subNavigation = wrapper.find(SubNavigation);
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = subNavigation.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = subNavigation.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on item click as a prop', () => {
      let onClickItemProp = subNavigation.props().onClickItem;

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
      expect(findWhere(store.getState().subNavigations, { id: basicProps.id }).selected).toBe(basicProps.defaultSelected);

      let li = subNavigation.find('.sub-navigation-item')
        .filterWhere(item => item.key() !== basicProps.defaultSelected)
        .first();
      li.find('.sub-navigation-item-link').simulate('click');

      expect(findWhere(store.getState().subNavigations, { id: basicProps.id }).selected).toBe(li.key(), 'after');
    });
  });

  describe('<SubNavigationConnected />', () => {
    it('should select the first menu item when mounting', () => {
      store = TestUtils.buildStore();
      let props: ISubNavigationProps = {
        id: 'sub-nav-id',
        items: [
          { id: 'a', label: 'A' },
          { id: 'b', label: 'B' },
        ]
      };

      wrapper = mount(
        <Provider store={store}>
          <SubNavigationConnected {...props} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );

      expect(findWhere(store.getState().subNavigations, { id: props.id }).selected).toBe(props.items[0].id);
      wrapper.unmount();
    });

    it('should not throw when there is no items', () => {
      store = TestUtils.buildStore();
      let props: ISubNavigationProps = {
        id: 'sub-nav-id',
        items: []
      };

      expect(() => mount(
        <Provider store={store}>
          <SubNavigationConnected {...props} />
        </Provider>,
        { attachTo: document.getElementById('App') }
      ).unmount()).not.toThrow();
    });
  });
});
