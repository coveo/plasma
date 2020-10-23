import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface TableWithPrependProps {
    prepend?: React.ReactNode;
}

export const tableWithPrepend = <P extends ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement>>(
    Component: React.ComponentClass<P>
) => {
    const mapStateToProps = (state: IReactVaporState, ownProps: P & TableWithPrependProps) => ({
        isTruelyEmpty: TableSelectors.getIsTruelyEmpty(state, ownProps),
    });

    const TableWithPrepend: React.FunctionComponent<
        ITableHOCOwnProps &
            React.HTMLAttributes<HTMLTableElement> &
            TableWithPrependProps &
            ReturnType<typeof mapStateToProps>
    > = (props) => {
        const {prepend, isTruelyEmpty, ...tableProps} = props;
        return (
            <>
                {!isTruelyEmpty ? prepend : null}
                <Component {...(tableProps as P)} />
            </>
        );
    };

    return connect(mapStateToProps)(TableWithPrepend);
};
