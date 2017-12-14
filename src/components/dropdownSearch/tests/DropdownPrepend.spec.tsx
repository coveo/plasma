import * as React from 'react';
import { DropdownPrepend } from '../DropdownPrepend';
import { mount } from 'enzyme';

describe('<DropdownPrepend />', () => {
  describe('render', () => {
    it('should render without error with a prepend as a string', () => {
      expect(() => {
        mount(
          <DropdownPrepend prepend='i am a string' />,
          { attachTo: document.getElementById('App') },
        );
      }).not.toThrow();
    });

    it('should render without error with a prepend as a JSX.Element', () => {
      expect(() => {
        mount(
          <DropdownPrepend prepend={<div>Hello World</div>} />,
          { attachTo: document.getElementById('App') },
        );
      }).not.toThrow();
    });

    it('should render children inside it if any', () => {
      expect(
        mount(
          <DropdownPrepend prepend='i am a string'><div>Hello World</div></DropdownPrepend>,
          { attachTo: document.getElementById('App') },
        ).find('div').find('div').text()
      ).toBe('Hello World');
    });
  });
});
