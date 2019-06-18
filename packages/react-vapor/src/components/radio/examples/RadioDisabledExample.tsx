import * as React from 'react';
import {Label} from '../../input/Label';
import {Radio} from '../Radio';
import {RadioSelect} from '../RadioSelect';

export class RadioDisabledExample extends React.Component<any, any> {
    render() {
        return (
            <div className="form-group">
                <label className="form-control-label">A Radio Select with disabled options</label>
                <RadioSelect value="a-value" disabled>
                    <Radio id="Option3" name="disabledOptions" value="yellow">
                        <Label>Yellow</Label>
                    </Radio>
                    <Radio id="Option4" name="disabledOptions" value="red">
                        <Label>Red</Label>
                    </Radio>
                </RadioSelect>
            </div>
        );
    }
}
