import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';
import {useState} from 'react';

import {Table} from '../Table';

type RowData = {name: string};

const columnHelper = createColumnHelper<RowData>();
const columns: Array<ColumnDef<RowData>> = [columnHelper.accessor('name', {enableSorting: false})];

describe('Table.LastUpdated', () => {
    beforeEach(() => {
        vi.useFakeTimers().setSystemTime(new Date(2022, 0, 15, 13, 5, 50));
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it('displays the label and time', () => {
        const {rerender} = render(
            <Table data={[{name: 'fruit'}]} columns={columns}>
                <Table.LastUpdated />
            </Table>,
        );

        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');

        rerender(
            <Table data={[{name: 'fruit'}]} columns={columns}>
                <Table.LastUpdated label="CUSTOM label:" />
            </Table>,
        );

        expect(screen.queryByText('Last update:')).not.toBeInTheDocument();
        expect(screen.getByText('CUSTOM label:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');
    });

    it('updates the time when a dependency changes', async () => {
        const user = userEvent.setup({delay: null});

        // Using a fixture to have a button that will trigger a change of a dependency
        const Fixture = () => {
            const [isClicked, setIsClicked] = useState(false);
            return (
                <>
                    <button onClick={() => setIsClicked(true)}>Click me</button>
                    <Table data={[{name: 'fruit'}]} columns={columns}>
                        <Table.LastUpdated dependencies={[isClicked]} />
                    </Table>
                </>
            );
        };
        render(<Fixture />);

        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');

        vi.setSystemTime(new Date(2022, 0, 15, 14, 11, 22));

        // the date changed but the dependency didn't change yet, so the timer is still the same
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');

        // When we click on the button the isClicked switch from false to true which triggers an update
        await user.click(screen.getByRole('button', {name: 'Click me'}));
        expect(screen.getByRole('timer')).toHaveTextContent('2:11:22 PM');
    });

    it('updates the time when the data changes', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const [data, setData] = useState([{name: 'fruit'}]);
            return (
                <>
                    <button onClick={() => setData([{name: 'vegetable'}])}>Click me</button>
                    <Table data={data} columns={columns}>
                        <Table.LastUpdated />
                    </Table>
                </>
            );
        };
        render(<Fixture />);

        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');

        vi.setSystemTime(new Date(2022, 0, 15, 14, 11, 22));

        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');

        await user.click(screen.getByRole('button', {name: 'Click me'}));

        expect(screen.getByRole('timer')).toHaveTextContent('2:11:22 PM');
    });
});
