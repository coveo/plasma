import { shallow, mount, ReactWrapper } from 'enzyme';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { PopoverComponent, IPopoverComponentProps } from '../../src/components/PopoverComponent';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<PopoverComponent>', () => {
  let popoverComponentWrapper: ReactWrapper<IPopoverComponentProps, any>;

  let popoverComponentProps: IPopoverComponentProps;

  beforeEach(() => {
    popoverComponentProps = {
      attachment: 'top left'
    };
  });

  it('should render without error', () => {
    expect(() => {
      shallow(
        <PopoverComponent {...popoverComponentProps}>
          <span>Toggle</span>
          <span>Tether element</span>
        </PopoverComponent>
      );
    }).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      popoverComponentWrapper = mount(
        <PopoverComponent {...popoverComponentProps}>
          <span>Toggle</span>
          <span>Tether element</span>
        </PopoverComponent>,
        { attachTo: document.getElementById('App') }
      );
    }).not.toThrow();

    expect(() => {
      popoverComponentWrapper.unmount();
      popoverComponentWrapper.detach();
    }).not.toThrow();
  });

  describe('Children propTypes', () => {
    it('should not throw when redering a PopoverComponent with only one children', () => {
      expect(() => {
        shallow(
          <PopoverComponent {...popoverComponentProps}>
            <span>Toggle</span>
          </PopoverComponent>
        );
      }).not.toThrow();
    });

    it('should not throw when redering a PopoverComponent without childrens', () => {
      expect(() => {
        shallow(
          <PopoverComponent {...popoverComponentProps} />
        );
      }).not.toThrow();
    });
  });

  describe('Tether toggle click handler', () => {
    beforeEach(() => {
      popoverComponentWrapper = mount(
        <PopoverComponent {...popoverComponentProps} >
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </PopoverComponent>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverComponentWrapper.unmount();
      popoverComponentWrapper.detach();
    });

    it('should open the popover on click toggle if popover was closed', () => {
      expect(popoverComponentWrapper.state('isOpen')).toBe(false);

      $('#PopoverToggle').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(true);
    });

    it('should close the popover on click toggle if popover was opened', () => {
      $('#PopoverToggle').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(true);

      $('#PopoverToggle').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(false);
    });
  });

  describe('Document click handler for an opened popover', () => {
    beforeEach(() => {
      popoverComponentProps = _.extend(popoverComponentProps, {
        isOpen: true
      });

      popoverComponentWrapper = mount(
        <PopoverComponent {...popoverComponentProps} >
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </PopoverComponent>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverComponentWrapper.unmount();
      popoverComponentWrapper.detach();
    });

    it('should not close the popover on click tether element', () => {
      expect(popoverComponentWrapper.state('isOpen')).toBe(true);

      $('#PopoverElement').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(true);
    });

    it('should close the popover when clicking outside PopoverComponent', () => {
      expect(popoverComponentWrapper.state('isOpen')).toBe(true);

      $('body').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(false);
    });
  });

  describe('Document click handler for a closed popover', () => {
    beforeEach(() => {
      popoverComponentProps = _.extend(popoverComponentProps, {
        isOpen: false
      });

      popoverComponentWrapper = mount(
        <PopoverComponent {...popoverComponentProps}>
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </PopoverComponent>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverComponentWrapper.unmount();
      popoverComponentWrapper.detach();
    });

    it('should not explode', () => {
      expect(popoverComponentWrapper.state('isOpen')).toBe(false);

      $('body').click();

      expect(popoverComponentWrapper.state('isOpen')).toBe(false);
    });
  });
});
