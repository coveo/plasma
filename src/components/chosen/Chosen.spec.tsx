import { shallow, mount, ReactWrapper } from 'enzyme';
import { IChosenSelectProps, ChosenSelect } from './ChosenSelect';

// Until Webpack provided plugins works with TS 2.0
/* tslint:disable:no-unused-variable */
import * as React from 'react';
/* tslint:enable:no-unused-variable */

describe('<ChosenSelect>', () => {
  let chosenSelectWrapper: ReactWrapper<IChosenSelectProps, any>;

  let chosenSelectProps: IChosenSelectProps;

  let onChosenChangeSpy: jasmine.Spy = jasmine.createSpy('OnChosenChange');

  beforeEach(() => {
    chosenSelectProps = {
      onChosenChange: onChosenChangeSpy
    };
  });

  it('should render without error', () => {
    expect(() => shallow(
      <ChosenSelect {...chosenSelectProps}>
        <option value='1'>Option 1</option>
        <option value='2'>Option 2</option>
        <option value='3'>Option 3</option>
      </ChosenSelect>
    )).not.toThrow();
  });

  it('should mount and unmount/detach without error', () => {
    expect(() => {
      chosenSelectWrapper = mount(
        <ChosenSelect {...chosenSelectProps}>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </ChosenSelect>,
        { attachTo: document.getElementById('App') }
      );
    }).not.toThrow();

    expect(() => {
      chosenSelectWrapper.unmount();
      chosenSelectWrapper.detach();
    }).not.toThrow();
  });

  describe('On change handler', () => {
    beforeEach(() => {
      chosenSelectWrapper = mount(
        <ChosenSelect {...chosenSelectProps}>
          <option value='1'>Option 1</option>
          <option value='2'>Option 2</option>
          <option value='3'>Option 3</option>
        </ChosenSelect>,
        { attachTo: document.getElementById('App') }
      );
    });

    afterEach(() => {
      chosenSelectWrapper.unmount();
      chosenSelectWrapper.detach();
    });

    it('should call the onChosenChange prop on change', () => {
      let chosenSelect: ChosenSelect = chosenSelectWrapper.instance() as ChosenSelect;

      // Mock the change event
      chosenSelect.select.trigger('change');

      expect(onChosenChangeSpy).toHaveBeenCalled();
    });
  });
});
