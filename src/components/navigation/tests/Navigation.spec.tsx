import { shallow, mount, ReactWrapper } from 'enzyme';
import { clearState, addLoading } from '../../../src/actions/index';
import { Utilities } from '../TestUtilities';
import { ActivityBrowserState } from '../../../src/activity-browser/ActivityBrowserLayout';
import {
  NavigationView, NavigationProps,
  NavigationViewConnected
} from '../../../src/s/navigation/NavigationView';
import { LoadingView } from '../../src/widgets/LoadingView';
import { NavigationPaginationViewConnected } from '../../../src/s/navigation/NavigationPaginationView';
import { NavigationPerPageView } from '../../../src/s/navigation/NavigationPerPageView';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';

describe(' navigation', () => {
  let totalPages: number;
  let totalEntries: number;
  let isLoading: boolean;

  describe('NavigationView', () => {
    it('should render without errors', () => {
      totalPages = 4;
      totalEntries = 12;
      isLoading = false;

      expect(() => {
        shallow(
          <NavigationView
            totalPages={totalPages}
            totalEntries={totalEntries}
            isLoading={isLoading}
            />
        );
      }).not.toThrow();
    });
  });

  describe('NavigationView', () => {
    let wrapper: ReactWrapper<any, any>;
    let NavigationView: ReactWrapper<NavigationProps, any>;
    let fewElementsNavigationView: ReactWrapper<NavigationProps, any>;
    let store: Store<ActivityBrowserState>;

    beforeEach(() => {
      totalPages = 2;
      totalEntries = 11;

      store = Utilities.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <div>
            <NavigationViewConnected
              totalPages={totalPages}
              totalEntries={totalEntries}
              />
            <NavigationViewConnected
              totalPages={1}
              totalEntries={10}
              />
          </div>
        </Provider>,
        { attachTo: document.body }
      );
      NavigationView = wrapper.find(NavigationView).first();
      fewElementsNavigationView = wrapper.find(NavigationView).last();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the number of pages as a prop', () => {
      let totalPagesProp = NavigationView.props().totalPages;

      expect(totalPagesProp).toBeDefined();
      expect(totalPagesProp).toBe(totalPages);
    });

    it('should get the number of entries as a prop', () => {
      let totalEntriesProp = NavigationView.props().totalEntries;

      expect(totalEntriesProp).toBeDefined();
      expect(totalEntriesProp).toBe(totalEntries);
    });

    it('should get if the application is loading as a prop as a prop', () => {
      let isLoadingProp = NavigationView.props().isLoading;

      expect(isLoadingProp).toBeDefined();
      expect(isLoadingProp).toBe(false);
    });

    it('should render a <LoadingView /> component', () => {
      expect(NavigationView.find(LoadingView).length).toBe(1);
    });

    it('should render a <NavigationPaginationViewConnected /> component if totalPages is higher than 1', () => {
      expect(NavigationView.find(NavigationPaginationViewConnected).length).toBe(1);
      expect(fewElementsNavigationView.find(NavigationPaginationViewConnected).length).toBe(0);
    });

    it('should render a <NavigationPerPageView /> component if totalEntries is higher than 10', () => {
      expect(NavigationView.find(NavigationPerPageView).length).toBe(1);
      expect(fewElementsNavigationView.find(NavigationPerPageView).length).toBe(0);
    });

    it('should have loading-view as a class if application is loading', () => {
      expect(NavigationView.find('.pagination-container').hasClass('loading-view')).toBe(false);

      store.dispatch(addLoading());

      expect(NavigationView.find('.pagination-container').hasClass('loading-view')).toBe(true);
    });
  });
});
