import { shallow, mount, ReactWrapper } from 'enzyme';
import * as $ from 'jquery';
import * as _ from 'underscore';
import { Popover, IPopoverProps } from '../../src/components/Popover';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<Popover>', () => {
  let popoverProps: IPopoverProps;
  let popoverWrapper: ReactWrapper<IPopoverProps, any>;
  let popoverSelector = '#PopoverToggle';

  let toggleOpenedSpy: jasmine.Spy;

  const mountPopover = () => popoverWrapper = mount(
    <Popover {...popoverProps} >
      <span id='PopoverToggle'>Toggle</span>
      <span id='PopoverElement'>Tether element</span>
    </Popover>,
    { attachTo: document.getElementById('App') }
  );

  beforeEach(() => {
    popoverProps = {
      attachment: 'top left'
    };

    toggleOpenedSpy = spyOn(Popover.prototype, 'toggleOpened').and.callThrough();
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
      mountPopover();
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

  describe('Mounted Popover', () => {
    afterEach(() => {
      popoverWrapper.unmount();
      popoverWrapper.detach();
    });

    describe('Toggle opened behavior', () => {
      describe('With an uncontrolled Popover', () => {
        beforeEach(() => {
          mountPopover();
        });

        it('should set isOpen to true in the state when calling toggleOpened with isOpen: true', () => {
          expect(popoverWrapper.state('isOpen')).toBe(false);

          (popoverWrapper.instance() as Popover).toggleOpened(true);

          expect(popoverWrapper.state('isOpen')).toBe(true);
        });

        it('should set isOpen to false in the state when calling toggleOpened with isOpen: false', () => {
          (popoverWrapper.instance() as Popover).toggleOpened(true);

          (popoverWrapper.instance() as Popover).toggleOpened(false);

          expect(popoverWrapper.state('isOpen')).toBe(false);
        });
      });

      describe('With a controlled Popover', () => {
        let onToggleSpy: jasmine.Spy;

        beforeEach(() => {
          onToggleSpy = jasmine.createSpy('onToggleSpy');

          popoverProps.onToggle = onToggleSpy;

          mountPopover();
        });

        it('should call the onToggle prop with true when calling toggleOpened with isOpen: true', () => {
          (popoverWrapper.instance() as Popover).toggleOpened(true);

          expect(onToggleSpy.calls.count()).toBe(1);

          expect(onToggleSpy).toHaveBeenCalledWith(true);
        });

        it('should call the onToggle prop with false when calling toggleOpened with isOpen: false', () => {
          (popoverWrapper.instance() as Popover).toggleOpened(false);

          expect(onToggleSpy.calls.count()).toBe(1);

          expect(onToggleSpy).toHaveBeenCalledWith(false);
        });
      });
    });

    describe('Tether toggle click handler', () => {
      beforeEach(() => {
        mountPopover();
      });

      it('should open the popover on click toggle if popover was closed', () => {
        $(popoverSelector).click();

        expect(toggleOpenedSpy.calls.count()).toBe(1);

        expect(toggleOpenedSpy).toHaveBeenCalledWith(true);
      });

      it('should close the popover on click toggle if popover was opened', () => {
        // First, open the Popover
        $(popoverSelector).click();

        $(popoverSelector).click();

        expect(toggleOpenedSpy.calls.count()).toBe(2);

        expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
      });
    });

    describe('Document click handler for an opened popover', () => {
      beforeEach(() => {
        popoverProps = _.extend(popoverProps, {
          isOpen: true
        });

        mountPopover();
      });

      it('should not close the popover on click tether element', () => {
        $('#PopoverElement').click();

        expect(toggleOpenedSpy.calls.count()).toBe(0);
      });

      it('should close the popover when clicking outside Popover', () => {
        $('body').click();

        expect(toggleOpenedSpy.calls.count()).toBe(1);

        expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
      });
    });

    describe('Document click handler for a closed popover', () => {
      beforeEach(() => {
        popoverProps = _.extend(popoverProps, {
          isOpen: false
        });

        mountPopover();
      });

      it('should not explode', () => {
        $('body').click();

        expect(toggleOpenedSpy.calls.count()).toBe(1);

        expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
      });
    });
  });
});
