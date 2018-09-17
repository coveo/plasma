import {mount, ReactWrapper, shallow} from 'enzyme';
// tslint:disable-next-line:no-unused-variable
import * as React from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import * as _ from 'underscore';
import {ITooltipProps, Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    let tooltipWrapper: ReactWrapper<ITooltipProps, void>;
    const TOOLTIP_PROPS: ITooltipProps = {
        title: 'My test tooltip!',
    };
    const TOOLTIP: JSX.Element = <Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>;

    describe('<Tooltip />', () => {
        it('should render without error', () => {
            expect(() => shallow(TOOLTIP)).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                tooltipWrapper = mount(TOOLTIP, {attachTo: document.getElementById('App')});
            }).not.toThrow();

            expect(() => {
                tooltipWrapper.unmount();
                tooltipWrapper.detach();
            }).not.toThrow();
        });
    });

    describe('<Tooltip />', () => {
        beforeEach(() => {
            tooltipWrapper = mount(TOOLTIP, {attachTo: document.getElementById('App')});
        });

        afterEach(() => {
            tooltipWrapper.detach();
        });

        it('should get the title as a prop', () => {
            const titleProp: string = tooltipWrapper.props().title;

            expect(titleProp).toBeDefined();
            expect(titleProp).toBe(TOOLTIP_PROPS.title);
        });

        it('should display the className passed as a prop', () => {
            const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, {className: 'some-class'});

            tooltipWrapper.setProps(newProps);

            expect(tooltipWrapper.html()).toContain(newProps.className);
        });

        it('should display an <OverlayTrigger/>', () => {
            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(1);
        });

        it('should pass a <BootstrapTooltip/> to the <OverlayTrigger/>', () => {
            expect(tooltipWrapper.find(OverlayTrigger).props().overlay).toBeDefined();
        });

        it('should display a footer section if one is passed as a prop', () => {
            const newProps: ITooltipProps = _.extend({}, TOOLTIP_PROPS, {footer: 'footer section'});

            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1]).toBeNull();

            tooltipWrapper.setProps(newProps);

            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1].props.className).toBe('tooltip-footer');
        });

        it('should not display the tooltip if the title is empty', () => {
            const newProps: ITooltipProps = _.extend({}, {title: ''});

            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1]).toBeNull();

            tooltipWrapper.setProps(newProps);

            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(0);
        });

        it('should render with a span wrapper if noSpanWrapper prop is not passed', () => {
            const content = <li>test</li>;
            const tooltip = shallow(
                <Tooltip {...TOOLTIP_PROPS}>{content}</Tooltip>,
            );

            expect(tooltip.find('li').parent().type()).toBe('span');
        });

        it('should not render with a span wrapper if noSpanWrapper prop is passed', () => {
            const content = <li>test</li>;
            const tooltip = shallow(
                <Tooltip noSpanWrapper {...TOOLTIP_PROPS}>{content}</Tooltip>,
            );

            expect(tooltip.find('li').parent().type()).not.toBe('span');
        });
    });
});
