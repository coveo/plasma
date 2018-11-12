import * as classNames from 'classnames';
import * as React from 'react';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {ActionBarConnected} from '../actions/ActionBarConnected';

export interface IMaybeServerConfig {
    isServer?: boolean;
}

export interface ITableHOCOwnProps {
    id: string;
    isLoading?: boolean;
    hasActionButtons?: boolean;
    data: any[];
    renderData: (data: any[]) => React.ReactNode;
    actions?: React.ReactNode[];
    tableHeader?: React.ReactNode;
    onUpdate?: () => void;
    containerClassName?: string;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

@ReduxConnect()
export class TableHOC extends React.Component<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        isLoading: false,
        hasActionButtons: false,
        actions: [],
        onUpdate: () => undefined,
    };

    render() {
        return (
            <div className={classNames('table-container', this.props.containerClassName, {'loading-component': this.props.isLoading})}>
                {this.renderActions()}
                <table className={classNames(this.props.className)}>
                    {this.props.tableHeader}
                    <tbody>{this.props.renderData(this.props.data || [])}</tbody>
                </table>
                {this.props.children}
            </div>
        );
    }

    private renderActions() {
        if (this.props.hasActionButtons || this.props.actions.length) {
            return (
                <ActionBarConnected
                    id={this.props.id}
                    removeDefaultContainerClasses
                    extraContainerClasses={['coveo-table-actions-container', 'mod-cancel-header-padding', 'mod-align-header']}
                >
                    {this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
