import * as React from 'react';
import {BorderedLine} from '../BorderedLine';

export const BorderedLineExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>BorderedLine List</h1>
        <div className='form-group'>
            <label className='form-control-label'>Bordered Row</label>
            <div className='form-control'>
                <BorderedLine className='full-content-x'>
                    I am a bordered row and you can fill me with whatever you want!
                </BorderedLine>
            </div>
        </div>
    </div>;
