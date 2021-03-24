import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IBlankSlateWithTableProps} from '../blankSlate';
import {BlankSlateWithTable} from '../blankSlate/BlankSlatesHOC';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithBlankSlateStateProps {
    /**
     * @deprecated Use TableWithEmptyState instead
     */
    renderBlankSlate?: JSX.Element;
    /**
     * @deprecated Use TableWithEmptyState instead
     */
    renderBlankSlateOnly?: boolean;
}

export interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}

export const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateWithTableProps> = {}) => (
    Component: React.ComponentClass<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement>>
): React.ComponentType<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement> & ITableWithBlankSlateProps> => {
    const config = HocUtils.supplyConfig(supplier);
    const defaultRenderBlankSlateMethod = <BlankSlateWithTable {...config} />;
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps & ITableWithBlankSlateProps) => {
        const isEmpty = TableSelectors.getIsEmpty(state, ownProps);
        return {
            isEmpty,
            isTrulyEmpty: TableSelectors.getIsTrulyEmpty(state, ownProps),
            isEmptyStateSet: TableSelectors.isEmptyStateSet(state, ownProps),
            data: isEmpty ? null : ownProps.data,
        };
    };

    const TableWithBlankSlate: React.FunctionComponent<
        ITableHOCOwnProps & ITableWithBlankSlateProps & ReturnType<typeof mapStateToProps>
    > = (props) => {
        const {renderBlankSlate, renderBlankSlateOnly, isEmpty, isTrulyEmpty, ...tableProps} = props;

        const blankSlateToRender = renderBlankSlate || defaultRenderBlankSlateMethod;

        if (tableProps.isEmptyStateSet && isTrulyEmpty && !props.isLoading) {
            return <></>;
        }

        if (renderBlankSlateOnly && isTrulyEmpty && !props.isLoading) {
            return blankSlateToRender;
        }

        return <Component {...tableProps} renderBody={isEmpty ? () => blankSlateToRender : props.renderBody} />;
    };

    return connect(mapStateToProps)(TableWithBlankSlate);
};
