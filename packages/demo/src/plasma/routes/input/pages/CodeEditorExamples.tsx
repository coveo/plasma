import * as React from 'react';
import {CodeEditor, CodeMirrorModes} from 'react-vapor';

import VaporComponent from '../../../../demo-building-blocs/VaporComponent';

const defaultValue = `from math import pi as PI
print(PI) // 3.141592653589793
`;

// start-print
export class CodeEditorExamples extends React.Component {
    render() {
        return (
            <VaporComponent id="CodeEditor" title="Code Editor" withSource>
                <div className="mt2">
                    <div className="form-group">
                        <label className="form-control-label">
                            Code Editor with line wrapping and a starting value in the redux store
                        </label>
                        <CodeEditor
                            id="CodeEditorId"
                            value="A starting value"
                            mode={CodeMirrorModes.Python}
                            options={{lineWrapping: true}}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-control-label">Code Editor using codemirror in readonly mode</label>
                        <CodeEditor value="" mode={CodeMirrorModes.Python} readOnly />
                    </div>

                    <div className="form-group">
                        <label className="form-control-label">
                            Code Editor using codemirror with an action on change
                        </label>
                        <CodeEditor value="" mode={CodeMirrorModes.Python} onChange={(code: string) => alert(code)} />
                    </div>
                    <div className="form-group">
                        <label className="form-control-label">Code Editor using the default value prop</label>
                        <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} options={{lineWrapping: true}} />
                    </div>
                </div>
            </VaporComponent>
        );
    }
}
// stop-print
