import {ColumnDef, createColumnHelper, Table, Text, useTable} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {useMemo} from 'react';

interface IEmployeeData {
    employeeId: string;
    departmentId: string;
    fullName: string;
    jobTitle: string;
    hireDate: Date;
    salary: number;
    isFullTime: boolean;
    email: string;
    body: string;
}

const columnHelper = createColumnHelper<IEmployeeData>();

const columns: Array<ColumnDef<IEmployeeData>> = [
    columnHelper.accessor('employeeId', {
        header: 'Employee ID',
        cell: (info) => info.row.original.employeeId,
        enableHiding: false, // this column will always be visible
    }),
    columnHelper.accessor('fullName', {
        header: 'Name',
        cell: (info) => info.row.original.fullName,
    }),
    columnHelper.accessor('departmentId', {
        header: 'Department ID',
        cell: (info) => info.row.original.departmentId,
    }),
    columnHelper.accessor('email', {
        header: 'Email',
        cell: (info) => info.row.original.email,
    }),
    columnHelper.accessor('isFullTime', {
        header: 'Full Time',
        cell: (info) => info.row.original.isFullTime?.toString(),
    }),
    columnHelper.accessor('salary', {
        header: 'Salary',
        cell: (info) => info.row.original.salary,
    }),
    columnHelper.accessor('jobTitle', {
        header: 'Job Title',
        cell: (info) => info.row.original.jobTitle,
    }),
    columnHelper.accessor('hireDate', {
        header: 'Hire Date',
        cell: (info) => info.row.original.hireDate?.toDateString(),
    }),
];

const Demo = () => {
    const data = useMemo(() => makeData(10), []);
    const table = useTable<IEmployeeData>({
        initialState: {
            columnVisibility: {hireDate: false, salary: false, email: false, isFullTime: false},
        },
    });

    return (
        <Table
            store={table}
            data={data}
            getRowId={({employeeId}) => employeeId?.toString()}
            columns={columns}
            // Add the column selector as the rightmost column in the table header
            columnsSelectorColumn={{
                label: 'Edit columns',
                maxSelectableColumns: 5,
                footer: (
                    <Text size="sm" c="dimmed">
                        You can display up to 5 columns
                    </Text>
                ),
                limitReachedTooltip:
                    'You have reached the maximum display limit of 5 columns. Uncheck a column to display another one.',
            }}
        >
            <Table.Header borderTop={false} />
        </Table>
    );
};
export default Demo;

const makeData = (length: number): IEmployeeData[] =>
    Array(length)
        .fill(0)
        .map(() => ({
            employeeId: faker.string.uuid(),
            departmentId: faker.person.jobType(),
            fullName: faker.person.fullName(),
            jobTitle: faker.person.jobTitle(),
            hireDate: faker.date.past(),
            salary: faker.number.float(),
            isFullTime: faker.datatype.boolean(),
            email: faker.internet.email(),
            body: faker.lorem.paragraph(),
        }));
