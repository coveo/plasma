import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {BlankSlate, IBlankSlateProps} from '../blankSlate/BlankSlate';
import {ITableHOCOwnProps} from './TableHOC';

export interface ITableWithBlankslateStateProps {
    isEmpty: boolean;
}

export interface ITableWithBlankslateProps extends Partial<ITableWithBlankslateStateProps> {}

const TableWithBlankslatePropsToOmit = keys<ITableWithBlankslateStateProps>();

export const tableWithBlankslate = (config: IBlankSlateProps = {}) => (Component: (React.ComponentClass<ITableHOCOwnProps> | React.StatelessComponent<ITableHOCOwnProps>)): React.ComponentClass<ITableWithBlankslateProps & React.HTMLAttributes<HTMLTableElement>> => {
    const mapStateToProps = (state: IReactVaporState, ownProps: ITableHOCOwnProps): ITableWithBlankslateStateProps | ITableHOCOwnProps => {
        const isEmpty = ownProps.data !== null && (!ownProps.data || ownProps.data.length === 0);
        return {
            isEmpty,
            data: isEmpty ? null : ownProps.data,
        };
    };

    @ReduxConnect(mapStateToProps)
    class TableWithBlankslate extends React.Component<ITableHOCOwnProps & ITableWithBlankslateProps> {

        render() {
            const newProps = {
                ..._.omit(this.props, [...TableWithBlankslatePropsToOmit]),
                renderData: this.props.isEmpty ? (): any => null : this.props.renderData,
            };
            return (
                <Component {...newProps}>
                    {this.props.isEmpty ? <BlankSlate {...config} /> : this.props.children}
                </Component>
            );
        }
    }

    return TableWithBlankslate;
};
