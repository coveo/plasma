import {ReactWrapper} from 'enzyme';
import {mountWithStore} from '@helpers/enzyme-redux';
import * as React from 'react';
import {act, render, screen} from '@test-utils';

import {getStoreMock} from '../../../utils/tests/TestUtils';
import {TableHOCActions} from '../actions/TableHOCActions';
import {TableHOC} from '../TableHOC';
import {TableSelectors} from '../TableSelectors';
import {tableWithEmptyState} from '../TableWithEmptyState';

describe('TableWithEmptyState', () => {
    const TableWithEmptyState = tableWithEmptyState(TableHOC);
    const EmptyState: React.FunctionComponent = () => <div>No data!</div>;

    it('renders and unmounts without throwing errors', () => {
        expect(() => {
            const table = mountWithStore(
                <TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} />,
                getStoreMock()
            );
            table.unmount();
        }).not.toThrow();
    });

    it('renders the empty state if the table is empty after waiting 50 ms', async () => {
        render(<TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(screen.queryByText('No data!')).not.toBeInTheDocument();

        expect(await screen.findByText('No data!')).toBeVisible();
    });

    it('renders the table if the table is empty after waiting 50 ms but still loading', () => {
        jest.useFakeTimers();
        let table: ReactWrapper;
        act(() => {
            table = mountWithStore(
                <TableWithEmptyState id="🌶" data={[]} renderBody={() => null} emptyState={<EmptyState />} isLoading />,
                getStoreMock()
            );
        });

        jest.advanceTimersByTime(50);
        table.update();

        expect(table.children().children().type()).toBe(TableHOC);

        jest.useRealTimers();
    });

    it('renders the table if the table is not empty after waiting 50 ms', () => {
        jest.useFakeTimers();
        let table: ReactWrapper;
        act(() => {
            table = mountWithStore(
                <TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />,
                getStoreMock()
            );
        });

        jest.advanceTimersByTime(50);
        table.update();

        expect(table.children().children().type()).toBe(TableHOC);

        jest.useRealTimers();
    });

    it('should not call the setEmptyState action from the TableHOCActions if the table rendered has the setEmptyState property already set', () => {
        jest.spyOn<any, string>(TableSelectors, 'isEmptyStateAlreadySet').mockReturnValueOnce(true);
        const setEmptyStateSpy = jest.spyOn<any, string>(TableHOCActions, 'setEmptyState');

        render(<TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(setEmptyStateSpy).not.toHaveBeenCalled();
    });

    it('should call the setEmptyState from the TableHOCActions when the table is first rendered', () => {
        const setEmptyStateSpy = jest.spyOn<any, string>(TableHOCActions, 'setEmptyState');

        render(<TableWithEmptyState id="🌶" data={['🤓']} renderBody={() => null} emptyState={<EmptyState />} />);

        expect(setEmptyStateSpy).toHaveBeenCalledTimes(1);
    });
});
