import {Component} from 'react';

import {Modal} from '../modal/Modal.js';
import {ModalBody} from '../modal/ModalBody.js';
import {ModalFooter} from '../modal/ModalFooter.js';
import {ModalHeader} from '../modal/ModalHeader.js';

export interface IModalPromptOwnProps {
    id: string;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export interface IModalPromptStateProps {
    isOpened?: boolean;
}

export interface IModalPromptDispatchProps {
    onCancel?: (id: string) => void;
    onDestroy?: (id: string) => void;
    onRender?: (id: string) => void;
    onConfirm: (id: string) => void;
}

export const DEFAULT_MODAL_PROMPT_CONFIRM_LABEL: string = 'Confirm';
export const DEFAULT_MODAL_PROMPT_CANCEL_LABEL: string = 'Cancel';

export interface IModalPromptProps extends IModalPromptOwnProps, IModalPromptStateProps, IModalPromptDispatchProps {}

/**
 * @deprecated Use Mantine Modal instead: https://mantine.dev/core/modal/
 */
export class ModalPrompt extends Component<IModalPromptProps, any> {
    static defaultProps: Partial<IModalPromptProps> = {
        cancelLabel: DEFAULT_MODAL_PROMPT_CANCEL_LABEL,
        confirmLabel: DEFAULT_MODAL_PROMPT_CONFIRM_LABEL,
    };

    private confirm() {
        this.props.onConfirm?.(this.props.id);
    }

    private cancel() {
        this.props.onCancel?.(this.props.id);
    }

    render() {
        return (
            <Modal id={this.props.id} isOpened={this.props.isOpened} classes={['mod-prompt', 'mod-fade-in-scale']}>
                <ModalHeader
                    title={this.props.title}
                    classes={['mod-warning']}
                    onClose={() => this.cancel()}
                ></ModalHeader>
                <ModalBody classes={['mod-header-padding', 'mod-form-top-bottom-padding']}>
                    <div className="prompt-message">{this.props.message}</div>
                </ModalBody>
                <ModalFooter>
                    <button className="btn mod-small mod-primary js-confirm" onClick={() => this.confirm()}>
                        {this.props.confirmLabel}
                    </button>
                    <button className="btn mod-small js-cancel" onClick={() => this.cancel()}>
                        {this.props.cancelLabel}
                    </button>
                </ModalFooter>
            </Modal>
        );
    }
}
