import * as React from 'react';
import {BorderedRow} from '../BorderedRow';

export const BorderedRowExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>BorderedRow List</h1>
        <div className='form-group'>
            <label className='form-control-label'>Bordered Row</label>
            <div className='form-control'>
                <BorderedRow className='full-content-x'>
                    I am a bordered row and you can fill me with whatever you want!
                </BorderedRow>
            </div>
        </div>
    </div>;
