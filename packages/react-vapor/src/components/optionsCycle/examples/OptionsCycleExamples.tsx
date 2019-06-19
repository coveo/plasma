import * as React from 'react';
import {OptionsCycle} from '../OptionsCycle';

const OPTIONS = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

export class OptionsCycleExamples extends React.Component<any, any> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Options cycle</label>
                    <OptionsCycle options={OPTIONS} />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Options cycle at 2</label>
                    <OptionsCycle options={OPTIONS} currentOption={1} />
                </div>
            </div>
        );
    }
}
