import * as React from 'react';
import {Label} from '../../input/Label';
import {Radio} from '../Radio';

export class SingleRadioExample extends React.Component<any, any> {
    render() {
        return (
            <div className='form-group'>
                <label className='form-control-label'>A Single Radio Option</label>
                <Radio id='SingleOption' name='singleoption' value='purple'>
                    <Label>Purple</Label>
                </Radio>
            </div>
        );
    }
}
