import {ColumnDef, createColumnHelper} from '@tanstack/table-core';
import {render, screen, userEvent} from '@test-utils';
import {useState} from 'react';

import {Table} from '../Table';
import {useTable} from '../use-table';

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
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.LastUpdated />
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByText('Last update:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');
    });

    it('displays the custom label and time', () => {
        const Fixture = () => {
            const store = useTable<RowData>();
            return (
                <Table store={store} data={[{name: 'fruit'}]} columns={columns}>
                    <Table.LastUpdated label="CUSTOM label:" />
                </Table>
            );
        };
        render(<Fixture />);

        expect(screen.getByText('CUSTOM label:')).toBeVisible();
        expect(screen.getByRole('timer')).toHaveTextContent('1:05:50 PM');
    });

    it('updates the time when the data changes', async () => {
        const user = userEvent.setup({delay: null});
        const Fixture = () => {
            const store = useTable<RowData>();
            const [data, setData] = useState([{name: 'fruit'}]);
            return (
                <>
                    <button onClick={() => setData([{name: 'vegetable'}])}>Click me</button>
                    <Table store={store} data={data} columns={columns}>
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
