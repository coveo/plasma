import * as React from 'react';
import {DatePickerBox} from '../DatePickerBox';
import {SELECTION_BOXES} from './DatePickerExamplesCommon';

export class DatePickerBoxConnectedExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Date picker with Redux state</label>
                    <DatePickerBox id="date-picker-box" withReduxState datesSelectionBoxes={SELECTION_BOXES} />
                </div>
            </div>
        );
    }
}
