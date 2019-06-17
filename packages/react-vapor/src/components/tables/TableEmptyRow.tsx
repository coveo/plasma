import * as React from 'react';

export interface ITableEmptyRowProps extends React.ClassAttributes<TableEmptyRow> {
    text: string;
    nbColumns: number;
}

export class TableEmptyRow extends React.Component<ITableEmptyRowProps, any> {
    render() {
        return (
            <tbody>
                <tr className="empty">
                    <td colSpan={this.props.nbColumns}>{this.props.text}</td>
                </tr>
            </tbody>
        );
    }
}
