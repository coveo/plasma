import {ColumnDef, createColumnHelper, Table, TableActionsColumn, useTable} from '@coveord/plasma-mantine';
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
    phone: string;
    address: string;
    city: string;
    country: string;
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
    columnHelper.accessor('phone', {
        header: 'Phone',
        cell: (info) => info.row.original.phone,
    }),
    columnHelper.accessor('address', {
        header: 'Address',
        cell: (info) => info.row.original.address,
    }),
    columnHelper.accessor('city', {
        header: 'City',
        cell: (info) => info.row.original.city,
    }),
    columnHelper.accessor('country', {
        header: 'Country',
        cell: (info) => info.row.original.country,
    }),

    TableActionsColumn as ColumnDef<IEmployeeData>,
];

const Demo = () => {
    const data = useMemo(() => makeData(10), []);

    const table = useTable<IEmployeeData>({
        initialState: {
            columnVisibility: {
                hireDate: false,
                salary: false,
                email: false,
                isFullTime: false,
                phone: false,
                address: false,
                city: false,
                country: false,
            },
        },
    });

    return (
        <Table<IEmployeeData>
            store={table}
            data={data}
            columns={columns}
            getRowId={({employeeId}) => employeeId?.toString()}
            options={{
                meta: {
                    rowConfigurable: {
                        maxSelectableColumns: 5,
                        limitReachedTooltip: "That's enough columns!",
                        alwaysVisibleTooltip: 'You cannot hide this column.',
                    },
                },
            }}
        />
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
            phone: faker.phone.number(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            country: faker.location.country(),
        }));
