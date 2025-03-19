import {
    ColumnDef,
    createColumnHelper,
    DateRangePickerPreset,
    DateRangePickerValue,
    getFilteredRowModel,
    Table,
    TableProps,
    useTable,
} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import {useMemo} from 'react';

dayjs.extend(LocalizedFormat);

const columnHelper = createColumnHelper<Person>();

/**
 * Define your columns outside the component rendering the table
 * (or memoize them) to avoid unnecessary render loops
 */
const columns: Array<ColumnDef<Person>> = [
    columnHelper.accessor('firstName', {
        header: 'First name',
        enableSorting: false,
    }),
    columnHelper.accessor('lastName', {
        header: 'Last name',
        enableSorting: false,
    }),
    columnHelper.accessor('lastActivity', {
        header: 'Activity',
        enableSorting: false,
        cell: ({getValue}) => dayjs(getValue()).format('LLL'),
    }),
];

const today: Date = dayjs().endOf('day').toDate();
const previousDay: Date = dayjs().subtract(1, 'day').startOf('day').toDate();
const previousWeek: Date = dayjs().subtract(1, 'week').startOf('day').toDate();
const datePickerPresets: Record<string, DateRangePickerPreset> = {
    lastDay: {label: 'Last 24 hours', range: [previousDay, today]},
    lastWeek: {label: 'Last week', range: [previousWeek, today]},
};

const options: TableProps<Person>['options'] = {
    getFilteredRowModel: getFilteredRowModel(),
};

const Demo = () => {
    const data = useMemo(() => makeData(40), []);
    const table = useTable<Person>({
        initialState: {totalEntries: data.length, pagination: {pageSize: 25}, dateRange: [previousWeek, today]},
    });

    // we're filtering the data ourselves here for the example,
    // but normally you would just send the date range to the backend
    const filteredData = useMemo(
        () => data.filter((person) => lastActivityDateFilter(person, table.state.dateRange)),
        [table.state.dateRange, data],
    );

    return (
        <Table<Person>
            store={table}
            data={filteredData}
            columns={columns}
            options={options}
            getRowId={({id}) => id.toString()}
        >
            <Table.Header>
                <Table.DateRangePicker
                    rangeCalendarProps={{maxDate: dayjs().endOf('day').toDate()}}
                    presets={datePickerPresets}
                />
            </Table.Header>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    lastActivity: Date;
};

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            lastActivity: faker.date.recent({days: 7}),
        }));

const lastActivityDateFilter = (row: Person, dateRange: DateRangePickerValue) => {
    const lastActivity = row['lastActivity'];

    return dayjs(lastActivity).isAfter(dateRange[0]) && dayjs(lastActivity).isBefore(dateRange[1]);
};
