import * as React from 'react';
import {NumericInputConnected} from '../NumericInputConnected';

export const NumericInputExamples = () => (
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Numeric Input</h1>
        <div className='form-group'>
            <label className='form-control-label'>
                Numeric Input
            </label>
            <div className='form-control'>
                <NumericInputConnected id='numeric-1' />
            </div>
        </div>
        <div className='form-group'>
            <label className='form-control-label'>
                Numeric Input with an initial value of 5
            </label>
            <div className='form-control'>
                <NumericInputConnected id='numeric-2' initialValue={5} />
            </div>
        </div>

        <div className='form-group'>
            <label className='form-control-label'>
                Numeric Input with an initial value of 50 & a step of 25
            </label>
            <div className='form-control'>
                <NumericInputConnected id='numeric-3' initialValue={50} step={25} />
            </div>
        </div>

        <div className='form-group'>
            <label className='form-control-label'>
                Numeric Input with an initial value of 50, a step of 25, a min of 25 and a max of 300
            </label>
            <div className='form-control'>
                <NumericInputConnected id='numeric-4' initialValue={50} step={25} min={25} max={300} style={{width: '48px'}} maxLength={3} invalidMessage='Invalid' />
            </div>
        </div>
    </div>
);
