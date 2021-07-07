import {shallowWithState, shallowWithStore} from '@helpers/enzyme-redux';
import * as React from 'react';
import {render, screen} from '@test-utils';

import userEvent from '@testing-library/user-event';
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
            expect(() => {
                shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store)
                    .dive()
                    .dive();
                shallowWithStore(<TableHeaderWithSort {...defaultProps} isDefault />, store)
                    .dive()
                    .dive();
            }).not.toThrow();
        });

        it('should render a th', () => {
            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store)
                .dive()
                .dive();

            expect(wrapper.find('th').exists()).toBe(true);
        });

        it('should not throw when rendering children', () => {
            const component = () =>
                shallowWithStore(
                    <TableHeaderWithSort {...defaultProps}>
                        <div>Hello</div>
                    </TableHeaderWithSort>,
                    store
                )
                    .dive()
                    .dive();

            expect(component).not.toThrow();
        });

        it('should dispatch an addTableHeader on componentDidMount', () => {
            const expectedAction = TableHeaderActions.addTableHeader(defaultProps.id, defaultProps.tableId, undefined);

            shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store)
                .dive()
                .dive();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an removeTableHeader on componentWillUnmount', () => {
            const expectedAction = TableHeaderActions.removeTableHeader(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store)
                .dive()
                .dive();
            wrapper.unmount();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an sortTable on click', () => {
            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);

            const wrapper = shallowWithStore(<TableHeaderWithSort {...defaultProps} />, store)
                .dive()
                .dive();
            wrapper.find('th').simulate('click');

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should render a <TextLoadingPlaceholder /> if the prop isLoading is set to true', () => {
            const wrapper = shallowWithState(<TableHeaderWithSort {...defaultProps} isLoading />, store)
                .dive()
                .dive();

            expect(wrapper.find(TextLoadingPlaceholder).length).toBe(1);
        });

        it('renders the default svg when the table is not sorted', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false}></TableHeaderWithSort>);

            expect(screen.getByRole('img', {name: /asc-desc icon/i})).toBeInTheDocument();
        });

        it('renders the sorted-asc svg when the user click one time on the arrows', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false}></TableHeaderWithSort>);

            const btn = screen.getByRole('img', {name: /asc-desc icon/i});
            userEvent.click(btn);

            expect(screen.getByRole('img', {name: /sorted-asc icon/i})).toBeInTheDocument();
        });

        it('renders the sorted-desc svg when the user click two time on the arrows', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false}></TableHeaderWithSort>);

            const btn1 = screen.getByRole('img', {name: /asc-desc icon/i});
            userEvent.click(btn1);

            const btn2 = screen.getByRole('img', {name: /sorted-asc icon/i});
            userEvent.click(btn2);

            expect(screen.getByRole('img', {name: /sorted-desc icon/i})).toBeInTheDocument();
        });
    });
});
