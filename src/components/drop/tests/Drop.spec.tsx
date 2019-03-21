import {mountWithStore, shallowWithState} from 'enzyme-redux';
import * as React from 'react';
import {mockStore} from 'redux-test-utils';
import {IReactVaporState} from '../../../ReactVapor';
import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {Drop, IDropProps} from '../Drop';
import {DropPod} from '../DropPod';
import {DefaultGroupIds, DropActions} from '../redux/DropActions';

const clickOnEl = (el: Element = document.getElementById('other')) => {
    const evt = new MouseEvent('mousedown', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 20,
    });
    el.dispatchEvent(evt);
};

describe('Drop', () => {
    describe('<Drop />', () => {

        const defaultButton: React.ReactNode = <div className={'onclick'}></div>;

        it('should mount without errors', () => {
            expect(() => {
                shallowWithState(
                    <Drop
                        id={'test'}
                        renderOpenButton={() => defaultButton}
                    />, {}).dive();
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(
                <Drop
                    id={'test'}
                    renderOpenButton={() => defaultButton}
                />, {}).dive();
            expect(() => {
                wrapper.unmount();
            }).not.toThrow();
        });

        it('should call renderOpenButton on mount', () => {
            const renderOpenButtonSpy = jasmine.createSpy('renderOpenButton').and.returnValue(<div>DIV</div>);
            shallowWithState(
                <Drop
                    id={'test'}
                    renderOpenButton={renderOpenButtonSpy}
                />, {}).dive();

            expect(renderOpenButtonSpy).toHaveBeenCalledTimes(1);
        });

        describe('once mounted', () => {

            const id = 'DropId';

            const defaultStore = (isOpen: boolean) => ({
                drop: {
                    [DefaultGroupIds.default]: {
                        id,
                        isOpen,
                    },
                },
            });

            beforeEach(() => {
                const otherElement: HTMLDivElement = document.createElement('div');
                otherElement.setAttribute('id', 'other');
                document.body.appendChild(otherElement);
            });

            afterEach(() => document.getElementById('other').remove());

            const mountDropWithStore = (props: Partial<IDropProps>, store: mockStore<IReactVaporState>,
                                        child: React.ReactNode = null) => mountWithStore(
                <Drop
                    id={id}
                    renderOpenButton={(onClick: () => void) => <div id={'Button'} className={'button'} onClick={onClick}></div>}
                    {...props}
                >
                    {child}
                </Drop>,
                store,
            );

            it('should render a <DropPod>', () => {
                const wrapper = mountDropWithStore({}, RTestUtils.buildMockStore());

                expect(wrapper.find(DropPod).length).toBe(1);
            });

            it('should not dispatch an action to toggle the drop if the element is not in the document.body', () => {
                const store = RTestUtils.buildMockStore(defaultStore(false));
                mountDropWithStore({}, store);

                clickOnEl(document.head);

                expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, false))).toBe(false);
            });

            it('should dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button', () => {
                const store = RTestUtils.buildMockStore(defaultStore(true));
                mountDropWithStore({}, store);

                clickOnEl();

                expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, false))).toBe(true);
            });

            it('should not dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button if closeOnClickOutside is false',
                () => {
                    const store = RTestUtils.buildMockStore(defaultStore(true));
                    mountDropWithStore({
                            closeOnClickOutside: false,
                        },
                        store,
                    );

                    clickOnEl();

                    expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, false))).toBe(false);
                });

            it('should dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element', () => {
                const store = RTestUtils.buildMockStore(defaultStore(true));
                mountDropWithStore({},
                    store,
                    <div id={'Drop'} className={'drop'}></div>,
                );

                clickOnEl(document.getElementById('Drop'));

                expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, false))).toBe(true);
            });

            it('should not dispatch an action to toggle drop isOpen if the element target is in the body and inside the drop element if closeOnClickDrop is false',
                () => {
                    const store = RTestUtils.buildMockStore(defaultStore(true));
                    mountDropWithStore({
                            closeOnClickDrop: false,
                        },
                        store,
                        <div id={'Drop'} className={'drop'}></div>,
                    );

                    clickOnEl(document.getElementById('Drop'));

                    expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, false))).toBe(false);
                });

            it('should dispatch a toggle event when we call onClick sent with renderOpenButton',
                () => {
                    const store = RTestUtils.buildMockStore(defaultStore(false));
                    mountDropWithStore({
                            renderOpenButton: (onClick: () => void) => {
                                onClick();
                                return <div></div>;
                            },
                        },
                        store,
                        <div id={'Drop'} className={'drop'}></div>,
                    );

                    expect(store.isActionDispatched(DropActions.toggle(id, DefaultGroupIds.default, true))).toBe(true);
                });
        });
    });
});
