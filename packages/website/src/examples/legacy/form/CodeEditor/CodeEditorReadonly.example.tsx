import {CodeEditor, CodeMirrorModes} from '@coveord/plasma-react';

const defaultValue = `from math import pi as PI
print(PI) // 3.141592653589793
`;

export default () => <CodeEditor value={defaultValue} mode={CodeMirrorModes.Python} readOnly />;
