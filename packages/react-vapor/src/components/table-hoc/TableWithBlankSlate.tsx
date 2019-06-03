import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVapor';
import {ConfigSupplier, HocUtils} from '../../utils/HocUtils';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {BlankSlate, IBlankSlateProps} from '../blankSlate/BlankSlate';
import {ITableHOCOwnProps} from './TableHOC';
import {TableSelectors} from './TableSelectors';

export interface ITableWithBlankSlateStateProps {
    isEmpty: boolean;
}

export interface ITableWithBlankSlateProps extends Partial<ITableWithBlankSlateStateProps> {}

const TableWithBlankSlatePropsToOmit = keys<ITableWithBlankSlateStateProps>();

export const tableWithBlankSlate = (supplier: ConfigSupplier<IBlankSlateProps> = {}) => (Component: React.ComponentClass<ITableHOCOwnProps>): React.ComponentClass<ITableWithBlankSlateProps & React.HTMLAttributes<HTMLTableElement>> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps): ITableWithBlankSlateStateProps | ITableHOCOwnProps => {
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
                renderBody: this.props.isEmpty ? (): any => null : this.props.renderBody,
            };
            return (
                <Component {...newProps}>
                    {this.props.isEmpty ? <BlankSlate {...HocUtils.supplyConfig(supplier)} /> : this.props.children}
                </Component>
            );
        }
    }

    return TableWithBlankSlate;
};
