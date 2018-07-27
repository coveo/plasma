import * as React from 'react';
import { Button } from '../../button/Button';
import { CodeEditor } from '../../editor/CodeEditor';
import { CodeMirrorModes } from '../../editor/EditorConstants';

export interface IAdvancedModeProps {
    initialExpression: string;
    updateExpression: (expression: string) => void;
}

export interface IAdvancedModeState {
    initialExpression: string;
    content: string;
}

export class AdvancedMode extends React.Component<IAdvancedModeProps, IAdvancedModeState> {
    constructor(props: IAdvancedModeProps) {
        super(props);
        this.state = {initialExpression: this.props.initialExpression, content: ''};
    }

    private updateExpression() {
        this.props.updateExpression(this.state.content);
    }

    render() {
        return (
            <div>
                <Button enabled={true} name={'Update Query Expression'} onClick={() => this.updateExpression()}/>
                <CodeEditor 
                value={this.props.initialExpression} mode={CodeMirrorModes.Python}
                onChange={(code: string) => this.setState({content: code})} 
                />
            </div>
        );
    }
}
