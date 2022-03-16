import MonacoEditor from '@monaco-editor/react';
import * as typescript from 'prettier/parser-typescript';
import {format} from 'prettier/standalone';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ts from 'typescript';
import lzstring from 'lz-string';
import {twoslasher} from '@typescript/twoslash';
import classNames from 'classnames';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as _ from 'underscore';
import initSwc, {transformSync} from '@swc/wasm-web';

import {PlasmaLoading} from './PlasmaLoading';
import {useTypescriptServer} from './useTypescriptServer';
// eslint-disable-next-line
const prettierConfig = require('tsjs/prettier-config');

export const Sandbox: React.FunctionComponent<{children: string; id: string; title?: string; horizontal?: boolean}> = ({
    id,
    title,
    children,
    horizontal,
}) => {
    const formattedCode = format(children as string, {
        ...prettierConfig,
        plugins: [typescript],
        parser: 'typescript',
    });
    const [editedCode, setEditedCode] = React.useState(formattedCode);
    const {fsMap, compilerOptions} = useTypescriptServer();
    const [initialized, setInitialized] = React.useState(false);

    React.useEffect(() => {
        const importAndRunSwcOnMount = async () => {
            await initSwc();
            setInitialized(true);
        };
        importAndRunSwcOnMount();
    }, []);

    React.useEffect(() => {
        if (fsMap === null || !initialized) {
            return;
        }
        try {
            const swc = transformSync(editedCode, {
                jsc: {
                    target: 'es5',
                    keepClassNames: true,
                    loose: true,
                    parser: {
                        syntax: 'typescript',
                        tsx: true,
                        decorators: true,
                        dynamicImport: true,
                        classPrivateProperty: true,
                    },
                },
                module: {
                    type: 'commonjs',
                    strict: true,
                    strictMode: false,
                    lazy: false,
                    noInterop: true,
                    ignoreDynamic: false,
                },
                sourceMaps: false,
            });
            const userCodeToEvaluate =
                swc.code
                    .replace('exports.default = void 0;', '')
                    .replace('exports.default = _default;', '')
                    .replace(/var .+ = require(.+);/g, '') // remove the require statements
                    .replace(/var .+ = __importStar\(require(.+)\);/g, '') // remove the import statements
                    .replace(/_plasmaReact/g, 'PlasmaReact') // use plasma-react from the window Plasma object
                    .replace(/_reactRedux/g, 'ReactRedux') // use react-redux from the window ReactRedux object
                    .replace(/_moment/g, 'moment') + // use moment from the window moment object
                `ReactDOM.render(React.createElement(ReactRedux.Provider, {store: Store}, React.createElement(_default)), document.getElementById('${id}'));`;

            // eslint-disable-next-line no-eval
            eval(userCodeToEvaluate);
        } catch (error) {
            ReactDOM.render(
                <pre className="text mod-error" style={{whiteSpace: 'pre-wrap'}}>
                    {error.toString().trim()}
                </pre>,
                document.getElementById(id)
            );
            console.error(error);
        }
    }, [editedCode, fsMap, initialized]);

    return (
        <div className={classNames('demo-sandbox', {horizontal})}>
            {fsMap === null ? (
                <PlasmaLoading />
            ) : (
                <>
                    <div className="demo-sandbox__preview" id={id} />
                    <div>
                        {title && <div className="demo-sandbox__title body-m-book">{title}</div>}
                        <Editor id={id} value={formattedCode} onChange={setEditedCode} />
                    </div>
                </>
            )}
        </div>
    );
};

const EDITOR_MAX_HEIGHT_IN_PX = 600;
const EDITOR_MIN_HEIGHT_IN_PX = 150;

const Editor: React.FC<{id: string; value: string; onChange: (newValue: string) => void}> = ({id, value, onChange}) => {
    const editorRef = React.useRef(null);
    const [height, setHeight] = React.useState<number>(200);

    const updateHeight = () => {
        const editor = editorRef.current!;
        const contentHeight = Math.min(
            EDITOR_MAX_HEIGHT_IN_PX,
            Math.max(editor.getContentHeight(), EDITOR_MIN_HEIGHT_IN_PX)
        );
        setHeight(contentHeight);
        editor.layout();
    };

    const debounceChangeEditor = React.useMemo(() => _.debounce(() => onChange(editorRef.current.getValue()), 33), []);
    const onChangeEditor = () => {
        debounceChangeEditor();
        updateHeight();
    };

    const handleEditorDidMount = (editor: monaco.editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        editor.onDidChangeModelContent(onChangeEditor);
        editor.onDidContentSizeChange(updateHeight);
        updateHeight();
    };

    return (
        <MonacoEditor
            height={`${height}px`}
            theme="vs-dark"
            path={`${id}.tsx`}
            defaultLanguage="typescript"
            defaultValue={value}
            onMount={handleEditorDidMount}
            onChange={onChangeEditor}
            options={{
                scrollBeyondLastLine: false,
                minimap: {
                    enabled: false,
                },
            }}
        />
    );
};

export default Sandbox;
