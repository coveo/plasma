import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys/index';
import * as _ from 'underscore';
import {IReactVaporState} from '../../ReactVapor';
import {IDispatch, ReduxConnect} from '../../utils/ReduxUtils';
import {IActionOptions} from '../actions/Action';
import {addActionsToActionBar} from '../actions/ActionBarActions';
import {TableRowActions} from './actions/TableRowActions';
import {ITableRowState} from './reducers/TableRowReducers';

export interface ITableRowOwnProps {
    id: string;
    tableId: string;
    actions: IActionOptions[];
    isMultiselect?: boolean;
}

export interface ITableRowStateProps {
    selected: boolean;
}

export interface ITableRowDispatchProps {
    onMount: () => void;
    onUnmount: () => void;
    onClick: (isMulti: boolean) => void;
}

export interface ITableHeaderWithSortProps extends
    ITableRowOwnProps,
    Partial<ITableRowStateProps>,
    Partial<ITableRowDispatchProps> {}

const TableRowPropsToOmit = keys<ITableHeaderWithSortProps>();

const mapStateToProps = (state: IReactVaporState, ownProps: ITableRowOwnProps) => {
    const row: ITableRowState = _.findWhere(state.tableHOCRow, {id: ownProps.id});
    return {
        selected: row && row.selected,
    };
};

const mapDispatchToProps = (
    dispatch: IDispatch,
    ownProps: ITableRowOwnProps,
): ITableRowDispatchProps => ({
    onMount: () => dispatch(TableRowActions.addTableRow(ownProps.id, ownProps.tableId)),
    onUnmount: () => dispatch(TableRowActions.removeTableRow(ownProps.id)),
    onClick: (isMulti: boolean) => {
        dispatch(addActionsToActionBar(ownProps.tableId, ownProps.actions));
        dispatch(TableRowActions.selectRow(ownProps.id, isMulti));
    },
});

@ReduxConnect(mapStateToProps, mapDispatchToProps)
export class TableRowConnected extends React.Component<ITableHeaderWithSortProps & React.HTMLAttributes<HTMLTableRowElement>> {

    static defaultProps: Partial<ITableRowOwnProps> = {
        isMultiselect: false,
    };

    private handleClick = (e: React.MouseEvent<HTMLTableRowElement>) => {
        const isMulti = (e.metaKey || e.ctrlKey) && this.props.isMultiselect;
        this.props.onClick(isMulti);
    }

    componentDidMount() {
        this.props.onMount();
    }

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        return (
            <tr
                {..._.omit(this.props, TableRowPropsToOmit)}
                className={classNames(this.props.className, {selected: this.props.selected})}
                onClick={this.handleClick}
            >
                {this.props.children}
            </tr>
        );
    }
}
