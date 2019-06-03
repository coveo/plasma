import * as React from 'react';
import * as _ from 'underscore';
import {TableConnected} from '../TableConnected';
import {convertInitialCollectionToDataById} from '../TableUtils';

const tableWithDisabledRows = [
    {
        id: '1',
        attribute1: 'This line is enabled',
        attribute2: 'Because enabled is set to true',
        enabled: true,
    },
    {
        id: '2',
        attribute1: 'This line is also enabled',
        attribute2: 'Because disabled is set to false',
        disabled: false,
    }, {
        id: '3',
        attribute1: 'This line is disabled',
        attribute2: 'Because disabled is set to true',
        disabled: true,
    }, {
        id: '4',
        attribute1: 'This line is disabled',
        attribute2: 'Because enabled is set to false',
        enabled: false,
    }, {
        id: '5',
        attribute1: 'This line is enabled',
        attribute2: 'Because there is no enabled or disabled property on it',
    },
];
const ids = ['1', '2', '3', '4', '5'];
const tableData = {
    byId: convertInitialCollectionToDataById(tableWithDisabledRows, 'id'),
    allIds: ids,
    displayedIds: ids,
    totalEntries: tableWithDisabledRows.length,
    totalPages: 1,
};

export const TableWithDisabledRowsExamples = () => {
    return (
        <div className='mt2'>
            <div className='form-group'>
                <label className='form-control-label'>Table with some disabled rows</label>
                <TableConnected
                    id={_.uniqueId('react-vapor-table')}
                    initialTableData={tableData}
                    headingAttributes={[
                        {
                            attributeName: 'id',
                            titleFormatter: _.identity,
                            sort: true,
                            attributeFormatter: _.identity,
                        }, {
                            attributeName: 'attribute1',
                            titleFormatter: _.identity,
                            sort: true,
                            attributeFormatter: _.identity,
                        }, {
                            attributeName: 'attribute2',
                            titleFormatter: _.identity,
                            sort: true,
                            attributeFormatter: _.identity,
                        },
                    ]}
                    blankSlateDefault={{title: 'Oh no! No results!'}}
                />
            </div>
        </div>
    );
};
