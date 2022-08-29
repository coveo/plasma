import {ClassAttributes, Component} from 'react';

export interface ITableEmptyRowProps extends ClassAttributes<TableEmptyRow> {
    text: string;
    nbColumns: number;
}

/**
 * @deprecated Use Mantine instead
 */
export class TableEmptyRow extends Component<ITableEmptyRowProps, any> {
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
