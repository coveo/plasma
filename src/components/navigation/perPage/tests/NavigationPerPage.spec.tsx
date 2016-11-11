import { shallow, mount, ReactWrapper } from 'enzyme';
import { Utilities } from '../../TestUtilities';
import { ActivityBrowserState } from '../../../src/activity-browser/ActivityBrowserLayout';
import {
  NavigationPerPageView,
  NavigationPerPageProps
} from '../../../src/s/navigation/NavigationPerPageView';
import { NavigationPerPageSelectViewConnected } from '../../../src/s/navigation/NavigationPerPageSelectView';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';

describe(' navigation', () => {
  let totalEntries: number;

  describe('NavigationPerPageView', () => {
    it('should render without errors', () => {
      totalEntries = 12;

      expect(() => {
        shallow(
          <NavigationPerPageView
            totalEntries={totalEntries}
            />
        );
      }).not.toThrow();
    });
  });

  describe('NavigationPerPageView', () => {
    let wrapper: ReactWrapper<any, any>;
    let NavigationPerPageView: ReactWrapper<NavigationPerPageProps, any>;
    let fewElementsNavigationPerPageView: ReactWrapper<NavigationPerPageProps, any>;
    let store: Store<ActivityBrowserState>;

    beforeEach(() => {
      totalEntries = 50;

      store = Utilities.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <div>
            <NavigationPerPageView
              totalEntries={totalEntries}
              />
            <NavigationPerPageView
              totalEntries={11}
              />
          </div>
        </Provider>,
        { attachTo: document.body }
      );
      NavigationPerPageView = wrapper.find(NavigationPerPageView).first();
      fewElementsNavigationPerPageView = wrapper.find(NavigationPerPageView).last();
    });

    afterEach(() => {
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the number of entries as a prop', () => {
      let totalEntriesProp = NavigationPerPageView.props().totalEntries;

      expect(totalEntriesProp).toBeDefined();
      expect(totalEntriesProp).toBe(totalEntries);
    });

    it('should render the <NavigationPerPageSelectViewConnected /> where there are at least 1 element more than the other before', () => {
      expect(NavigationPerPageView.find(NavigationPerPageSelectViewConnected).length).toBe(3);
      expect(fewElementsNavigationPerPageView.find(NavigationPerPageSelectViewConnected).length).toBe(2);
    });
  });
});
