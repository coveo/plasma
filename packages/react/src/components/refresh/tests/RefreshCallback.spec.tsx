import {ShallowWrapper} from 'enzyme';
import {shallowWithState, shallowWithStore} from '@test-utils';

import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils.js';
import {RefreshCallBackActions} from '../RefeshCallbackActions.js';
import {IRefreshCallbackProps, IRefreshCallbackState, RefreshCallback} from '../RefreshCallback.js';
import {RefreshStatus} from '../RefreshCallbackReducer.js';

describe('RefreshCallback tests', () => {
    describe('<RefreshCallback />', () => {
        beforeEach(() => {
            jest.useFakeTimers();
        });

        afterEach(() => {
            jest.clearAllTimers();
        });

        it('should mount and unmount without error', () => {
            expect(() => {
                const component = shallowWithState(<RefreshCallback id="🆔" callback={() => ''} />, {})
                    .dive()
                    .dive();
                component.unmount();
            }).not.toThrow();
        });

        describe('once mounted', () => {
            let component: ShallowWrapper<IRefreshCallbackProps, IRefreshCallbackState>;

            it('should call renderCount on render', () => {
                const spy = jest.fn();
                shallowWithState(<RefreshCallback id="🆔" callback={() => ''} renderCount={spy} />, {})
                    .dive()
                    .dive();

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should call the callback when the timer is 0 and status inProgress', () => {
                const spy = jest.fn();
                shallowWithState(<RefreshCallback id={'id'} callback={spy} delay={1} />, {
                    refreshCallback: {id: RefreshStatus.inProgress},
                })
                    .dive()
                    .dive();
                jest.advanceTimersByTime(1001);

                expect(spy).toHaveBeenCalledTimes(1);
            });

            it('should reset the count in the state and the timer if the status change to "start"', () => {
                component = shallowWithState(<RefreshCallback id={'id'} callback={() => ''} />, {
                    refreshCallback: {id: RefreshStatus.stopped},
                })
                    .dive()
                    .dive();
                jest.advanceTimersByTime(1001);

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
                })
                    .dive()
                    .dive();
                jest.advanceTimersByTime(1001);

                expect(component.state().count).toBe(9);

                component.setProps({
                    ...component.props(),
                    status: RefreshStatus.stopped,
                });

                expect(component.state().count).toBe(9);
                jest.advanceTimersByTime(1001);

                expect(component.state().count).toBe(9);
            });

            describe('dispatch', () => {
                let store: PlasmaMockStore;

                it('should dispatch a inProgress on mount', () => {
                    store = getStoreMock({});
                    component = shallowWithStore(<RefreshCallback id={'id'} callback={() => ''} />, store)
                        .dive()
                        .dive();

                    expect(store.getActions()).toContainEqual(RefreshCallBackActions.inProgress('id'));
                });

                it('should dispatch a stop when the callback is trigger', () => {
                    store = getStoreMock({
                        refreshCallback: {id: RefreshStatus.inProgress},
                    });
                    const spy = jest.fn();
                    shallowWithStore(<RefreshCallback id={'id'} callback={spy} delay={1} />, store)
                        .dive()
                        .dive();
                    jest.advanceTimersByTime(1001);

                    expect(spy).toHaveBeenCalledTimes(1);
                    expect(store.getActions()).toContainEqual(RefreshCallBackActions.stop('id'));
                });
            });
        });
    });
});
