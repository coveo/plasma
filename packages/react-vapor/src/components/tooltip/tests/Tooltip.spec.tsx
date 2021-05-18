import {shallow, ShallowWrapper} from 'enzyme';
import {mountWithState} from '@helpers/enzyme-redux';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {OverlayTrigger} from 'react-bootstrap';
import {mocked} from 'ts-jest/utils';

import {ITooltipProps, Tooltip} from '../Tooltip';

jest.mock('react-dom');
jest.mock('react', () => {
    const originReact = jest.requireActual('react');
    return {
        ...originReact,
        createRef: jest.fn(() => ({current: null})),
    };
});

const mockedReact = mocked(React);
const mockedReactDOM = mocked(ReactDOM);

describe('Tooltip', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

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

    describe('behaviour on unmount', () => {
        let el: HTMLElement;
        let containsSpy: jest.SpyInstance;
        let appendChildSpy: jest.SpyInstance;
        let tooltipWrapper: ShallowWrapper;

        beforeEach(() => {
            el = document.createElement('div');

            mockedReact.createRef.mockReturnValue({
                current: el,
            });
            mockedReactDOM.findDOMNode.mockReturnValue(el);
            containsSpy = jest.spyOn(document.body, 'contains').mockReturnValue(false);
            appendChildSpy = jest.spyOn(document.body, 'appendChild');
        });

        afterEach(() => {
            jest.clearAllMocks();
        });

        it('should re-add the tooltip element on unmount if its not in the DOM', () => {
            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);
            tooltipWrapper.unmount();

            expect(appendChildSpy).toHaveBeenCalledWith(el);
        });

        it('should not re-add the tooltip element on unmount if the DOM already contain the node', () => {
            containsSpy.mockReturnValue(true);

            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);
            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });

        it('should not re-add the tooltip element on unmount if the html node does not exists', () => {
            mockedReactDOM.findDOMNode.mockReturnValue(null);

            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);
            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });

        it('should not re-add the tooltip element on unmount if the ref has no current view', () => {
            mockedReact.createRef.mockReturnValue({
                current: null,
            });

            tooltipWrapper = shallow(<Tooltip {...TOOLTIP_PROPS}>Hello</Tooltip>);
            tooltipWrapper.unmount();

            expect(appendChildSpy).not.toHaveBeenCalled();
        });
    });
});
