import 'codemirror/addon/dialog/dialog';
import 'codemirror/addon/hint/anyword-hint';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/search/jump-to-line';
import 'codemirror/addon/search/matchesonscrollbar';
import 'codemirror/addon/search/search';
import 'codemirror/mode/python/python';

import classNames from 'classnames';
import * as CodeMirror from 'codemirror';
import * as React from 'react';
import * as ReactCodeMirror from 'react-codemirror2';
import {connect} from 'react-redux';
import * as _ from 'underscore';

import {IReactVaporState} from '../../ReactVaporState';
import {IDispatch} from '../../utils';
import {CollapsibleSelectors} from '../collapsible/CollapsibleSelectors';
import {CodeEditorActions} from './CodeEditorActions';
import {CodeMirrorGutters} from './EditorConstants';

export interface ICodeEditorProps {
    id?: string;
    value: string;
    mode: any;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    onMount?: (codemirror: ReactCodeMirror.Controlled) => void;
    errorMessage?: string;
    extraKeywords?: string[];
    className?: string;
    options?: CodeMirror.EditorConfiguration;
    collapsibleId?: string;
    ref?: React.Ref<CodeEditorDisconnect>;
}

export interface CodeEditorState {
    value: string;
    numberOfRefresh: number;
}

const mapStateToProps = (state: IReactVaporState, {collapsibleId}: ICodeEditorProps) => ({
    isCollapsibleExpanded: CollapsibleSelectors.isExpanded(state, collapsibleId),
});

const mapDispatchToProps = (dispatch: IDispatch, {id}: ICodeEditorProps) => ({
    updateStoreValue: (value: string) => dispatch(CodeEditorActions.updateValue(id, value)),
    clearCodeEditorFromStore: () => dispatch(CodeEditorActions.remove(id)),
});

class CodeEditorDisconnect extends React.Component<
    ICodeEditorProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>,
    CodeEditorState
> {
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

    state = {
        value: this.props.value,
        numberOfRefresh: 0,
    };

    componentDidMount() {
        this.props.onMount?.(this.codemirror.current);
        if (this.props.isCollapsibleExpanded) {
            this.editor.refresh();
            this.setState({numberOfRefresh: this.state.numberOfRefresh + 1});
        }
        if (this.props.id) {
            this.props.updateStoreValue(this.props.value);
        }
    }

    componentDidUpdate(prevProps: ICodeEditorProps) {
        if (this.state.numberOfRefresh < 2 && this.props.isCollapsibleExpanded) {
            this.editor.refresh();
            this.setState({numberOfRefresh: this.state.numberOfRefresh + 1});
        }
        if (prevProps.value !== this.props.value && this.editor) {
            this.setState({value: this.props.value});
            this.editor.getDoc().clearHistory();
        }
    }

    componentWillUnmount() {
        if (this.props.id) {
            this.props.clearCodeEditorFromStore();
        }
    }

    private debouncedUpdateStore = _.debounce((value: string) => {
        this.props.updateStoreValue(value);
    }, 500);

    render() {
        return (
            <ReactCodeMirror.Controlled
                ref={this.codemirror}
                editorDidMount={(editor: CodeMirror.Editor) => {
                    this.editor = editor;
                    this.addExtraKeywords();
                }}
                onBeforeChange={(editor, data, value: string) => {
                    this.setState({value: value});
                }}
                value={this.state.value}
                onChange={(editor, data, value: string) => {
                    this.props.onChange?.(value);
                    if (this.props.id) {
                        this.debouncedUpdateStore(value);
                    }
                }}
                options={{
                    ...CodeEditorDisconnect.defaultOptions,
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
}

export const CodeEditor = connect<
    ReturnType<typeof mapStateToProps>,
    ReturnType<typeof mapDispatchToProps>,
    React.PropsWithRef<ICodeEditorProps>
>(
    mapStateToProps,
    mapDispatchToProps
)(CodeEditorDisconnect as any);
