import * as React from 'react';
import {Label} from '../../input/Label';
import {CheckboxConnected} from '../CheckboxConnected';

export class CheckboxConnectedExamples extends React.Component<any, any> {

    render() {
        return (
            <div className='mt2'>
                <h1 className='text-blue mb1 bold'>Checkboxes Connected</h1>
                <div className='form-group'>
                    <CheckboxConnected id='checkbox1'>
                        <Label classes={['label']}>A checkbox connected unchecked by default</Label>
                    </CheckboxConnected>
                    <br />
                    <CheckboxConnected id='checkbox2' classes={['mt1']} defaultChecked={true}>
                        <Label classes={['label']}>A checkbox connected checked by default</Label>
                    </CheckboxConnected>
                </div>
            </div>
        );
    }
}
