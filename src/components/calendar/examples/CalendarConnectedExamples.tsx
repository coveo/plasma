import * as React from 'react';
import {Calendar} from '../Calendar';
import {CalendarConnected} from '../CalendarConnected';

export class CalendarConnectedExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Calendar with Redux state</label>
                    <CalendarConnected id='calendar' />
                    <Calendar />
                </div>
            </div>
        );
    }
}
