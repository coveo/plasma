import { shallow } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { DeleteInputAction } from '../DeleteInputAction';

describe('DeleteInputAction', () => {

  describe('<DeleteInputAction />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <DeleteInputAction onClick={() => { }} />
        );
      }).not.toThrow();
    });
  });
});
