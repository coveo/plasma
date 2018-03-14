import * as React from 'react';
import { mount, ReactWrapper, shallow } from 'enzyme';
import * as _ from 'underscore';
import { Badge, DEFAULT_BADGE_CLASSNAME, IBadgeProps } from '../Badge';

describe('Badge', () => {
  let badgeComponent: ReactWrapper<IBadgeProps, any>;

  it('should render without errors', () => {
    expect(() => {
      shallow(<Badge label='badge' />);
    }).not.toThrow();
  });

  describe('<Badge />', () => {

    const mountWithProps = (props: Partial<IBadgeProps>) => {
      badgeComponent = mount(
        <Badge {..._.defaults(props, { label: 'badge' })} />,
        { attachTo: document.getElementById('App') },
      );
    };

    it('should render badge with the label specified as prop', () => {
      mountWithProps({
        label: 'somelabel',
      });

      expect(badgeComponent.find('span').text()).toEqual('somelabel');
    });

    it('should render the badge with the default badge class', () => {
      mountWithProps({});

      expect(badgeComponent.find('span').hasClass(DEFAULT_BADGE_CLASSNAME)).toBe(true);
    });

    it('should render the badge with the extra classes specified as props', () => {
      mountWithProps({
        extraClasses: ['bg-blue', 'bold'],
      });

      expect(badgeComponent.find('span').hasClass('bg-blue')).toBe(true);
      expect(badgeComponent.find('span').hasClass('bold')).toBe(true);
    });
  });
});
