import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/search';
import 'codemirror/mode/python/python';

import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror';
import * as _ from 'underscore';

import {CodeMirrorGutters, CodeMirrorModes} from './EditorConstants';

export interface ICodeEditorProps {
    value: string;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    errorMessage?: string;
    mode?: string;
}

export class CodeEditor extends React.Component<ICodeEditorProps> {
    static defaultProps: Partial<ICodeEditorProps> = {
        mode: CodeMirrorModes.Python,
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

    private codemirror: ReactCodeMirror.ReactCodeMirror;

    componentDidUpdate(prevProps: ICodeEditorProps) {
        if (prevProps.value !== this.props.value) {
            this.codemirror.getCodeMirror().setValue(this.props.value);
            this.codemirror.getCodeMirror().getDoc().clearHistory();
        }
    }

    render() {
        return (
            <ReactCodeMirror
                ref={(codemirror: ReactCodeMirror.ReactCodeMirror) => this.codemirror = codemirror}
                value={this.props.value}
                onChange={(code: string) => this.handleChange(code)}
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
