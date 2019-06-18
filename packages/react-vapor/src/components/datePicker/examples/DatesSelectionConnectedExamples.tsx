import * as React from 'react';
import {DatesSelectionConnected} from '../DatesSelectionConnected';

export class DatesSelectionConnectedExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Dates selection with a range and a Redux state</label>
                    <DatesSelectionConnected hasSetToNowButton withTime isRange id="dates-selection" />
                    <label className="form-control-label">Simple dates selection with a range and a Redux state</label>
                    <DatesSelectionConnected hasSetToNowButton isRange id="dates-selection2" />
                </div>
            </div>
        );
    }
}
