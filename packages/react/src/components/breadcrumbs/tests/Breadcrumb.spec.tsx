import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from '@test-utils';
import * as _ from 'underscore';
import {Title} from '../../title/Title.js';
import {Breadcrumb, IBreadcrumbProps} from '../Breadcrumb.js';
import {BreadcrumbLink, IBreadcrumbLinkProps} from '../BreadcrumbLink.js';

describe('<Breadcrumb/>', () => {
    const defaultProps: IBreadcrumbProps = {
        title: {
            text: 'test',
        },
    };

    let breadcrumbComponent: ShallowWrapper<IBreadcrumbProps>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Breadcrumb {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<Breadcrumb /> with default props', () => {
        beforeEach(() => {
            breadcrumbComponent = shallowWithState(<Breadcrumb {...defaultProps} />, {});
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
            breadcrumbComponent = shallowWithState(<Breadcrumb {..._.defaults(props, defaultProps)} />, {});
        };

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
    });
});
