import {act, render, screen} from '@test-utils';
import {FunctionComponent, JSXElementConstructor, ReactElement} from 'react';

import {getStoreMock, PlasmaMockStore} from '../../../utils/tests/TestUtils';
import {TableHOCActions} from '../actions/TableHOCActions';
import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithEmptyState} from '../TableWithEmptyState';

describe('TableWithEmptyState', () => {
    const TableWithEmptyState = tableWithEmptyState(TableHOC);
    const EmptyState: FunctionComponent = () => <div>No data!</div>;
    let store: PlasmaMockStore;

    beforeEach(() => {
        store = getStoreMock();
    });

    it('renders and unmounts without throwing errors', () => {
        expect(() => {
            render(<TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} />, {
                store,
            }).unmount();
        }).not.toThrow();
    });

    it('renders the empty state if the table is empty after waiting 50 ms', async () => {
        render(<TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(screen.queryByText('No data!')).not.toBeInTheDocument();

        expect(await screen.findByText('No data!')).toBeVisible();
    });

    it('renders the loading table if the table is empty after waiting 50 ms but still loading', () => {
        vi.useFakeTimers();
        let update: (ui: ReactElement<any, string | JSXElementConstructor<any>>) => void;
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            const {rerender} = render(
                <TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} isLoading />,
                {
                    store,
                }
            );
            update = rerender;
        });

        vi.advanceTimersByTime(50);
        update(<TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} isLoading />);

        expect(screen.getAllByRole('row').length).toBe(20);
        vi.useRealTimers();
    });

    it('renders the table if the table is not empty after waiting 50 ms', () => {
        vi.useFakeTimers();
        let update: (ui: ReactElement<any, string | JSXElementConstructor<any>>) => void;
        // eslint-disable-next-line testing-library/no-unnecessary-act
        act(() => {
            const {rerender} = render(
                <TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />,
                {
                    store,
                }
            );
            update = rerender;
        });

        vi.advanceTimersByTime(50);
        update(<TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(screen.getByRole('table')).toBeInTheDocument();
        vi.useRealTimers();
    });

    it('should not call the setEmptyState action from the TableHOCActions if the table rendered has the setEmptyState property already set', () => {
        vi.spyOn<any, string>(TableSelectors, 'isEmptyStateAlreadySet').mockReturnValueOnce(true);
        const setEmptyStateSpy = vi.spyOn<any, string>(TableHOCActions, 'setEmptyState');

        render(<TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(setEmptyStateSpy).not.toHaveBeenCalled();
    });

    it('should call the setEmptyState from the TableHOCActions when the table is first rendered', () => {
        const setEmptyStateSpy = vi.spyOn<any, string>(TableHOCActions, 'setEmptyState');

        render(<TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(setEmptyStateSpy).toHaveBeenCalledTimes(1);
    });
});
