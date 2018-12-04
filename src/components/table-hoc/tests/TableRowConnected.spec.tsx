import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';

import {IReactVaporState} from '../../../ReactVapor';
import {addActionsToActionBar} from '../../actions/ActionBarActions';
import {TableRowActions} from '../actions/TableRowActions';
import {TableRowConnected} from '../TableRowConnected';

describe('Table HOC', () => {
    describe('TableRowConnected', () => {
        let store: mockStore<IReactVaporState>;
        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                }],
            });
        });

        it('should not throw', () => {
            expect(() => shallowWithStore(<TableRowConnected id='a' tableId='b' />, store)).not.toThrow();
            expect(() => shallowWithStore(<TableRowConnected id='b' tableId='c' actions={[{enabled: false, name: 'test'}]} />, store)).not.toThrow();
        });

        it('should render a tr', () => {
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').exists()).toBe(true);
        });

        it('should have the class selected if the row is selected in the state', () => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: true,
                }],
            });
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(true);
        });

        it('should not have the class selected if the row is not selected in the state', () => {
            store = createMockStore({
                tableHOCRow: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    selected: false,
                }],
            });
            const wrapper = shallowWithStore(<TableRowConnected id='a' tableId='b' />, store).dive();
            expect(wrapper.find('tr').hasClass('selected')).toBe(false);
        });

        it('should dispatch a TableRowActions.add on componentDidMount', () => {
            const expectedAction = TableRowActions.add(defaultProps.id, defaultProps.tableId);

            shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an TableRowActions.remove on componentWillUnmount', () => {
            const expectedAction = TableRowActions.remove(defaultProps.id);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an addActionsToActionBar on click', () => {
            const actions = [{name: 'name', enabled: false}];
            const expectedAction = addActionsToActionBar(defaultProps.tableId, actions);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={actions} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch a TableRowActions.select action on click when actions is not empty', () => {
            const expectedAction = TableRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(<TableRowConnected {...defaultProps} actions={[{enabled: true, name: 'action'}]} />, store).dive();
            wrapper.find('tr').simulate('click', {});

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an TableRowActions.select on click and handle multi-select', () => {
            const expectedActionWithMulti = TableRowActions.select(defaultProps.id, true);
            const expectedActionWithoutMulti = TableRowActions.select(defaultProps.id, false);

            const wrapper = shallowWithStore(
                <TableRowConnected
                    {...defaultProps}
                    actions={[{enabled: true, name: 'action'}]}
                    isMultiselect />,
                store,
            ).dive();

            wrapper.find('tr').simulate('click', {ctrlKey: true});
            expect(store.isActionDispatched(expectedActionWithMulti)).toBe(true);

            wrapper.find('tr').simulate('click', {ctrlKey: false});
            expect(store.isActionDispatched(expectedActionWithoutMulti)).toBe(true);
        });
    });
});
