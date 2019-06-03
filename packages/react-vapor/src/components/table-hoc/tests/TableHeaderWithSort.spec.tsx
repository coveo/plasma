import {shallowWithStore} from 'enzyme-redux';
import * as React from 'react';
import {createMockStore, mockStore} from 'redux-test-utils';
import {IReactVaporState} from '../../../ReactVapor';
import {TableHeaderActions} from '../actions/TableHeaderActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';

describe('Table HOC', () => {
    describe('TableHeaderWithSort', () => {
        let store: mockStore<IReactVaporState>;

        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = createMockStore({
                tableHOCHeader: [{
                    id: defaultProps.id,
                    tableId: defaultProps.tableId,
                    isAsc: false,
                }],
            });
        });

        it('should not throw', () => {
            expect(shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store));
            expect(shallowWithStore(<TableHeaderWithSort {...defaultProps} isDefault />, store));
        });

        it('should render a th', () => {
            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();
            expect(wrapper.find('th').exists()).toBe(true);
        });

        it('should not throw when rendering children', () => {
            const render = () => shallowWithStore(
                <TableHeaderWithSort {...defaultProps}>
                    <div>Hello</div>
                </TableHeaderWithSort>,
                store,
            ).dive();

            expect(render).not.toThrow();
        });

        it('should dispatch an addTableHeader on componentDidMount', () => {
            const expectedAction = TableHeaderActions.addTableHeader(defaultProps.id, defaultProps.tableId, undefined);

            shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an removeTableHeader on componentWillUnmount', () => {
            const expectedAction = TableHeaderActions.removeTableHeader(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });

        it('should dispatch an sortTable on click', () => {
            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();
            wrapper.find('th').simulate('click');

            expect(store.isActionDispatched(expectedAction)).toBe(true);
        });
    });
});
