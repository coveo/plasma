import {ReactWrapper, ShallowWrapper} from 'enzyme';
import {mountWithStore, shallowWithState} from '@test-utils';
import {ReactNode} from 'react';
import userEvent from '@testing-library/user-event';
import {render, screen, waitFor} from '@test-utils';

import {RTestUtils} from '../../../utils/tests/RTestUtils';
import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils';
import {Drop, IDropProps} from '../Drop';
import {DropPod} from '../DropPod';
import {DefaultGroupIds, DropActions} from '../redux/DropActions';

describe('Drop', () => {
    describe('<Drop />', () => {
        const defaultButton: ReactNode = <div className={'onclick'}></div>;

        it('should mount without errors', () => {
            expect(() => {
                shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {})
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should unmount without errors', () => {
            const wrapper = shallowWithState(<Drop id={'test'} renderOpenButton={() => defaultButton} />, {})
                .dive()
                .dive();

            expect(() => {
                wrapper.unmount();
            }).not.toThrow();
        });

        it('should call renderOpenButton on mount', () => {
            const renderOpenButtonSpy = jest.fn(() => <div>DIV</div>);
            shallowWithState(<Drop id={'test'} renderOpenButton={renderOpenButtonSpy} />, {})
                .dive()
                .dive();

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
                store?: PlasmaMockStore,
                child: ReactNode = null,
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
                    store || getStoreMock(),
                );
                return wrapper;
            };

            it('should toggle false on unmount', () => {
                const store = getStoreMock(defaultStore(true));
                wrapper = mountDropWithStore({}, store);

                wrapper.unmount();

                expect(store.getActions()).toContainEqual(DropActions.toggle(id, DefaultGroupIds.default, false));
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

                expect(store.getActions()).toContainEqual(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('should not dispatch an action to toggle drop isOpen if the element target is in the body but not inside the button if closeOnClickOutside is false', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore(
                    {
                        closeOnClickOutside: false,
                    },
                    store,
                );

                RTestUtils.clickOnElement();

                expect(store.getActions()).not.toContain(DropActions.toggle(id, DefaultGroupIds.default, false));
            });

            it('closes the drop if the click happen inside of it', async () => {
                const user = userEvent.setup();
                render(
                    <Drop
                        id={id}
                        renderOpenButton={(onClick: () => void) => <button onClick={onClick}>toggle drop</button>}
                    >
                        <button>children button</button>
                    </Drop>,
                );

                await user.click(screen.getByRole('button', {name: 'toggle drop'}));

                await waitFor(() => expect(screen.getByRole('button', {name: 'children button'})).toBeVisible());

                await user.click(screen.getByRole('button', {name: 'children button'}));

                expect(screen.queryByRole('button', {name: 'children button'})).not.toBeInTheDocument();
            });

            it('does not close the drop if the click happen inside and closeOnClickDrop is false', async () => {
                const user = userEvent.setup();
                render(
                    <Drop
                        id={id}
                        renderOpenButton={(onClick: () => void) => <button onClick={onClick}>toggle drop</button>}
                        closeOnClickDrop={false}
                    >
                        <button>children button</button>
                    </Drop>,
                );

                await user.click(screen.getByRole('button', {name: 'toggle drop'}));

                await waitFor(() => expect(screen.getByRole('button', {name: 'children button'})).toBeVisible());

                await user.click(screen.getByRole('button', {name: 'children button'}));

                expect(screen.getByRole('button', {name: 'children button'})).toBeVisible();
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
                    <div id={'Drop'} className={'drop'}></div>,
                );

                expect(store.getActions()).toContainEqual(DropActions.toggle(id, DefaultGroupIds.default, true));
            });

            it('should not add data-open attribute to open if the drop is closed', () => {
                const store = getStoreMock(defaultStore(false));
                mountDropWithStore({}, store);
                const shallowWrapperDropPod: ShallowWrapper = shallowWithState(
                    wrapper
                        .find(DropPod)
                        .props()
                        .renderDrop({} as any, {} as any, {} as any) as any,
                    {},
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
                        .renderDrop({} as any, {} as any) as any,
                    {},
                );

                expect(shallowWrapperDropPod.prop('data-open')).toBe(true);
            });

            describe('events', () => {
                it('should add the event on click if the drop is opening', () => {
                    const spy = jest.spyOn(document, 'addEventListener');
                    const shallowWrapper = shallowWithState(
                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,
                        {},
                    )
                        .dive()
                        .dive();

                    expect(spy).toHaveBeenCalledTimes(0);

                    shallowWrapper.setProps({isOpen: true} as any);

                    expect(spy).toHaveBeenCalledTimes(1);
                });

                it('should remove the event on click if the drop is closing', () => {
                    const spy = jest.spyOn(document, 'removeEventListener');
                    const shallowWrapper = shallowWithState(
                        <Drop id={'test'} renderOpenButton={() => defaultButton} />,
                        {},
                    )
                        .dive()
                        .dive();

                    shallowWrapper.setProps({isOpen: true} as any);
                    shallowWrapper.setProps({isOpen: false} as any);

                    expect(spy).toHaveBeenCalledTimes(1);
                });
            });
        });
    });
});
