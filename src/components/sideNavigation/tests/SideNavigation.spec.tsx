import { shallow, } from 'enzyme';
import * as React from 'react';
import { SideNavigation } from '../SideNavigation';

describe('<SideNavigation />', () => {
  it('should render without errors', () => {
    expect(() => {
      shallow(
        <SideNavigation />
      );
    }).not.toThrow();
  });
});
