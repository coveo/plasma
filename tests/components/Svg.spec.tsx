import { shallow, mount, ReactWrapper } from 'enzyme';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { ISvgProps, Svg } from '../../src/components/Svg';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<Svg>', () => {
  let svgWrapper: ReactWrapper<ISvgProps, any>;
  let svgProps: ISvgProps;

  beforeEach(() => {
    svgProps = {
      svgName: 'clear',
      className: 'icon',
      svgClass: 'fill-medium-blue'
    };
  });

  it('should render without error', () => {
    expect(() => shallow(
      <Svg {...svgProps} />
    )).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      svgWrapper = mount(
        <Svg {...svgProps} />,
        { attachTo: document.getElementById('App') }
      );
    }).not.toThrow();

    expect(() => {
      svgWrapper.unmount();
      svgWrapper.detach();
    }).not.toThrow();
  });

  describe('Props handling', () => {
    afterEach(() => {
      svgWrapper.unmount();
      svgWrapper.detach();
    });

    it('should handle an invalid svgName', () => {
      svgProps = _.extend(svgProps, {
        svgName: 'an-icon-that-does-not-exist'
      });

      expect(() => {
        svgWrapper = mount(
          <Svg {...svgProps} />,
          { attachTo: document.getElementById('App') }
        );
      }).not.toThrow();

      expect($('#App').find('svg').length).toBe(1);
    });

    it('should handle an undefined className', () => {
      svgProps = _.extend(svgProps, {
        className: undefined
      });

      expect(() => {
        svgWrapper = mount(
          <Svg {...svgProps} />,
          { attachTo: document.getElementById('App') }
        );
      }).not.toThrow();

      expect($('#App').find('svg').length).toBe(1);
    });

    it('should handle an undefined svgClass', () => {
      svgProps = _.extend(svgProps, {
        svgClass: undefined
      });

      expect(() => {
        svgWrapper = mount(
          <Svg {...svgProps} />,
          { attachTo: document.getElementById('App') }
        );
      }).not.toThrow();

      expect($('#App').find('svg').length).toBe(1);
    });
  });
});
