import {Box, ColumnDef, createColumnHelper, onTableChangeEvent, Table, Text} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {useState} from 'react';

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
    columnHelper.accessor('fullName', {
        header: 'Name',
        cell: (info) => info.row.original.fullName,
    }),
    columnHelper.accessor('employeeId', {
        header: 'Employee ID',
        cell: (info) => info.row.original.employeeId,
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
    Table.CollapsibleColumn as ColumnDef<IEmployeeData>,
];

const Demo = () => {
    const [data, setData] = useState(null);

    const fetchData: onTableChangeEvent<IEmployeeData> = async () => {
        setData(makeData(10));
    };

    return (
        <Table
            initialState={{columnVisibility: {hireDate: false, salary: false}}}
            data={data}
            getRowId={({employeeId}) => employeeId?.toString()}
            columns={columns}
            onMount={fetchData}
            onChange={fetchData}
            getExpandChildren={(datum) => <Box py="xs">{datum.body}</Box>}
            options={{enableHiding: true}}
        >
            <Table.Header>
                <Table.ColumnsSelector
                    label={'Edit columns'}
                    nonHideableColumns={['employeeId']}
                    maxSelectableColumns={5}
                    showVisibleCountLabel
                    columnNames={columnNames}
                    footer={<Text variant="dimmed">You can display up to 5 columns</Text>}
                    limitReachedTooltip="You have reached the maximum display limit of 5 columns. Uncheck a column to display another one."
                />
            </Table.Header>
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

const columnNames: Partial<Record<keyof IEmployeeData, string>> = {
    fullName: 'Name',
    employeeId: 'Employee ID',
    departmentId: 'Department ID',
    email: 'Email',
    isFullTime: 'Full Time',
    salary: 'Salary',
    jobTitle: 'Job Title',
    hireDate: 'Hire Date',
    body: 'Body',
};
