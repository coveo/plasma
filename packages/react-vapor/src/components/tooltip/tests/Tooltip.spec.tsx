import {shallow, ShallowWrapper} from 'enzyme';
import * as React from 'react';
import {OverlayTrigger} from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';
import {ITooltipProps, Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    let tooltipWrapper: ShallowWrapper<ITooltipProps>;
    const TOOLTIP_PROPS: ITooltipProps = {
        title: 'My test tooltip!',
    };

    describe('<Tooltip />', () => {
        it('should render without error', () => {
            expect(() => shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>)).not.toThrow();
        });

        it('should mount and unmount/detach without error', () => {
            expect(() => {
                tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);
                tooltipWrapper.unmount();
            }).not.toThrow();
        });
    });

    describe('<Tooltip />', () => {
        beforeEach(() => {
            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);
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
    });

    describe('<Tooltip />', () => {
        it('should render with a span wrapper if noSpanWrapper prop is not passed', () => {
            const content = <li>test</li>;
            tooltipWrapper = shallow(
                <Tooltip {...TOOLTIP_PROPS}>{content}</Tooltip>,
            );

            expect(tooltipWrapper.find('li').parent().type()).toBe('span');
        });

        it('should not render with a span wrapper if noSpanWrapper prop is passed', () => {
            const content = <li>test</li>;
            tooltipWrapper = shallow(
                <Tooltip noSpanWrapper {...TOOLTIP_PROPS}>{content}</Tooltip>,
            );

            expect(tooltipWrapper.find('li').parent().type()).not.toBe('span');
        });
    });

    describe('behaviour on unmount', () => {
        let el: HTMLElement;
        let customRef: React.RefObject<any>;

        let findDOMNodeSpy: jasmine.Spy;
        let containsSpy: jasmine.Spy;
        let appendChildSpy: jasmine.Spy;

        beforeEach(() => {
            el = document.createElement('div');
            customRef = React.createRef();

            spyOn(React, 'createRef').and.returnValue(customRef);
            findDOMNodeSpy = spyOn(ReactDOM, 'findDOMNode').and.returnValue(el);
            containsSpy = spyOn(document.body, 'contains').and.returnValue(false);
            appendChildSpy = spyOn(document.body, 'appendChild');

            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);
            (customRef as any).current = el;
        });

        it('should re-add the tooltip element on unmount if its not in the DOM', () => {
            tooltipWrapper.unmount();

            expect(appendChildSpy).toHaveBeenCalledWith(el);
        });

        it('should not re-add the tooltip element on unmount if the DOM already contain the node', () => {
            containsSpy.and.returnValue(true);

            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });

        it('should not re-add the tooltip element on unmount if the html node does not exists', () => {
            findDOMNodeSpy.and.returnValue(null);

            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });

        it('should not re-add the tooltip element on unmount if the ref has no current view', () => {
            (customRef as any).current = undefined;

            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });
    });
});
