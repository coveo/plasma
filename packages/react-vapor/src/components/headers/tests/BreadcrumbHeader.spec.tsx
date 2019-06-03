import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import {Breadcrumb, IBreadcrumbProps} from '../../breadcrumbs/Breadcrumb';
import {BreadcrumbHeader, IBreadcrumbHeaderProps} from '../BreadcrumbHeader';
import {HeaderWrapper} from '../HeaderWrapper';

describe('<BreadcrumbHeader/>', () => {

    const defaultProps: IBreadcrumbHeaderProps = {
        breadcrumb: {
            title: {
                text: 'test',
            },
        },
    };

    let basicHeaderComponent: ReactWrapper<IBreadcrumbHeaderProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<BreadcrumbHeader {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<BreadcrumbHeader /> with default props', () => {

        beforeEach(() => {
            basicHeaderComponent = mount(
                <BreadcrumbHeader {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            basicHeaderComponent.detach();
        });

        it('should render the default Breadcrumb', () => {
            const breadcrumbHeaderComponent = basicHeaderComponent.find(Breadcrumb);
            expect(breadcrumbHeaderComponent.length).toBe(1);
            expect((breadcrumbHeaderComponent.props() as IBreadcrumbProps).title.text).toBe(defaultProps.breadcrumb.title.text);
        });

        it('should render the HeaderWrapper', () => {
            expect(basicHeaderComponent.find(HeaderWrapper).length).toBe(1);
        });
    });
});
