import { shallow, mount, ReactWrapper } from 'enzyme';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { Popover, IPopoverProps } from '../../src/components/Popover';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<Popover>', () => {
  let popoverWrapper: ReactWrapper<IPopoverProps, any>;

  let popoverProps: IPopoverProps;

  beforeEach(() => {
    popoverProps = {
      attachment: 'top left'
    };
  });

  it('should render without error', () => {
    expect(() => shallow(
      <Popover {...popoverProps}>
        <span>Toggle</span>
        <span>Tether element</span>
      </Popover>
    )).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      popoverWrapper = mount(
        <Popover {...popoverProps}>
          <span>Toggle</span>
          <span>Tether element</span>
        </Popover>,
        { attachTo: document.getElementById('App') }
      );
    }).not.toThrow();

    expect(() => {
      popoverWrapper.unmount();
      popoverWrapper.detach();
    }).not.toThrow();
  });

  describe('Children propTypes', () => {
    it('should not throw when redering a Popover with only one children', () => {
      expect(() => {
        shallow(
          <Popover {...popoverProps}>
            <span>Toggle</span>
          </Popover>
        );
      }).not.toThrow();
    });

    it('should not throw when redering a Popover without childrens', () => {
      expect(() => {
        shallow(
          <Popover {...popoverProps} />
        );
      }).not.toThrow();
    });
  });

  describe('Tether toggle click handler', () => {
    beforeEach(() => {
      popoverWrapper = mount(
        <Popover {...popoverProps} >
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </Popover>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverWrapper.unmount();
      popoverWrapper.detach();
    });

    it('should open the popover on click toggle if popover was closed', () => {
      expect(popoverWrapper.state('isOpen')).toBe(false);

      $('#PopoverToggle').click();

      expect(popoverWrapper.state('isOpen')).toBe(true);
    });

    it('should close the popover on click toggle if popover was opened', () => {
      $('#PopoverToggle').click();

      expect(popoverWrapper.state('isOpen')).toBe(true);

      $('#PopoverToggle').click();

      expect(popoverWrapper.state('isOpen')).toBe(false);
    });
  });

  describe('Document click handler for an opened popover', () => {
    beforeEach(() => {
      popoverProps = _.extend(popoverProps, {
        isOpen: true
      });

      popoverWrapper = mount(
        <Popover {...popoverProps} >
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </Popover>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverWrapper.unmount();
      popoverWrapper.detach();
    });

    it('should not close the popover on click tether element', () => {
      expect(popoverWrapper.state('isOpen')).toBe(true);

      $('#PopoverElement').click();

      expect(popoverWrapper.state('isOpen')).toBe(true);
    });

    it('should close the popover when clicking outside Popover', () => {
      expect(popoverWrapper.state('isOpen')).toBe(true);

      $('body').click();

      expect(popoverWrapper.state('isOpen')).toBe(false);
    });
  });

  describe('Document click handler for a closed popover', () => {
    beforeEach(() => {
      popoverProps = _.extend(popoverProps, {
        isOpen: false
      });

      popoverWrapper = mount(
        <Popover {...popoverProps}>
          <span id='PopoverToggle'>Toggle</span>
          <span id='PopoverElement'>Tether element</span>
        </Popover>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      popoverWrapper.unmount();
      popoverWrapper.detach();
    });

    it('should not explode', () => {
      expect(popoverWrapper.state('isOpen')).toBe(false);

      $('body').click();

      expect(popoverWrapper.state('isOpen')).toBe(false);
    });
  });
});
