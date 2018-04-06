import 'codemirror/mode/javascript/javascript';

import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror';
import * as _ from 'underscore';

import {Svg} from '../svg/Svg';
import {CodeMirrorGutters, CodeMirrorModes} from './EditorConstants';

export interface IJSONEditorProps {
    value: string;
    readOnly?: boolean;
    onChange?: (json: string, inError: boolean) => void;
    errorMessage?: string;
}

export interface IJSONEditorState {
    isInError: boolean;
}

export const DEFAULT_JSON_ERROR_MESSAGE: string = 'The JSON configuration is syntactically invalid.';

export class JSONEditor extends React.Component<IJSONEditorProps, IJSONEditorState> {
    static defaultProps: Partial<IJSONEditorProps> = {
        errorMessage: DEFAULT_JSON_ERROR_MESSAGE,
    };
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

    constructor(props: IJSONEditorProps, state: IJSONEditorState) {
        super(props, state);
        this.state = {
            isInError: false,
        };
    }

    componentDidUpdate(prevProps: IJSONEditorProps) {
        if (prevProps.value !== this.props.value) {
            this.codemirror.getCodeMirror().setValue(this.props.value);
            this.codemirror.getCodeMirror().getDoc().clearHistory();
        }
    }

    render() {
        const classes: string = classNames(
            'form-group',
            {
                'input-validation-error': this.state.isInError,
            },
        );
        return (
            <div className={classes}>
                <ReactCodeMirror
                    ref={(codemirror: ReactCodeMirror.ReactCodeMirror) => this.codemirror = codemirror}
                    value={this.props.value}
                    onChange={(json: string) => this.handleChange(json)}
                    options={_.extend({}, JSONEditor.Options, {readOnly: this.props.readOnly})}
                />
                {this.getValidationDetails()}
            </div>
        );
    }

    private getValidationDetails(): JSX.Element {
        return this.state.isInError
            ? (
                <div className='input-validation-error-details'>
                    <Svg className='input-validation-error-icon' svgName='message-alert' svgClass='icon fill-white' />
                    <span className='input-validation-error-message'>{this.props.errorMessage}</span>
                </div>
            )
            : null;
    }

    private handleChange(json: string) {
        let inError: boolean = false;
        try {
            JSON.parse(json);
        } catch (error) {
            inError = true;
        }
        this.setState({
            isInError: inError,
        }, () => this.callOnChange(json, inError));
    }

    private callOnChange(json: string, inError: boolean) {
        if (this.props.onChange) {
            this.props.onChange(json, inError);
        }
    }
}
