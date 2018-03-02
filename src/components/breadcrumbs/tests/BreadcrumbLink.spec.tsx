import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {BreadcrumbLink, IBreadcrumbLinkProps} from '../BreadcrumbLink';

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

        beforeEach(() => {
            breadcrumbLinkComponent = mount(
                <BreadcrumbLink {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            breadcrumbLinkComponent.unmount();
            breadcrumbLinkComponent.detach();
        });

        it('should render the default name', () => {
            expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name);
        });

        it('should the default link', () => {
            expect(breadcrumbLinkComponent.find(`.link[href="${defaultProps.link}"]`).length).toEqual(1);
        });
    });
});
