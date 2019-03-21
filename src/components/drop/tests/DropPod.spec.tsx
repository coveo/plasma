import {shallow, ShallowWrapper} from 'enzyme';
import {shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {DomPositionVisibilityValidator} from '../DomPositionVisibilityValidator';
import {defaultDropPodPosition, DropPod, DropPodPosition, IDropPodProps} from '../DropPod';

describe('DropPod', () => {

    const defaultDrop = null;

    describe('<DropPod />', () => {

        let bottomSpy: jasmine.Spy;
        let topSpy: jasmine.Spy;
        const setupReference = (parentOffset = {}, buttonOffset = {}, dropOffset = {}) => {
            bottomSpy = spyOn(DomPositionVisibilityValidator, 'bottom').and.returnValue({});
            topSpy = spyOn(DomPositionVisibilityValidator, 'top').and.returnValue({});
            spyOn(React, 'createRef').and.returnValue({
                current: {
                    getBoundingClientRect: () => (dropOffset),
                } as any,
            });

            buttonRef = {
                current: {
                    offsetParent: {
                        getBoundingClientRect: () => (parentOffset),
                    },
                    getBoundingClientRect: () => (buttonOffset),
                },
            } as any;
        };

        let buttonRef: React.RefObject<HTMLElement>;
        beforeEach(() => {
            buttonRef = React.createRef();
        });

        it('should mount and unmount without errors', () => {
            let wrapper: any;
            expect(() => {
                wrapper = shallow(
                    <DropPod
                        renderDrop={() => defaultDrop}
                        ref={buttonRef}
                    />, {}).dive();
            }).not.toThrow('mount');

            expect(() => {
                wrapper.unmount();
            }).not.toThrow('umount');
        });

        describe('once mounted', () => {

            let wrapper: any;
            const shallowDropPod = (props: IDropPodProps = {renderDrop: () => defaultDrop}): ShallowWrapper<IDropPodProps> =>
                wrapper = shallowWithState(
                    <DropPod
                        ref={buttonRef}
                        {...props}
                    />, {});

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
                        renderDrop: (style, dropRef) => styleRendered = style,
                    }).dive();

                    expect(styleRendered.position).toBe('absolute');
                });

                it('should set the display inline-block on style object', () => {
                    shallowDropPod({
                        renderDrop: (style, dropRef) => styleRendered = style,
                    }).dive();

                    expect(styleRendered.display).toBe('inline-block');
                });

                it('should set the visibility hidden if the drop cant be show', () => {
                    shallowDropPod({
                        renderDrop: (style, dropRef) => styleRendered = style,
                    }).dive();

                    expect(styleRendered.visibility).toBe('hidden');
                });

                describe('calculate style position for the dropPod', () => {

                    const shallowDropPodForStyle = (props: Partial<IDropPodProps> = {}) => wrapper = shallow(
                        <DropPod
                            ref={buttonRef}
                            renderDrop={(style) => {
                                styleRendered = style;
                                return null;
                            }}
                            isOpen
                            {...props}
                        />, {}).dive();

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

                    it('should set style empty if the position do not exist', () => {
                        setupReference();
                        shallowDropPodForStyle({
                            positions: ['universe'],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should set style empty if no position', () => {
                        setupReference();
                        shallowDropPodForStyle({
                            positions: [],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should call domPositionVisibilityValidator for each position in the array', () => {
                        setupReference();
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom, DropPodPosition.top],
                        });

                        expect(bottomSpy).toHaveBeenCalledTimes(1);
                        expect(topSpy).toHaveBeenCalledTimes(1);
                    });

                    it('should set top with the minY from the bounding box if the buttonOffset top is smaller than minY', () => {
                        setupReference({
                            top: 100,
                        }, {
                                top: 80,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(100);
                    });

                    it('should set top with the minY from the bounding box if the buttonOffset top is equal than minY', () => {
                        setupReference({
                            top: 100,
                        }, {
                                top: 100,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(100);
                    });

                    it('should set top with the maxY from the bounding box if the buttonOffset bottom is bigger than minY', () => {
                        setupReference({
                            bottom: 100,
                        }, {
                                bottom: 120,
                            }, {
                                height: 10,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(90);
                    });

                    it('should set top with the maxY from the bounding box if the buttonOffset bottom is equal than minY', () => {
                        setupReference({
                            bottom: 100,
                        }, {
                                bottom: 100,
                            }, {
                                height: 10,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBe(90);
                    });

                    it('should set left with the minX from the bounding box if the buttonOffset left is smaller than minX', () => {
                        setupReference({
                            left: 50,
                        }, {
                                left: 30,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(50);
                    });

                    it('should set left with the minX from the bounding box if the buttonOffset left is equal than minX', () => {
                        setupReference({
                            left: 50,
                        }, {
                                left: 50,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(50);
                    });

                    it('should set left with the maxX from the bounding box if the buttonOffset right is bigger than maxX', () => {
                        setupReference({
                            right: 60,
                        }, {
                                right: 80,
                            }, {
                                width: 10,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(50);
                    });

                    it('should set left with the maxX from the bounding box if the buttonOffset right is equal than maxX', () => {
                        setupReference({
                            right: 80,
                        }, {
                                right: 80,
                            }, {
                                width: 10,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.left).toBe(70);
                    });

                    it('should return an empty style if the drop height is bigger than bounding height available to render', () => {
                        setupReference({
                            bottom: 80,
                            top: 120,
                        },
                            {},
                            {
                                height: 1000,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should return an empty style if the drop height is equal than bounding height available to render', () => {
                        setupReference({
                            bottom: 80,
                            top: 120,
                        },
                            {},
                            {
                                height: 40,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should return an empty style if the drop with is smaller than bounding width available to render', () => {
                        setupReference({
                            left: 80,
                            right: 120,
                        },
                            {},
                            {
                                width: 5000,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    it('should return an empty style if the drop with is equal than bounding width available to render', () => {
                        setupReference({
                            left: 80,
                            right: 120,
                        },
                            {},
                            {
                                width: 40,
                            });
                        shallowDropPodForStyle({
                            positions: [DropPodPosition.bottom],
                        });

                        expect(styleRendered.top).toBeUndefined();
                        expect(styleRendered.left).toBeUndefined();
                    });

                    describe('DomPositionVisibilityValidator', () => {

                        it('should be call with the buttonOffset, dropOffsetPrime and boundingLimit', () => {
                            const buttonOffset = {};
                            const dropOffset = {
                                bottom: 12,
                                width: 100,
                                height: 100,
                            };
                            const parentOffset = {
                                top: 10,
                                bottom: 20,
                                left: 10,
                                right: 20,
                            };
                            setupReference(
                                parentOffset,
                                buttonOffset,
                                dropOffset,
                            );
                            shallowDropPodForStyle({
                                positions: [DropPodPosition.bottom],
                            });

                            expect(bottomSpy).toHaveBeenCalledWith({}, dropOffset, {
                                maxY: 20,
                                minY: 10,
                                maxX: 20,
                                minX: 10,
                            });
                        });
                    });
                });
            });
        });
    });
});
