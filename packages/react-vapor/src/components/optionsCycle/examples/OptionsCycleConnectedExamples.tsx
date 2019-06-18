import * as React from 'react';
import {OptionsCycleConnected} from '../OptionsCycleConnected';

const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

export class OptionsCycleConnectedExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Options cycle</label>
                    <OptionsCycleConnected id="Cycle-1" options={OPTIONS} />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Options cycle at 2</label>
                    <OptionsCycleConnected id="Cycle-2" options={OPTIONS} startAt={1} />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Options cycle like an action</label>
                    <OptionsCycleConnected
                        id="Cycle-3"
                        options={OPTIONS}
                        previousClassName="btn mod-border w4"
                        buttonClassName="btn ml1"
                        nextClassName="btn mod-border ml1 w4"
                    />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Options cycle not wrapping around</label>
                    <OptionsCycleConnected id="Cycle-4" options={OPTIONS} wrapAround={false} />
                </div>
            </div>
        );
    }
}
