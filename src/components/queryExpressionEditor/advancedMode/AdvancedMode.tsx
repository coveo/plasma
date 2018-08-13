import * as React from 'react';
import {Button} from '../../button/Button';
import {CodeEditor} from '../../editor/CodeEditor';
import {CodeMirrorModes} from '../../editor/EditorConstants';
import * as styles from './AdvancedMode.scss';

export interface IAdvancedModeProps {
    queryExpression: string;
    updateQueryExpression: (expression: string) => void;
}

export interface IAdvancedModeState {
    content: string;
}

export class AdvancedMode extends React.Component<IAdvancedModeProps, IAdvancedModeState> {
    constructor(props: IAdvancedModeProps) {
        super(props);
        this.state = {content: ''};
    }

    // TODO : Can't update it live for now
    // private onChange(content: string) {
    //     this.props.updateQueryExpression(content);
    // }

    render() {
        return (
            <div>
                <div className='text-medium-blue mt4 ml4'>
                    Write your query using <a href='https://onlinehelp.coveo.com/en/cloud/coveo_cloud_query_syntax_reference.htm'>Coveo query syntax </a>.
                </div>
                <div className={`mt3 ml4 ${styles.codeEditor}`}>
                    <CodeEditor
                        value={this.props.queryExpression} mode={CodeMirrorModes.Python}
                        onChange={(code: string) => this.setState({content: code})}
                    />
                </div>
                <div className={`mt2 ${styles.button}`}>
                    <Button enabled={true} name={'Update Query Expression'} onClick={() => this.props.updateQueryExpression(this.state.content)} />
                </div>
            </div>
        );
    }
}
