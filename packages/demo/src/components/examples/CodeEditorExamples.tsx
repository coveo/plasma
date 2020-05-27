import * as React from 'react';
import {CodeEditor, CodeMirrorModes} from 'react-vapor';

export class CodeEditorExamples extends React.Component<{}, {}> {
    render() {
        return (
            <div className="mt2">
                <div className="form-group">
                    <label className="form-control-label">Code Editor using codemirror with line wrapping</label>
                    <CodeEditor value="" mode={CodeMirrorModes.Python} options={{lineWrapping: true}} />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Code Editor using codemirror in readonly mode</label>
                    <CodeEditor value="" mode={CodeMirrorModes.Python} readOnly />
                </div>

                <div className="form-group">
                    <label className="form-control-label">Code Editor using codemirror with an action on change</label>
                    <CodeEditor value="" mode={CodeMirrorModes.Python} onChange={(code: string) => alert(code)} />
                </div>
            </div>
        );
    }
}
