import { shallow, ReactWrapper, mount } from 'enzyme';
import * as React from 'react';
import { SideNavigation, ISideNavProps } from '../SideNavigation';

describe('<SideNavigation />', () => {
  let wrapper: ReactWrapper<ISideNavProps, any>;

  beforeEach(() => {
    wrapper = mount(
      <SideNavigation />,
      { attachTo: document.getElementById('App') }
    );
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper.detach();
  });

  it('should render a <SideNavigation /> with classes prop', () => {
    const className = 'foo';
    const container = wrapper.find('nav').first();
    wrapper.setProps({ className });
    wrapper.mount();
    expect(container.hasClass(className)).toBe(true);
  });

  it('should render without errors', () => {
    expect(() => {
      shallow(
        <SideNavigation />
      );
    }).not.toThrow();
  });
});
