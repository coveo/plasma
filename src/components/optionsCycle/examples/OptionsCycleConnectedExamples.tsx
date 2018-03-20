import * as React from 'react';
import {OptionsCycleConnected} from '../OptionsCycleConnected';

const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

export class OptionsCycleConnectedExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Options cycle</label>
                    <OptionsCycleConnected options={OPTIONS} />
                </div>
            </div>
        );
    }
}
