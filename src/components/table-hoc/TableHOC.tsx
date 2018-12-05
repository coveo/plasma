import * as classNames from 'classnames';
import * as React from 'react';
import {ActionBarConnected} from '../actions/ActionBarConnected';

export interface IMaybeServerConfig {
    isServer?: boolean;
}

export interface ITableHOCOwnProps {
    id: string;
    isLoading?: boolean;
    hasActionButtons?: boolean;
    data: any[];
    renderBody: (data: any[]) => React.ReactNode;
    actions?: React.ReactNode[];
    tableHeader?: React.ReactNode;
    onUpdate?: () => void;
    containerClassName?: string;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

export class TableHOC extends React.PureComponent<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        isLoading: false,
        hasActionButtons: false,
        actions: [],
    };

    render() {
        return (
            <div className={classNames('table-container', this.props.containerClassName, {'loading-component': this.props.isLoading})}>
                {this.renderActions()}
                <table className={classNames(this.props.className)}>
                    {this.props.tableHeader}
                    <tbody>{this.props.renderBody(this.props.data || [])}</tbody>
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
