import * as React from 'react';
import {InputConnectedExamples} from './InputConnectedExamples';
import {InputExamples} from './InputExamples';
export const InputAndInputConnectedExamples = () =>
    <div className='mt2'>
        <h1 className='text-blue mb1 bold'>Inputs List</h1>
        <InputExamples />
        <InputConnectedExamples />
    </div>;
