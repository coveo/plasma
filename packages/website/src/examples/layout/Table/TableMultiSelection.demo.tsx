import {
    BlankSlate,
    Button,
    ColumnDef,
    createColumnHelper,
    FilterFn,
    getFilteredRowModel,
    getPaginationRowModel,
    Table,
    TableActionsItems,
    Title,
    useDidUpdate,
    useTable,
} from '@coveord/plasma-mantine';
import {DeleteSize16Px, EditSize16Px} from '@coveord/plasma-react-icons';
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
    Table.ActionsColumn as ColumnDef<IExampleRowData>,
];

const Demo = () => {
    const data = useMemo(() => makeData(45), []);

    const table = useTable<IExampleRowData>({
        enableMultiRowSelection: true,
        initialState: {
            pagination: {pageSize: 5},
            rowSelection: {
                [data[0].id]: data[0],
                [data[1].id]: data[1],
            },
        },
    });

    useDidUpdate(() => {
        console.info(
            `Row selection changed, selected rows: ${table
                .getSelectedRows()
                .map(({id}) => id)
                .join(', ')}`,
        );
    }, [table.state.rowSelection]);

    return (
        <Table<IExampleRowData> store={table} data={data} getRowId={({id}) => id} columns={columns} options={options}>
            <Table.Actions>{rowActions}</Table.Actions>
            <Table.Header>
                <Table.Filter placeholder="Search posts by title" />
            </Table.Header>
            <Table.NoData>
                <EmptyState isFiltered={table.isFiltered} clearFilters={table.clearFilters} />
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage values={[5, 10, 25]} />
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

const rowActions = (selected: IExampleRowData | IExampleRowData[]): TableActionsItems => {
    const selectedAsArr = selected instanceof Array ? selected : [selected];
    if (selectedAsArr.length === 1) {
        return (
            <Table.ActionItem
                primary
                onClick={() => alert(`Action triggered on a single row: ${selectedAsArr[0].id}`)}
                leftSection={<EditSize16Px height={16} />}
            >
                Single row action
            </Table.ActionItem>
        );
    }
    if (selectedAsArr.length > 1) {
        return (
            <Table.ActionItem
                primary
                variant="subtle"
                onClick={() =>
                    alert(`Bulk action triggered on multiple rows: ${selectedAsArr.map(({id}) => id).join(', ')}`)
                }
                leftSection={<DeleteSize16Px height={16} />}
            >
                Bulk action
            </Table.ActionItem>
        );
    }

    return null;
};

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
