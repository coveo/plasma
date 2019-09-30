import * as React from 'react';
import {Label} from '../../input/Label';
import {Radio} from '../Radio';

export class SingleRadioWithDescriptionExample extends React.Component<any, any> {
    render() {
        return (
            <div className="form-group">
                <label className="form-control-label">A Single Radio Option with Description</label>
                <Radio id="SingleOptionWithDescription" name="singleoptionwithdescription" value="brown">
                    <Label>Brown</Label>
                    <div className="mod-align-with-radio-label text-lynch mt1">
                        This color has an optional description.
                    </div>
                </Radio>
            </div>
        );
    }
}
