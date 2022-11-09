import MonacoEditor from '@monaco-editor/react';
import initSwc, {transformSync} from '@swc/wasm-web';
import classNames from 'classnames';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as typescript from 'prettier/parser-typescript';
import {format} from 'prettier/standalone';
import {FunctionComponent, useEffect, useMemo, useRef, useState} from 'react';
import * as ReactDOM from 'react-dom';
import * as _ from 'underscore';

import {PlasmaLoading} from './PlasmaLoading';
import typesLoader from './typesLoader';

const prettierConfig = await import('tsjs/prettier-config.js');

const formatCode = (code: string) =>
    format(code, {
        ...prettierConfig,
        plugins: [typescript],
        parser: 'typescript',
    });

export interface SandboxProps {
    children: string;
    id: string;
    title?: string;
    horizontal?: boolean;
}

export const Sandbox = ({id, title, children, horizontal}: SandboxProps) => {
    const formattedCode = formatCode(children as string);
    const [editedCode, setEditedCode] = useState(formattedCode);
    const [initialized, setInitialized] = useState(false);

    const importAndRunSwcOnMount = async () => {
        await initSwc();
        setInitialized(true);
    };

    useEffect(() => {
        setEditedCode(formatCode(children as string));
    }, [children]);

    useEffect(() => {
        importAndRunSwcOnMount();
        typesLoader.load();
    }, []);

    useEffect(() => {
        if (!initialized) {
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
                    transform: {
                        react: {
                            runtime: 'automatic',
                        },
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
                    .replace(/_jsxRuntime/g, 'jsxRuntime')
                    .replace(/_react/g, 'React')
                    .replace(/_plasmaReact/g, 'PlasmaReact') // use plasma-react from the window Plasma object
                    .replace(/_plasmaMantine/g, 'PlasmaMantine') // use plasma-react from the window Plasma object
                    .replace(/_reactRedux/g, 'ReactRedux') // use react-redux from the window ReactRedux object
                    .replace(/_redux/g, 'Redux') // use redux from the window Redux object
                    .replace(/_loremIpsum/g, 'LoremIpsum')
                    .replaceAll('(0, _moment).default', 'moment') // replace the moment object
                    .replace(/_moment.default/g, 'moment') + // replace the moment() function
                `const store = Redux.createStore(Redux.combineReducers(PlasmaReact.PlasmaReducers), Redux.applyMiddleware(ThunkMiddleware, PromiseMiddleware));
                ReactDOM.render(jsxRuntime.jsx(ReactRedux.Provider, {store, children: jsxRuntime.jsx(_default, {})}), document.getElementById('${id}'));`;

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
    }, [editedCode, initialized]);

    return (
        <div className={classNames('demo-sandbox', {horizontal})}>
            {!initialized ? (
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

const Editor: FunctionComponent<
    React.PropsWithChildren<{id: string; value: string; onChange: (newValue: string) => void}>
> = ({id, value, onChange}) => {
    const editorRef = useRef(null);
    const [height, setHeight] = useState<number>(200);

    useEffect(() => {
        editorRef.current?.setValue?.(value);
    }, [value]);

    const updateHeight = () => {
        const editor = editorRef.current!;
        const contentHeight = Math.min(
            EDITOR_MAX_HEIGHT_IN_PX,
            Math.max(editor.getContentHeight(), EDITOR_MIN_HEIGHT_IN_PX)
        );
        setHeight(contentHeight);
        editor.layout();
    };

    const debounceChangeEditor = useMemo(() => _.debounce(() => onChange(editorRef.current.getValue()), 33), []);
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
