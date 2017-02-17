import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IFacetMoreToggleProps, FacetMoreToggle } from '../FacetMoreToggle';
import { clearState } from '../../../utils/ReduxUtils';
import { IReactVaporState } from '../../../ReactVapor';
import { TestUtils } from '../../../utils/TestUtils';
import { FacetMoreToggleConnected } from '../FacetMoreToggleConnected';
import { addFacet, toggleMoreFacetRows } from '../FacetActions';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Facets', () => {

  describe('<FacetMoreToggleConnected />', () => {
    let facet: string = 'facet title';
    let wrapper: ReactWrapper<any, any>;
    let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <FacetMoreToggleConnected
            facet={facet}
            />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      facetMoreToggle = wrapper.find(FacetMoreToggle);

      store.dispatch(addFacet(facet));
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get its state (opened or not) as a prop', () => {
      let openedProp = facetMoreToggle.props().isOpened;

      expect(openedProp).toBeDefined();
      expect(openedProp).toBe(false);
    });

    it('should get what to do when toggling it as a prop', () => {
      let onToggleProp = facetMoreToggle.props().onToggleMore;

      expect(onToggleProp).toBeDefined();
    });

    it('should call onToggleMore on change', () => {
      expect(facetMoreToggle.props().isOpened).toBe(false);

      facetMoreToggle.find('input').simulate('change');

      expect(facetMoreToggle.props().isOpened).toBe(true);
    });

    it('should be hidden when the other rows are opened', () => {
      expect(facetMoreToggle.find('li').hasClass('hidden')).toBe(false);

      store.dispatch(toggleMoreFacetRows(facet));

      expect(facetMoreToggle.find('li').hasClass('hidden')).toBe(true);
    });
  });
});
