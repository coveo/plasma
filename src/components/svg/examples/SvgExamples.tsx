import * as React from 'react';
import {Svg} from '../Svg';

export class SvgExamples extends React.Component<any, any> {
    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Svg List</h1>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Include an SVG
                    </label>
                    <div className='form-control'>
                        <Svg svgName='domain-google' className='icon mod-2x' />
                    </div>
                </div>
                <div className='form-group'>
                    <label className='form-control-label'>
                        Include another SVG
                    </label>
                    <div className='form-control'>
                        <Svg svgName='clear' className='icon mod-2x' svgClass='fill-medium-blue' />
                    </div>
                </div>
            </div>
        );
    }
}
