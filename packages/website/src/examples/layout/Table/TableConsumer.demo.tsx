import {ColumnDef, createColumnHelper, onTableChangeEvent, Table, useTable} from '@coveord/plasma-mantine';
import {FunctionComponent, useEffect, useState} from 'react';

interface PostData {
    id: number;
    title: string;
}

const columnHelper = createColumnHelper<PostData>();
const columns: Array<ColumnDef<PostData>> = [
    columnHelper.accessor('id', {
        header: 'Post ID',
        enableSorting: false,
    }),
    columnHelper.accessor('title', {
        header: 'Title',
        enableSorting: false,
    }),
];

const Demo = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData: onTableChangeEvent<PostData> = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const body = await response.json();

            // slow down the fetch, to make the refresh more obvious
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setData(body);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Table<PostData>
            data={data}
            getRowId={({id}) => id.toString()}
            columns={columns}
            onMount={fetchData}
            onChange={fetchData}
            loading={loading}
        >
            <Table.Consumer>
                {/* Refresh the component every 10s, look at your network tab to validate it works */}
                <IntervalRefresh every={10 * 1000} />
            </Table.Consumer>
            <Table.LastUpdated />
        </Table>
    );
};
export default Demo;

const IntervalRefresh: FunctionComponent<{every: number}> = ({every}) => {
    const {onChange} = useTable();
    useEffect(() => {
        const timer = setInterval(() => onChange(), every);
        return () => clearInterval(timer);
    }, [every]);

    return null;
};
