import { shallow, ReactWrapper, mount } from 'enzyme';
import { SideNavigationLoadingItem, ISideNavLoadingItemProps } from '../SideNavigationLoadingItem';

describe('<SideNavigationLoadingItem />', () => {
  let wrapper: ReactWrapper<ISideNavLoadingItemProps, any>;

  beforeEach(() => {
    wrapper = mount(
      <SideNavigationLoadingItem />,
      { attachTo: document.getElementById('App') }
    );
  });

  afterEach(() => {
    wrapper.unmount();
    wrapper.detach();
  });

  it('should render a <SideNavigationLoadingItem /> with mod-sub-navigation-left-margin', () => {
    let container = wrapper.find('div').first();
    expect(container.hasClass('mod-sub-navigation-left-margin')).toBe(true);
  });

  it('should render a <SideNavigationLoadingItem /> with navigation-loading-item-grey', () => {
    let container = wrapper.find('div').first();
    expect(container.hasClass('navigation-loading-item-grey')).toBe(true);
  });

  it('should render a <SideNavigationLoadingItem /> with classes prop', () => {
    const classes = 'mod-width-30';
    let container = wrapper.find('div').first();
    wrapper.setProps({ classes: classes });
    wrapper.mount();
    expect(container.hasClass(classes)).toBe(true);
  });

  it('should render without errors', () => {
    expect(() => {
      shallow(
        <SideNavigationLoadingItem />
      );
    }).not.toThrow();
  });
});
