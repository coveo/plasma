import {mount, ReactWrapper, shallow} from 'enzyme';
import * as React from 'react';
import * as _ from 'underscore';

import {IPopoverProps, Popover} from '../Popover';

describe('<Popover>', () => {
    let popoverProps: IPopoverProps;
    let popoverWrapper: ReactWrapper<IPopoverProps, any>;

    const popoverToggleId = 'PopoverToggle';
    const popoverElementId = 'PopoverElement';
    const popoverToggleSelector = `#${popoverToggleId}`;

    let toggleOpenedSpy: jasmine.Spy;

    const mountPopover = (props: IPopoverProps) => popoverWrapper = mount(
        <Popover {...props} >
            <span id={popoverToggleId}>Toggle</span>
            <span id={popoverElementId}>Tether element</span>
        </Popover>,
        {attachTo: document.getElementById('App')},
    );

    beforeEach(() => {
        popoverProps = {
            attachment: 'top left',
        };

        toggleOpenedSpy = spyOn<any>(Popover.prototype, 'toggleOpened').and.callThrough();
    });

    it('should render without error', () => {
        expect(() => shallow(
            <Popover {...popoverProps}>
                <span>Toggle</span>
                <span>Tether element</span>
            </Popover>,
        )).not.toThrow();
    });

    it('should render without error with style prop', () => {
        expect(() => shallow(
            <Popover {...popoverProps} style={{'margin-left': '10px'}}>
                <span>Toggle</span>
                <span>Tether element</span>
            </Popover>,
        )).not.toThrow();
    });

    it('should mount and unmount/detach without error', () => {
        expect(() => {
            mountPopover(popoverProps);
        }).not.toThrow();

        expect(() => {
            popoverWrapper.unmount();
            popoverWrapper.detach();
        }).not.toThrow();
    });

    describe('Children propTypes', () => {
        it('should not throw when redering a Popover with only one children', () => {
            expect(() => {
                shallow(
                    <Popover {...popoverProps}>
                        <span>Toggle</span>
                    </Popover>,
                );
            }).not.toThrow();
        });

        it('should not throw when redering a Popover without children', () => {
            expect(() => {
                shallow(
                    <Popover {...popoverProps} />,
                );
            }).not.toThrow();
        });
    });

    describe('Mounted Popover', () => {
        afterEach(() => {
            popoverWrapper.detach();
        });

        describe('Toggle opened behavior', () => {
            describe('With an uncontrolled Popover', () => {
                beforeEach(() => {
                    mountPopover(popoverProps);
                });

                it('should set isOpen to true in the state when calling toggleOpened with isOpen: true', () => {
                    expect(popoverWrapper.state('isOpen')).toBe(false);

                    (popoverWrapper.instance() as Popover).toggleOpened(true);

                    expect(popoverWrapper.state('isOpen')).toBe(true);
                });

                it('should set isOpen to false in the state when calling toggleOpened with isOpen: false', () => {
                    (popoverWrapper.instance() as Popover).toggleOpened(true);

                    (popoverWrapper.instance() as Popover).toggleOpened(false);

                    expect(popoverWrapper.state('isOpen')).toBe(false);
                });
            });

            describe('With a controlled Popover', () => {
                let onToggleSpy: jasmine.Spy;

                beforeEach(() => {
                    onToggleSpy = jasmine.createSpy('onToggleSpy');

                    popoverProps.onToggle = onToggleSpy;

                    mountPopover(popoverProps);
                });

                it('should call the onToggle prop with true when calling toggleOpened with isOpen: true', () => {
                    (popoverWrapper.instance() as Popover).toggleOpened(true);

                    expect(onToggleSpy.calls.count()).toBe(1);

                    expect(onToggleSpy).toHaveBeenCalledWith(true);
                });

                it('should call the onToggle prop with false when calling toggleOpened with isOpen: false', () => {
                    (popoverWrapper.instance() as Popover).toggleOpened(false);

                    expect(onToggleSpy.calls.count()).toBe(1);

                    expect(onToggleSpy).toHaveBeenCalledWith(false);
                });
            });
        });

        describe('Tether toggle click handler', () => {
            beforeEach(() => {
                mountPopover(popoverProps);
            });

            it('should open the popover on click toggle if popover was closed', () => {
                popoverWrapper.find(popoverToggleSelector).simulate('click');

                expect(toggleOpenedSpy.calls.count()).toBe(1);

                expect(toggleOpenedSpy).toHaveBeenCalledWith(true);
            });

            it('should close the popover on click toggle if popover was opened', () => {
                // First, open the Popover
                popoverWrapper.find(popoverToggleSelector).simulate('click');

                popoverWrapper.find(popoverToggleSelector).simulate('click');

                expect(toggleOpenedSpy.calls.count()).toBe(2);

                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
            });
        });

        describe('Document click handler for an opened popover', () => {
            beforeEach(() => {
                popoverProps = _.extend(popoverProps, {
                    isOpen: true,
                });

                mountPopover(popoverProps);
            });

            it('should not close the popover on click tether element', () => {
                // Using getElementById here since the Tether element is being rendered outside the popoverWrapper.
                document.getElementById(popoverElementId).click();

                expect(toggleOpenedSpy.calls.count()).toBe(0);
            });

            it('should close the popover when clicking outside Popover', () => {
                document.getElementById('App').click();

                expect(toggleOpenedSpy.calls.count()).toBe(1);

                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
            });
        });

        describe('Document click handler for an opened popover behaving as a modal', () => {
            beforeEach(() => {
                popoverProps = _.extend(popoverProps, {
                    isOpen: true,
                    isModal: true,
                });

                mountPopover(popoverProps);
            });

            it('should not close the popover on click tether element', () => {
                // Using getElementById here since the Tether element is being rendered outside the popoverWrapper.
                document.getElementById(popoverElementId).click();

                expect(toggleOpenedSpy).not.toHaveBeenCalled();
            });

            it('should close the popover when clicking outside Popover', () => {
                document.getElementById('App').click();

                expect(toggleOpenedSpy).toHaveBeenCalledTimes(1);

                expect(toggleOpenedSpy).toHaveBeenCalledWith(false);
            });
        });

        describe('Document click handler for a closed popover', () => {
            beforeEach(() => {
                popoverProps = _.extend(popoverProps, {
                    isOpen: false,
                });

                mountPopover(popoverProps);
            });

            it('should not update if already closed', () => {
                document.getElementById('App').click();

                expect(toggleOpenedSpy).not.toHaveBeenCalled();
            });
        });

        describe('Document click handler for a closed popover behaving as a modal', () => {
            beforeEach(() => {
                popoverProps = _.extend(popoverProps, {
                    isOpen: false,
                    isModal: true,
                });

                mountPopover(popoverProps);
            });

            it('should not update if already closed', () => {
                document.getElementById('App').click();

                expect(toggleOpenedSpy).not.toHaveBeenCalled();
            });
        });
    });
});
