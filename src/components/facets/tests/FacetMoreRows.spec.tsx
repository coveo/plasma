import { shallow } from 'enzyme';
import { IFacet } from '../Facet';
import { FacetMoreRows } from '../FacetMoreRows';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {
  describe('<FacetMoreRow />', () => {
    it('should render without errors', () => {
      let facet: IFacet = {
        name: 'facetTitle',
        formattedName: 'IFacetTitle'
      };
      let facetRows: JSX.Element[] = [];

      expect(() => {
        shallow(
          <FacetMoreRows
            facet={facet.name}
            facetRows={facetRows}
            />
        );
      }).not.toThrow();
    });
  });
});
