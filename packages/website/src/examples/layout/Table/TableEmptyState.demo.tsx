import {BlankSlate, Button, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';
import {NoContentSize32Px} from '@coveord/plasma-react-icons';

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

const NoData = () => {
    const {isFiltered, clearFilters, state} = useTable();

    return isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for filter "{state.globalFilter}"</Title>
            <Button onClick={clearFilters}>Clear filter</Button>
        </BlankSlate>
    ) : (
        <BlankSlate withBorder={false}>
            <NoContentSize32Px height={64} />
            <Title order={4}>Hello Empty State</Title>
        </BlankSlate>
    );
};

const Demo = () => (
    <Table
        data={[]}
        columns={columns}
        noDataChildren={<NoData />}
        initialState={{globalFilter: 'foo', pagination: {pageSize: 5}}}
    >
        <Table.Header>
            <Table.Filter placeholder="Search" />
        </Table.Header>
        <Table.Footer>
            <Table.PerPage values={[5, 10, 25]} />
            <Table.Pagination totalPages={null} />
        </Table.Footer>
    </Table>
);
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
