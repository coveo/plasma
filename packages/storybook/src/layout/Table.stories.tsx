import {
    Avatar,
    Box,
    Card,
    Center,
    createColumnHelper,
    DateRangePickerPreset,
    DatesRangeValue,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    Group,
    renderTableCell,
    SimpleGrid,
    Stack,
    Table,
    TableAction,
    TableLayout,
    TableLayoutProps,
    TableProps,
    Title,
    useTable,
    useTableContext,
} from '@coveord/plasma-mantine';
import {IconEdit, IconLayoutGrid, IconTrash} from '@coveord/plasma-react-icons';
import {faker} from '@faker-js/faker';
import type {Meta, StoryObj} from '@storybook/react-vite';
import dayjs from 'dayjs';
import LocalizedFormat from 'dayjs/plugin/localizedFormat.js';
import {useMemo} from 'react';

dayjs.extend(LocalizedFormat);

type StoryArgs = TableProps<Person> & {
    withFilter: boolean;
    withPredicateFilter: boolean;
    withHeader: boolean;
    withPagination: boolean;
    withSorting: boolean;
    withDateRangePicker: boolean;
    withData: boolean;
    withLayoutSelector: boolean;
    withRowActions: boolean;
    withRowMultiSelection: boolean;
    withLastUpdated: boolean;
    withCollapsibleRows: boolean;
    collapsibleBehavior: 'collapse' | 'accordion';
};

const meta: Meta<StoryArgs> = {
    title: '@components/layout/Table',
    component: Table,
};
export default meta;
type Story = StoryObj<StoryArgs>;

type Person = {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    bio: string;
    pic: string;
    lastActivity: Date;
};

const columnHelper = createColumnHelper<Person>();

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
            lastActivity: faker.date.recent({days: 7}),
        }));

const options: TableProps<Person>['options'] = {
    // Specify the row models you need in the table options
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
};

const today = dayjs().endOf('day').toISOString();
const previousDay = dayjs().subtract(1, 'day').startOf('day').toISOString();
const previousWeek = dayjs().subtract(1, 'week').startOf('day').toISOString();
const datePickerPresets: Record<string, DateRangePickerPreset> = {
    lastDay: {label: 'Last 24 hours', range: [previousDay, today]},
    lastWeek: {label: 'Last week', range: [previousWeek, today]},
};

