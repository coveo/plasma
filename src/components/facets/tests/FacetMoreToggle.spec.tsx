import { shallow, ReactWrapper, mount } from 'enzyme';
import { FacetMoreToggle, IFacetMoreToggleProps, FACET_TOGGLE_MORE_LABEL } from '../FacetMoreToggle';
import * as _ from 'underscore';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';

describe('Facets', () => {
  let basicFacetMoreToggleProps: IFacetMoreToggleProps = {
    facet: 'facetTitle'
  };
  describe('<FacetMoreToggle />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <FacetMoreToggle
            {...basicFacetMoreToggleProps}
          />
        );
      }).not.toThrow();
    });
  });

  describe('<FacetMoreToggle />', () => {
    let facetMoreToggle: ReactWrapper<IFacetMoreToggleProps, any>;

    beforeEach(() => {
      facetMoreToggle = mount(
        <FacetMoreToggle
          {...basicFacetMoreToggleProps}
        />,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      facetMoreToggle.unmount();
      facetMoreToggle.detach();
    });

    it('should get the facet as a prop', () => {
      let facetProp = facetMoreToggle.props().facet;

      expect(facetProp).toBeDefined();
      expect(facetProp).toBe(basicFacetMoreToggleProps.facet);
    });

    it('should display the moreLabel if passed as a prop else use the default label', () => {
      let expectedMoreLabel = 'Show more rows';
      let newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, { moreLabel: expectedMoreLabel });

      expect(facetMoreToggle.html()).toContain(FACET_TOGGLE_MORE_LABEL);

      facetMoreToggle.setProps(newFacetMoreToggleProps);
      facetMoreToggle.mount();
      expect(facetMoreToggle.html()).not.toContain(FACET_TOGGLE_MORE_LABEL);
      expect(facetMoreToggle.html()).toContain(expectedMoreLabel);
    });

    it('should call onToggleMore on change if prop is set', () => {
      let onToggleMoreSpy = jasmine.createSpy('onToggleMore');
      let handleOnChangeSpy = spyOn<any>(facetMoreToggle.instance(), 'handleOnChange').and.callThrough();
      let newFacetMoreToggleProps = _.extend({}, basicFacetMoreToggleProps, { onToggleMore: onToggleMoreSpy });

      facetMoreToggle.find('input').simulate('change');
      expect(handleOnChangeSpy).toHaveBeenCalled();

      facetMoreToggle = mount(
        <FacetMoreToggle
          {...newFacetMoreToggleProps}
        />,
        { attachTo: document.getElementById('App') }
      );
      let newHandleOnChangeSpy = spyOn<any>(facetMoreToggle.instance(), 'handleOnChange').and.callThrough();

      facetMoreToggle.find('input').simulate('change');
      expect(newHandleOnChangeSpy).toHaveBeenCalled();
      expect(onToggleMoreSpy.calls.count()).toBe(1);
    });

    it('should stop clicks from propagating their events', () => {
      let generalEventSpy = jasmine.createSpy('generalEvent');

      document.addEventListener('click', generalEventSpy);

      (document.getElementsByClassName('facet-more')[0] as HTMLDivElement).click();
      expect(generalEventSpy).not.toHaveBeenCalled();

      document.getElementById('App').click();
      expect(generalEventSpy).toHaveBeenCalled();

      document.removeEventListener('click', generalEventSpy);
    });
  });
});
