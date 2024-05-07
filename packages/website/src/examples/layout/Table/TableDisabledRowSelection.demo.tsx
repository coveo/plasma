import {
    BlankSlate,
    Button,
    ColumnDef,
    createColumnHelper,
    FilterFn,
    getFilteredRowModel,
    getPaginationRowModel,
    Table,
    Title,
    useTable,
} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {rankItem} from '@tanstack/match-sorter-utils';
import {FunctionComponent, useMemo} from 'react';

interface IExampleRowData {
    userId: number;
    id: string;
    title: string;
    body: string;
}

const columnHelper = createColumnHelper<IExampleRowData>();
const columns: Array<ColumnDef<IExampleRowData>> = [
    columnHelper.accessor('userId', {
        header: 'User ID',
        cell: (info) => info.row.original.userId,
        enableSorting: false,
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        cell: (info) => info.row.original.title,
        enableSorting: false,
    }),
];

const Demo = () => {
    const data = useMemo(() => makeData(10), []);
    const table = useTable<IExampleRowData>({
        enableMultiRowSelection: true,
        enableRowSelection: false,
        initialState: {
            rowSelection: {
                [data[0].id]: data[0],
                [data[1].id]: data[1],
            },
        },
    });

    return (
        <Table<IExampleRowData>
            store={table}
            data={data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            options={options}
        >
            <Table.Header>
                <Table.Filter placeholder="Search posts by title" />
            </Table.Header>
            <Table.NoData>
                <EmptyState isFiltered={table.isFiltered} clearFilters={table.clearFilters} />
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

const EmptyState: FunctionComponent<{isFiltered: boolean; clearFilters: () => void}> = ({isFiltered, clearFilters}) =>
    isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for those filters</Title>
            <Button onClick={clearFilters}>Clear filters</Button>
        </BlankSlate>
    ) : (
        <BlankSlate>
            <Title order={4}>No Data</Title>
        </BlankSlate>
    );

const makeData = (length: number): IExampleRowData[] =>
    Array(length)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            title: faker.lorem.sentence(),
            userId: faker.number.int(),
            body: faker.lorem.paragraph(),
        }));

const fuzzyFilter: FilterFn<IExampleRowData> = (row, columnId, value) => rankItem(row.getValue(columnId), value).passed;

const options = {
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
};
