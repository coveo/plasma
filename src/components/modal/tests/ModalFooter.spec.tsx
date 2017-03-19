import { shallow } from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import { ModalFooter } from '../ModalFooter';

describe('ModalBody', () => {

  describe('<ModalBody />', () => {
    it('should render without errors', () => {
      expect(() => {
        shallow(
          <ModalFooter />
        );
      }).not.toThrow();
    });
  });
});
