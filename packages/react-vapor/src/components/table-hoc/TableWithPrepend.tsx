import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVaporState';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface TableWithPrependProps extends ITableHOCOwnProps, Omit<React.HTMLAttributes<HTMLTableElement>, 'id'> {
    prepend?: React.ReactNode;
}

export const tableWithPrepend = (Component: React.FC<TableWithPrependProps>) => {
    const mapStateToProps = (state: IReactVaporState, ownProps: TableWithPrependProps) => ({
        isTrulyEmpty: TableSelectors.getIsTrulyEmpty(state, ownProps),
    });

    const TableWithPrepend: React.FunctionComponent<TableWithPrependProps & ReturnType<typeof mapStateToProps>> = (
        props
    ) => {
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
