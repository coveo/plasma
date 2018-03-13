import { mount, ReactWrapper, shallow } from 'enzyme';
import * as React from 'react';
import { BreadcrumbLink, IBreadcrumbLinkProps } from '../BreadcrumbLink';

describe('<BreadcrumbLink/>', () => {

  const defaultProps: IBreadcrumbLinkProps = {
    name: 'title',
    link: '#',
  };

  let breadcrumbLinkComponent: ReactWrapper<IBreadcrumbLinkProps, any>;

  it('should render without errors', () => {
    expect(() => {
      shallow(<BreadcrumbLink {...defaultProps} />);
    }).not.toThrow();
  });

  describe('<BreadcrumbLink /> with default props', () => {

    const renderBreadcrumbLink = (props: IBreadcrumbLinkProps = defaultProps) => {
      breadcrumbLinkComponent = mount(
        <BreadcrumbLink {...props} />,
        { attachTo: document.getElementById('App') },
      );
    };

    afterEach(() => {
      breadcrumbLinkComponent.unmount();
      breadcrumbLinkComponent.detach();
    });

    it('should render the default name', () => {
      renderBreadcrumbLink();
      expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name);
    });

    it('should render the default link', () => {
      renderBreadcrumbLink();
      expect(breadcrumbLinkComponent.find(`.link[href="${defaultProps.link}"]`).length).toEqual(1);
    });

    it('should trigger the onClick', () => {
      const spy = jasmine.createSpy('onClick');
      renderBreadcrumbLink({...defaultProps, onClick: spy});
      breadcrumbLinkComponent.props().onClick(defaultProps);

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
