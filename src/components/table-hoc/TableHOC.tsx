import * as classNames from 'classnames';
import * as React from 'react';
import {ReduxConnect} from '../../utils/ReduxUtils';
import {ActionBarConnected} from '../actions/ActionBarConnected';

export interface ITableHOCOwnProps {
    id: string;
    hasActionButtons?: boolean;
    data: any[];
    renderData: (data: any) => React.ReactNode;
    actions?: React.ReactNode[];
    tableHeader?: React.ReactNode;
    onUpdate?: () => void;
}

export interface ITableHOCProps extends ITableHOCOwnProps {}

@ReduxConnect()
export class TableHOC extends React.Component<ITableHOCProps & React.HTMLAttributes<HTMLTableElement>> {
    static defaultProps: Partial<ITableHOCOwnProps> = {
        hasActionButtons: false,
        actions: [],
        onUpdate: () => undefined,
    };

    render() {
        return (
            <div className='table-container'>
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
                <ActionBarConnected>
                    {this.props.actions.length && this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
