import * as React from 'react';

export class TableRowConnected extends React.Component<React.HTMLAttributes<HTMLTableRowElement>> {
    render() {
        return (
            <tr {...this.props}>{this.props.children}</tr>
        );
    }
}
