import * as React from 'react';
import {DatesSelection} from '../DatesSelection';

export class DatesSelectionExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Dates selection with one date picker</label>
                    <DatesSelection hasSetToNowButton withTime />
                </div>
            </div>
        );
    }
}
