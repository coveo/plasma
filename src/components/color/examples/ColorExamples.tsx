import * as React from 'react';
import * as _ from 'underscore';
import {Color} from '../Color';

export class ColorExamples extends React.Component {
    render() {
        const VaporColors: {[key: string]: string} = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');
        const colors = _.map(VaporColors, (value, color) => (
            (value === "'category'") ? (
                <tr className='bg-grey-2' key={color}>
                    <td className='p1 center align-middle mod-border-bottom bold' colSpan={3}>{color.toUpperCase()}</td>
                </tr>
            ) : (
                    <tr key={color}>
                        <td className='p2 mod-border-bottom'>
                            <Color
                                key={color}
                                color={color}
                                className='p2 material card'
                            />
                        </td>
                        <td className='p2 align-middle mod-border-bottom'>
                            <p>{color}</p>
                        </td>
                        <td className='p2 align-middle mod-border-bottom'>
                            {value.toUpperCase()}
                        </td>
                    </tr>
                )
        ));
        return (
            <div className='mt2'>
                <h1 className='text-medium-blue mb1 bold'>Colors</h1>
                <table className='mod-border'>
                    <tbody>
                        {colors}
                    </tbody>
                </table>
            </div>
        );
    }
}
