import {ColumnDef, createColumnHelper, Table, useTable} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {useMemo} from 'react';

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
    columnHelper.accessor('status', {
        header: 'Status',
        enableSorting: false,
    }),
    columnHelper.accessor('age', {
        header: 'Age',
        enableSorting: false,
    }),
];

const Demo = () => {
    const data = useMemo(() => makeData(10), []);
    const table = useTable<Person>({
        initialState: {totalEntries: data.length, predicates: {status: 'ALL', age: 'ANY'}},
    });

    // we're filtering the data ourselves here for the example,
    // but normally you would just send the predicate value to the backend
    const filteredData = useMemo(
        () =>
            data
                .filter((person) => ageFilter(person, table.state.predicates))
                .filter((person) => statusFilter(person, table.state.predicates)),
        [table.state.predicates, data],
    );

    return (
        <Table<Person> store={table} data={filteredData} columns={columns} getRowId={({id}) => id.toString()}>
            {/* Table demo is in a card with a border, remove the one from the header */}
            <Table.Header borderTop={false}>
                <Table.Predicate
                    id="age"
                    label="Age group"
                    data={[
                        {
                            value: 'ANY',
                            label: 'Any',
                        },
                        {value: 'below20', label: 'Below 20'},
                        {value: 'between20to60', label: '20 to 60'},
                        {value: 'above60', label: 'Above 60'},
                    ]}
                />
                <Table.Predicate
                    id="status"
                    label="Status"
                    data={[
                        {
                            value: 'ALL',
                            label: 'All',
                        },
                        {value: 'relationship', label: 'In a relationship'},
                        {value: 'complicated', label: 'Its complicated'},
                        {value: 'single', label: 'Single'},
                    ]}
                />
            </Table.Header>
        </Table>
    );
};
export default Demo;

export type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    bio: string;
    pic: string;
    status: 'relationship' | 'complicated' | 'single';
};

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            pic: faker.image.avatar(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int({min: 1, max: 99}),
            bio: faker.lorem.sentences({min: 1, max: 5}),
            status: faker.helpers.shuffle<Person['status']>(['relationship', 'complicated', 'single'])[0],
        }));

const ageFilter = (row: Person, predicates: Record<string, string>) => {
    const age = row['age'];
    const filterValue = predicates['age'];

    switch (filterValue) {
        case 'below20':
            return age < 20;
        case 'above60':
            return age > 60;
        case 'between20to60':
            return age >= 20 && age <= 60;
        default:
            return true;
    }
};

const statusFilter = (row: Person, predicates: Record<string, string>) => {
    const status = row['status'];
    const filterValue = predicates['status'];

    return filterValue === 'ALL' || status === filterValue;
};
