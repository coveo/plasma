import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from '@test-utils';
import * as _ from 'underscore';
import {BreadcrumbLink, IBreadcrumbLinkProps} from '../BreadcrumbLink.js';

describe('<BreadcrumbLink/>', () => {
    const defaultProps: IBreadcrumbLinkProps = {
        name: 'title',
        link: '#',
    };

    let breadcrumbLinkComponent: ShallowWrapper<IBreadcrumbLinkProps>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<BreadcrumbLink {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<BreadcrumbLink /> with default props', () => {
        const renderBreadcrumbLink = (props: IBreadcrumbLinkProps = defaultProps) => {
            breadcrumbLinkComponent = shallowWithState(<BreadcrumbLink {...props} />, {});
        };

        it('should render the default name', () => {
            renderBreadcrumbLink();

            expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name as any);
        });

        it('should return a <a/> tag if the link is defined', () => {
            renderBreadcrumbLink({name: 'a', link: 'zelda'});

            expect(breadcrumbLinkComponent.find('a').length).toBe(1);
        });

        it('should return a <span/> tag if the link is not defined', () => {
            renderBreadcrumbLink({name: 'a', link: undefined});

            expect(breadcrumbLinkComponent.find('span').length).toBe(1);
        });

        it('should render a link undefined for the BreadcrumbLink if not defined', () => {
            renderBreadcrumbLink();

            expect(breadcrumbLinkComponent.find('.link').text()).toEqual(defaultProps.name as any);
        });

        it('should render the default link', () => {
            renderBreadcrumbLink();

            expect(breadcrumbLinkComponent.find(`.link[href="${defaultProps.link}"]`).length).toEqual(1);
        });

        it('should trigger the onClick', () => {
            const event = {
                stopPropagation: _.noop,
                preventDefault: _.noop,
                nativeEvent: {
                    stopImmediatePropagation: _.noop,
                },
            };
            const spy = jest.fn(() => false);
            renderBreadcrumbLink({...defaultProps, onClick: spy});
            breadcrumbLinkComponent
                .find('a')
                .props()
                .onClick(event as any);

            expect(spy).toHaveBeenCalledTimes(1);
        });

        it('should return true if the onClick props return true', () => {
            const stopPropagationSpy: jest.Mock<any, any> = jest.fn();
            const spy: jest.SpyInstance = jest.spyOn<any, string>(BreadcrumbLink.prototype, 'handleOnClick');
            renderBreadcrumbLink({...defaultProps, onClick: () => true});
            breadcrumbLinkComponent.find('a.link').simulate('click', {
                stopPropagation: stopPropagationSpy,
            });

            expect(spy).toHaveBeenCalledTimes(1);
            expect(stopPropagationSpy).not.toHaveBeenCalled();
        });
    });
});
