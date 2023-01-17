import classNames from 'classnames';
import type {Editor, EditorConfiguration} from 'codemirror';
import {Component, ComponentType, createRef} from 'react';
import {IControlledCodeMirror} from 'react-codemirror2';
import type {Controlled} from 'react-codemirror2';
import {connect} from 'react-redux';

import {PlasmaState} from '../../PlasmaState.js';
import {IDispatch} from '../../utils/index.js';
import {CollapsibleSelectors} from '../collapsible/index.js';
import {Loadable} from '../loadable/Loadable.js';
import {CodeEditorActions} from './CodeEditorActions.js';
import {CodeMirrorGutters} from './EditorConstants.js';

const ReactCodeMirror = Loadable<IControlledCodeMirror>(
    () => import('./CodeMirror.js').then((mod: typeof import('./CodeMirror')) => mod.Controlled),
    {
        ssr: false,
    }
);

export interface ICodeEditorProps {
    /**
     * The unique identifier that will be used to retrieve the value from the PlasmaState
     */
    id?: string;
    /**
     * The initial value
     */
    value: string;
    /**
     * The mode to use as syntax highlighting in the form of a MIME type. You can use values from the CodeMirrorModes constant to help you out.
     */
    mode: any;
    /**
     * When true, the content of the editor will not be editable
     */
    readOnly?: boolean;
    /**
     * A callback function executed when the content of the editor changes
     *
     * @param code The content of the editor after the change
     */
    onChange?: (code: string) => void;
    /**
     * A callback function executed when the editor is mounted to the DOM
     */
    onMount?: (codemirror: Controlled) => void;
    /**
     * Additionnal keywords to suggest to the user when the suggestion menu is opened with CTRL + Space.
     */
    extraKeywords?: string[];
    /**
     * CSS classes to add on the container element
     */
    className?: string;
    /**
     * Additional editor options
     */
    options?: EditorConfiguration;
    /**
     * If rendered inside a Collapsible component, you need to specify the collapsible id otherwise the editor might not be showing its content properly
     */
    collapsibleId?: string;
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

class CodeEditorDisconnect extends Component<
    ICodeEditorProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>,
    CodeEditorState
> {
    static defaultProps: Partial<ICodeEditorProps> = {
        className: 'mod-border',
        value: '',
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

    private codemirror = createRef<Controlled>();
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

        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value});

            if (this.editor) {
                this.editor.getDoc().clearHistory();
            }
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

/**
 * @deprecated use Mantine instead
 */
export const CodeEditor: ComponentType<ICodeEditorProps> = connect(
    mapStateToProps,
    mapDispatchToProps
)(CodeEditorDisconnect);
