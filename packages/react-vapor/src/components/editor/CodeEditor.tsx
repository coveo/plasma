import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/search';
import 'codemirror/mode/python/python';

import * as CodeMirror from 'codemirror';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror2';
import * as _ from 'underscore';

import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {CodeMirrorGutters} from './EditorConstants';

export interface ICodeEditorProps {
    value: string;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    onMount?: (codemirror: ReactCodeMirror.Controlled) => void;
    errorMessage?: string;
    mode: any; // string or object ex.: {name: "javascript", json: true}
    extraKeywords?: string[];
    className?: string;
}

export interface CodeEditorState {
    value: string;
}

export class CodeEditor extends React.Component<ICodeEditorProps, CodeEditorState> {
    static defaultProps: Partial<ICodeEditorProps> = {
        className: 'mod-border',
    };

    static Options: CodeMirror.EditorConfiguration = {
        lineNumbers: true,
        foldGutter: true,
        lint: true,
        gutters: [
            CodeMirrorGutters.LineNumbers,
            CodeMirrorGutters.FoldGutter,
            CodeMirrorGutters.LintMarkers,
        ],
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Alt-F': 'findPersistent',
        },
    };

    private codemirror = React.createRef<ReactCodeMirror.Controlled>();
    private editor: ReactCodeMirror.IInstance;

    constructor(props: ICodeEditorProps, state: CodeEditorState) {
        super(props, state);

        this.state = {
            value: props.value,
        };
    }

    componentDidMount() {
        callIfDefined(this.props.onMount, this.codemirror.current);
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
                editorDidMount={(editor: ReactCodeMirror.IInstance) => {
                    this.editor = editor;
                    this.addExtraKeywords();
                }}
                onBeforeChange={(editor, data, value: string) => {
                    this.setState({value});
                }}
                value={this.state.value}
                onChange={(editor, data, value: string) => this.handleChange(value)}
                options={_.extend({}, CodeEditor.Options, {readOnly: this.props.readOnly, mode: this.props.mode})}
                className={this.props.className}
            />
        );
    }

    private handleChange(code: string) {
        callIfDefined(this.props.onChange, code);
    }

    private addExtraKeywords() {
        if (this.props.extraKeywords) {
            const mode: string = this.props.mode.name || this.props.mode;
            (CodeMirror as any).helpers.hintWords[mode] = (CodeMirror as any).helpers.hintWords[mode].concat(this.props.extraKeywords);
        }
    }
}
