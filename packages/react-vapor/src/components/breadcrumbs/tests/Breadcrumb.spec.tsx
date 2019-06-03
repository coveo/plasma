import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {Title} from '../../title/Title';
import {Breadcrumb, IBreadcrumbProps} from '../Breadcrumb';
import {BreadcrumbLink, IBreadcrumbLinkProps} from '../BreadcrumbLink';

describe('<Breadcrumb/>', () => {

    const defaultProps: IBreadcrumbProps = {
        title: {
            text: 'test',
        },
    };

    let breadcrumbComponent: ReactWrapper<IBreadcrumbProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Breadcrumb {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<Breadcrumb /> with default props', () => {

        beforeEach(() => {
            breadcrumbComponent = mount(
                <Breadcrumb {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            breadcrumbComponent.detach();
        });

        it('should render the default title', () => {
            const titleComponent = breadcrumbComponent.find(Title);
            expect(titleComponent.length).toEqual(1);
            expect(titleComponent.props().text).toEqual(defaultProps.title.text);
        });
    });

    describe('<Breadcrumb /> with custom props', () => {

        const defaultLink: IBreadcrumbLinkProps = {
            name: 'title',
            link: '#',
        };

        const renderBreadcrumb = (props: Partial<IBreadcrumbProps> = {}) => {
            breadcrumbComponent = mount(
                <Breadcrumb {..._.defaults(props, defaultProps)} />,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            breadcrumbComponent.detach();
        });

        it('should not render the BreadcrumbLink if the links has no elements', () => {
            renderBreadcrumb({
                links: [],
            });
            expect(breadcrumbComponent.find(BreadcrumbLink).length).toBe(0);
        });

        it('should render the BreadcrumbLink if the links has 1 element', () => {
            renderBreadcrumb({
                links: [defaultLink],
            });
            expect(breadcrumbComponent.find(BreadcrumbLink).length).toBe(1);
        });

        it('should render all BreadcrumbLink if the links has more than 1 element', () => {
            const secondLink: IBreadcrumbLinkProps = {
                name: 'test',
                link: '$',
            };
            renderBreadcrumb({
                links: [defaultLink, secondLink],
            });
            expect(breadcrumbComponent.find(BreadcrumbLink).length).toBe(2);
        });

        it('should render the BreadcrumbLink link with the defaultLinkPath before', () => {
            renderBreadcrumb({
                links: [defaultLink],
                defaultLinkPath: 'test/',
            });
            expect(breadcrumbComponent.find(BreadcrumbLink).props().link).toContain('test/');
        });
    });
});
