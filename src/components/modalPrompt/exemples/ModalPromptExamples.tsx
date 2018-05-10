import * as React from 'react';
import {ModalBackdrop} from '../../modal/ModalBackdrop';
import {ModalPrompt} from '../ModalPrompt';

export interface IPromptExamplesState {
    isOpened: boolean;
}

export class ModalPromptExamples extends React.Component<any, IPromptExamplesState> {

    componentWillMount() {
        this.state = {isOpened: false};
    }

    openPrompt() {
        this.setState({isOpened: true});
    }

    private cancel() {
        this.setState({isOpened: false});
    }

    private confirm() {
        this.setState({isOpened: false});
        alert('Confirmed');
    }

    render() {
        return (
            <div className='mt2'>
                <div className='form-group'>
                    <label className='form-control-label'>Modal prompt</label>
                    <div>
                        <button
                            className='btn mod-primary'
                            onClick={() => this.openPrompt()}>
                            Open Prompt
            </button>
                        <ModalPrompt
                            id='prompt-confirmation'
                            isOpened={this.state.isOpened}
                            message='This is the message.'
                            confirmLabel='Confirm'
                            title='Confirmation prompt'
                            onCancel={() => this.cancel()}
                            onConfirm={() => this.confirm()}
                            cancelLabel='Cancel'
                        />
                        <ModalBackdrop
                            display={this.state.isOpened}
                            onClick={() => this.cancel()}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
