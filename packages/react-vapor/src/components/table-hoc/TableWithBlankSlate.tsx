import * as React from 'react';
import {connect} from 'react-redux';

import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IBlankSlateWithTableProps} from '../blankSlate';
import {BlankSlateWithTable} from '../blankSlate/BlankSlatesHOC';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithBlankSlateStateProps {
    renderBlankSlate?: JSX.Element;
    renderBlankSlateOnly?: boolean;
}

export interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}

export const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateWithTableProps> = {}) => (
    Component: React.ComponentClass<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement>>
): React.ComponentType<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement> & ITableWithBlankSlateProps> => {
    const config = HocUtils.supplyConfig(supplier);
    const defaultRenderBlankSlateMethod = <BlankSlateWithTable {...config} />;
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps & ITableWithBlankSlateProps) => {
        const isEmpty = ownProps.renderBlankSlateOnly
            ? TableSelectors.getIsTruelyEmpty(state, ownProps)
            : TableSelectors.getIsEmpty(state, ownProps);
        return {
            isEmpty,
            data: isEmpty ? null : ownProps.data,
        };
    };

    const TableWithBlankSlate: React.FunctionComponent<
        ITableHOCOwnProps & ITableWithBlankSlateProps & ReturnType<typeof mapStateToProps>
    > = (props) => {
        const {renderBlankSlate, renderBlankSlateOnly, isEmpty, ...tableProps} = props;

        const blankSlateToRender = renderBlankSlate || defaultRenderBlankSlateMethod;

        if (isEmpty && renderBlankSlateOnly) {
            return blankSlateToRender;
        }

        return <Component {...tableProps} renderBody={isEmpty ? () => blankSlateToRender : props.renderBody} />;
    };

    return connect(mapStateToProps)(TableWithBlankSlate);
};
