import * as React from 'react';
import {JSONEditor} from '@coveord/plasma-react';

import VaporComponent from '../../building-blocs/VaporComponent';
import {fakeJSON, JSONToString} from '../../utils/DiffViewerExmaplesCommon';

// start-print
export class JSONEditorExamples extends React.Component {
    render() {
        return (
            <VaporComponent id="JSONEditor" title="JSON Editor" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">JSON Editor using codemirror</label>
                        <JSONEditor value={JSONToString(fakeJSON)} />
                    </div>

                    <div className="form-group">
                        <label className="form-control-label">JSON Editor using codemirror in readonly mode</label>
                        <JSONEditor value={JSONToString(fakeJSON)} readOnly />
                    </div>

                    <div className="form-group">
                        <label className="form-control-label">
                            JSON Editor using codemirror with an action on change
                        </label>
                        <JSONEditor value={JSONToString(fakeJSON)} onChange={(json: string) => alert(json)} />
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
