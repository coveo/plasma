import {BlankSlate, Button, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';
import {keepPreviousData, useQuery} from '@tanstack/react-query';
import {FunctionComponent} from 'react';

interface IExampleRowData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columnHelper = createColumnHelper<IExampleRowData>();

const columns: Array<ColumnDef<IExampleRowData>> = [
    columnHelper.accessor('userId', {
        header: 'User ID',
        cell: (info) => info.row.original.userId,
    }),
    columnHelper.accessor('id', {
        header: 'Post ID',
        cell: (info) => info.row.original.id,
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        cell: (info) => info.row.original.title,
    }),
];

const Demo = () => {
    const table = useTable<IExampleRowData>();

    const query = useQuery<IExampleRowData[]>({
        queryKey: ['posts', table.state.sorting, table.state.pagination, table.state.globalFilter],
        queryFn: async () => {
            const searchParams = new URLSearchParams({
                _sort: table.state.sorting?.[0]?.id ?? 'userId',
                _order: table.state.sorting?.[0]?.desc ? 'desc' : 'asc',
                _page: (table.state.pagination.pageIndex + 1).toString(),
                _limit: table.state.pagination.pageSize.toString(),
                title_like: table.state.globalFilter,
            });
            if (!table.state.globalFilter) {
                searchParams.delete('title_like');
            }
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);
            const body = await response.json();
            // Give the total number of entries to the table
            // This number is used to determine the total number of pages and the empty states
            table.setTotalEntries(Number(response.headers.get('x-total-count')));
            return body;
        },
        // Keeping the previous data while fetching provides a smoother experience
        placeholderData: keepPreviousData,
        // If you want to refresh the data every 10 seconds
        // refetchInterval: 10 * 1000
    });

    return (
        <Table<IExampleRowData>
            store={table}
            data={query.data}
            columns={columns}
            loading={query.isLoading || query.isFetching}
            getRowId={({id}) => id.toString()}
        >
            <Table.Header>
                <Table.Filter placeholder="Search posts by title" />
            </Table.Header>
            <Table.NoData>
                <NoData isFiltered={table.isFiltered} clearFilters={table.clearFilters} />
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

const NoData: FunctionComponent<{isFiltered: boolean; clearFilters: () => void}> = ({clearFilters, isFiltered}) =>
    isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for those filters</Title>
            <Button.Tertiary onClick={clearFilters}>Clear filters</Button.Tertiary>
        </BlankSlate>
    ) : (
        <BlankSlate>
            <Title order={4}>No Data</Title>
        </BlankSlate>
    );
