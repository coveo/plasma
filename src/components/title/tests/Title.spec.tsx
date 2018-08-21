import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';
import {ILinkSvgProps, LinkSvg} from '../../svg/LinkSvg';
import {Tooltip} from '../../tooltip/Tooltip';
import {ITitleProps, Title} from '../Title';

describe('<Title/>', () => {

    const defaultProps: ITitleProps = {
        text: 'title',
    };
    let titleComponent: ReactWrapper<ITitleProps, any>;

    it('should render without errors', () => {
        expect(() => {
            shallow(<Title {...defaultProps} />);
        }).not.toThrow();
    });

    describe('<Title /> with default props', () => {

        beforeEach(() => {
            titleComponent = mount(
                <Title {...defaultProps} />,
                {attachTo: document.getElementById('App')},
            );
        });

        afterEach(() => {
            titleComponent.detach();
        });

        it('should render the default text', () => {
            expect(titleComponent.find('h1').text()).toBe(defaultProps.text);
        });

        it('should not render the prefix', () => {
            expect(titleComponent.find('span.mr1').length).toBe(0);
        });

        it('should not add the tooltip for the title', () => {
            expect(titleComponent.find(Tooltip).props().title).toBe('');
        });

        it('should not render the documentation link', () => {
            expect(titleComponent.find(LinkSvg).length).toBe(0);
        });
    });

    describe('<Title /> with custom props', () => {

        const customProps: ITitleProps = {
            prefix: 'prefix',
            text: 'title',
            withTitleTooltip: false,
        };

        const documentationLink: ILinkSvgProps = {
            url: 'https://www.google.ca',
            target: '_blank',
            svg: {
                svgName: 'help',
                svgClass: 'fill-orange icon mod-20',
            },
        };

        const renderTitle = (props: Partial<ITitleProps> = {}) => {
            titleComponent = mount(
                <Title {..._.defaults(props, customProps)} />,
                {attachTo: document.getElementById('App')},
            );
        };

        afterEach(() => {
            titleComponent.unmount();
            titleComponent.detach();
        });

        it('should render the prefix', () => {
            renderTitle();
            expect(titleComponent.find('span.mr1').text()).toBe(customProps.prefix);
        });

        it('should add the tooltip for the title with withTitleTooltip to true', () => {
            renderTitle({
                withTitleTooltip: true,
            });
            expect(titleComponent.find(Tooltip).length).toBe(1);
        });

        it('should render the documentation link with the inline-doc-link class by default', () => {
            renderTitle({
                documentationLink,
            });
            expect(titleComponent.find(LinkSvg).length).toBe(1);
            expect(titleComponent.find(LinkSvg).prop('linkClasses')).toContain('inline-doc-link');
        });
    });
});
