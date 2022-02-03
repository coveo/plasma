import * as typescript from 'prettier/parser-typescript';
import {format} from 'prettier/standalone';
import React from 'react';
import * as ReactDOM from 'react-dom';
import * as ts from 'typescript';
import lzstring from 'lz-string';
import {twoslasher} from '@typescript/twoslash';
import classNames from 'classnames';
import * as monaco from 'monaco-editor';
import * as _ from 'underscore';
import '@styles/sandbox.scss';
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

    React.useEffect(() => {
        if (fsMap === null) {
            return;
        }
        try {
            const twoslash = twoslasher(editedCode, 'tsx', {
                tsModule: ts,
                defaultOptions: {noStaticSemanticInfo: false, showEmit: true, noErrorValidation: true},
                defaultCompilerOptions: compilerOptions,
                lzstringModule: lzstring,
                fsMap,
            });
            if (twoslash.errors.length) {
                console.error(twoslash.errors);
                return;
            }
            const userCodeToEvaluate =
                twoslash.code
                    .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
                    .replace(/var .+ = require(.+);/g, '') // remove the require statements
                    .replace(/var .+ = __importStar\(require(.+)\);/g, '') // remove the import statements
                    .replace(/exports\.default = (.+)/g, 'var Example = $1') // change the default export to a component named Example
                    .replace(/plasma_react_\d+/g, 'PlasmaReact') + // use react-vapor from the window Plasma object
                `ReactDOM.render(React.createElement(ReactRedux.Provider, {store: Store}, React.createElement(Example)), document.getElementById('${id}'));`;

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
    }, [editedCode, fsMap]);

    return (
        <div className={classNames('demo-sandbox', {horizontal})}>
            <div className="demo-sandbox__preview" id={id} />
            <div>
                {title && <div className="demo-sandbox__title body-m-book">{title}</div>}
                <Editor id={id} value={formattedCode} onChange={setEditedCode} />
            </div>
        </div>
    );
};

const EDITOR_MAX_HEIGHT_IN_PX = 600;
const EDITOR_MIN_HEIGHT_IN_PX = 150;

const Editor: React.FC<{id: string; value: string; onChange: (newValue: string) => void}> = ({id, value, onChange}) => {
    const divEl = React.useRef<HTMLDivElement>(null);
    let editor: monaco.editor.IStandaloneCodeEditor;
    let model: monaco.editor.IModel;
    const onChangeEditor = React.useMemo(() => _.debounce(() => onChange(editor.getValue()), 500), []);

    const updateHeight = () => {
        const contentHeight = Math.min(
            EDITOR_MAX_HEIGHT_IN_PX,
            Math.max(editor.getContentHeight(), EDITOR_MIN_HEIGHT_IN_PX)
        );
        divEl.current.style.height = `${contentHeight}px`;
        editor.layout();
    };

    React.useEffect(() => {
        if (divEl.current) {
            model = monaco.editor.createModel(value, 'typescript', monaco.Uri.file(`${id}.tsx`));
            editor = monaco.editor.create(divEl.current, {
                model,
                scrollBeyondLastLine: false,
                minimap: {
                    enabled: false,
                },
                readOnly: false,
                theme: 'vs-dark',
            });
            editor.onDidChangeModelContent(onChangeEditor);
            editor.onDidContentSizeChange(updateHeight);
            updateHeight();
        }
        return () => {
            model.dispose();
            editor.dispose();
        };
    }, []);
    return <div className="demo-sandbox__editor" ref={divEl} />;
};

export default Sandbox;
