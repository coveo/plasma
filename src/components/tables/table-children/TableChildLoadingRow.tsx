import * as React from 'react';
import {Loading} from '../../loading/Loading';
import {ITableProps} from '../Table';
import {TOGGLE_ARROW_CELL_COUNT} from '../TableConstants';

export interface ITableChildLoadingRowProps extends ITableProps {
    isInitialLoad?: boolean;
}

export const TableChildLoadingRow = (props: ITableChildLoadingRowProps): JSX.Element => {
    return props.isInitialLoad ? (
        <tbody className='loading-row'>
            <tr>
                <td colSpan={props.headingAttributes.length + TOGGLE_ARROW_CELL_COUNT}>
                    <Loading />
                </td>
            </tr>
        </tbody>
    ) : null;
};