const TableCards = <TData,>(props: TableLayoutProps<TData>) => {
    const {table, store} = useTableContext<TData>();
    const headers = table
        .getFlatHeaders()
        .filter((header) => header.column.id !== 'select')
        .map((header) => (
            <Title order={6} key={header.id}>
                {renderTableCell(header.column.columnDef.header, header.getContext())}
            </Title>
        ));

    const cards = table.getRowModel().rows.map((row) => (
        <Card
            key={row.id}
            mod={{selected: row.getIsSelected()}}
            variant={store.rowSelectionEnabled ? 'hover' : undefined}
            onClick={(event) => {
                if (store.rowSelectionEnabled) {
                    if (event.detail <= 1) {
                        row.toggleSelected();
                    } else {
                        props.onRowDoubleClick?.(row.original, row.index, row);
                    }
                }
            }}
        >
            <Stack gap="sm">
                {row
                    .getVisibleCells()
                    .filter((cell) => cell.column.id !== 'select')
                    .map((cell, index) => (
                        <Box key={cell.id}>
                            <Table.Loading visible={props.loading}>
                                {headers[index]}
                                {renderTableCell(cell.column.columnDef.cell, cell.getContext())}
                            </Table.Loading>
                        </Box>
                    ))}
            </Stack>
        </Card>
    ));

    return (
        <tr>
            <td style={{padding: 0}}>
                <SimpleGrid cols={4} spacing="lg" px="xl" py="lg">
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
CardLayout.Icon = IconLayoutGrid;

export const Demo: Story = {
    args: {
        loading: false,
        withFilter: false,
        withPredicateFilter: false,
        withHeader: true,
        withPagination: false,
        withSorting: false,
        withDateRangePicker: false,
        withData: true,
        withLayoutSelector: false,
        withRowActions: false,
        withRowMultiSelection: false,
        withLastUpdated: false,
        withCollapsibleRows: false,
        collapsibleBehavior: 'collapse',
    },
    argTypes: {
        collapsibleBehavior: {
            if: {arg: 'withCollapsibleRows'},
            control: 'radio',
            options: ['collapse', 'accordion'],
            defaultValue: 'collapse',
        },
    },
    render: ({
        loading,
        withFilter,
        withPredicateFilter,
        withHeader,
        withPagination,
        withSorting,
        withDateRangePicker,
        withData,
        withLayoutSelector,
        withRowActions,
        withRowMultiSelection,
        withLastUpdated,
        withCollapsibleRows,
        collapsibleBehavior,
    }) => {
        const columns = useMemo(() => {
            const baseColumns = [
                columnHelper.accessor('firstName', {
                    header: 'First name',
                    enableSorting: withSorting,
                }),
                columnHelper.accessor('lastName', {
                    header: 'Last name',
                    enableSorting: withSorting,
                }),
                columnHelper.accessor('age', {
                    header: 'Age',
                    enableSorting: withSorting,
                }),
                columnHelper.accessor('lastActivity', {
                    header: 'Activity',
                    enableSorting: withSorting,
                    cell: ({getValue}) => dayjs(getValue()).format('LLL'),
                }),
            ];
            if (withCollapsibleRows) {
                const collapsibleColumn =
                    collapsibleBehavior === 'accordion' ? Table.AccordionColumn : Table.CollapsibleColumn;
                return [...baseColumns, collapsibleColumn] as typeof baseColumns;
            }
            return baseColumns;
        }, [withSorting, withCollapsibleRows, collapsibleBehavior]);
        const data = useMemo(() => (withData ? makeData(10) : []), [withData]);

        const table = useTable<Person>({
            initialState: {
                totalEntries: data.length,
                pagination: withPagination ? {pageSize: 5} : undefined,
                dateRange: withDateRangePicker ? [previousWeek, today] : undefined,
                predicates: withPredicateFilter ? {age: 'ANY'} : undefined,
            },
            enableRowSelection: withRowActions,
            enableMultiRowSelection: withRowMultiSelection,
        });

        const filteredData = useMemo(
            () =>
                data
                    .filter((person) =>
                        withDateRangePicker ? lastActivityDateFilter(person, table.state.dateRange) : true,
                    )
                    .filter((person) => (withPredicateFilter ? ageFilter(person, table.state.predicates) : true)),
            [table.state.dateRange, data, withDateRangePicker, table.state.predicates, withPredicateFilter],
        );
        return (
            <Table<Person>
                options={options}
                columns={columns}
                data={filteredData}
                store={table}
                getRowId={({id}) => id.toString()}
                layouts={withLayoutSelector ? [Table.Layouts.Rows, CardLayout] : undefined}
                loading={loading}
                getRowExpandedContent={
                    withCollapsibleRows
                        ? (datum) => (
                              <Group py="xs" px="md" wrap="nowrap">
                                  <Avatar src={datum.pic} />
                                  {datum.bio}
                              </Group>
                          )
                        : undefined
                }
                layoutProps={
                    withRowActions
                        ? {onRowDoubleClick: (row) => alert(`Row double clicked: ${row.firstName} ${row.lastName}`)}
                        : undefined
                }
                getRowActions={
                    withRowActions
                        ? (selected: Person[]): TableAction[] =>
                              selected.length === 1
                                  ? [
                                        {
                                            group: '$$primary',
                                            component: (
                                                <Table.ActionItem
                                                    onClick={() =>
                                                        alert(`Action triggered on a single row: ${selected[0].id}`)
                                                    }
                                                    leftSection={<IconEdit height={16} />}
                                                    key="single"
                                                >
                                                    Single row action
                                                </Table.ActionItem>
                                            ),
                                        },
                                    ]
                                  : [
                                        {
                                            group: '$$primary',
                                            component: (
                                                <Table.ActionItem
                                                    onClick={() =>
                                                        alert(
                                                            `Bulk action triggered on multiple rows: ${selected.map(({id}) => id).join(', ')}`,
                                                        )
                                                    }
                                                    leftSection={<IconTrash height={16} />}
                                                    key="bulk"
                                                >
                                                    Bulk action
                                                </Table.ActionItem>
                                            ),
                                        },
                                    ]
                        : undefined
                }
            >
                {withHeader && (
                    <Table.Header>
                        {withFilter && <Table.Filter />}
                        {withDateRangePicker && (
                            <Table.DateRangePicker
                                startProps={{}}
                                endProps={{}}
                                rangeCalendarProps={{maxDate: dayjs().endOf('day').toDate()}}
                                presets={datePickerPresets}
                            />
                        )}
                        {withPredicateFilter && (
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
                        )}
                    </Table.Header>
                )}
                <Table.NoData>
                    {table.isFiltered ? (
                        <Center p="xl">No results match the current filter</Center>
                    ) : (
                        <Center p="xl">No data available</Center>
                    )}
                </Table.NoData>
                <Table.Footer>
                    {withPagination && (
                        <>
                            <Table.PerPage values={[5, 10, 25]} />
                            <Table.Pagination />
                        </>
                    )}
                    {withLastUpdated && <Table.LastUpdated />}
                </Table.Footer>
            </Table>
        );
    },
};

const lastActivityDateFilter = (row: Person, dateRange: DatesRangeValue) => {
    const lastActivity = dayjs(row['lastActivity']);

    return (
        lastActivity.isSame(dateRange[0]) ||
        lastActivity.isSame(dateRange[1]) ||
        (lastActivity.isAfter(dateRange[0]) && lastActivity.isBefore(dateRange[1]))
    );
};

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
