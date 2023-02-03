import {
    ColumnDef,
    createColumnHelper,
    Table,
    getSortedRowModel,
    TableProps,
    getPaginationRowModel,
    getFilteredRowModel,
    FilterFn,
} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {rankItem} from '@tanstack/match-sorter-utils';
import {useState} from 'react';

export type Person = {
    firstName: string;
    lastName: string;
    age: number;
};

const makeData = (len: number) =>
    Array(len)
        .fill(0)
        .map(() => ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            age: faker.datatype.number(40),
        }));

const fuzzyFilter: FilterFn<Person> = (row, columnId, value) => rankItem(row.getValue(columnId), value).passed;
export default () => {
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
    const [data] = useState(() => makeData(45));
    const options: TableProps<Person>['options'] = {
        globalFilterFn: fuzzyFilter,
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
    };
    return (
        <Table data={data} columns={columns} options={options} initialState={{pagination: {pageSize: 5}}}>
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
