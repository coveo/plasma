import {BlankSlate, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';
import {NoContentSize32Px} from '@coveord/plasma-react-icons';
import {FunctionComponent} from 'react';

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

const EmptyState: FunctionComponent = () => (
    <BlankSlate withBorder={false}>
        <NoContentSize32Px height={64} />
        <Title order={4}>Empty State</Title>
        This table is vacant, in other words it has no data even when no filter is applied.
    </BlankSlate>
);

const Demo = () => {
    /**
     * In order to determine properly when to display the empty state, the table needs to know the `totalEntries`.
     * Be sure to set it either in the `initialState` or by using `store.setTotalEntries()`
     */
    const data: Person[] = [];
    const table = useTable<Person>({
        initialState: {
            totalEntries: data.length,
        },
    });
    return (
        <Table store={table} data={[]} columns={columns}>
            <Table.NoData>
                <EmptyState />
            </Table.NoData>
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
