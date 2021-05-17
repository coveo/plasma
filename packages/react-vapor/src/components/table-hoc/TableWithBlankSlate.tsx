import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVaporState';
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
        const {renderBlankSlate, renderBlankSlateOnly, isEmpty, isTrulyEmpty, isEmptyStateSet, ...tableProps} = props;

        const blankSlateToRender = renderBlankSlate ?? defaultRenderBlankSlateMethod;
        let componentToReturn = (
            <Component {...tableProps} renderBody={isEmpty ? () => blankSlateToRender : props.renderBody} />
        );

        if (isTrulyEmpty && !props.isLoading) {
            if (isEmptyStateSet) {
                componentToReturn = <Component {...tableProps} renderBody={props.renderBody} />;
            } else if (renderBlankSlateOnly) {
                componentToReturn = blankSlateToRender;
            }
        }

        return componentToReturn;
    };

    return connect(mapStateToProps)(TableWithBlankSlate);
};
