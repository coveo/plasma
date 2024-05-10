import {Avatar, ColumnDef, createColumnHelper, Group, Table, useTable} from '@coveord/plasma-mantine';
import {faker} from '@faker-js/faker';
import {useMemo} from 'react';

const columnHelper = createColumnHelper<Person>();

const columns: Array<ColumnDef<Person>> = [
    columnHelper.accessor('firstName', {
        header: 'First name',
    }),
    columnHelper.accessor('lastName', {
        header: 'Last name',
    }),
    columnHelper.accessor('age', {
        header: 'Age',
    }),
    // Add the pre-built collapsible column at the end
    Table.CollapsibleColumn as ColumnDef<Person>,
    // or if you prefer an accordion behaviour
    // Table.AccordionColumn as ColumnDef<Person>,
];

const Demo = () => {
    const data = useMemo(() => makeData(10), []);

    const table = useTable<Person>({initialState: {totalEntries: data.length}});

    return (
        <Table<Person>
            store={table}
            data={data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            // Define the collapsible content with getExpandChildren
            getExpandChildren={(datum) => (
                <Group py="xs" px="md" wrap="nowrap">
                    <Avatar src={datum.pic} />
                    {datum.bio}
                </Group>
            )}
        />
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
