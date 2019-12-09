import * as classNames from 'classnames';
import * as React from 'react';

import {WithServerSideProcessingProps} from '../../hoc/withServerSideProcessing/withServerSideProcessing';
import {ActionBarConnected} from '../actions/ActionBar';

/**
 * @deprecated Use WithServerSideProcessingProps directly instead
 */
export type IMaybeServerConfig = WithServerSideProcessingProps;

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
    hasBorderTop?: boolean;
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
            <div
                className={classNames('table-container', this.props.containerClassName, {
                    'loading-component': this.props.isLoading,
                })}
            >
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
                    extraContainerClasses={classNames(
                        'coveo-table-actions-container',
                        'mod-cancel-header-padding',
                        'mod-align-header',
                        {
                            'mod-border-top': this.props.hasBorderTop,
                        }
                    ).split(' ')}
                >
                    {this.props.actions}
                </ActionBarConnected>
            );
        }
        return null;
    }
}
