import * as React from 'react';
import {Button} from '../../button/Button';
import {CodeEditor} from '../../editor/CodeEditor';
import {CodeMirrorModes} from '../../editor/EditorConstants';

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
                <Button enabled={true} name={'Update Query Expression'} onClick={() => this.props.updateQueryExpression(this.state.content)} />
                <CodeEditor
                    value={this.props.queryExpression} mode={CodeMirrorModes.Python}
                    onChange={(code: string) => this.setState({content: code})}
                />
            </div>
        );
    }
}
