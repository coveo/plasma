import {
    Box,
    ColumnDef,
    createColumnHelper,
    Paper,
    renderTableCell,
    SimpleGrid,
    Table,
    TableLayout,
    TableLayoutProps,
    Title,
    useTable,
    useTableContext,
} from '@coveord/plasma-mantine';
import {CardSize16Px, EditSize16Px} from '@coveord/plasma-react-icons';
import {faker} from '@faker-js/faker';
import {useMemo} from 'react';

const TableCards = <TData,>(props: TableLayoutProps<TData>) => {
    const {table} = useTableContext<TData>();
    const headers = table
        .getFlatHeaders()
        .map((header) => (
            <Title order={6}>{renderTableCell(header.column.columnDef.header, header.getContext())}</Title>
        ));
    const cards = table.getRowModel().rows.map((row) => {
        const isSelected = !!row.getIsSelected();
        return (
            <Paper
                key={row.id}
                shadow={isSelected ? 'xs' : 'md'}
                withBorder={isSelected}
                p="md"
                onClick={(event) => {
                    if (event.detail <= 1) {
                        row.toggleSelected(true);
                    } else {
                        props.doubleClickAction(row.original);
                    }
                }}
            >
                <SimpleGrid cols={3} spacing="md">
                    {row.getVisibleCells().map((cell, index) => (
                        <Box key={cell.id}>
                            <Table.Loading visible={props.loading}>
                                {headers[index]}
                                {renderTableCell(cell.column.columnDef.cell, cell.getContext())}
                            </Table.Loading>
                        </Box>
                    ))}
                </SimpleGrid>
            </Paper>
        );
    });

    return (
        <tr>
            <td style={{padding: 0}}>
                <SimpleGrid cols={2} spacing="lg" px="xl" py="lg">
                    {cards}
                </SimpleGrid>
            </td>
        </tr>
    );
};

const CardLayout: TableLayout = ({children}) => <>{children}</>;
CardLayout.Header = () => null;
CardLayout.displayName = 'Cards';
CardLayout.Body = TableCards;
CardLayout.Icon = CardSize16Px;

const Demo = () => {
    const data = useMemo(() => makeData(10), []);
    const table = useTable<Person>({initialState: {pagination: {pageSize: 10}}});
    return (
        <Table<Person>
            store={table}
            data={data}
            columns={columns}
            getRowId={({id}) => id}
            layouts={[Table.Layouts.Rows, CardLayout]}
            doubleClickAction={(person) => alert(`Double clicked ${person.firstName}`)}
        >
            <Table.Actions>
                {(selected: Person) => [
                    <Table.ActionItem
                        primary
                        onClick={() => alert(`Clicked ${selected.firstName}`)}
                        leftSection={<EditSize16Px height={16} />}
                    >
                        Action 1
                    </Table.ActionItem>,
                ]}
            </Table.Actions>
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
};

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
];

const makeData = (len: number): Person[] =>
    Array(len)
        .fill(0)
        .map(() => ({
            id: faker.string.uuid(),
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            age: faker.number.int(40),
        }));
