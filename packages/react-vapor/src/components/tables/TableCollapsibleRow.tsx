import classNames from 'classnames';
import * as React from 'react';
import {SlideY} from '../../animations/SlideY';
import {IErrorSection, TableError} from './TableError';

export interface ITableCollapsibleRowOwnProps extends React.ClassAttributes<TableCollapsibleRow> {
    id: string;
    isInError?: boolean;
    nbColumns: number;
}

export interface ITableCollapsibleRowStateProps {
    opened?: boolean;
}

export interface ITableCollapsibleRowChildrenProps {
    error?: IErrorSection;
    descriptionLabel?: string;
    troubleshootingLabel?: string;
    errorCodeLabel?: string;
}

export interface ITableCollapsibleRowProps
    extends ITableCollapsibleRowOwnProps,
        ITableCollapsibleRowStateProps,
        ITableCollapsibleRowChildrenProps {}

export class TableCollapsibleRow extends React.Component<ITableCollapsibleRowProps, any> {
    render() {
        const rowClasses: string = classNames('collapsible-row', this.props.id, {in: this.props.opened});
        const error: JSX.Element = this.props.isInError ? (
            <TableError
                error={this.props.error}
                descriptionLabel={this.props.descriptionLabel}
                troubleshootingLabel={this.props.troubleshootingLabel}
                errorCodeLabel={this.props.errorCodeLabel}
            />
        ) : null;

        return (
            <tr className={rowClasses}>
                <td colSpan={this.props.nbColumns}>
                    <SlideY in={this.props.opened} timeout={350}>
                        {error}
                        <div className="clearfix"></div>
                        <section className="columns">{this.props.children}</section>
                    </SlideY>
                </td>
            </tr>
        );
    }
}
