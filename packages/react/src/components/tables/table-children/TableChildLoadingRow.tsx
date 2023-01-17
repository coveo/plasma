import {Loading} from '../../loading/Loading.js';
import {ITableProps} from '../Table.js';
import {TOGGLE_ARROW_CELL_COUNT} from '../TableConstants.js';

export interface ITableChildLoadingRowProps extends ITableProps {
    isInitialLoad?: boolean;
}

/**
 * @deprecated Use Mantine instead
 */
export const TableChildLoadingRow = (props: ITableChildLoadingRowProps): JSX.Element =>
    props.isInitialLoad ? (
        <tbody className="loading-row">
            <tr>
                <td
                    colSpan={
                        props.headingAttributes.length + (!!props.collapsibleFormatter ? TOGGLE_ARROW_CELL_COUNT : 0)
                    }
                >
                    <Loading />
                </td>
            </tr>
        </tbody>
    ) : null;
