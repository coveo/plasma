import {HTMLAttributes, ComponentClass, FunctionComponent, ComponentType} from 'react';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
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

/**
 * @deprecated Use Mantine instead
 */
export const tableWithBlankSlate =
    (supplier: ConfigSupplier<IBlankSlateWithTableProps> = {}) =>
    (
        Component: ComponentClass<ITableHOCOwnProps & HTMLAttributes<HTMLTableElement>>
    ): ComponentType<
        React.PropsWithChildren<ITableHOCOwnProps & HTMLAttributes<HTMLTableElement> & ITableWithBlankSlateProps>
    > => {
        const config = HocUtils.supplyConfig(supplier);
        const defaultRenderBlankSlateMethod = <BlankSlateWithTable {...config} />;
        const mapStateToProps = (state: PlasmaState, ownProps: ITableHOCOwnProps & ITableWithBlankSlateProps) => {
            const isEmpty = TableSelectors.getIsEmpty(state, ownProps);
            return {
                isEmpty,
                isTrulyEmpty: TableSelectors.getIsTrulyEmpty(state, ownProps),
                isEmptyStateSet: TableSelectors.isEmptyStateSet(state, ownProps),
                data: isEmpty ? null : ownProps.data,
            };
        };

        const TableWithBlankSlate: FunctionComponent<
            React.PropsWithChildren<ITableHOCOwnProps & ITableWithBlankSlateProps & ReturnType<typeof mapStateToProps>>
        > = (props) => {
            const {renderBlankSlate, renderBlankSlateOnly, isEmpty, isTrulyEmpty, isEmptyStateSet, ...tableProps} =
                props;

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

        return connect<ReturnType<typeof mapStateToProps>, ITableHOCOwnProps & ITableWithBlankSlateProps>(
            mapStateToProps
        )(TableWithBlankSlate);
    };
