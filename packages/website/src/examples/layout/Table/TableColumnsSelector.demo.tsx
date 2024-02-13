import {Box, ColumnDef, createColumnHelper, onTableChangeEvent, Table} from '@coveord/plasma-mantine';
import {useState} from 'react';

interface IEmployeeData {
    employeeId: number;
    departmentId: number;
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
        setData(employeesData);
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
                />
            </Table.Header>
        </Table>
    );
};
export default Demo;

const employeesData: IEmployeeData[] = [
    {
        employeeId: 1,
        departmentId: 101,
        fullName: 'John Doe',
        jobTitle: 'Software Engineer',
        hireDate: new Date('2016-07-20'),
        salary: 70000,
        isFullTime: true,
        email: 'john.doe@example.com',
        body: 'coucou',
    },
    {
        employeeId: 2,
        departmentId: 102,
        fullName: 'Jane Smith',
        jobTitle: 'Product Manager',
        hireDate: new Date('2018-11-15'),
        salary: 80000,
        isFullTime: true,
        email: 'jane.smith@example.com',
        body: 'coucou',
    },
    {
        employeeId: 3,
        departmentId: 103,
        fullName: 'Bob Johnson',
        jobTitle: 'Data Analyst',
        hireDate: new Date('2019-02-01'),
        salary: 65000,
        isFullTime: true,
        email: 'bob.johnson@example.com',
        body: 'coucou',
    },
    {
        employeeId: 4,
        departmentId: 104,
        fullName: 'Alice Williams',
        jobTitle: 'UX Designer',
        hireDate: new Date('2020-05-17'),
        salary: 75000,
        isFullTime: true,
        email: 'alice.williams@example.com',
        body: 'coucou',
    },
    {
        employeeId: 5,
        departmentId: 105,
        fullName: 'Charlie Brown',
        jobTitle: 'HR Manager',
        hireDate: new Date('2017-08-30'),
        salary: 80000,
        isFullTime: true,
        email: 'charlie.brown@example.com',
        body: 'coucou',
    },
    {
        employeeId: 6,
        departmentId: 106,
        fullName: 'David Davis',
        jobTitle: 'Network Administrator',
        hireDate: new Date('2018-03-12'),
        salary: 60000,
        isFullTime: true,
        email: 'david.davis@example.com',
        body: 'coucou',
    },
    {
        employeeId: 7,
        departmentId: 107,
        fullName: 'Emily Clarke',
        jobTitle:
            'First of Her Name, Queen of the Andals and the First Men, Protector of the Seven Kingdoms, the Mother of Dragons, the Khaleesi of the Great Grass Sea, the Unburnt, the Breaker of Chains',
        hireDate: new Date('2019-07-20'),
        salary: 70000,
        isFullTime: true,
        email: 'emily.clark@example.com',
        body: 'coucou',
    },
    {
        employeeId: 8,
        departmentId: 108,
        fullName: 'Frank Miller',
        jobTitle: 'Sales Representative',
        hireDate: new Date('2020-11-15'),
        salary: 65000,
        isFullTime: true,
        email: 'frank.miller@example.com',
        body: 'coucou',
    },
    {
        employeeId: 9,
        departmentId: 109,
        fullName: 'Grace Lee',
        jobTitle: 'Accountant',
        hireDate: new Date('2017-02-01'),
        salary: 75000,
        isFullTime: true,
        email: 'grace.lee@example.com',
        body: 'coucou',
    },
    {
        employeeId: 10,
        departmentId: 110,
        fullName: 'Henry Wilson',
        jobTitle: 'Project Manager',
        hireDate: new Date('2016-05-17'),
        salary: 85000,
        isFullTime: true,
        email: 'henry.wilson@example.com',
        body: 'coucou',
    },
];

const columnNames: Record<string, string> = {
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
