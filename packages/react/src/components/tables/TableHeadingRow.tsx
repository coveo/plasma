import classNames from 'clsx';
import {ClassAttributes, MouseEvent, Component, ReactNode} from 'react';

import {EventUtils} from '../../utils/EventUtils';
import {TableCollapsibleRowToggle} from './TableCollapsibleRowToggle';

export interface ITableHeadingRowOwnProps extends ClassAttributes<TableHeadingRow> {
    id?: string;
    tableId?: string;
    rowId?: string;
    isCollapsible: boolean;
    onClickCallback?: () => void;
    onDoubleClick?: () => void;
    className?: string;
    isMultiSelect?: boolean;
    selectionDisabled?: boolean;
    tableHasCollapsibleRow?: boolean;
    children?: ReactNode;
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

export interface ITableHeadingRowProps
    extends ITableHeadingRowOwnProps,
        ITableHeadingRowStateProps,
        ITableHeadingRowDispatchProps {}

/**
 * @deprecated Use Mantine instead
 */
export class TableHeadingRow extends Component<ITableHeadingRowProps, any> {
    componentDidMount() {
        this.props.onRender?.();
    }

    componentWillUnmount() {
        this.props.onDestroy?.();
    }

    render() {
        const toggle: JSX.Element = this.props.isCollapsible ? (
            <TableCollapsibleRowToggle isExpanded={this.props.opened} />
        ) : (
            this.props.tableHasCollapsibleRow && <td></td>
        );
        const rowClasses = classNames(
            {
                'heading-row': this.props.isCollapsible,
                selected: this.props.selected,
                opened: this.props.opened,
            },
            this.props.className,
        );

        return (
            <tr
                className={rowClasses}
                onClick={(e: MouseEvent<any>) => this.handleClick(e)}
                onDoubleClick={() => this.handleDoubleClick()}
            >
                {this.props.children}
                {toggle}
            </tr>
        );
    }

    private handleClick(e: MouseEvent<any>) {
        if (!EventUtils.isClickingInsideElementWithClassname(e, 'dropdown')) {
            const hasMultipleSelectedRow = (e.metaKey || e.ctrlKey) && this.props.isMultiSelect;

            this.props.onClick?.(hasMultipleSelectedRow);
            this.props.onClickCallback?.();
        }
    }

    private handleDoubleClick() {
        this.props.onDoubleClick?.();
    }
}
