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

        const renderBreadcrumbLink = (props: IBreadcrumbLinkProps = defaultProps) => {
            breadcrumbLinkComponent = mount(
                <BreadcrumbLink {...props} />,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
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

        it('should return true if the onClick props return true', () => {
            const stopPropagationSpy: jasmine.Spy = jasmine.createSpy('stopPropagation');
            const spy: jasmine.Spy = spyOn<any>(BreadcrumbLink.prototype, 'handleOnClick').and.callThrough();
            renderBreadcrumbLink({...defaultProps, onClick: () => true});
            breadcrumbLinkComponent.find('a.link').simulate('click', {
                stopPropagation: stopPropagationSpy,
            });

            expect(spy).toHaveBeenCalledTimes(1);
            expect(stopPropagationSpy).not.toHaveBeenCalled();
        });

        it('should call each event stop propagation on onClick if it returns false ', () => {
            const stopPropagationSpy: jasmine.Spy = jasmine.createSpy('stopPropagation').and.callThrough();
            const stopImmediatePropagationSpy: jasmine.Spy = jasmine.createSpy('stopImmediatePropagation').and.callThrough();
            const preventDefaultSpy: jasmine.Spy = jasmine.createSpy('preventDefault').and.callThrough();

            const handleOnClickSpy: jasmine.Spy = spyOn<any>(BreadcrumbLink.prototype, 'handleOnClick').and.callThrough();

            renderBreadcrumbLink({...defaultProps, onClick: () => false});
            breadcrumbLinkComponent.find('a.link').simulate('click', {
                stopPropagation: stopPropagationSpy,
                nativeEvent: {
                    stopImmediatePropagation: stopImmediatePropagationSpy,
                },
                preventDefault: preventDefaultSpy,
            });

            expect(handleOnClickSpy).toHaveBeenCalledTimes(1);
            expect(stopPropagationSpy).toHaveBeenCalledTimes(1);
            expect(stopImmediatePropagationSpy).toHaveBeenCalledTimes(1);
            expect(preventDefaultSpy).toHaveBeenCalledTimes(1);
        });
    });
});
