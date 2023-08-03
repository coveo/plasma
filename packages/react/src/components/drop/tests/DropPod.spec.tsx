import {render, screen, within} from '@test-utils';
import {RefObject, createRef} from 'react';
import _ from 'underscore';

import {Defaults} from '../../../Defaults';
import {DomPositionCalculator, DropPodPosition} from '../DomPositionCalculator';
import {DropPod} from '../DropPod';

describe('DropPod', () => {
    const defaultDrop = <div>Hello world!</div>;

    afterEach(() => {
        jest.clearAllMocks();
    });

    describe('<DropPod />', () => {
        let buttonRef: RefObject<HTMLDivElement>;
        const defaultParentOffset = {
            bottom: 400,
            top: 50,
            right: 400,
            left: 50,
        };

        const setupReference = (parentOffset = {}, dropOffset = {}, styleCalculated = {}, buttonOffset = {}) => {
            parentOffset = {...defaultParentOffset, ...parentOffset};
            const bottomStyle = _.isEmpty(styleCalculated)
                ? {}
                : {
                      style: styleCalculated,
                      lastPosition: {
                          position: DropPodPosition.bottom,
                          orientation: DropPodPosition.left,
                      },
                  };
            jest.spyOn(DomPositionCalculator, 'bottom').mockReturnValue(bottomStyle);
            jest.spyOn(DomPositionCalculator, 'top').mockReturnValue({});
            jest.spyOn(DomPositionCalculator, 'left').mockReturnValue({});
            jest.spyOn(DomPositionCalculator, 'right').mockReturnValue({});
            jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
                x: 0,
                y: 0,
                bottom: 0,
                height: 0,
                left: 0,
                right: 0,
                top: 0,
                width: 0,
                toJSON: () => ({}),
                ...dropOffset,
            });
            global.window.getComputedStyle = jest.fn(
                () =>
                    ({
                        paddingLeft: '10',
                        paddingRight: '10',
                    }) as CSSStyleDeclaration,
            );

            buttonRef = {
                current: {
                    closest: () => ({
                        getBoundingClientRect: () => parentOffset,
                    }),
                    getBoundingClientRect: () => buttonOffset,
                    offsetParent: {
                        getBoundingClientRect: () => parentOffset,
                    },
                },
            } as any;

            jest.spyOn(MutationObserver.prototype, 'observe').mockImplementation(() => null);
            jest.spyOn(MutationObserver.prototype, 'disconnect').mockImplementation(() => null);
        };

        beforeEach(() => {
            buttonRef = createRef<HTMLDivElement>();
        });

        it('should mount and unmount without errors', () => {
            expect(() => {
                const {unmount} = render(<DropPod renderDrop={() => defaultDrop} />);
                unmount();
            }).not.toThrow();
        });

        describe('once mounted', () => {
            it('should set the position properties in the style attribute', () => {
                render(<DropPod renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>} />);

                const style = screen.getByText('🚀').style;
                expect(style.position).toBe('absolute');
                expect(style.display).toBe('inline-block');
                expect(style.visibility).toBe('hidden');
            });

            describe('portal creation selector', () => {
                afterEach(() => {
                    Defaults.DROP_ROOT = '#plasma-dropdowns';
                });

                it('should render the content inside of the selector', () => {
                    Defaults.DROP_ROOT = '.do-not-render-in-this';
                    render(
                        <>
                            <div data-testid="custom" className="custom-selector" />
                            <div className="do-not-render-in-this" />
                            <DropPod renderDrop={() => '🍟'} selector=".custom-selector" />
                        </>,
                    );

                    const container = screen.getByTestId('custom');

                    expect(within(container).getByText('🍟')).toBeVisible();
                });

                it('should append the Drop to the DROP_ROOT if no selector is passed in props', () => {
                    Defaults.DROP_ROOT = '.custom-container';

                    render(
                        <>
                            <div data-testid="custom" className="custom-container" />
                            <DropPod renderDrop={() => '🍔'} />
                        </>,
                    );

                    expect(screen.getByText(/🍔/i)).toBeVisible();
                });

                it('should remove the div element with the portal root', () => {
                    const {unmount} = render(<DropPod renderDrop={() => '🥗'} />);

                    expect(screen.getByText('🥗')).toBeVisible();

                    unmount();

                    expect(screen.queryByText('🥗')).not.toBeInTheDocument();
                });
            });

            describe('calculate style position for the dropPod', () => {
                it('should set the visibility to visible if the drop can be shown', () => {
                    setupReference();

                    render(<DropPod isOpen renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>} />);

                    const {visibility} = screen.getByText('🚀').style;
                    expect(visibility).toBe('visible');
                });

                it('should set position with bottom and orientation with left if the position sent is not available', () => {
                    setupReference(
                        {
                            top: 100,
                            bottom: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            left: 100,
                            top: 200,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[]}
                            ref={buttonRef}
                        />,
                    );

                    const {top, left} = screen.getByText('🚀').style;
                    expect(top).toBe('200px');
                    expect(left).toBe('100px');
                });

                it('should set top with the minY from the bounding limit if the dropOffset top is smaller than minY', () => {
                    setupReference(
                        {
                            top: 100,
                            bottom: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 20,
                            left: 100,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {top} = screen.getByText('🚀').style;
                    expect(top).toBe('100px');
                });

                it('should set top with the minY from the bounding limit if the dropOffset top calculated is equal than minY', () => {
                    setupReference(
                        {
                            top: 100,
                            bottom: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 100,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {top} = screen.getByText('🚀').style;
                    expect(top).toBe('100px');
                });

                it('should set top with max without drop height from the calculated bounding limit if the dropOffset is bigger than maxY', () => {
                    setupReference(
                        {
                            top: 100,
                            bottom: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 600,
                            left: 100,
                        },
                    );

                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {top} = screen.getByText('🚀').style;
                    expect(top).toBe('450px');
                });

                it('should set top with max without drop height from the calculated bounding limit if the dropOffset is equal than maxY', () => {
                    setupReference(
                        {
                            top: 100,
                            bottom: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 450,
                            left: 100,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {top} = screen.getByText('🚀').style;
                    expect(top).toBe('450px');
                });

                it('should set left with the minX from the bounding limit if the dropOffset is smaller than minX', () => {
                    setupReference(
                        {
                            left: 50,
                            right: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 20,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {left} = screen.getByText('🚀').style;
                    expect(left).toBe('50px');
                });

                it('should set left with the minX from the bounding limit if the dropOffset is equal than minX', () => {
                    setupReference(
                        {
                            left: 50,
                            right: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 50,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {left} = screen.getByText('🚀').style;
                    expect(left).toBe('50px');
                });

                it('should set right with the maxX without drop width from the bounding limit if the dropOffset is bigger than maxX', () => {
                    setupReference(
                        {
                            left: 50,
                            right: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 550,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {left} = screen.getByText('🚀').style;
                    expect(left).toBe('450px');
                });

                it('should set right with the maxX without drop width from the bounding limit if the dropOffset is equal than maxX', () => {
                    setupReference(
                        {
                            left: 50,
                            right: 500,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 450,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {left} = screen.getByText('🚀').style;
                    expect(left).toBe('450px');
                });

                it('should return style with the width equal than the button width if the prop hasSameWidth is set to true', () => {
                    setupReference(
                        {
                            left: 0,
                            right: 1024,
                            top: 0,
                            bottom: 1024,
                        },
                        {
                            width: 50,
                            height: 50,
                        },
                        {
                            top: 100,
                            left: 100,
                        },
                        {
                            width: 100,
                        },
                    );
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                            hasSameWidth
                        />,
                    );

                    const {width} = screen.getByText('🚀').style;
                    expect(width).toBe('100px');
                });

                it('should set the maxWidth to the inner width of the closest relatively positionned parent', () => {
                    setupReference({
                        width: 1000,
                    });
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {maxWidth} = screen.getByText('🚀').style;
                    expect(maxWidth).toBe('980px'); // 1000px width - (10px padding left + 10px padding right)
                });

                it('should set the fallback maxWidth to the inner width if the calculated one is a NaN', () => {
                    setupReference({
                        width: 0 / 0, // not a number
                    });
                    render(
                        <DropPod
                            isOpen
                            renderDrop={(styleCalculated) => <div style={styleCalculated}>🚀</div>}
                            positions={[DropPodPosition.bottom]}
                            ref={buttonRef}
                        />,
                    );

                    const {maxWidth} = screen.getByText('🚀').style;
                    expect(maxWidth).toBe('850px');
                });
            });

            describe('events', () => {
                beforeEach(() => {
                    setupReference();
                });

                it('should remove events on unmount', () => {
                    const spy = jest.spyOn(window, 'removeEventListener');

                    const {unmount} = render(
                        <DropPod isOpen renderDrop={() => '🚀'} positions={[DropPodPosition.bottom]} />,
                    );

                    spy.mockClear();

                    unmount();

                    expect(spy).toHaveBeenCalled();
                });

                it('should add events if the prop isOpen change to true on update', () => {
                    const spy = jest.spyOn(window, 'addEventListener');

                    const {rerender} = render(
                        <DropPod isOpen={false} renderDrop={() => '🚀'} positions={[DropPodPosition.bottom]} />,
                    );

                    spy.mockClear();

                    rerender(<DropPod isOpen={true} renderDrop={() => '🚀'} positions={[DropPodPosition.bottom]} />);

                    expect(spy).toHaveBeenCalled();
                });

                it('should remove events if the prop isOpen change to false on update', () => {
                    const spy = jest.spyOn(window, 'removeEventListener');

                    const {rerender} = render(
                        <DropPod isOpen={true} renderDrop={() => '🚀'} positions={[DropPodPosition.bottom]} />,
                    );

                    spy.mockClear();

                    rerender(<DropPod isOpen={false} renderDrop={() => '🚀'} positions={[DropPodPosition.bottom]} />);

                    expect(spy).toHaveBeenCalled();
                });
            });
        });
    });
});
