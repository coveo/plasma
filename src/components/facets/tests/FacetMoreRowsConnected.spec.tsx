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
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {

  describe('<FacetMoreRowConnected />', () => {
    let facet: string;
    let facetRows: JSX.Element[];
    let wrapper: ReactWrapper<any, any>;
    let facetMoreRowsView: ReactWrapper<IFacetMoreRowsProps, any>;
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
      facetMoreRowsView = wrapper.find(FacetMoreRows);

      store.dispatch(addFacet(facet));
    });

    afterEach(() => {
      store.dispatch(clearState());
      wrapper.unmount();
      wrapper.detach();
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetMoreRowsView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(facet);
    });

    it('should get the facet rows as a prop', () => {
      let facetRowsProp = facetMoreRowsView.props().facetRows;

      expect(facetRowsProp).toBeDefined();
      expect(facetRowsProp).toBe(facetRows);
    });

    it('should get if the rows are opened as a prop', () => {
      let isOpenedProp = facetMoreRowsView.props().isOpened;

      expect(isOpenedProp).toBeDefined();
      expect(isOpenedProp).toBe(false);
    });

    it('should get the text in its filter as a prop', () => {
      let filterTextProp = facetMoreRowsView.props().filterText;

      expect(filterTextProp).toBeDefined();
      expect(filterTextProp).toBe('');
    });

    it('should be hidden if it is not opened', () => {
      expect(facetMoreRowsView.props().isOpened).toBe(false);
      expect(facetMoreRowsView.find('.facet-more-search').hasClass('hidden')).toBe(true);

      store.dispatch(toggleMoreFacetRows(facet));

      expect(facetMoreRowsView.props().isOpened).toBe(true);
      expect(facetMoreRowsView.find('.facet-more-search').hasClass('hidden')).toBe(false);
    });

    it('should render a <FilterBoxViewConnected /> component', () => {
      expect(facetMoreRowsView.find(FilterBoxConnected).length).toBe(1);
      expect(facetMoreRowsView.find(FilterBoxConnected).props().id).toBe('filter-' + facet);
    });

    it('should show only the filtered rows', () => {
      let filterId = 'filter-' + facet;
      store.dispatch(addFilter(filterId));

      expect(facetMoreRowsView.find(FacetRow).length).toBe(2);

      store.dispatch(filterThrough(filterId, 'row'));

      expect(facetMoreRowsView.find(FacetRow).length).toBe(2);

      store.dispatch(filterThrough(filterId, 'Row 2'));

      expect(facetMoreRowsView.find(FacetRow).length).toBe(1);
    });

    it('should not call onClickElsewhere from application to close the rows when clicking anywhere', () => {
      store.dispatch(toggleMoreFacetRows(facet));

      expect(facetMoreRowsView.props().isOpened).toBe(true);

      facetMoreRowsView.simulate('click');

      expect(facetMoreRowsView.props().isOpened).toBe(true);
    });
  });
});
