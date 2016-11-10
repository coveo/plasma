import { mount, ReactWrapper } from 'enzyme';
import { Store } from 'redux';
import { Provider } from 'react-redux';
import { IFacetMoreRowsProps, FacetMoreRows } from '../FacetMoreRows';
import { IReactVaporState, clearState } from '../../../utils/ReduxUtils';
import { FacetRow } from '../FacetRow';
import { TestUtils } from '../../../utils/TestUtils';
import { FacetMoreRowsConnected } from '../FacetMoreRowsConnected';
import { addFacet, toggleMoreFacetRows } from '../FacetActions';
import { FilterBoxConnected } from '../../filterBox/FilterBoxConnected';
import { addFilter, filterThrough } from '../../filterBox/FilterBoxActions';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {

  describe('<FacetMoreRowConnected />', () => {
    let facet: string;
    let facetRows: JSX.Element[];
    let wrapper: ReactWrapper<any, any>;
    let facetMoreRows: ReactWrapper<IFacetMoreRowsProps, any>;
    let store: Store<IReactVaporState>;

    beforeEach(() => {
      let onToggleFacet = jasmine.createSpy('onToggleFacet');
      facet = 'facetTitle';
      facetRows = [<FacetRow
        key='row1'
        facet={facet}
        facetRow={{ name: 'row1', formattedName: 'Row 1' }}
        onToggleFacet={onToggleFacet}
        isChecked={false}
        />, <FacetRow
        key='row2'
        facet={facet}
        facetRow={{ name: 'row2', formattedName: 'Row 2' }}
        onToggleFacet={onToggleFacet}
        isChecked={false}
        />];

      store = TestUtils.buildStore();

      wrapper = mount(
        <Provider store={store}>
          <FacetMoreRowsConnected
            facet={facet}
            facetRows={facetRows}
            />
        </Provider>,
        { attachTo: document.getElementById('App') }
      );
      facetMoreRows = wrapper.find(FacetMoreRows);

      store.dispatch(addFacet(facet));
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get if the rows are opened as a prop', () => {
      let isOpenedProp = facetMoreRows.props().isOpened;

      expect(isOpenedProp).toBeDefined();
      expect(isOpenedProp).toBe(false);
    });

    it('should get the text in its filter as a prop', () => {
      let filterTextProp = facetMoreRows.props().filterText;

      expect(filterTextProp).toBeDefined();
      expect(filterTextProp).toBe('');
    });

    it('should be hidden if it is not opened', () => {
      expect(facetMoreRows.props().isOpened).toBe(false);
      expect(facetMoreRows.find('.facet-more-search').hasClass('hidden')).toBe(true);

      store.dispatch(toggleMoreFacetRows(facet));

      expect(facetMoreRows.props().isOpened).toBe(true);
      expect(facetMoreRows.find('.facet-more-search').hasClass('hidden')).toBe(false);
    });

    it('should render a <FilterBoxConnected /> component', () => {
      expect(facetMoreRows.find(FilterBoxConnected).length).toBe(1);
      expect(facetMoreRows.find(FilterBoxConnected).props().id).toBe('filter-' + facet);
    });

    it('should show only the filtered rows', () => {
      let filterId = 'filter-' + facet;
      store.dispatch(addFilter(filterId));

      expect(facetMoreRows.find(FacetRow).length).toBe(2);

      store.dispatch(filterThrough(filterId, 'row'));

      expect(facetMoreRows.find(FacetRow).length).toBe(2);

      store.dispatch(filterThrough(filterId, 'Row 2'));

      expect(facetMoreRows.find(FacetRow).length).toBe(1);
    });

    it('should set the filter value to an empty string when opening', () => {
      let filterId = 'filter-' + facet;
      let filterValue = 'something';

      store.dispatch(filterThrough(filterId, filterValue));
      expect(_.findWhere(store.getState().filters, { id: filterId }).filterText).toBe(filterValue);

      store.dispatch(toggleMoreFacetRows(facet));
      expect(_.findWhere(store.getState().filters, { id: filterId }).filterText).toBe('');
    });

    it('should close itself when clicking out of the "facet-search" div', () => {
      store.dispatch(toggleMoreFacetRows(facet));
      expect(facetMoreRows.props().isOpened).toBe(true);

      (document.getElementsByClassName('facet-search')[0] as HTMLDivElement).click();
      expect(facetMoreRows.props().isOpened).toBe(true);

      (document.getElementsByClassName('facet-more-search')[0] as HTMLDivElement).click();
      expect(facetMoreRows.props().isOpened).toBe(false);

      store.dispatch(toggleMoreFacetRows(facet));
      expect(facetMoreRows.props().isOpened).toBe(true);

      document.getElementById('App').click();
      expect(facetMoreRows.props().isOpened).toBe(false);
    });
  });
});
