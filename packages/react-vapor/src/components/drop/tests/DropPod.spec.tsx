import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import React from 'react';
import * as _ from 'underscore';

import ReactDOM from 'react-dom';
import {Defaults} from '../../../Defaults';
import {DomPositionCalculator, DropPodPosition} from '../DomPositionCalculator';
import {defaultDropPodPosition, DropPod, IDropPodProps} from '../DropPod';

describe('DropPod', () => {
    const defaultDrop: any = null;

    describe('<DropPod />', () => {
        const defaultParentOffset = {
            bottom: 400,
            top: 50,
            right: 400,
            left: 50,
        };

        let bottomPositionCalculatedSpy: jasmine.Spy;
        let topPositionCalculatedSpy: jasmine.Spy;
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
            bottomPositionCalculatedSpy = spyOn(DomPositionCalculator, 'bottom').and.returnValue(bottomStyle);
            topPositionCalculatedSpy = spyOn(DomPositionCalculator, 'top').and.returnValue({});
            spyOn(React, 'createRef').and.returnValue({
                current: {
                    getBoundingClientRect: () => dropOffset,
                } as any,
            });
            spyOn(window, 'getComputedStyle').and.returnValue({paddingLeft: '10', paddingRight: '10'});

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

            spyOn(MutationObserver.prototype, 'observe');
            spyOn(MutationObserver.prototype, 'disconnect');
        };

        let buttonRef: React.RefObject<HTMLElement>;
        beforeEach(() => {
            buttonRef = React.createRef();
        });

        it('should mount and unmount without errors', () => {
            let wrapper: any;
            expect(() => {
                wrapper = shallow(<DropPod renderDrop={() => defaultDrop} ref={buttonRef} />, {}).dive();
            }).not.toThrow('mount');

            expect(() => {
                wrapper.unmount();
            }).not.toThrow('unmount');
        });

        describe('once mounted', () => {
            let wrapper: any;
            const shallowDropPod = (
                props: IDropPodProps = {renderDrop: () => defaultDrop}
            ): ShallowWrapper<IDropPodProps> =>
                (wrapper = shallowWithState(<DropPod ref={buttonRef} {...props} />, {}));

            afterEach(() => {
                if (wrapper) {
                    wrapper.unmount();
                }
            });

            it('should be close by default', () => {
                shallowDropPod();
                expect(wrapper.props().isOpen).toBe(false);
            });

            it('should have the default position by default', () => {
                shallowDropPod();
                expect(wrapper.props().positions).toEqual(defaultDropPodPosition);
            });

            it('should have minWidth set to 0 by default', () => {
                shallowDropPod();
                expect(wrapper.props().minWidth).toBe(0);
            });

            it('should have minHeight set to 0 by default', () => {
                shallowDropPod();
                expect(wrapper.props().minHeight).toBe(0);
            });

            describe('renderDrop', () => {
                let styleRendered: React.CSSProperties;

                it('should set the position absolute on style object', () => {
                    shallowDropPod({
                        renderDrop: (style, dropRef) => (styleRendered = style),
                    }).dive();

                    expect(styleRendered.position).toBe('absolute');
                });

                it('should set the display inline-block on style object', () => {
                    shallowDropPod({
                        renderDrop: (style, dropRef) => (styleRendered = style),
                    }).dive();

                    expect(styleRendered.display).toBe('inline-block');
                });

                it('should set the visibility hidden if the drop cant be show', () => {
                    shallowDropPod({
                        renderDrop: (style, dropRef) => (styleRendered = style),
                    }).dive();

                    expect(styleRendered.visibility).toBe('hidden');
                });

                describe('portal creation selector', () => {
                    afterEach(() => {
                        Defaults.DROP_ROOT = 'body';
                    });

                    it('should create a portal with the Defaults.DROP_ROOT if no selector is passed in props', () => {
                        const expectedElement = document.querySelector('head');
                        Defaults.DROP_ROOT = 'head';

                        spyOn(document, 'querySelector').and.callThrough();
                        const portalSpy: jasmine.Spy = spyOn(ReactDOM, 'createPortal');
                        shallow(<DropPod renderDrop={() => '🍟'} ref={buttonRef} />, {}).dive();

                        expect(portalSpy).toHaveBeenCalledWith('🍟', expectedElement);
                    });

                    it('should create a portal with the selector prop if passed to the dropPod', () => {
                        const expectedElement = document.querySelector('head');
                        Defaults.DROP_ROOT = '#🥔';

                        spyOn(document, 'querySelector').and.callThrough();
                        const portalSpy: jasmine.Spy = spyOn(ReactDOM, 'createPortal');
                        shallow(<DropPod renderDrop={() => '🍟'} selector="head" ref={buttonRef} />, {}).dive();

                        expect(portalSpy).toHaveBeenCalledWith('🍟', expectedElement);
                    });
                });

                describe('calculate style position for the dropPod', () => {
                    const shallowDropPodForStyle = (props: Partial<IDropPodProps> = {}) =>
                        (wrapper = shallow(
                            <DropPod
                                ref={buttonRef}
                                renderDrop={(style) => {
                                    styleRendered = style;
                                    return null;
                                }}
                                isOpen
                                {...props}
                            />,
                            {}
                        ).dive());

                    it('should set the visibility visible if the drop can be show', () => {
                        setupReference();
                        shallowDropPodForStyle();

                        expect(styleRendered.visibility).toBe('visible');
                    });

                    it('should set the visibility visible if the drop can be show', () => {
                        setupReference();
                        shallowDropPodForStyle();

                        expect(styleRendered.visibility).toBe('visible');
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: ['universe'],
                        });

                        expect(styleRendered.top).toBe(200);
                        expect(styleRendered.left).toBe(100);
                    });

                    it('should set style empty if no positions', () => {
                        setupReference();
                        shallowDropPodForStyle({
                            positions: [],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should call DomPositionCalculator for each position in the array and one more for the last position bottom', () => {
                        setupReference(
                            {
                                top: 100,
                                bottom: 500,
                                left: 0,
                                right: 500,
                            },
                            {
                                width: 50,
                                height: 50,
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom, DropPodPosition.top],
                        });

                        expect(bottomPositionCalculatedSpy).toHaveBeenCalledTimes(2);
                        expect(topPositionCalculatedSpy).toHaveBeenCalledTimes(1);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(100);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(100);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(450);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(450);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(50);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(50);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(450);
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
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(450);
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
                                toJSON: () => ({}),
                            },
                            {
                                top: 100,
                                left: 100,
                            },
                            {
                                width: 100,
                            }
                        );
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                            hasSameWidth: true,
                        });

                        expect(styleRendered.width).toBe(100);
                    });

                    it('should set the maxWidth to the inner width of the closest relatively positionned parent', () => {
                        setupReference({
                            width: 1000,
                        });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.maxWidth).toBe(980); // 1000px width - (10px padding left + 10px padding right)
                    });

                    describe('DomPositionCalculator', () => {
                        it('should be call with the buttonOffset, dropOffsetPrime, boundingLimit and the last position calculated', () => {
                            const parentOffset = {
                                top: 10,
                                bottom: 20,
                                left: 10,
                                right: 20,
                            };
                            const buttonOffset = {width: 50, height: 50};
                            const dropOffset = {
                                top: 10,
                                bottom: 12,
                                width: 2,
                                height: 2,
                            };

                            setupReference(
                                parentOffset,
                                dropOffset,
                                {
                                    top: 100,
                                    bottom: 100,
                                },
                                buttonOffset
                            );
                            shallowDropPodForStyle({
                                positions: [DropPodPosition.bottom],
                            });

                            expect(bottomPositionCalculatedSpy).toHaveBeenCalledWith(
                                buttonOffset,
                                dropOffset,
                                {
                                    maxY: 20,
                                    minY: 10,
                                    maxX: 20,
                                    minX: 10,
                                },
                                {}
                            );
                        });
                    });
                });

                describe('events', () => {
                    let RWrapper: ShallowWrapper;

                    it('should add events if the dropPod is open', () => {
                        const spy = spyOn(window, 'addEventListener');

                        shallowWithState(<DropPod renderDrop={() => defaultDrop} isOpen={true} />, {}).dive();

                        expect(spy).toHaveBeenCalledTimes(2);
                    });

                    it('should not add events if the dropPod is close', () => {
                        const spy = spyOn(window, 'addEventListener');

                        shallowWithState(<DropPod renderDrop={() => defaultDrop} isOpen={false} />, {}).dive();

                        expect(spy).toHaveBeenCalledTimes(0);
                    });

                    it('should remove events on unmount', () => {
                        const spy = spyOn(window, 'removeEventListener');

                        RWrapper = shallowWithState(
                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,
                            {}
                        ).dive();

                        RWrapper.unmount();

                        expect(spy).toHaveBeenCalledTimes(2);
                    });

                    it('should add events if the prop isOpen change to true on update', () => {
                        const spy = spyOn(window, 'addEventListener');

                        RWrapper = shallowWithState(
                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,
                            {}
                        ).dive();

                        RWrapper.setProps({isOpen: true});
                        RWrapper.update();

                        expect(spy).toHaveBeenCalledTimes(2);
                    });

                    it('should not add events if the prop isOpen do not change on update', () => {
                        const spy = spyOn(window, 'addEventListener');

                        RWrapper = shallowWithState(
                            <DropPod renderDrop={() => defaultDrop} isOpen={false} />,
                            {}
                        ).dive();

                        RWrapper.setProps({isOpen: false});
                        RWrapper.update();

                        expect(spy).toHaveBeenCalledTimes(0);
                    });

                    it('should remove events if the prop isOpen change to false on update', () => {
                        const spy = spyOn(window, 'removeEventListener');

                        RWrapper = shallowWithState(
                            <DropPod renderDrop={() => defaultDrop} isOpen={true} />,
                            {}
                        ).dive();

                        RWrapper.setProps({isOpen: false});
                        RWrapper.update();

                        expect(spy).toHaveBeenCalledTimes(2);
                    });
                });
            });
        });
    });
});
