import {twoslasher} from '@typescript/twoslash';
import {createDefaultMapFromCDN} from '@typescript/vfs';
import lzstring from 'lz-string';
import * as monaco from 'monaco-editor';
import * as typescript from 'prettier/parser-typescript';
import * as prettier from 'prettier/standalone';
import * as React from 'react';
import {Loading, Section} from 'react-vapor';
import * as ts from 'typescript';
import * as _ from 'underscore';

// eslint-disable-next-line
const prettierConfig = require('tsjs/prettier-config');

monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
    jsx: monaco.languages.typescript.JsxEmit.React,
    jsxFactory: 'React.createElement',
    reactNamespace: 'React',
});
monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
});
monaco.languages.typescript.typescriptDefaults.setEagerModelSync(true);

const compilerOptions: ts.CompilerOptions = {
    jsx: ts.JsxEmit.React,
    lib: ['es2017', 'dom'],
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES5,
    skipLibCheck: true,
    esModuleInterop: true,
    strict: false,
};

const typesFiles = require.context('!!raw-loader!@types', true, /\.d\.ts$/i, 'lazy');
const typescriptLibs = require.context('!!raw-loader!typescript/lib', false, /\.d\.ts$/i, 'lazy');
const reactVaporTypes = require.context('!!raw-loader!react-vapor/dist', true, /\.d\.ts$/i, 'lazy');
const plasmaTypes = require.context('!!raw-loader!..', true, /\.d\.ts$/i, 'lazy');

const load = async (path: string, ctx: any, root: string) => {
    const {default: content} = await ctx(path);
    let newPath = `${root}/${path.replace('./', '')}`;
    if (root.includes('react-vapor') && path.includes('Entry.d.ts')) {
        newPath = newPath.replace('Entry.d.ts', 'index.d.ts');
    }
    return {path: newPath, content};
};
const loadAll = () =>
    Promise.all([
        // root arg must start with /
        ...typesFiles.keys().map((path) => load(path, typesFiles, '/node_modules/@types')),
        ...typescriptLibs.keys().map((path) => load(path, typescriptLibs, '')),
        ...reactVaporTypes.keys().map((path) => load(path, reactVaporTypes, '/node_modules/react-vapor')),
        ...plasmaTypes.keys().map((path) => load(path, plasmaTypes, '../')),
    ]);

export const EditableCode: React.FunctionComponent = ({children}) => {
    const formattedCode = prettier.format(children as string, {
        ...prettierConfig,
        plugins: [typescript],
        parser: 'typescript',
    });
    const [fsMap, setFsMap] = React.useState<Map<string, string> | null>(null);
    const [editedCode, setEditedCode] = React.useState(formattedCode);

    React.useEffect(() => {
        // fetch all dependencies (react, react-vapor etc)...
        loadAll().then((mappedTypes) => {
            // ...and map dependencies to monaco's virtual filesystem (vfs)
            createDefaultMapFromCDN(compilerOptions, ts.version!, true, ts, lzstring).then((map) => {
                mappedTypes.forEach(({path, content}) => {
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(content, `file://${path}`);
                    map.set(path, content);
                });
                setFsMap(map);
            });
        });
    }, []);

    React.useEffect(() => {
        if (fsMap === null) {
            return;
        }
        const twoslash = twoslasher(editedCode, 'tsx', {
            tsModule: ts,
            defaultOptions: {noStaticSemanticInfo: true, showEmit: true, noErrorValidation: true},
            defaultCompilerOptions: compilerOptions,
            lzstringModule: lzstring,
            fsMap: fsMap,
        });

        if (twoslash.errors.length) {
            console.error(twoslash.errors);
            return;
        }

        const helpMe =
            twoslash.code
                .replace('Object.defineProperty(exports, "__esModule", { value: true });', '')
                .replace(/var .+ = require(.+);/g, '')
                .replace(/var .+ = __importStar\(require(.+)\);/g, '')
                .replace(/exports\.(.+Examples) = (.+)/, 'const Example = $2')
                .replace(/exports\..+ = .+;/g, '')
                .replace(/react_vapor_\d+/g, 'ReactVapor') +
            ";ReactDOM.render(React.createElement(ReactRedux.Provider, {store: Store}, React.createElement(Example)), document.getElementById('custom-id'));";

        try {
            // eslint-disable-next-line no-eval
            eval(helpMe);
        } catch (error) {
            console.error(error);
        }
    }, [editedCode, fsMap]);

    return (
        <Section>
            <Section>
                <div id="custom-id">
                    <Loading />
                </div>
            </Section>
            <Section>
                <Editor value={formattedCode} onChange={setEditedCode} />
            </Section>
        </Section>
    );
};

const Editor: React.FC<{value: string; onChange: (newValue: string) => void}> = ({value, onChange}) => {
    const divEl = React.useRef<HTMLDivElement>(null);
    let editor: monaco.editor.IStandaloneCodeEditor;
    let model: monaco.editor.IModel;
    const onChangeEditor = React.useMemo(() => _.debounce(() => onChange(editor.getValue()), 400), []);
    React.useEffect(() => {
        if (divEl.current) {
            model = monaco.editor.createModel(value, 'typescript', monaco.Uri.file('index.tsx'));
            editor = monaco.editor.create(divEl.current, {
                model,
                scrollBeyondLastLine: false,
                readOnly: false,
                theme: 'vs-dark',
            });
            editor.onDidChangeModelContent(onChangeEditor);
        }
        return () => {
            model.dispose();
            editor.dispose();
        };
    }, []);
    return <div className="Editor" ref={divEl} style={{height: '450px'}} />;
};

export default EditableCode;
