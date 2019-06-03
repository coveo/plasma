import * as React from 'react';
import * as _ from 'underscore';
import {Color} from '../Color';

export class ColorExamples extends React.Component {
    render() {
        const VaporColors: {[key: string]: string} = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');
        const colors = _.map(VaporColors, (value: string, color: string) => value === 'category'
            ? (
                <tr className='bg-grey-2 no-hover' key={color}>
                    <td colSpan={3}>{color.toUpperCase().replace('-', ' ')}</td>
                </tr>
            )
            : (
                <tr className='no-hover' key={color}>
                    <td>
                        <Color
                            key={color}
                            color={color}
                            className='p2 material card'
                        />
                    </td>
                    <td>
                        <p>{color}</p>
                    </td>
                    <td>
                        {value.toUpperCase()}
                    </td>
                </tr>
            ),
        );
        return (
            <div className='my2'>
                <h1 className='text-medium-blue mb1 bold'>Colors</h1>
                <table className='table mod-width-50 mod-border'>
                    <thead className=''>
                        <th>Sample</th>
                        <th>Name</th>
                        <th>Value</th>
                    </thead>
                    <tbody>
                        {colors}
                    </tbody>
                </table>
            </div>
        );
    }
}
