import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/search';
import 'codemirror/mode/python/python';

import * as CodeMirror from 'codemirror';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror2';

import classNames from 'classnames';
import {CodeMirrorGutters} from './EditorConstants';

export interface ICodeEditorProps {
    value: string;
    mode: any;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    onMount?: (codemirror: ReactCodeMirror.Controlled) => void;
    errorMessage?: string;
    extraKeywords?: string[];
    className?: string;
    options?: CodeMirror.EditorConfiguration;
    isRefreshRequired?: boolean;
}

export interface CodeEditorState {
    value: string;
}

export class CodeEditor extends React.Component<ICodeEditorProps, CodeEditorState> {
    static defaultProps: Partial<ICodeEditorProps> = {
        className: 'mod-border',
        value: '{}',
    };

    static defaultOptions: CodeMirror.EditorConfiguration = {
        lineNumbers: true,
        foldGutter: true,
        lint: true,
        gutters: [CodeMirrorGutters.LineNumbers, CodeMirrorGutters.FoldGutter, CodeMirrorGutters.LintMarkers],
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Alt-F': 'findPersistent',
        },
    };

    private codemirror = React.createRef<ReactCodeMirror.Controlled>();
    private editor: CodeMirror.Editor;

    constructor(props: ICodeEditorProps, state: CodeEditorState) {
        super(props, state);

        this.state = {
            value: props.value,
        };
    }

    componentDidMount() {
        this.props.onMount?.(this.codemirror.current);
        this.props.isRefreshRequired && setInterval(this.timer, 300);
    }

    componentWillUnmount() {
        this.props.isRefreshRequired && clearInterval();
    }

    componentDidUpdate(prevProps: ICodeEditorProps) {
        if (prevProps.value !== this.props.value && this.editor) {
            this.setState({value: this.props.value});
            this.editor.getDoc().clearHistory();
        }
    }

    render() {
        return (
            <ReactCodeMirror.Controlled
                ref={this.codemirror}
                editorDidMount={(editor: CodeMirror.Editor) => {
                    this.editor = editor;
                    this.addExtraKeywords();
                }}
                onBeforeChange={(editor, data, value: string) => {
                    this.setState({value});
                }}
                value={this.state.value}
                onChange={(editor, data, value: string) => {
                    this.props.onChange?.(value);
                    this.props.isRefreshRequired && clearInterval();
                }}
                options={{
                    ...CodeEditor.defaultOptions,
                    readOnly: this.props.readOnly,
                    mode: this.props.mode,
                    ...this.props.options,
                }}
                className={classNames(this.props.className, {'code-editor-no-cursor': this.props.readOnly})}
            />
        );
    }

    private addExtraKeywords() {
        if (this.props.extraKeywords) {
            const mode: string = this.props.mode.name || this.props.mode;
            (CodeMirror as any).helpers.hintWords[mode] = (CodeMirror as any).helpers.hintWords[mode].concat(
                this.props.extraKeywords
            );
        }
    }

    private timer = () => {
        this.editor.refresh();
    };
}
