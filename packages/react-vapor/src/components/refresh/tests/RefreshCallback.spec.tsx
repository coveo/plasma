import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {RefreshCallBackActions} from '../RefeshCallbackActions';
import {IRefreshCallbackProps, IRefreshCallbackState, RefreshCallback} from '../RefreshCallback';
import {RefreshStatus} from '../RefreshCallbackReducer';

describe('RefreshCallback tests', () => {
    describe('<RefreshCallback />', () => {
        it('should mount and unmount without error', () => {
            expect(() => {
                const component = shallowWithState(<RefreshCallback callback={() => ''} />, {});
                component.unmount();
            });
        });

        describe('once mounted', () => {
            let component: ShallowWrapper<IRefreshCallbackProps, IRefreshCallbackState>;

            beforeEach(() => {
                jasmine.clock().install();
            });

            afterEach(() => {
                jasmine.clock().uninstall();
            });

            it('should call renderCount on render', () => {
                const spy = jasmine.createSpy('renderCount');
                shallowWithState(<RefreshCallback callback={() => ''} renderCount={spy} />, {}).dive();

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should call the callback when the timer is 0 and status inProgress', () => {
                const spy = jasmine.createSpy('callback');
                shallowWithState(<RefreshCallback id={'id'} callback={spy} delay={1} />, {
                    refreshCallback: {id: RefreshStatus.inProgress},
                }).dive();
                jasmine.clock().tick(1001);

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should reset the count in the state and the timer if the status change to "start"', () => {
                component = shallowWithState(<RefreshCallback id={'id'} callback={() => ''} />, {
                    refreshCallback: {id: RefreshStatus.stopped},
                }).dive();
                jasmine.clock().tick(1001);
                expect(component.state().count).toBe(9);

                component.setProps({
                    ...component.props(),
                    status: RefreshStatus.started,
                });

                expect(component.state().count).toBe(10);
            });

            it('should stop the time if the state status change for "stop"', () => {
                component = shallowWithState(<RefreshCallback id={'id'} callback={() => ''} />, {
                    refreshCallback: {id: RefreshStatus.inProgress},
                }).dive();
                jasmine.clock().tick(1001);
                expect(component.state().count).toBe(9);

                component.setProps({
                    ...component.props(),
                    status: RefreshStatus.stopped,
                });
                expect(component.state().count).toBe(9);
                jasmine.clock().tick(1001);
                expect(component.state().count).toBe(9);
            });

            describe('dispatch', () => {
                let store: ReactVaporMockStore;

                it('should dispatch a inProgress on mount', () => {
                    store = getStoreMock({});
                    component = shallowWithStore(<RefreshCallback id={'id'} callback={() => ''} />, store).dive();

                    expect(store.getActions()).toContain(RefreshCallBackActions.inProgress('id'));
                });

                it('should dispatch a stop when the callback is trigger', () => {
                    store = getStoreMock({
                        refreshCallback: {id: RefreshStatus.inProgress},
                    });
                    const spy = jasmine.createSpy('callback');
                    shallowWithStore(<RefreshCallback id={'id'} callback={spy} delay={1} />, store).dive();
                    jasmine.clock().tick(1001);

                    expect(spy).toHaveBeenCalledTimes(1);
                    expect(store.getActions()).toContain(RefreshCallBackActions.stop('id'));
                });
            });
        });
    });
});
