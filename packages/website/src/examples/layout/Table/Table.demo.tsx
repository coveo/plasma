import {
    BlankSlate,
    Button,
    ColumnDef,
    createColumnHelper,
    DateRangePickerPreset,
    Table,
    Title,
} from '@coveord/plasma-mantine';
import {FunctionComponent, useState} from 'react';

interface IExampleRowData {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default () => {
    const columnHelper = createColumnHelper<IExampleRowData>();
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
    ];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);

    const fetchData = (state: any) => {
        setLoading(true);
        fetch(
            `https://jsonplaceholder.typicode.com/posts?_sort=${
                state.sorting?.[0]?.id ? state.sorting?.[0]?.id : 'userId'
            }&_order=${state.sorting?.[0]?.desc ? 'desc' : 'asc'}&_page=${
                state.pagination.pageIndex ? state.pagination.pageIndex + 1 : 1
            }&_limit=${state.pagination.pageSize}`
        )
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(() => setPages(Math.ceil(100 / state.pagination?.pageSize)))
            .catch((e) => console.log(e));
        setLoading(false);
    };

    return (
        <Table
            data={data}
            columns={columns}
            noDataChildren={<NoData />}
            onMount={(state) => {
                fetchData(state);
            }}
            onChange={(state) => {
                fetchData(state);
            }}
            loading={loading}
            initialState={{dateRange: [previousDay, today]}}
            getExpandChildren={(datum) => <div className="py2">{datum.body}</div>}
        >
            {/* you can override background color with: sx={{backgroundColor: 'white'}} for Header and Footer */}
            <Table.Header>
                <Table.Actions>{(datum: IExampleRowData) => <TableActions datum={datum} />}</Table.Actions>
                <Table.DateRangePicker presets={DatePickerPresets} />
            </Table.Header>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination totalPages={pages} />
            </Table.Footer>
        </Table>
    );
};

const NoData: FunctionComponent = () => (
    <BlankSlate>
        <Title order={4}>No Data</Title>
    </BlankSlate>
);

const today: Date = new Date();
const previous: Date = new Date(new Date().getTime());
const previousDay: Date = new Date(previous.setDate(previous.getDate() - 1));
const previousWeek: Date = new Date(previous.setDate(previous.getDate() - 7));

const DatePickerPresets: Record<string, DateRangePickerPreset> = {
    lastDay: {label: 'Last 24 hours', range: [previousDay, today]},
    lastWeek: {label: 'Last week', range: [previousWeek, today]},
};

const TableActions: FunctionComponent<{datum: IExampleRowData}> = ({datum}) => {
    const actionCondition = datum.id % 2 === 0 ? true : false;
    const pressedAction = () => alert('Some action is triggered!');
    return <>{actionCondition ? <Button onClick={pressedAction}>Action!</Button> : null}</>;
};
