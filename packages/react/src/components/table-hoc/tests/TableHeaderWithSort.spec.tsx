import {render, screen} from '@test-utils';
import userEvent from '@testing-library/user-event';

import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils.js';
import {TableHeaderActions} from '../actions/TableHeaderActions.js';
import {TableHeaderWithSort} from '../TableHeaderWithSort.js';

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

        it('should render correctly', async () => {
            render(<TableHeaderWithSort {...defaultProps} />, {});

            expect(await screen.findByRole('img', {name: /doubleArrowHeadV/i})).toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /arrowUp/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /arrowDown/i})).not.toBeInTheDocument();
        });

        it('should render empty if isLoading', () => {
            render(<TableHeaderWithSort {...defaultProps} isLoading />, {});

            expect(screen.queryByRole('img', {name: /doubleArrowHeadV/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /arrowUp/i})).not.toBeInTheDocument();
            expect(screen.queryByRole('img', {name: /arrowDown/i})).not.toBeInTheDocument();
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

        it('should dispatch an sortTable on click', async () => {
            const expectedAction = TableHeaderActions.sortTable(defaultProps.id);

            render(<TableHeaderWithSort {...defaultProps} />, {store});
            await userEvent.click(screen.getByRole('columnheader'));

            expect(store.getActions()).toContainEqual(expectedAction);
        });

        it('renders the default svg when the table is not sorted', async () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            expect(await screen.findByRole('img', {name: /doubleArrowHeadV/i})).toBeInTheDocument();
        });

        it('renders arrow up icon when the user click one time on the arrows', async () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            const btn = await screen.findByRole('img', {name: /doubleArrowHeadV/i});
            await userEvent.click(btn);

            expect(await screen.findByRole('img', {name: /arrowUp/i})).toBeInTheDocument();
        });

        it('renders arrow down icon the user click two time on the arrows', async () => {
            render(<TableHeaderWithSort id={'patate'} tableId={'id'} isLoading={false} />);

            const btn1 = await screen.findByRole('img', {name: /doubleArrowHeadV/i});
            await userEvent.click(btn1);

            const btn2 = await screen.findByRole('img', {name: /arrowUp/i});
            await userEvent.click(btn2);

            expect(await screen.findByRole('img', {name: /arrowDown/i})).toBeInTheDocument();
        });
    });
});
