import * as React from 'react';
import {FilterBoxConnected} from '../FilterBoxConnected';

export class FilterBoxConnectedExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2' style={{width: 400}}>
                <div className='form-group'>
                    <label className='form-control-label'>Filter box saving its state into the redux store.</label>
                    <FilterBoxConnected id='FilterBoxConnectedExamplesComponent' />
                </div>
            </div>
        );
    }
}
