import {ColumnDef, createColumnHelper, Table} from '@coveord/plasma-mantine';
import {loremIpsum} from 'lorem-ipsum';

export default () => {
    const columnHelper = createColumnHelper<IExampleRowData>();
    const columns: Array<ColumnDef<IExampleRowData>> = [
        columnHelper.accessor('username', {
            header: 'Name',
            cell: (info) => info.row.original.username,
            enableSorting: false,
        }),
        columnHelper.accessor('city', {
            header: 'City',
            cell: (info) => info.row.original.city,
            enableSorting: false,
        }),
        columnHelper.accessor('password', {
            header: 'Password',
            cell: (info) => info.row.original.password,
            enableSorting: false,
        }),
    ];
    return (
        <Table data={dataForRows} columns={columns}>
            <Table.Header></Table.Header>
        </Table>
    );
};

interface IExampleRowData {
    city: string;
    username: string;
    password: string;
}

const generateData = (length: number): IExampleRowData[] =>
    Array.from(Array(length)).map(() => ({
        city: loremIpsum({count: 1, units: 'word'}),
        username: loremIpsum({count: 2, units: 'word'}),
        password: loremIpsum({count: 1, units: 'word'}),
    }));

const dataForRows = generateData(5);
