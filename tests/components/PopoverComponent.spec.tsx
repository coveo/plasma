import {shallow, mount, ReactWrapper} from 'enzyme';
import createSpy = jasmine.createSpy;

import * as $ from 'jquery';
import {PopoverComponent, IPopoverComponentProps} from '../../src/components/PopoverComponent';

describe('<PopoverComponent>', () => {
  let popoverComponentWrapper: ReactWrapper<IPopoverComponentProps, any>;
  let toggleOpenedTetherElementSpy: jasmine.Spy;

  let popoverComponentProps: IPopoverComponentProps;

  beforeEach(() => {
    toggleOpenedTetherElementSpy = createSpy('toggleOpenedTetherElement');

    popoverComponentProps = {
      attachment: 'top left',
      toggleOpenedTetherElement: toggleOpenedTetherElementSpy
    };
  });

  it('should render without error', () => {
    expect(() => {
      shallow(
        <PopoverComponent
          {...popoverComponentProps}
        >
          <span>Toggle</span>
          <span>Tether element</span>
        </PopoverComponent>
      );
    }).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      popoverComponentWrapper = mount(
        <PopoverComponent
          {...popoverComponentProps}
        >
          <span>Toggle</span>
          <span>Tether element</span>
        </PopoverComponent>,
        {attachTo: document.getElementById('App')}
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
          <PopoverComponent
            {...popoverComponentProps}
          >
            <span>Toggle</span>
          </PopoverComponent>
        );
      }).not.toThrow();
    });

    it('should not throw when redering a PopoverComponent without childrens', () => {
      expect(() => {
        shallow(
          <PopoverComponent
            {...popoverComponentProps}
          />
        );
      }).not.toThrow();
    });

    it('should not throw when redering a PopoverComponent with a boolean as second child', () => {
      expect(() => {
        shallow(
          <PopoverComponent
            {...popoverComponentProps}
          >
            <span>Toggle</span>
            {false}
          </PopoverComponent>
        );
      }).not.toThrow();
    });
  });

  describe('Document click listener', () => {
    beforeEach(() => {
      popoverComponentWrapper = mount(
        <div>
          <span id='RandomElement'>Test</span>
          <PopoverComponent
            {...popoverComponentProps}
          >
            <span id='PopoverToggle'>Toggle</span>
            <span id='PopoverElement'>Tether element</span>
          </PopoverComponent>
        </div>,
        {attachTo: document.getElementById('App')}
      );
    });

    afterEach(() => {
      popoverComponentWrapper.unmount();
      popoverComponentWrapper.detach();
    });

    it('should not call toggleOpenedTetherElement on click tether toggle', () => {
      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);

      $('#PopoverToggle').click();

      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);
    });

    it('should not call toggleOpenedTetherElement on click tether element', () => {
      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);

      $('#PopoverElement').click();

      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);
    });

    it('should call toggleOpenedTetherElement when clicking outside PopoverComponent', () => {
      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);

      $('#RandomElement').click();

      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(1);
    });
  });

  describe('Document click handler without PopoverElement in DOM', () => {
    beforeEach(() => {
      popoverComponentWrapper = mount(
        <div>
          <span id='RandomElement'>Test</span>
          <PopoverComponent
            {...popoverComponentProps}
          >
            <span id='PopoverToggle'>Toggle</span>
            {false}
          </PopoverComponent>
        </div>,
        {attachTo: document.getElementById('App')}
      );
    });

    it('should not explode', () => {
      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(0);

      $('#RandomElement').click();

      expect(toggleOpenedTetherElementSpy.calls.count()).toBe(1);
    });
  });
});
