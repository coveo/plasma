import {HTMLAttributes, ReactNode, FunctionComponent, PropsWithChildren} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState.js';
import {ITableHOCOwnProps} from './TableHOC.js';
import {TableSelectors} from './TableSelectors.js';

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
        React.PropsWithChildren<TableWithPrependProps & ReturnType<typeof mapStateToProps>>
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
