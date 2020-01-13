import {ReactWrapper, ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithState} from 'enzyme-redux';
import * as React from 'react';

import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {Drop, IDropProps} from '../Drop';
import {DropPod} from '../DropPod';
import {DefaultGroupIds, DropActions} from '../redux/DropActions';

describe('Drop', () => {
    describe('<Drop />', () => {
        const defaultButton: React.ReactNode = <div className={'onclick'}></div>;

        it('should mount without errors', () => {
            expect(() => {
                shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {}).dive();
            expect(() => {
                wrapper.unmount();
            }).not.toThrow();
        });

        it('should call renderOpenButton on mount', () => {
            const renderOpenButtonSpy = jasmine.createSpy('renderOpenButton').and.returnValue(<div>DIV</div>);
            shallowWithState(<Drop id={'test'} renderOpenButton={renderOpenButtonSpy} />, {}).dive();

            expect(renderOpenButtonSpy).toHaveBeenCalledTimes(1);
        });

        describe('once mounted', () => {
            const id = 'DropId';

            let wrapper: ReactWrapper<IDropProps>;
            const defaultStore = (isOpen: boolean) => ({
                drop: {
                    [DefaultGroupIds.default]: {
                        id,
                        isOpen,
                    },
                },
            });

            beforeEach(() => RTestUtils.addHTMLElementWithId());

            afterEach(() => {
                if (wrapper.length) {
                    wrapper.unmount();
                }
                RTestUtils.removeHTMLElementWithId();
            });

            const mountDropWithStore = (
                props?: Partial<IDropProps>,
                store?: ReactVaporMockStore,
                child: React.ReactNode = null
            ) => {
                wrapper = mountWithStore(
                    <Drop
                        id={id}
                        renderOpenButton={(onClick: () => void) => (
                            <div id={'Button'} className={'button'} onClick={onClick}></div>
                        )}
                        {...props}
                    >
                        {child}
                    </Drop>,
                    store || getStoreMock()
                );
                return wrapper;
            };

            it('should toggle false on unmount', () => {
                const store = getStoreMock(defaultStore(true));
                wrapper = mountDropWithStore({}, store);

                wrapper.unmount();

                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should render a <DropPod>', () => {
                wrapper = mountDropWithStore();

                expect(wrapper.find(DropPod).length).toBe(1);
            });

            it('should not dispatch an action to toggle the drop if the element is not in the document.body', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore({}, store);

                RTestUtils.clickOnElement(document.head);

                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button', () => {
                const store = getStoreMock(defaultStore(true));
                mountDropWithStore({}, store);

                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));

                RTestUtils.clickOnElement();

                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should not dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button if closeOnClickOutside is false', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore(
                    {
                        closeOnClickOutside: false,
                    },
                    store
                );

                RTestUtils.clickOnElement();

                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element', () => {
                const store = getStoreMock(defaultStore(true));
                mountDropWithStore({}, store, <div id={'Drop'} className={'drop'}></div>);

                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));

                RTestUtils.clickOnElement(document.getElementById('Drop'));

                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should not dispatch an action to toggle drop isOpen if drop is close', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore({}, store, <div id={'Drop'} className={'drop'}></div>);

                store.dispatch(DropActions.toggle(id, DefaultGroupIds.default));

                RTestUtils.clickOnElement(document.getElementById('Drop'));

                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should not dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element if closeOnClickDrop is false', () => {
                const store = getStoreMock(defaultStore(true));
                mountDropWithStore(
                    {
                        closeOnClickDrop: false,
                    },
                    store,
                    <div id={'Drop'} className={'drop'}></div>
                );

                RTestUtils.clickOnElement(document.getElementById('Drop'));

                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should dispatch a toggle event when we call onClick sent with renderOpenButton', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore(
                    {
                        renderOpenButton: (onClick: () => void) => {
                            onClick();
                            return <div></div>;
                        },
                    },
                    store,
                    <div id={'Drop'} className={'drop'}></div>
                );

                expect(store.getActions()).toContain(DropActions.toggle(id, DefaultGroupIds.default, true));
            });

            it('should not add data-open attribute to open if the drop is closed', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore({}, store);
                const shallowWrapperDropPod: ShallowWrapper = shallowWithState(
                    wrapper
                        .find(DropPod)
                        .props()
                        .renderDrop({} as any, {} as any, {} as any) as any,
                    {}
                );
                expect(shallowWrapperDropPod.prop('data-open')).toBe(false);
            });

            it('should add data-open attribute to open if the drop is open', () => {
                const store = getStoreMock(defaultStore(true));
                mountDropWithStore({}, store);
                const shallowWrapperDropPod: ShallowWrapper = shallowWithState(
                    wrapper
                        .find(DropPod)
                        .props()
                        .renderDrop({} as any, {} as any, {} as any) as any,
                    {}
                );
                expect(shallowWrapperDropPod.prop('data-open')).toBe(true);
            });

            describe('events', () => {
                it('should add the event on click if the drop is opening', () => {
                    const spy = spyOn(document, 'addEventListener');
                    let shallowWrapper: ShallowWrapper;

                    shallowWrapper = shallowWithState(
                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,
                        {}
                    ).dive();

                    expect(spy).toHaveBeenCalledTimes(0);

                    shallowWrapper.setProps({isOpen: true});

                    expect(spy).toHaveBeenCalledTimes(1);
                });

                it('should remove the event on click if the drop is closing', () => {
                    const spy = spyOn(document, 'removeEventListener');
                    let shallowWrapper: ShallowWrapper;

                    shallowWrapper = shallowWithState(
                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,
                        {}
                    ).dive();

                    shallowWrapper.setProps({isOpen: true});
                    shallowWrapper.setProps({isOpen: false});

                    expect(spy).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});
