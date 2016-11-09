import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IFacetMoreToggleProps, FacetMoreToggle } from '../FacetMoreToggle';
import { IReactVaporState, clearState } from '../../../utils/ReduxUtils';
import { TestUtils } from '../../../utils/TestUtils';
import { FacetMoreToggleConnected } from '../FacetMoreToggleConnected';
import { addFacet, toggleMoreFacetRows } from '../FacetActions';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {

  describe('<FacetMoreToggleConnected />', () => {
    let facet: string = 'facet title';
    let wrapper: ReactWrapper<any, any>;
    let facetMoreToggleView: ReactWrapper<IFacetMoreToggleProps, any>;
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
      facetMoreToggleView = wrapper.find(FacetMoreToggle);

      store.dispatch(addFacet(facet));
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetMoreToggleView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(facet);
    });

    it('should get its state (opened or not) as a prop', () => {
      let openedProp = facetMoreToggleView.props().isOpened;

      expect(openedProp).toBeDefined();
      expect(openedProp).toBe(false);
    });

    it('should get what to do when toggling it as a prop', () => {
      let onToggleProp = facetMoreToggleView.props().onToggleMore;

      expect(onToggleProp).toBeDefined();
    });

    it('should call onToggleMore on change', () => {
      expect(facetMoreToggleView.props().isOpened).toBe(false);

      facetMoreToggleView.find('input').simulate('change');

      expect(facetMoreToggleView.props().isOpened).toBe(true);
    });

    it('should be hidden when the other rows are opened', () => {
      expect(facetMoreToggleView.find('li').hasClass('hidden')).toBe(false);

      store.dispatch(toggleMoreFacetRows(facet));

      expect(facetMoreToggleView.find('li').hasClass('hidden')).toBe(true);
    });

    it('should not call onClickElsewhere from application to close the rows when clicking anywhere', () => {
      facetMoreToggleView.find('input').simulate('change');

      expect(facetMoreToggleView.props().isOpened).toBe(true);

      facetMoreToggleView.simulate('click');

      expect(facetMoreToggleView.props().isOpened).toBe(true);
    });
  });
});
