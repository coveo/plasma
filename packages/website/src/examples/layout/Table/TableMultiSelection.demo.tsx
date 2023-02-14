import {BlankSlate, Button, ColumnDef, createColumnHelper, Table, Title, useTable} from '@coveord/plasma-mantine';
import {DeleteSize16Px, EditSize16Px} from '@coveord/plasma-react-icons';
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
        columnHelper.accessor('title', {
            header: 'Title',
            cell: (info) => info.row.original.title,
        }),
    ];
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pages, setPages] = useState(1);

    const fetchData = (state: any) => {
        setLoading(true);
        const searchParams = new URLSearchParams({
            _page: state.pagination.pageIndex + 1,
            _limit: state.pagination.pageSize,
            title_like: state.globalFilter,
        });
        if (!state.globalFilter) {
            searchParams.delete('title_like');
        }
        fetch(`https://jsonplaceholder.typicode.com/posts?${searchParams.toString()}`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .then(() => setPages(Math.ceil(100 / state.pagination?.pageSize)))
            .catch((e) => console.log(e));
        setLoading(false);
    };

    return (
        <Table<IExampleRowData>
            data={data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            noDataChildren={<NoData />}
            onMount={(state) => {
                fetchData(state);
            }}
            onChange={(state) => {
                fetchData(state);
            }}
            loading={loading}
            multiRowSelectionEnabled
        >
            <Table.Header>
                <Table.Actions>
                    {(selectedRows: IExampleRowData[]) => <TableActions data={selectedRows} />}
                </Table.Actions>
                <Table.Filter placeholder="Search posts by title" />
            </Table.Header>
            <Table.Footer>
                <Table.PerPage />
                <Table.Pagination totalPages={pages} />
            </Table.Footer>
        </Table>
    );
};

const NoData: FunctionComponent = () => {
    const {isFiltered, clearFilters} = useTable();

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

const TableActions: FunctionComponent<{data: IExampleRowData[]}> = ({data}) => {
    if (data.length === 1) {
        return (
            <Button
                variant="subtle"
                onClick={() => alert(`Action triggered on a single row: ${data[0].id}`)}
                leftIcon={<EditSize16Px height={16} />}
            >
                Single row action
            </Button>
        );
    }
    if (data.length > 1) {
        return (
            <Button
                variant="subtle"
                onClick={() => alert(`Bulk action triggered on multiple rows: ${data.map(({id}) => id).join(', ')}`)}
                leftIcon={<DeleteSize16Px height={16} />}
            >
                Bulk action
            </Button>
        );
    }

    return null;
};
