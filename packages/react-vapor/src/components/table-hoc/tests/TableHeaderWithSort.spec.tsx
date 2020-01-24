import {shallowWithState, shallowWithStore} from 'enzyme-redux';
import * as React from 'react';

import {getStoreMock, ReactVaporMockStore} from '../../../utils/tests/TestUtils';
import {TextLoadingPlaceholder} from '../../loading';
import {TableHeaderActions} from '../actions/TableHeaderActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';

describe('Table HOC', () => {
    describe('TableHeaderWithSort', () => {
        let store: ReactVaporMockStore;

        const defaultProps = {
            id: 'a',
            tableId: 'b',
        };

        beforeEach(() => {
            store = getStoreMock({
                tableHOCHeader: [
                    {
                        id: defaultProps.id,
                        tableId: defaultProps.tableId,
                        isAsc: false,
                    },
                ],
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
            const render = () =>
                shallowWithStore(
                    <TableHeaderWithSort {...defaultProps}>
                        <div>Hello</div>
                    </TableHeaderWithSort>,
                    store
                ).dive();

            expect(render).not.toThrow();
        });

        it('should dispatch an addTableHeader on componentDidMount', () => {
            const expectedAction = TableHeaderActions.addTableHeader(defaultProps.id, defaultProps.tableId, undefined);

            shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an removeTableHeader on componentWillUnmount', () => {
            const expectedAction = TableHeaderActions.removeTableHeader(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();
            wrapper.unmount();

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should dispatch an sortTable on click', () => {
            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store).dive();
            wrapper.find('th').simulate('click');

            expect(store.getActions()).toContain(expectedAction);
        });

        it('should render a <TextLoadingPlaceholder /> if the prop isLoading is set to true', () => {
            const wrapper = shallowWithState(<TableHeaderWithSort {...defaultProps} isLoading />, store).dive();

            expect(wrapper.find(TextLoadingPlaceholder).length).toBe(1);
        });
    });
});
