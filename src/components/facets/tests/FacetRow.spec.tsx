import { shallow, mount, ReactWrapper } from 'enzyme';
import { FacetRow, IFacetRowProps, MAX_NAME_LENGTH } from '../FacetRow';
import { IFacet } from '../Facet';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Facets', () => {
  const FACET_ROW_PROPS: IFacetRowProps = {
    facetRow: {
      name: 'row',
      formattedName: 'Row'
    },
    facet: 'facetTitle',
    onToggleFacet: jasmine.createSpy('onToggleFacet'),
    isChecked: false,
  };
  const FACET_ROW: JSX.Element = <FacetRow {...FACET_ROW_PROPS} />;

  describe('<FacetRow />', () => {
    it('should render without errors', () => {
      expect(() => shallow(FACET_ROW)).not.toThrow();
    });
  });

  describe('FacetRowView', () => {
    let facetRowView: ReactWrapper<IFacetRowProps, any>;

    beforeEach(() => {
      facetRowView = mount(FACET_ROW, { attachTo: document.getElementById('App') });
    });

    afterEach(() => {
      facetRowView.unmount();
      facetRowView.detach();
    });

    it('should get the facet row as a prop', () => {
      let facetRowProp = facetRowView.props().facetRow;

      expect(facetRowProp).toBeDefined();
      expect(facetRowProp).toBe(FACET_ROW_PROPS.facetRow);
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetRowView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(FACET_ROW_PROPS.facet);
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetRowView.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(FACET_ROW_PROPS.facet);
    });

    it('should get what to do when toggling a row as a prop', () => {
      let onToggleFacetProp = facetRowView.props().onToggleFacet;

      expect(onToggleFacetProp).toBeDefined();
    });

    it('should get if the row checkbox is checked as a prop', () => {
      let checkedProp = facetRowView.props().isChecked;

      expect(checkedProp).toBeDefined();
      expect(checkedProp).toBe(FACET_ROW_PROPS.isChecked);
    });

    it('should display the facet row value', () => {
      expect(facetRowView.html()).toContain(FACET_ROW_PROPS.facetRow.formattedName);
    });

    it('should should call onToggleFacet on change', () => {
      expect(FACET_ROW_PROPS.onToggleFacet).not.toHaveBeenCalled();

      facetRowView.find('input').simulate('change');

      expect(FACET_ROW_PROPS.onToggleFacet).toHaveBeenCalled();
    });

    it('should display a <Tooltip /> if the formatted name is longer than 25', () => {
      const longerFormattedNameFacetRow: IFacet = {
        name: 'something',
        formattedName: new Array(MAX_NAME_LENGTH + 2).join('a')
      };
      const newProps: IFacetRowProps = _.extend({}, FACET_ROW_PROPS, { facetRow: longerFormattedNameFacetRow });

      expect(facetRowView.find('Tooltip').length).toBe(0);

      facetRowView.setProps(newProps);

      expect(facetRowView.find('Tooltip').length).toBe(1);
    });
  });
});
