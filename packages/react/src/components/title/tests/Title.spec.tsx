import {mount, ReactWrapper, shallow} from 'enzyme';
import * as _ from 'underscore';
import {render, screen} from '@test-utils';

import {fireEvent, within} from '@testing-library/react';
import {ILinkSvgProps, LinkSvg} from '../../linkSvg/LinkSvg.js';
import {Tooltip} from '../../tooltip/Tooltip.js';
import {ITitleProps, Title} from '../Title.js';

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
            titleComponent = mount(<Title {...defaultProps} />, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            titleComponent?.unmount();
        });

        it('should render the default text', () => {
            expect(titleComponent.find('h4').text()).toBe(defaultProps.text as string);
        });

        it('should not render the prefix', () => {
            expect(titleComponent.find('span.mr1').length).toBe(0);
        });

        it('should not add the tooltip for the title', () => {
            expect(titleComponent.find(Tooltip).exists()).toBe(false);
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
        };

        const renderTitle = (props: Partial<ITitleProps> = {}) => {
            titleComponent = mount(<Title {..._.defaults(props, customProps)} />, {
                attachTo: document.getElementById('App'),
            });
        };

        afterEach(() => {
            titleComponent.unmount();
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

        it('should render the documentation link SVG', () => {
            renderTitle({
                documentationLink,
            });

            expect(titleComponent.find(LinkSvg).length).toBe(1);
        });
    });

    it('renders a tooltip if the title is truncated', async () => {
        // mock the element DOM properties
        const originalScrollWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight');
        const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth');

        Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
            configurable: true,
            value: 150,
        });
        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
            configurable: true,
            value: 140,
        });

        render(<Title {...defaultProps} text="This is the title text to be truncated" />);

        // first hover to trigger the REF detection
        fireEvent.mouseOver(screen.getByRole('heading', {name: /this is the title text to be truncated/i}));

        // second hover to make the tooltip appear
        fireEvent.mouseOver(screen.getByText(/this is the title text to be truncated/i));

        const tooltip = await screen.findByRole('tooltip', {
            name: /this is the title text to be truncated/i,
        });

        expect(within(tooltip).getByText(/this is the title text to be truncated/i)).toBeInTheDocument();

        // reset the Element DOM Properties
        Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalScrollWidth);
        Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
    });
});
