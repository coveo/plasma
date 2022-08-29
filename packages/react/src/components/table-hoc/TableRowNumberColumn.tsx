import {ReactNode} from 'react';

/**
 * @deprecated Use Mantine instead
 */
// eslint-disable-next-line id-blacklist
export const TableRowNumberColumn = (props: {number: ReactNode}) => (
    <td key="table-row-number" className={'table-numbered-row mod-border-right'}>
        <div className="table-numbered-row-container flex flex-column flex-center center">{props.number}</div>
    </td>
);
