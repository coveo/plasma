import * as classNames from 'classnames';
import * as React from 'react';
import * as styles from './styles/TableRowNumber.scss';

export const TableRowNumberColumn = (props: {number: React.ReactNode}) => (
    <td key='table-row-number' className={styles.tableNumberedRow}>
        <div className={classNames('bg-grey-1 mod-border-right text-lynch flex flex-column flex-center center', styles.tableNumberedRowContainer)}>
            {props.number}
        </div>
    </td>
);
