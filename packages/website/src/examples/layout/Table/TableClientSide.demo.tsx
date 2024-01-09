import {
    ColumnDef,
    createColumnHelper,
    FilterFn,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Table,
    TableProps,
} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {rankItem} from '@tanstack/match-sorter-utils';
import {useMemo} from 'react';

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
};

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int(40),
        }));

const fuzzyFilter: FilterFn<Person> = (row, columnId, value) => rankItem(row.getValue(columnId), value).passed;

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

const options: TableProps<Person>['options'] = {
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
};

const Demo = () => {
    const data = useMemo(() => makeData(45), []);
    return (
        <Table
            data={data}
            columns={columns}
            options={options}
            initialState={{pagination: {pageSize: 5}}}
            getRowId={({id}) => id}
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
};
export default Demo;
