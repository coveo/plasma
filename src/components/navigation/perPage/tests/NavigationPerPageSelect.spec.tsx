import { shallow, mount, ReactWrapper } from 'enzyme';
import { clearState } from '../../src/actions/index';
import { Utilities } from '../TestUtilities';
import {
  NavigationPerPageSelectProps,
  NavigationPerPageSelectView, NavigationPerPageSelectViewConnected
} from '../../../src/s/navigation/NavigationPerPageSelectView';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import createSpy = jasmine.createSpy;

describe(' navigation', () => {
  let perPageNumber: number;
  let selected: boolean;
  let onPerPageClick: (perPageNumber: number) => void;

  describe('NavigationPerPageSelectView', () => {
    it('should render without errors', () => {
      perPageNumber = 20;
      selected = false;
      onPerPageClick = createSpy('onPerPageClick');

      expect(() => {
        shallow(
          <NavigationPerPageSelectView
            perPageNumber={perPageNumber}
            selected={selected}
            onPerPageClick={onPerPageClick}
            />
        );
      }).not.toThrow();
    });
  });

  describe('NavigationPerPageSelectView', () => {
    let wrapper: ReactWrapper<any, any>;
    let NavigationPerPageSelectView: ReactWrapper<NavigationPerPageSelectProps, any>;
    let store: Store<ActivityBrowserState>;

    beforeEach(() => {
      perPageNumber = 20;

      store = Utilities.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <NavigationPerPageSelectViewConnected
            perPageNumber={perPageNumber}
            />
        </Provider>,
        { attachTo: document.body }
      );
      NavigationPerPageSelectView = wrapper.find(NavigationPerPageSelectView).first();
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the per page number as a prop', () => {
      let perPageNumberProp = NavigationPerPageSelectView.props().perPageNumber;

      expect(perPageNumberProp).toBeDefined();
      expect(perPageNumberProp).toBe(perPageNumber);
    });

    it('should get if it is selected  as a prop', () => {
      let selectedProp = NavigationPerPageSelectView.props().selected;

      expect(selectedProp).toBeDefined();
      expect(selectedProp).toBe(false);
    });

    it('should get what to do on click as a prop', () => {
      let onPerPageClickProp = NavigationPerPageSelectView.props().onPerPageClick;

      expect(onPerPageClickProp).toBeDefined();
    });

    it('should have "selec" class if it is not selected', () => {
      let option = NavigationPerPageSelectView.find('.flat-select-option');

      expect(option.hasClass('selec')).toBe(true);

      option.simulate('click');

      expect(option.hasClass('selec')).toBe(false);
    });

    it('should have "selected-value" "state-selected" classes when selected', () => {
      let option = NavigationPerPageSelectView.find('.flat-select-option');
      let optionSpan = option.find('.enabled');

      expect(optionSpan.hasClass('selected-value')).toBe(false);
      expect(optionSpan.hasClass('state-selected')).toBe(false);

      option.simulate('click');

      expect(optionSpan.hasClass('selected-value')).toBe(true);
      expect(optionSpan.hasClass('state-selected')).toBe(true);
    });
  });
});
