import {mountWithState} from '@helpers/enzyme-redux';
import {shallow} from 'enzyme';
import * as React from 'react';
import {OverlayTrigger} from 'react-bootstrap';

import {ITooltipProps, Tooltip} from '../Tooltip';

describe('Tooltip', () => {
    const TOOLTIP_PROPS: ITooltipProps = {
        title: 'My test tooltip!',
    };

    it('should render without error', () => {
        expect(() => shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>)).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            const tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);
            tooltipWrapper.unmount();
        }).not.toThrow();
    });

    describe('<Tooltip />', () => {
        it('should display the className passed as a prop', () => {
            const tooltipWrapper = mountWithState(
                <Tooltip {...TOOLTIP_PROPS} className="some-class">
                    Hover me!
                </Tooltip>,
                {}
            );

            expect(tooltipWrapper.html()).toContain('some-class');
        });

        it('should display an <OverlayTrigger/>', () => {
            const tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);

            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(1);
        });

        it('should pass a <BootstrapTooltip/> to the <OverlayTrigger/>', () => {
            const tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hover me!</Tooltip>);

            expect(tooltipWrapper.find(OverlayTrigger).props().overlay).toBeDefined();
        });

        it('should display a footer section if one is passed as a prop', () => {
            const tooltipWrapper = shallow(
                <Tooltip {...TOOLTIP_PROPS} footer="footer section">
                    Hover me!
                </Tooltip>
            );

            expect(tooltipWrapper.find(OverlayTrigger).props().overlay.props.children[1].props.className).toBe(
                'tooltip-footer'
            );
        });

        it('should not display the tooltip if the title is empty', () => {
            const tooltipWrapper = shallow(
                <Tooltip {...TOOLTIP_PROPS} title="">
                    Hover me!
                </Tooltip>
            );

            expect(tooltipWrapper.find(OverlayTrigger).length).toBe(0);
        });
    });

    it('should render with a span wrapper if noSpanWrapper prop is not passed', () => {
        const content = <li>test</li>;
        const tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>{content}</Tooltip>);

        expect(tooltipWrapper.find('li').parent().type()).toBe('span');
    });

    it('should not render with a span wrapper if noSpanWrapper prop is passed', () => {
        const content = <li>test</li>;
        const tooltipWrapper = shallow(
            <Tooltip noSpanWrapper {...TOOLTIP_PROPS}>
                {content}
            </Tooltip>
        );

        expect(tooltipWrapper.find('li').parent().type()).not.toBe('span');
    });
});
