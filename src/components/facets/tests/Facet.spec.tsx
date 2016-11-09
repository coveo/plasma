import { shallow } from 'enzyme';
import { IFacet, Facet } from '../Facet';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {

  describe('<Facet />', () => {
    it('should render without errors', () => {
      let facetRows: IFacet[] = [];
      let facet: IFacet = { name: '', formattedName: '' };
      let selectedFacetRows: IFacet[] = [];
      let onToggleFacet: (facet: string, facetRow: string) => void = jasmine.createSpy('onToggleFacet');
      let clearFacet: (facet: string) => void = jasmine.createSpy('clearFacet');

      expect(() => {
        shallow(
          <Facet
            facetRows={facetRows}
            facet={facet}
            selectedFacetRows={selectedFacetRows}
            toggleFacet={onToggleFacet}
            clearFacet={clearFacet}
            />
        );
      }).not.toThrow();
    });
  });
});
