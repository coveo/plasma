import * as React from 'react';
import * as _ from 'underscore';
import {Tooltip} from '../../tooltip/Tooltip';
import {Color} from '../Color';

export class ColorExamples extends React.Component {
    render() {
        const VaporColors: {[key: string]: string} = require('!sass-variable-loader?preserveVariableNames!coveo-styleguide/scss/common/palette.scss');
        const colors = _.map(VaporColors, (value, color) => (
            <Tooltip title={`${color}: ${value.toUpperCase()}`} placement='top' className='spaced-box'>
                <Color
                    key={color}
                    color={color}
                    className='p2 text-pure-white material-card with-hover'
                />
            </Tooltip>
        ));
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Colors</h1>
                <div className='spaced-boxes-container flex flex-wrap'>{colors}</div>
            </div>
        );
    }
}
