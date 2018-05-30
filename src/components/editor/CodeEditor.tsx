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

import {CodeMirrorGutters} from './EditorConstants';

export interface ICodeEditorProps {
    value: string;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    onMount?: (codemirror: ReactCodeMirror.UnControlled) => void;
    errorMessage?: string;
    mode: string;
}

export class CodeEditor extends React.Component<ICodeEditorProps> {
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

    private codemirror: ReactCodeMirror.UnControlled;
    private editor: ReactCodeMirror.IInstance;

    componentDidMount() {
        if (this.props.onMount) {
            this.props.onMount(this.codemirror);
        }
    }

    componentDidUpdate(prevProps: ICodeEditorProps) {
        if (prevProps.value !== this.props.value) {
            (this.editor as any).getDoc().clearHistory();
        }
    }

    render() {
        return (
            <ReactCodeMirror.UnControlled
                ref={(codemirror: ReactCodeMirror.UnControlled) => this.codemirror = codemirror}
                editorDidMount={(editor: ReactCodeMirror.IInstance) => {this.editor = editor;}}
                value={this.props.value}
                onChange={(editor, data, code: string) => this.handleChange(code)}
                options={_.extend({}, CodeEditor.Options, {readOnly: this.props.readOnly, mode: this.props.mode})}
            />
        );
    }

    private handleChange(code: string) {
        if (this.props.onChange) {
            this.props.onChange(code);
        }
    }
}
