import { shallow } from 'enzyme';
import { FacetMoreToggle } from '../FacetMoreToggle';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {
  describe('<FacetMoreToggle />', () => {
    it('should render without errors', () => {
      let facet: string = 'facetTitle';
      expect(() => {
        shallow(
          <FacetMoreToggle
            facet={facet}
            isOpened={false}
            onToggleMore={jasmine.createSpy('onToggleMore')}
            />
        );
      }).not.toThrow();
    });
  });
});
