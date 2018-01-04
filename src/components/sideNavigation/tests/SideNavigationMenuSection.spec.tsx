import { shallow } from 'enzyme';
import { SideNavigationMenuSection } from '../SideNavigationMenuSection';

describe('<SideNavigationMenuSection />', () => {
  it('should render without errors', () => {
    expect(() => {
      shallow(
        <SideNavigationMenuSection />
      );
    }).not.toThrow();
  });
});
