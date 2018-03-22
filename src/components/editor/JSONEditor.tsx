import 'codemirror/mode/javascript/javascript';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror';
import * as _ from 'underscore';
import {CodeMirrorGutters, CodeMirrorModes} from './EditorConstants';

export interface IJSONEditorProps {
    value: string;
    readOnly?: boolean;
    onChange?: (json: string) => void;
}

export class JSONEditor extends React.Component<IJSONEditorProps, {}> {
    static Options: CodeMirror.EditorConfiguration = {
        mode: CodeMirrorModes.JSON,
        lineNumbers: true,
        foldGutter: true,
        lint: true,
        gutters: [
            CodeMirrorGutters.LineNumbers,
            CodeMirrorGutters.FoldGutter,
            CodeMirrorGutters.LintMarkers,
        ],
    };

    private codemirror: ReactCodeMirror.ReactCodeMirror;

    componentDidUpdate(prevProps: IJSONEditorProps) {
        if (prevProps.value !== this.props.value) {
            this.codemirror.getCodeMirror().getDoc().clearHistory();
        }
    }

    render() {
        return (
            <ReactCodeMirror
                ref={(codemirror: ReactCodeMirror.ReactCodeMirror) => this.codemirror = codemirror}
                value={this.props.value}
                onChange={(json: string) => this.handleChange(json)}
                options={_.extend({}, JSONEditor.Options, {readOnly: this.props.readOnly})}
            />
        );
    }

    private handleChange(json: string) {
        if (this.props.onChange) {
            this.props.onChange(json);
        }
    }
}
