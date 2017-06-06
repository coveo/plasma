import { shallow } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { AddInputAction } from '../AddInputAction';

describe('AddInputAction', () => {

  describe('<AddInput />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <AddInputAction />
        );
      }).not.toThrow();
    });
  });
});
