import {ColumnDef, createColumnHelper, InlineConfirm, showNotification, Table, useTable} from '@coveord/plasma-mantine';
import {InlineConfirmComponentsProps} from '@coveord/plasma-mantine';
import {DeleteSize16Px} from '@coveord/plasma-react-icons';
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
    columnHelper.accessor('age', {
        header: 'Age',
        enableSorting: false,
    }),
];

const Demo = () => {
    // How you manage your data and loading state is up to you
    // Just make sure data is a stable reference and isn't recreated on every render
    // Here for the sake of example we're building 10 rows of mock data
    const data = useMemo(() => makeData(10), []);

    // `useTable` hook provides a table store.
    // The store contains the current state of the table and methods to update it.
    const table = useTable<Person>({
        initialState: {totalEntries: data.length},
    });

    return (
        <Table<Person>
            store={table}
            data={data}
            columns={columns}
            getRowId={({id}) => id.toString()}
            getRowActions={(selected: Person[]) => [
                {
                    group: '$$primary',
                    component: (
                        <InlineConfirm.Target
                            component={Table.ActionItem}
                            inlineConfirmId="delete"
                            leftSection={<DeleteSize16Px height={16} />}
                        >
                            Delete
                        </InlineConfirm.Target>
                    ),
                },
                {
                    group: '$$confirmPrompt',
                    component: <MyAction inlineConfirmId="delete" person={selected[0]} />,
                },
            ]}
        >
            <Table.Header />
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
};

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            pic: faker.image.avatar(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int(40),
            bio: faker.lorem.sentences({min: 1, max: 5}),
        }));

const MyAction = ({person, inlineConfirmId}: {person: Person} & InlineConfirmComponentsProps) => (
    <InlineConfirm.Prompt
        inlineConfirmId={inlineConfirmId}
        label={`Are you sure you want to delete ${person.firstName} ${person.lastName}?`}
        onConfirm={() => showNotification({message: 'Confirm clicked', autoClose: true})}
        onCancel={() => showNotification({message: 'Cancel clicked', autoClose: true})}
    />
);
