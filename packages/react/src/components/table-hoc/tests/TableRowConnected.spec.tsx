import {ShallowWrapper} from 'enzyme';
import {shallowWithStore} from '@test-utils';
import {screen, render} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {UrlUtils} from '../../../utils/index.js';
import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils.js';
import {addActionsToActionBar} from '../../actions/ActionBarActions.js';
import {CollapsibleToggle} from '../../collapsible/CollapsibleToggle.js';
import {TableHOCRowActions} from '../actions/TableHOCRowActions.js';
import {ITableRowConnectedProps, TableRowConnected} from '../TableRowConnected.js';
import {TableSelectors} from '../TableSelectors.js';
import {Button} from '../../button/Button.js';
import {HOCTableRowState} from '...js';

describe('Table HOC', () => {
    describe('TableRowConnected', () => {
        let store: PlasmaMockStore;
        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                    },
                ],
            });
        });

        afterEach(() => {
            jest.restoreAllMocks();
        });

        it('should not throw', () => {
            expect(() =>
                shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)
                    .dive()
                    .dive()
            ).not.toThrow();
            expect(() =>
                shallowWithStore(
                    <TableRowConnected id="b" tableId="c" actions={[{enabled: false, name: 'test'}]} />,
                    store
                )
                    .dive()
                    .dive()
            ).not.toThrow();
        });

        it('should render a tr', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').exists()).toBe(true);
        });

        it('should have the class selected if the row is selected in the state', () => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: true,
                    },
                ],
            });
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').hasClass('selected')).toBe(true);
        });

        it('should have the class "row-disabled" if the row has disabled prop to true', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" disabled />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').hasClass('row-disabled')).toBe(true);
        });

        it('should have the class "no-hover" if the row has actions prop empty', () => {
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').hasClass('no-hover')).toBe(true);
        });

        it('should not have the class "no-hover" if the row has actions prop', () => {
            const actions = [{name: 'name', enabled: true}];
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" actions={actions} />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').hasClass('no-hover')).not.toBe(true);
        });

        it('should not have the class selected if the row is not selected in the state', () => {
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                    },
                ],
            });
            const wrapper = shallowWithStore(<TableRowConnected id="a" tableId="b" />, store)
                .dive()
                .dive();

            expect(wrapper.find('tr').hasClass('selected')).toBe(false);
        });

        it('should dispatch a TableHOCRowActions.add on componentDidMount', () => {
            const expectedAction = TableHOCRowActions.add(defaultProps.id, defaultProps.tableId);

            shallowWithStore(<TableRowConnected {...defaultProps} />, store)
                .dive()
                .dive();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an TableHOCRowActions.remove on componentWillUnmount', () => {
            const expectedAction = TableHOCRowActions.remove(defaultProps.id, defaultProps.tableId, true);
            jest.spyOn(TableSelectors, 'getTableRow').mockReturnValue({
                selected: true,
                opened: false,
            } as HOCTableRowState);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store)
                .dive()
                .dive();
            wrapper.unmount();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an addActionsToActionBar on click', () => {
            const actions = [{name: 'name', enabled: false}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store)
                .dive()
                .dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch a TableHOCRowActions.select action on click when actions is not empty', () => {
            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} />,
                store
            )
                .dive()
                .dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an addActionsToActionBar when the actions change and the row was selected', () => {
            const actions = [{name: 'name', enabled: false}];
            const newActions = [{name: 'name', enabled: true}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);
            jest.spyOn(TableSelectors, 'getTableRow').mockReturnValue({
                selected: true,
                opened: false,
            } as HOCTableRowState);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store)
                .dive()
                .dive();
            wrapper.setProps({actions: newActions} as any);

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch a TableHOCRowActions.select action when the action change and the row was selected', () => {
            const actions = [{name: 'name', enabled: false}];
            const newActions = [{name: 'name', enabled: true}];
            const expectedAction = TableHOCRowActions.select(defaultProps.id, false);
            jest.spyOn(TableSelectors, 'getTableRow').mockReturnValue({
                selected: true,
                opened: false,
            } as HOCTableRowState);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store)
                .dive()
                .dive();
            wrapper.setProps({actions: newActions} as any);

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should not dispatch a TableHOCRowActions.select action on click when actions is empty', () => {
            const actionNotExpected = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store)
                .dive()
                .dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.getActions()).not.toContain(actionNotExpected);
        });

        it('does not select the row when clicking inside an underlying dropdown', async () => {
            // We must mount the component here because simulated events don't propagate throughout ShallowWrappers
            render(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]}>
                    <td>
                        <div role="button" className="dropdown">
                            name
                        </div>
                    </td>
                </TableRowConnected>
            );

            await userEvent.click(screen.getByRole('button', {name: 'name'}));
            expect(screen.getByRole('row')).toHaveAttribute('aria-selected', 'false');
        });

        it('should dispatch an TableHOCRowActions.select on click and handle multi-select', () => {
            const expectedActionWithMulti = TableHOCRowActions.select(defaultProps.id, true);
            const expectedActionWithoutMulti = TableHOCRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} isMultiselect />,
                store
            )
                .dive()
                .dive();

            wrapper.find('tr').simulate('click', {ctrlKey: true});

            expect(store.getActions()).toContainEqual(expectedActionWithMulti);

            wrapper.find('tr').simulate('click', {ctrlKey: false});

            expect(store.getActions()).toContainEqual(expectedActionWithoutMulti);
        });

        describe('double click', () => {
            it('should dispatch trigger actions with callOnDoubleClick=true when double clicking the row', () => {
                const triggerActionSpy = jest.fn();

                const wrapper = shallowWithStore(
                    <TableRowConnected
                        {...defaultProps}
                        actions={[{enabled: true, name: 'action', callOnDoubleClick: true, trigger: triggerActionSpy}]}
                    />,
                    store
                )
                    .dive()
                    .dive();

                wrapper.find('tr').simulate('doubleclick');

                expect(triggerActionSpy).toHaveBeenCalledTimes(1);
            });

            it('should navigate to the link if a link is defined instead of the trigger', () => {
                const triggerActionSpy = jest.fn();
                const redirectionSpy = jest.spyOn(UrlUtils, 'redirectToUrl');
                const wrapper = shallowWithStore(
                    <TableRowConnected
                        {...defaultProps}
                        actions={[
                            {
                                enabled: true,
                                name: 'action',
                                callOnDoubleClick: true,
                                trigger: triggerActionSpy,
                                link: 'http://perdu.com/',
                            },
                        ]}
                    />,
                    store
                )
                    .dive()
                    .dive();
                wrapper.find('tr').simulate('doubleclick');

                expect(triggerActionSpy).not.toHaveBeenCalled();
                expect(redirectionSpy).toHaveBeenCalledWith('http://perdu.com/');
            });

            it('should not be triggered in any way when the action is not enabled', () => {
                const triggerActionSpy = jest.fn();
                const wrapper = shallowWithStore(
                    <TableRowConnected
                        {...defaultProps}
                        actions={[
                            {
                                enabled: false,
                                name: 'action',
                                callOnDoubleClick: true,
                                trigger: triggerActionSpy,
                            },
                        ]}
                    />,
                    store
                )
                    .dive()
                    .dive();
                wrapper.find('tr').simulate('doubleclick');

                expect(triggerActionSpy).not.toHaveBeenCalled();
            });
        });

        describe('when the row is collapsible', () => {
            let wrapper: ShallowWrapper<ITableRowConnectedProps>;
            const collapsibleContent = <div>Collapsible content</div>;

            const shallowComponent = (props: Partial<ITableRowConnectedProps> = {}) => {
                store = getStoreMock({
                    tableHOCRow: [
                        {
                            id: defaultProps.id,
                            tableId: defaultProps.tableId,
                            selected: false,
                            opened: true,
                        },
                    ],
                });

                wrapper = shallowWithStore(
                    <TableRowConnected
                        id={defaultProps.id}
                        tableId={defaultProps.tableId}
                        collapsible={{
                            content: collapsibleContent,
                        }}
                        {...props}
                    >
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                        {null}
                        {[]}
                        {false}
                    </TableRowConnected>,
                    store
                )
                    .dive()
                    .dive();
            };

            it('should render an additional row for the collapsible content', () => {
                shallowComponent();

                expect(wrapper.find('tr').length).toBe(2);
                expect(wrapper.find('tr').at(0).hasClass('heading-row')).toBe(true);

                expect(wrapper.find('tr').at(1).hasClass('collapsible-row')).toBe(true);
            });

            it('should render a single cell in the collapsible row that spans accross all the columns +1 for the toggle', () => {
                render(
                    <TableRowConnected
                        id={defaultProps.id}
                        tableId={defaultProps.tableId}
                        collapsible={{
                            content: collapsibleContent,
                        }}
                    >
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                        {null}
                        {[]}
                        {false}
                    </TableRowConnected>
                );

                expect(document.querySelector('tr.collapsible-row td')).toHaveAttribute('colSpan', '4');
            });

            it('should render the collapsible content node inside the collapsible row', () => {
                shallowComponent();

                expect(wrapper.find('tr.collapsible-row td').contains(collapsibleContent)).toBe(true);
            });

            it('should have the class opened if the row is opened in the state', () => {
                shallowComponent();

                expect(wrapper.find('tr.heading-row').hasClass('opened')).toBe(true);
            });

            it('should render a CollapsibleToggle as collapsed state indicator if no customToggle is specified', () => {
                shallowComponent();

                expect(wrapper.find(CollapsibleToggle).exists()).toBe(true);
                expect(wrapper.find(CollapsibleToggle).props().expanded).toBe(true);
            });

            it('should add mod-no-border-bottom when specified using the prop noBorderBottom', () => {
                shallowComponent();
                wrapper.setProps({
                    collapsible: {
                        content: collapsibleContent,
                        noBorderBottom: true,
                    },
                });

                expect(wrapper.find('tr.heading-row td').last().hasClass('mod-no-border-bottom')).toBe(true);
            });

            it('should render a collapsible row custom toggle when specified using the prop renderCustomToggleCell', () => {
                shallowComponent();
                const expectedToggle = <td>Opened</td>;
                wrapper.setProps({
                    collapsible: {
                        content: collapsibleContent,
                        renderCustomToggleCell: (opened: boolean) => expectedToggle,
                    },
                });

                expect(wrapper.find('tr.heading-row td').last().equals(expectedToggle)).toBe(true);
            });

            it('should dispatch a toggleCollapsible action when clicking on the collapsible button', () => {
                shallowComponent();
                const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id);

                wrapper.find(Button).simulate('click');

                expect(store.getActions()).toContainEqual(expectedAction);
            });

            it('should set the collapsibleToggle null if the content is null', () => {
                shallowComponent({collapsible: {content: null}});

                expect(wrapper.find(CollapsibleToggle).length).toBe(0);
            });
        });

        it('should dispatch a toggleCollapsible action with opened:true on mount when expandOnMount is set to true', () => {
            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        expandOnMount: true,
                    }}
                />,
                store
            )
                .dive()
                .dive();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch a toggleCollapsible action with opened:true when changing from a non-collapsible to a collapsible row', () => {
            const expectedAction = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{expandOnMount: true}}
                />,
                store
            )
                .dive()
                .dive();

            expect(store.getActions()).not.toContain(expectedAction);

            row.setProps({
                collapsible: {
                    expandOnMount: true,
                    content: <div>Whatever</div>,
                },
            } as any);

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should not dispatch a toggleCollapsible action when changing from a non-collapsible to a collapsible row if expandOnMount is false', () => {
            const actionNotExpected = TableHOCRowActions.toggleCollapsible(defaultProps.id, true);

            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected id={defaultProps.id} tableId={defaultProps.tableId} />,
                store
            )
                .dive()
                .dive();

            expect(store.getActions()).not.toContain(actionNotExpected);

            row.setProps({
                collapsible: {
                    content: <div>Whatever</div>,
                },
            } as any);

            expect(store.getActions()).not.toContain(actionNotExpected);
        });

        it('should call the onToggleCollapsible props with true the row is opened', () => {
            const spy = jest.fn();
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: false,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        onToggleCollapsible: spy,
                    }}
                />,
                store
            )
                .dive()
                .dive();

            row.find(Button).simulate('click');

            expect(spy).toHaveBeenCalledWith(true);
        });

        it('should call the onToggleCollapsible props with false the row is closed', () => {
            const spy = jest.fn();
            store = getStoreMock({
                tableHOCRow: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        selected: false,
                        opened: true,
                    },
                ],
            });

            const row = shallowWithStore(
                <TableRowConnected
                    id={defaultProps.id}
                    tableId={defaultProps.tableId}
                    collapsible={{
                        content: <div>Whatever</div>,
                        onToggleCollapsible: spy,
                    }}
                />,
                store
            )
                .dive()
                .dive();

            row.find(Button).simulate('click');

            expect(spy).toHaveBeenCalledWith(false);
        });
    });
});
