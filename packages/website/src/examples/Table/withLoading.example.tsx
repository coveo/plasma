import {Badge, BadgeType, TableHOC, TableRowConnected} from '@coveord/plasma-react';
import {CloudSize16Px} from '@coveord/plasma-react-icons';

const TABLE_ID: string = 'withLoadingTableId';

export default () => (
    <TableHOC
        id={TABLE_ID}
        className="table"
        data={data}
        renderBody={() => renderRows}
        tableHeader={renderHeader()}
        showBorderTop
        showBorderBottom
        isLoading
        loading={{
            isCard: false,
            numberOfColumns: 3,
            defaultLoadingRow: 1,
            numberOfSubRow: 3,
        }}
    />
);

const renderHeader = () => (
    <thead>
        <tr>
            <th>City</th>
            <th>Username</th>
            <th>Badge</th>
        </tr>
    </thead>
);

const data = [
    {
        city: 'Québec',
        username: 'germinator',
        id: 'id-1',
    },
    {
        city: 'Ottawa',
        username: 'canitalktoyouaboutvisualtesting',
        id: 'id-2',
    },
    {
        city: 'Toronto',
        username: 'kienposter',
        id: 'id-3',
    },
    {
        city: 'Montréal',
        username: 'notfound',
        id: 'id-3',
    },
];

const renderRows = data?.map((item) => (
    <TableRowConnected id={item.id} tableId={TABLE_ID} key={item.id}>
        <td key="city">{item.city}</td>
        <td key="username">{item.username.toLowerCase()}</td>
        <td>
            <Badge label={'King'} icon={CloudSize16Px} isSmall type={BadgeType.Success} />
        </td>
    </TableRowConnected>
));
