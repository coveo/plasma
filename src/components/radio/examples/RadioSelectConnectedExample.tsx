import * as React from 'react';
import {ReactVaporStore} from '../../../../docs/ReactVaporStore';
import {Button} from '../../button/Button';
import {Label} from '../../input/Label';
import {Radio} from '../Radio';
import {setRadioSelect} from '../RadioSelectActions';
import {RadioSelectConnected} from '../RadioSelectConnected';

const radioSelectId = 'radioselectconnected';

export class RadioSelectConnectedExample extends React.Component {
    render() {
        return (
            <div className='mt2'>
                <div className='form-group mt1'>
                    <label className='form-control-label'>A Radio Select Connected</label>
                    <RadioSelectConnected id='radioselectconnected'>
                        <Radio id='Option1' name='enabledOptions' value='blue'>
                            <Label>Blue</Label>
                        </Radio>
                        <Radio id='Option2' name='enabledOptions' value='green'>
                            <Label>Green</Label>
                        </Radio>
                    </RadioSelectConnected>
                </div>
                <div className='form-group'>
                    <Button enabled name='disable blue option' onClick={() => ReactVaporStore.dispatch(setRadioSelect(radioSelectId, {disabledValues: ['blue']}))} />
                    <Button enabled name='enable blue option' onClick={() => ReactVaporStore.dispatch(setRadioSelect(radioSelectId, {disabledValues: []}))} />
                </div>
            </div>
        );
    }
}
