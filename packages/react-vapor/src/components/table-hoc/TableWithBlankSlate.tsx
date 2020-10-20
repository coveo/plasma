import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ReduxConnect} from '../../utils';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {IBlankSlateWithTableProps} from '../blankSlate';
import {BlankSlateWithTable} from '../blankSlate/BlankSlatesHOC';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithBlankSlateStateProps {
    renderBlankSlate?: React.ReactNode;
    renderBlankSlateOnly?: boolean;
}

export interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}

const TableWithBlankSlatePropsToOmit = keys<ITableWithBlankSlateStateProps>();

export const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateWithTableProps> = {}) => (
    Component: React.ComponentClass<ITableHOCOwnProps>
): React.ComponentClass<ITableHOCOwnProps & ITableWithBlankSlateProps & React.HTMLAttributes<HTMLTableElement>> => {
    const config = HocUtils.supplyConfig(supplier);
    const defaultRenderBlankSlateMethod = <BlankSlateWithTable {...config} />;
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps) => {
        const isEmpty = TableSelectors.getIsEmpty(state, ownProps);
        return {
            isEmpty,
            data: isEmpty ? null : ownProps.data,
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithBlankSlate extends React.Component<
        ITableHOCOwnProps & ITableWithBlankSlateProps & ReturnType<typeof mapStateToProps>
    > {
        render() {
            const renderBlankslate = this.props.renderBlankSlate || defaultRenderBlankSlateMethod;
            if (this.props.isEmpty && this.props.renderBlankSlateOnly) {
                return renderBlankslate;
            }

            const newProps: ITableHOCOwnProps = {
                ..._.omit(this.props, TableWithBlankSlatePropsToOmit),
                renderBody: this.props.isEmpty ? () => renderBlankslate : this.props.renderBody,
            };

            return <Component {...newProps}>{this.props.children}</Component>;
        }
    }

    return TableWithBlankSlate;
};
