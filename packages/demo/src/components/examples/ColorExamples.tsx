import * as React from 'react';
import {Color, VaporColors} from 'react-vapor';
import * as _ from 'underscore';

export class ColorExamples extends React.Component {
    render() {
        const colors = _.map(VaporColors, (value: string, color: string) =>
            value === 'category' ? (
                <tr className="bg-grey-2 no-hover" key={color}>
                    <td colSpan={3}>{color.toUpperCase().replace('-', ' ')}</td>
                </tr>
            ) : (
                <tr className="no-hover" key={color}>
                    <td>
                        <Color key={color} color={color} className="p2 material card" />
                    </td>
                    <td>
                        <p>{color}</p>
                    </td>
                    <td>{value.toUpperCase()}</td>
                </tr>
            )
        );
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Sample</th>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>{colors}</tbody>
            </table>
        );
    }
}

// start-print
