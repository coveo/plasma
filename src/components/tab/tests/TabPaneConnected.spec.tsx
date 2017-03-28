import { mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { TabPaneConnected } from '../TabPaneConnected';
import { ITabPaneProps, TabPane } from '../TabPane';
import { addTab } from '../TabActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('TabPane', () => {
  describe('<TabPaneConnected />', () => {
    let tabPane: ReactWrapper<ITabPaneProps, any>;
    let id: string;
    let wrapper: ReactWrapper<any, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      id = 'tab';

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <TabPaneConnected
            id={id}
          />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      tabPane = wrapper.find(TabPane).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its id as a prop', () => {
      let idProp = tabPane.props().id;

      expect(idProp).toBeDefined();
      expect(idProp).toBe(id);
    });

    it('should get isActive false as a prop', () => {
      let isActive = tabPane.props().isActive;

      expect(isActive).toBeDefined();
      expect(isActive).toBe(false);
    });

    it('should set the tab pane as active when adding a tab with same ID and no other tab is in the store', () => {
      store.dispatch(addTab(id));
      let isActive = tabPane.props().isActive;

      expect(isActive).toBe(true);
    });

    it('should not set the tab pane as active when adding a tab with same ID and another tab is in the store', () => {
      store.dispatch(addTab('tab-id-2'));
      store.dispatch(addTab(id));
      let isActive = tabPane.props().isActive;

      expect(isActive).toBe(false);
    });
  });
});
