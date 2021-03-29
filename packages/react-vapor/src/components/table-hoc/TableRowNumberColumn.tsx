import * as React from 'react';

// eslint-disable-next-line id-blacklist
export const TableRowNumberColumn = (props: {number: React.ReactNode}) => (
    <td key="table-row-number" className={'table-numbered-row mod-border-right'}>
        <div className="table-numbered-row-container flex flex-column flex-center center">{props.number}</div>
    </td>
);
