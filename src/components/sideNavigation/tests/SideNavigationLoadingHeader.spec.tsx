import * as React from 'react';
import { shallow } from 'enzyme';
import { SideNavigationLoadingHeader } from '../SideNavigationLoadingHeader';

describe('<SideNavigationLoadingHeader />', () => {
  it('should render without errors', () => {
    expect(() => {
      shallow(
        <SideNavigationLoadingHeader />
      );
    }).not.toThrow();
  });
});
