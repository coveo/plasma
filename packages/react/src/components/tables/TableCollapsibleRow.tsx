import classNames from 'classnames';
import {ClassAttributes, Component, ReactNode} from 'react';
import {SlideY} from '../../animations/SlideY.js';
import {IErrorSection, TableError} from './TableError.js';

export interface ITableCollapsibleRowOwnProps extends ClassAttributes<TableCollapsibleRow> {
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
    children?: ReactNode;
}

export interface ITableCollapsibleRowProps
    extends ITableCollapsibleRowOwnProps,
        ITableCollapsibleRowStateProps,
        ITableCollapsibleRowChildrenProps {}

/**
 * @deprecated Use Mantine instead
 */
export class TableCollapsibleRow extends Component<ITableCollapsibleRowProps, any> {
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
