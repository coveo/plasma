import loadable from '@loadable/component';
import classNames from 'classnames';
import type {Editor, EditorConfiguration} from 'codemirror';
import * as React from 'react';
import type {Controlled} from 'react-codemirror2';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState';
import {IDispatch} from '../../utils';
import {CollapsibleSelectors} from '../collapsible/CollapsibleSelectors';
import {CodeEditorActions} from './CodeEditorActions';
import {CodeMirrorGutters} from './EditorConstants';

const ReactCodeMirror = loadable(() => import('./CodeMirror'), {
    ssr: false,
    resolveComponent: (mod: typeof import('./CodeMirror')) => mod.Controlled,
});

export interface ICodeEditorProps {
    id?: string;
    value: string;
    mode: any;
    readOnly?: boolean;
    onChange?: (code: string) => void;
    onMount?: (codemirror: Controlled) => void;
    errorMessage?: string;
    extraKeywords?: string[];
    className?: string;
    options?: EditorConfiguration;
    collapsibleId?: string;
    ref?: React.Ref<CodeEditorDisconnect>;
}

export interface CodeEditorState {
    value: string;
    numberOfRefresh: number;
}

const mapStateToProps = (state: PlasmaState, {collapsibleId}: ICodeEditorProps) => ({
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

    static defaultOptions = {
        lineNumbers: true,
        foldGutter: true,
        lint: true,
        gutters: [CodeMirrorGutters.LineNumbers, CodeMirrorGutters.FoldGutter, CodeMirrorGutters.LintMarkers],
        extraKeys: {
            'Ctrl-Space': 'autocomplete',
            'Alt-F': 'findPersistent',
        },
    };

    private codemirror = React.createRef<Controlled>();
    private editor: Editor;

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

    private updateStore = () => {
        this.props.updateStoreValue(this.state.value);
    };

    render() {
        return (
            <ReactCodeMirror
                {
                    // here we must spread the object otherwise typesript throws a tantrum about ref not existing
                    ...{ref: this.codemirror}
                }
                editorDidMount={(editor: Editor) => {
                    this.editor = editor;
                    this.addExtraKeywords();
                }}
                onBeforeChange={(editor, data, value: string) => {
                    this.setState({value: value});
                }}
                value={this.state.value}
                onChange={(editor, data, value: string) => {
                    this.props.onChange?.(value);
                    this.setState({
                        value,
                    });
                }}
                options={{
                    ...CodeEditorDisconnect.defaultOptions,
                    readOnly: this.props.readOnly,
                    mode: this.props.mode,
                    ...this.props.options,
                }}
                onBlur={() => {
                    if (this.props.id) {
                        this.updateStore();
                    }
                }}
                className={classNames(this.props.className, {'code-editor-no-cursor': this.props.readOnly})}
            />
        );
    }

    private addExtraKeywords() {
        if (this.props.extraKeywords && this.props.extraKeywords.length > 0) {
            const mode: string = this.props.mode.name || this.props.mode;
            import('codemirror').then((mod) => {
                mod.default.registerHelper('hintWords', mode, this.props.extraKeywords);
            });
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
