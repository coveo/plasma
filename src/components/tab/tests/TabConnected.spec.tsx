import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { ITabProps, Tab } from '../Tab';
import { TabConnected } from '../TabConnected';
import { selectTab, addTab } from '../TabActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Tab', () => {
  describe('<TabConnected />', () => {
    let tab: ReactWrapper<ITabProps, any>;
    let id: string;
    let title: string;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'tab';
      title = 'Title';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <TabConnected
            id={id}
            title={title}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      tab = wrapper.find(Tab).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = tab.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get its title as a prop', () => {
      let titleProp = tab.props().title;

      expect(titleProp).toBeDefined();
      expect(titleProp).toBe(title);
    });

    it('should get isActive true as a prop', () => {
      let isActive = tab.props().isActive;

      expect(isActive).toBeDefined();
      expect(isActive).toBe(true);
    });

    it('should get what to do on render as a prop', () => {
      let onRenderProp = tab.props().onRender;

      expect(onRenderProp).toBeDefined();
    });

    it('should get what to do on destroy as a prop', () => {
      let onDestroyProp = tab.props().onDestroy;

      expect(onDestroyProp).toBeDefined();
    });

    it('should get what to do on select as a prop', () => {
      let onSelectProp = tab.props().onSelect;

      expect(onSelectProp).toBeDefined();
    });

    it('should add the tab in the store on render', () => {
      expect(store.getState().tabs.filter((tab: ITabState) => tab.id === id).length).toBe(1);
    });

    it('should select the tab in the store when dispatching a "selectTab" action', () => {
      let tab2Id = 'tab2Id';
      store.dispatch(addTab(tab2Id));
      expect(store.getState().tabs.filter(tab => tab.id === id).length).toBe(1);
      expect(store.getState().tabs.filter(tab => tab.id === id)[0].isSelected).toBe(true);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id).length).toBe(1);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id)[0].isSelected).toBe(false);

      store.dispatch(selectTab(tab2Id));
      expect(store.getState().tabs.filter(tab => tab.id === id)[0].isSelected).toBe(false);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id)[0].isSelected).toBe(true);
    });

    it('should select the tab when clicking on it', () => {
      let tab2Id = 'tab2Id';
      store.dispatch(addTab(tab2Id));
      expect(store.getState().tabs.filter(tab => tab.id === id).length).toBe(1);
      expect(store.getState().tabs.filter(tab => tab.id === id)[0].isSelected).toBe(true);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id).length).toBe(1);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id)[0].isSelected).toBe(false);

      store.dispatch(selectTab(tab2Id));
      tab.simulate('click');
      expect(store.getState().tabs.filter(tab => tab.id === id)[0].isSelected).toBe(true);
      expect(store.getState().tabs.filter(tab => tab.id === tab2Id)[0].isSelected).toBe(false);
    });

    it('should remove the tab in the store on destroy', () => {
      wrapper.unmount();
      expect(store.getState().tabs.filter(tabs => tabs.id === id).length).toBe(0);
    });
  });
});
