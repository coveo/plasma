import { shallow, ReactWrapper, mount } from 'enzyme';
import { IFacet, Facet, IFacetProps } from '../Facet';
import * as _ from 'underscore';
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('Facets', () => {
  let facetRows: IFacet[] = [];
  let facet: IFacet = { name: '', formattedName: '' };
  let toggleFacet: (facet: string, facetRow: string) => void = jasmine.createSpy('toggleFacet');
  let clearFacet: (facet: string) => void = jasmine.createSpy('clearFacet');

  describe('<Facet />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <Facet
            facetRows={facetRows}
            facet={facet}
            toggleFacet={toggleFacet}
            clearFacet={clearFacet}
            />
        );
      }).not.toThrow();
    });
  });

  describe('<Facet />', () => {
    let facetComponent: ReactWrapper<IFacetProps, any>;
    let facetBasicAttributes: IFacetProps;

    beforeEach(() => {
      facetBasicAttributes = {
        facetRows: facetRows,
        facet: facet,
        toggleFacet: toggleFacet,
        clearFacet: clearFacet
      };
      facetComponent = mount(
        <Facet
          {...facetBasicAttributes}
          />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      facetComponent.unmount();
      facetComponent.detach();
    });

    it('should call prop onRender on mounting if set', () => {
      let renderSpy = jasmine.createSpy('onRender');
      let newFacetAttributes = _.extend(facetBasicAttributes, { onRender: renderSpy });

      facetComponent.unmount();
      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      expect(renderSpy.calls.count()).toBe(1);
    });

    it('should call prop onDestroy on unmounting if set', () => {
      let destroySpy = jasmine.createSpy('onDestroy');
      let newFacetAttributes = _.extend(facetBasicAttributes, { onRender: destroySpy });

      facetComponent.unmount();
      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      facetComponent.unmount();
      expect(destroySpy.calls.count()).toBe(1);
    });

    it('should display normal <FacetMoreToggle /> and <FacetMoreRows /> if it has more than 5 rows', () => {
      let multipleRows = [
        {
          name: '1',
          formattedName: '1'
        },
        {
          name: '2',
          formattedName: '2'
        },
        {
          name: '3',
          formattedName: '3'
        },
        {
          name: '4',
          formattedName: '4'
        },
        {
          name: '5',
          formattedName: '5'
        },
        {
          name: '6',
          formattedName: '6'
        }
      ];
      let newFacetAttributes = _.extend({}, facetBasicAttributes, { facetRows: multipleRows });

      expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
      expect(facetComponent.find('FacetMoreRows').length).toBe(0);
      expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
      expect(facetComponent.find('FacetMoreRowsConnected').length).toBe(0);

      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      expect(facetComponent.find('FacetMoreToggle').length).toBe(1);
      expect(facetComponent.find('FacetMoreRows').length).toBeGreaterThan(0);
      expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
      expect(facetComponent.find('FacetMoreRowsConnected').length).toBe(0);
    });

    it('should display normal <FacetMoreRows /> if it has more than 5 rows', () => {
      let multipleRows = [
        {
          name: '1',
          formattedName: '1'
        },
        {
          name: '2',
          formattedName: '2'
        },
        {
          name: '3',
          formattedName: '3'
        },
        {
          name: '4',
          formattedName: '4'
        },
        {
          name: '5',
          formattedName: '5'
        },
        {
          name: '6',
          formattedName: '6'
        }
      ];
      let newFacetAttributes = _.extend({}, facetBasicAttributes, { facetRows: multipleRows });

      expect(facetComponent.find('FacetMoreToggle').length).toBe(0);
      expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);

      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      expect(facetComponent.find('FacetMoreToggle').length).toBe(1);
      expect(facetComponent.find('FacetMoreToggleConnected').length).toBe(0);
    });

    it('should have class "facet-open" if it has isOpened prop set to true', () => {
      let expectedClass = '.facet-opened';
      let newFacetAttributes = _.extend({}, facetBasicAttributes, { isOpened: true });

      expect(facetComponent.find(expectedClass).length).toBe(0);

      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      expect(facetComponent.find(expectedClass).length).toBe(1);
    });

    const callBuildCategoryFacet = () => {
      (facetComponent.instance() as Facet).buildFacet({ name: '1', formattedName: '1' });
    };

    it('should call toggleFacet when calling buildCategoryFacet', () => {
      callBuildCategoryFacet();
      expect(toggleFacet).toHaveBeenCalled();
    });

    it('should call onToggleFacet when calling buildCategoryFacet and prop is set', () => {
      let onToggleFacetSpy = jasmine.createSpy('onToggleFacet');
      let newFacetAttributes = _.extend({}, facetBasicAttributes, { onToggleFacet: onToggleFacetSpy });

      callBuildCategoryFacet();
      expect(onToggleFacetSpy).not.toHaveBeenCalled();

      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      callBuildCategoryFacet();
      expect(onToggleFacetSpy).toHaveBeenCalled();
    });

    const callClearCategoryFacet = () => {
      (facetComponent.instance() as Facet).clearFacet();
    };

    it('should call clearFacet when calling clearCategoryFacet', () => {
      callClearCategoryFacet();
      expect(clearFacet).toHaveBeenCalled();
    });

    it('should call onClearFacet when calling buildCategoryFacet and prop is set', () => {
      let onClearFacetSpy = jasmine.createSpy('onClearFacet');
      let newFacetAttributes = _.extend({}, facetBasicAttributes, { onClearFacet: onClearFacetSpy });

      callClearCategoryFacet();
      expect(onClearFacetSpy).not.toHaveBeenCalled();

      facetComponent.setProps(newFacetAttributes);
      facetComponent.mount();
      callClearCategoryFacet();
      expect(onClearFacetSpy).toHaveBeenCalled();
    });
  });
});
