import {
    BlankSlate,
    Box,
    Button,
    ColumnDef,
    createColumnHelper,
    DateRangePickerPreset,
    Table,
    Title,
    useTable,
} from '@coveord/plasma-mantine';
import {EditSize16Px} from '@coveord/plasma-react-icons';
import dayjs from 'dayjs';
import {FunctionComponent} from 'react';
import {useQuery, keepPreviousData} from '@tanstack/react-query';

interface IExampleRowData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const columnHelper = createColumnHelper<IExampleRowData>();

/**
 * Define your columns outside the component rendering the table
 * (or memoize them) to avoid unnecessary render loops
 */
const columns: Array<ColumnDef<IExampleRowData>> = [
    columnHelper.accessor('userId', {
        header: 'User ID',
        cell: (info) => info.row.original.userId,
    }),
    columnHelper.accessor('id', {
        header: 'Post ID',
        cell: (info) => info.row.original.id,
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        cell: (info) => info.row.original.title,
    }),
    Table.CollapsibleColumn as ColumnDef<IExampleRowData>,
    // or if you prefer an accordion behaviour
    // Table.AccordionColumn as ColumnDef<IExampleRowData>,
];

const Demo = () => {
    const table = useTable<IExampleRowData>({
        initialState: {dateRange: [previousDay, today], predicates: {user: ''}},
    });

    const query = useQuery<IExampleRowData[]>({
        queryKey: [
            'posts',
            table.state.sorting,
            table.state.pagination,
            table.state.predicates,
            table.state.globalFilter,
        ],
        queryFn: async () => {
            const searchParams = new URLSearchParams({
                _sort: table.state.sorting?.[0]?.id ?? 'userId',
                _order: table.state.sorting?.[0]?.desc ? 'desc' : 'asc',
                _page: (table.state.pagination.pageIndex + 1).toString(),
                _limit: table.state.pagination.pageSize.toString(),
                userId: table.state.predicates.user,
                title_like: table.state.globalFilter,
            });
            if (table.state.predicates.user === '') {
                searchParams.delete('userId');
            }
            if (!table.state.globalFilter) {
                searchParams.delete('title_like');
            }
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);
            const body = await response.json();
            table.setTotalEntries(Number(response.headers.get('x-total-count')));
            return body;
        },
        placeholderData: keepPreviousData,
    });

    return (
        <Table<IExampleRowData>
            store={table}
            loading={query.isLoading || query.isFetching}
            data={query.data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            getExpandChildren={(datum) => <Box py="xs">{datum.body}</Box>}
        >
            <Table.Header>
                <UserPredicate />
                <Table.Filter placeholder="Search posts by title" />
                <Table.DateRangePicker
                    rangeCalendarProps={{maxDate: dayjs().endOf('day').toDate()}}
                    presets={DatePickerPresets}
                />
                <Table.Actions>{(datum: IExampleRowData) => <TableActions datum={datum} />}</Table.Actions>
            </Table.Header>
            <Table.NoData>
                <NoData isFiltered={table.isFiltered} clearFilters={table.clearFilters} />
            </Table.NoData>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

const NoData: FunctionComponent<{isFiltered: boolean; clearFilters: () => void}> = ({clearFilters, isFiltered}) =>
    isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for those filters</Title>
            <Button onClick={clearFilters}>Clear filters</Button>
        </BlankSlate>
    ) : (
        <BlankSlate>
            <Title order={4}>No Data</Title>
        </BlankSlate>
    );

const today: Date = dayjs().startOf('day').toDate();
const previousDay: Date = dayjs().subtract(1, 'day').endOf('day').toDate();
const previousWeek: Date = dayjs().subtract(1, 'week').endOf('day').toDate();

const DatePickerPresets: Record<string, DateRangePickerPreset> = {
    lastDay: {label: 'Last 24 hours', range: [previousDay, today]},
    lastWeek: {label: 'Last week', range: [previousWeek, today]},
};

const TableActions: FunctionComponent<{datum: IExampleRowData}> = ({datum}) => {
    const actionCondition = datum.id % 2 === 0 ? true : false;
    const pressedAction = () => alert('Edit action is triggered!');
    return (
        <>
            {actionCondition ? (
                <Button variant="subtle" onClick={pressedAction} leftSection={<EditSize16Px height={16} />}>
                    Edit
                </Button>
            ) : null}
        </>
    );
};

const UserPredicate: FunctionComponent = () => (
    <Table.Predicate
        id="user"
        label="User"
        data={[
            {
                value: '',
                label: 'All',
            },
            {value: '1', label: '1'},
            {value: '2', label: '2'},
            {value: '3', label: '3'},
            {value: '4', label: '4'},
            {value: '5', label: '5'},
            {value: '6', label: '6'},
            {value: '7', label: '7'},
            {value: '8', label: '8'},
            {value: '9', label: '9'},
            {value: '10', label: '10'},
        ]}
    />
);
