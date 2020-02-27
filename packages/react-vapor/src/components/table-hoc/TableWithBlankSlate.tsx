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
    isEmpty: boolean;
}

export interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}

const TableWithBlankSlatePropsToOmit = keys<ITableWithBlankSlateStateProps>();

export const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateWithTableProps> = {}) => (
    Component: React.ComponentClass<ITableHOCOwnProps>
): React.ComponentClass<ITableHOCOwnProps & React.HTMLAttributes<HTMLTableElement>> => {
    const mapStateToProps = (
        state: IReactVaporState,
        ownProps: ITableHOCOwnProps
    ): ITableWithBlankSlateStateProps | ITableHOCOwnProps => {
        const isEmpty = TableSelectors.getIsEmpty(state, ownProps);
        return {
            isEmpty,
            data: isEmpty ? null : ownProps.data,
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithBlankSlate extends React.Component<ITableHOCOwnProps & ITableWithBlankSlateProps> {
        render() {
            const newProps = {
                ..._.omit(this.props, [...TableWithBlankSlatePropsToOmit]),
                renderBody: this.props.isEmpty
                    ? () => <BlankSlateWithTable {...HocUtils.supplyConfig(supplier)} />
                    : this.props.renderBody,
            };

            return <Component {...newProps}>{this.props.children}</Component>;
        }
    }

    return TableWithBlankSlate;
};
