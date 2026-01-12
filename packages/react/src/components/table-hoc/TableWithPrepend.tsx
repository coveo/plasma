import {HTMLAttributes, ReactNode, FunctionComponent, PropsWithChildren} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface TableWithPrependProps extends ITableHOCOwnProps, Omit<HTMLAttributes<HTMLTableElement>, 'id'> {
    prepend?: ReactNode;
}

/**
 * @deprecated Use Mantine instead
 */
export const tableWithPrepend = (Component: FunctionComponent<PropsWithChildren<TableWithPrependProps>>) => {
    const mapStateToProps = (state: PlasmaState, ownProps: TableWithPrependProps) => ({
        isTrulyEmpty: TableSelectors.getIsTrulyEmpty(state, ownProps),
    });

    const TableWithPrepend: FunctionComponent<
        PropsWithChildren<TableWithPrependProps & ReturnType<typeof mapStateToProps>>
    > = (props) => {
        const {prepend, isTrulyEmpty, ...tableProps} = props;
        return (
            <>
                {!isTrulyEmpty ? prepend : null}
                <Component {...(tableProps as TableWithPrependProps)} />
            </>
        );
    };

    return connect(mapStateToProps)(TableWithPrepend);
};
