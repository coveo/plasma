import { shallow, mount, ReactWrapper } from 'enzyme';
import { FacetRow, IFacetRowProps } from '../FacetRow';
import { IFacet } from '../Facet';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Facets', () => {
  let facetRow: IFacet = {
    name: 'row',
    formattedName: 'Row'
  };
  let facet: string = 'facetTitle';
  let onToggleFacet: (facetRow: IFacet) => void = jasmine.createSpy('onToggleFacet');
  let isChecked: boolean = false;

  describe('<FacetRow />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FacetRow
            facetRow={facetRow}
            facet={facet}
            onToggleFacet={onToggleFacet}
            isChecked={isChecked}
          />
        );
      }).not.toThrow();
    });
  });

  describe('FacetRowView', () => {
    let facetRowView: ReactWrapper<IFacetRowProps, any>;

    beforeEach(() => {

      facetRowView = mount(
        <FacetRow
          facetRow={facetRow}
          facet={facet}
          onToggleFacet={onToggleFacet}
          isChecked={isChecked}
        />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      facetRowView.unmount();
      facetRowView.detach();
    });

    it('should get the facet row as a prop', () => {
      let facetRowProp = facetRowView.props().facetRow;

      expect(facetRowProp).toBeDefined();
      expect(facetRowProp).toBe(facetRow);
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetRowView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(facet);
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetRowView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(facet);
    });

    it('should get what to do when toggling a row as a prop', () => {
      let onToggleFacetProp = facetRowView.props().onToggleFacet;

      expect(onToggleFacetProp).toBeDefined();
    });

    it('should get if the row checkbox is checked as a prop', () => {
      let checkedProp = facetRowView.props().isChecked;

      expect(checkedProp).toBeDefined();
      expect(checkedProp).toBe(isChecked);
    });

    it('should display the facet row value', () => {
      expect(facetRowView.html()).toContain(facetRow.formattedName);
    });

    it('should should call onToggleFacet on change', () => {
      expect(onToggleFacet).not.toHaveBeenCalled();

      facetRowView.find('input').simulate('change');

      expect(onToggleFacet).toHaveBeenCalled();
    });
  });
});
