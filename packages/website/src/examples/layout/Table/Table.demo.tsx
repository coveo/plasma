import {
    BlankSlate,
    Box,
    Button,
    ColumnDef,
    createColumnHelper,
    DateRangePickerPreset,
    onTableChangeEvent,
    Table,
    Title,
    useTable,
} from '@coveord/plasma-mantine';
import {EditSize16Px} from '@coveord/plasma-react-icons';
import dayjs from 'dayjs';
import {FunctionComponent, useState} from 'react';

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
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [pages, setPages] = useState(1);

    const fetchData: onTableChangeEvent<IExampleRowData> = async (state) => {
        setLoading(true);
        const searchParams = new URLSearchParams({
            _sort: state.sorting?.[0]?.id ?? 'userId',
            _order: state.sorting?.[0]?.desc ? 'desc' : 'asc',
            _page: (state.pagination.pageIndex + 1).toString(),
            _limit: state.pagination.pageSize.toString(),
            userId: state.predicates.user,
            title_like: state.globalFilter,
        });
        if (state.predicates.user === '') {
            searchParams.delete('userId');
        }
        if (!state.globalFilter) {
            searchParams.delete('title_like');
        }
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`);
            const body = await response.json();
            setData(body);
            setPages(Math.ceil(Number(response.headers.get('x-total-count')) / state.pagination?.pageSize));
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Table
            data={data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            noDataChildren={<NoData />}
            onMount={fetchData}
            onChange={fetchData}
            loading={loading}
            initialState={{dateRange: [previousDay, today], predicates: {user: ''}}}
            getExpandChildren={(datum) => <Box py="xs">{datum.body}</Box>}
        >
            {/* you can override background color with: sx={{backgroundColor: 'white'}} for Header and Footer */}
            <Table.Header>
                <Table.Actions>{(datum: IExampleRowData) => <TableActions datum={datum} />}</Table.Actions>
                <UserPredicate />
                <Table.Filter placeholder="Search posts by title" />
                <Table.DateRangePicker
                    rangeCalendarProps={{maxDate: dayjs().endOf('day').toDate()}}
                    presets={DatePickerPresets}
                />
            </Table.Header>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination totalPages={pages} />
            </Table.Footer>
        </Table>
    );
};
export default Demo;

const NoData: FunctionComponent = () => {
    const {clearFilters, isFiltered} = useTable();

    return isFiltered ? (
        <BlankSlate>
            <Title order={4}>No data found for those filters</Title>
            <Button onClick={clearFilters}>Clear filters</Button>
        </BlankSlate>
    ) : (
        <BlankSlate>
            <Title order={4}>No Data</Title>
        </BlankSlate>
    );
};

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
