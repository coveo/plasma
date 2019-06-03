import 'diff2html/dist/diff2html.min.css';

import * as React from 'react';

import {fakeJSON, fakeJSON1, JSONToString} from '../../../utils/JSONUtils';
import {DiffViewer} from '../DiffViewer';

export class DiffViewerExamples extends React.Component {

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Diff Viewer</label>
                    <DiffViewer first={JSONToString(fakeJSON)} second={JSONToString(fakeJSON1)} />
                </div>
            </div>
        );
    }
}
