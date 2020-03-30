import classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import {IClassName} from '../../utils/ClassNameUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';
import {ITableHeaderCellProps, TableHeaderCell} from './TableHeaderCell';
import {TableHeaderCellConnected} from './TableHeaderCellConnected';

export interface ITableHeaderProps extends React.ClassAttributes<TableHeader>, IReduxStatePossibleProps {
    columns: ITableHeaderCellProps[];
    headerClass?: IClassName;
}

export class TableHeader extends React.Component<ITableHeaderProps, any> {
    render() {
        const columns: JSX.Element[] = _.map(
            this.props.columns,
            (column: ITableHeaderCellProps, index: number): JSX.Element => {
                const TableHeaderCellClass =
                    this.props.withReduxState && column.attributeToSort ? TableHeaderCellConnected : TableHeaderCell;

                return <TableHeaderCellClass key={`th-${column.id || index}`} {...column} />;
            }
        );

        return (
            <thead className={classNames(this.props.headerClass)}>
                <tr>{columns}</tr>
            </thead>
        );
    }
}
