import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils';
import {TableHeaderActions} from '../actions/TableHeaderActions';
import {TableHeaderWithSort} from '../TableHeaderWithSort';

describe('Table HOC', () => {
    describe('TableHeaderWithSort', () => {
        let store: PlasmaMockStore;

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

        it('should render correctly', () => {
            render(<TableHeaderWithSort {...defaultProps} />, {});

            expect(screen.getByRole('img', {name: /ascDesc icon/i})).toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /sortedAsc icon/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /sortedDesc icon/i})).not.toBeInTheDocument();
        });

        it('should render empty if isLoading', () => {
            render(<TableHeaderWithSort {...defaultProps} isLoading />, {});

            expect(screen.queryByRole('img', {name: /sortedAsc icon/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /sortedDesc icon/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /ascDesc icon/i})).not.toBeInTheDocument();
        });

        it('should not throw when rendering children', () => {
            render(
                <TableHeaderWithSort {...defaultProps}>
                    <div data-testid="batman" />
                </TableHeaderWithSort>,
                {}
            );

            expect(screen.getByTestId('batman')).toBeInTheDocument();
        });

        it('should dispatch an addTableHeader on componentDidMount', () => {
            const expectedAction = TableHeaderActions.addTableHeader(defaultProps.id, defaultProps.tableId, undefined);

            render(<TableHeaderWithSort {...defaultProps} />, {store});

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an removeTableHeader on componentWillUnmount', () => {
            const expectedAction = TableHeaderActions.removeTableHeader(defaultProps.id);

            render(<TableHeaderWithSort {...defaultProps} />, {store}).unmount();

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('should dispatch an sortTable on click', () => {
            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);

            render(<TableHeaderWithSort {...defaultProps} />, {store});
            userEvent.click(screen.getByRole('columnheader'));

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('renders the default svg when the table is not sorted', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            expect(screen.getByRole('img', {name: /ascDesc icon/i})).toBeInTheDocument();
        });

        it('renders the sortedAsc svg when the user click one time on the arrows', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            const btn = screen.getByRole('img', {name: /ascDesc icon/i});
            userEvent.click(btn);

            expect(screen.getByRole('img', {name: /sortedAsc icon/i})).toBeInTheDocument();
        });

        it('renders the sortedDesc svg when the user click two time on the arrows', () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            const btn1 = screen.getByRole('img', {name: /ascDesc icon/i});
            userEvent.click(btn1);

            const btn2 = screen.getByRole('img', {name: /sortedAsc icon/i});
            userEvent.click(btn2);

            expect(screen.getByRole('img', {name: /sortedDesc icon/i})).toBeInTheDocument();
        });
    });
});
