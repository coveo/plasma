import {shallow} from 'enzyme';
import createSpy = jasmine.createSpy;

import {PopoverComponent} from '../../src/components/PopoverComponent';

describe('<PopoverComponent>', () => {

  it('should render without error', () => {
    expect(() => {
      shallow(
        <PopoverComponent
          attachment='top left'
          toggleOpenedTetherElement={createSpy('toggleOpenedTetherElement') }
        >
          <span>Toggle</span>
          <span>Tether element</span>
        </PopoverComponent>
      );
    }).not.toThrow();
  });

  describe('Document click listener', () => {
    // TODO!
  });
});
