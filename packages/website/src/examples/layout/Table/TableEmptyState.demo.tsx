import {BlankSlate, Button, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';
import {NoContentSize32Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

const EmptyState: FunctionComponent<{isFiltered: boolean; clearFilters: () => void; filter: string}> = ({
    clearFilters,
    isFiltered,
    filter,
}) =>
    isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for filter "{filter}"</Title>
            <Button onClick={clearFilters}>Clear filter</Button>
        </BlankSlate>
    ) : (
        <BlankSlate withBorder={false}>
            <NoContentSize32Px height={64} />
            <Title order={4}>Hello Empty State</Title>
        </BlankSlate>
    );

const Demo = () => {
    const table = useTable<Person>({initialState: {globalFilter: 'foo', pagination: {pageSize: 5}}});
    return (
        <Table store={table} data={[]} columns={columns}>
            <Table.Header>
                <Table.Filter placeholder="Search" />
            </Table.Header>
            <Table.NoData>
                <EmptyState
                    filter={table.state.globalFilter}
                    isFiltered={table.isFiltered}
                    clearFilters={table.clearFilters}
                />
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage values={[5, 10, 25]} />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

const columnHelper = createColumnHelper<Person>();

const columns: Array<ColumnDef<Person>> = [
    columnHelper.accessor('firstName', {
        header: 'First name',
        cell: (info) => info.row.original.firstName,
    }),
    columnHelper.accessor('lastName', {
        header: 'Last name',
        cell: (info) => info.row.original.lastName,
    }),
    columnHelper.accessor('age', {
        header: 'Age',
        cell: (info) => info.row.original.age,
    }),
];
