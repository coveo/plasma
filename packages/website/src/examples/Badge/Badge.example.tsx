import {Button, ColumnDef, createColumnHelper, Header, Text, Table, useWindowScroll} from '@coveord/plasma-mantine';

export default () => {
    type RowData = {name: string; pass: string};

    const columnHelper = createColumnHelper<RowData>();
    const columns: Array<ColumnDef<RowData>> = [
        columnHelper.accessor('name', {enableSorting: false}),
        columnHelper.accessor('pass', {enableSorting: false}),
    ];

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <>
            <Header>Hello i'm header</Header>
            <Table
                data={[
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                    {name: 'vegetable', pass: 'what'},
                    {name: 'fruit', pass: 'hihi'},
                ]}
                columns={columns}
                initialState={{pagination: {pageSize: 5}}}
            >
                <Table.Header></Table.Header>
                <Table.Footer>
                    {/* <Table.Pagination totalPages={2} /> */}
                    <Button onClick={() => scrollTo({y: 0})}>Scroll to top</Button>

                    <Text>
                        {' '}
                        Scroll position x: {scroll.x}, y: {scroll.y}
                    </Text>
                </Table.Footer>
            </Table>
        </>
    );
};
