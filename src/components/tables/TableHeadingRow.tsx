import * as classNames from 'classnames';
import * as React from 'react';
import {TableCollapsibleRowToggle} from './TableCollapsibleRowToggle';

export interface ITableHeadingRowOwnProps extends React.ClassAttributes<TableHeadingRow> {
    id?: string;
    tableId?: string;
    rowId?: string;
    isCollapsible: boolean;
    onClickCallback?: () => void;
    onDoubleClick?: () => void;
    className?: string;
    isMultiSelect?: boolean;
}

export interface ITableHeadingRowStateProps {
    opened?: boolean;
    selected?: boolean;
}

export interface ITableHeadingRowDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClick?: (hasMultipleSelectedRow: boolean) => void;
}

export interface ITableHeadingRowProps extends ITableHeadingRowOwnProps, ITableHeadingRowStateProps,
    ITableHeadingRowDispatchProps {}

export class TableHeadingRow extends React.Component<ITableHeadingRowProps, any> {

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const toggle: JSX.Element = this.props.isCollapsible
            ? <TableCollapsibleRowToggle isExpanded={this.props.opened} />
            : null;
        const rowClasses = classNames({
            'heading-row': this.props.isCollapsible,
            'selected': this.props.selected,
            'opened': this.props.opened,
        }, this.props.className);

        return (
            <tr
                className={rowClasses}
                onClick={(e: React.MouseEvent<any>) => this.handleClick(e)}
                onDoubleClick={() => this.handleDoubleClick()}
            >
                {this.props.children}
                {toggle}
            </tr>
        );
    }

    private handleClick(e: React.MouseEvent<any>) {
        if (this.props.onClick) {
            this.props.onClick((e.metaKey || e.altKey) && this.props.isMultiSelect);
        }

        if (this.props.onClickCallback) {
            this.props.onClickCallback();
        }
    }

    private handleDoubleClick() {
        if (this.props.onDoubleClick) {
            this.props.onDoubleClick();
        }
    }
}
