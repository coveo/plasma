import * as React from 'react';
import {CodeEditor} from '../../editor/CodeEditor';
import {CodeMirrorModes} from '../../editor/EditorConstants';
import * as styles from './AdvancedMode.scss';

export interface IAdvancedModeProps {
    queryExpression: string;
    updateQueryExpression: (expression: string) => void;
}

export interface IAdvancedModeState {
    initialContent: string;
}

export class AdvancedMode extends React.Component<IAdvancedModeProps, IAdvancedModeState> {
    private codeEditorContent: string;

    constructor(props: IAdvancedModeProps) {
        super(props);
        this.state = {initialContent: ''};
        this.codeEditorContent = '';
    }

    componentWillReceiveProps(nextProps: IAdvancedModeProps) {
        if (this.codeEditorContent !== nextProps.queryExpression) {
            this.setState({initialContent: nextProps.queryExpression});
        }
    }

    private onChange(content: string) {
        this.codeEditorContent = content;
        this.props.updateQueryExpression(content);
    }

    render() {
        return (
            <div>
                <div className='text-medium-blue mt4 ml4'>
                    Write your query using <a href='https://onlinehelp.coveo.com/en/cloud/coveo_cloud_query_syntax_reference.htm'>Coveo query syntax </a>.
                </div>
                <div className={`mt3 ml4 ${styles.codeEditor}`}>
                    <CodeEditor
                        value={this.state.initialContent} mode={CodeMirrorModes.Python}
                        onChange={(content: string) => this.onChange(content)}
                    />
                </div>
            </div>
        );
    }
}
