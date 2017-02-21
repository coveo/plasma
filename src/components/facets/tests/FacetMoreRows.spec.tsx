import { shallow, ReactWrapper, mount } from 'enzyme';
import { FacetMoreRows, IFacetMoreRowsProps } from '../FacetMoreRows';
import { FilterBox } from '../../filterBox/FilterBox';
import * as $ from 'jquery';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Facets', () => {
  let facet: string = 'facetTitle';
  let facetRows: JSX.Element[] = [];
  let basicFacetMoreRowsAttributes: IFacetMoreRowsProps = {
    facet: facet,
    facetRows: facetRows
  };

  describe('<FacetMoreRows />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FacetMoreRows
            facet={facet}
            facetRows={facetRows}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<FacetMoreRows />', () => {
    let facetMoreRows: ReactWrapper<IFacetMoreRowsProps, any>;
    let facetMoreRowsInstance: FacetMoreRows;

    beforeEach(() => {
      facetMoreRows = mount(
        <FacetMoreRows
          {...basicFacetMoreRowsAttributes}
        />,
        { attachTo: document.getElementById('App') }
      );
      facetMoreRowsInstance = facetMoreRows.instance() as FacetMoreRows;
    });

    afterEach(() => {
      facetMoreRows.unmount();
      facetMoreRows.detach();
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetMoreRows.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(facet);
    });

    it('should get the facet rows as a prop', () => {
      let facetRowsProp = facetMoreRows.props().facetRows;

      expect(facetRowsProp).toBeDefined();
      expect(facetRowsProp).toBe(facetRows);
    });

    it('should render a <FilterBox /> component', () => {
      expect(facetMoreRows.find(FilterBox).length).toBe(1);
      expect(facetMoreRows.find(FilterBox).props().id).toBe('filter-' + facet);
    });

    it('should add a listener on document on mount and remove it on unmount if prop onDocumentClick is set', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newFacetAttributes = _.extend({}, basicFacetMoreRowsAttributes, { onDocumentClick: onDocumentClickSpy });

      facetMoreRows.mount();
      $('body').click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      facetMoreRows.unmount();
      facetMoreRows.setProps(newFacetAttributes);
      facetMoreRows.mount();
      $('body').click();
      expect(onDocumentClickSpy.calls.count()).toBe(1);

      facetMoreRows.unmount();
      $('body').click();
      expect(onDocumentClickSpy.calls.count()).toBe(1);
    });

    it('should not call onDocumentClick when prop is set and clicking on "facet-search"', () => {
      let onDocumentClickSpy = jasmine.createSpy('onDocumentClick');
      let newFacetAttributes = _.extend({}, basicFacetMoreRowsAttributes, { onDocumentClick: onDocumentClickSpy });

      facetMoreRows = mount(
        <FacetMoreRows
          {...newFacetAttributes}
        />,
        { attachTo: document.getElementById('App') }
      );

      (document.getElementsByClassName('facet-search')[0] as HTMLDivElement).click();
      expect(onDocumentClickSpy).not.toHaveBeenCalled();

      document.getElementById('App').click();
      expect(onDocumentClickSpy).toHaveBeenCalled();
    });

    it('should focus on the filter box input when opening', () => {
      let newFacetAttributes = _.extend({}, basicFacetMoreRowsAttributes, { isOpened: true });

      expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).not.toBe(document.activeElement);

      facetMoreRows.setProps(newFacetAttributes);
      expect(facetMoreRowsInstance['facetSearch'].getElementsByTagName('input')[0]).toBe(document.activeElement);
    });
  });
});
