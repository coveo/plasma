import * as React from 'react';

import {callIfDefined} from '../../utils/FalsyValuesUtils';
import {Modal} from '../modal/Modal';
import {ModalBody} from '../modal/ModalBody';
import {ModalFooter} from '../modal/ModalFooter';
import {ModalHeader} from '../modal/ModalHeader';

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
 * @deprecated use ModalComposite instead
 */
export class ModalPrompt extends React.Component<IModalPromptProps, any> {

    static defaultProps: Partial<IModalPromptProps> = {
        cancelLabel: DEFAULT_MODAL_PROMPT_CANCEL_LABEL,
        confirmLabel: DEFAULT_MODAL_PROMPT_CONFIRM_LABEL,
    };

    private confirm() {
        callIfDefined(this.props.onConfirm, this.props.id);
    }

    private cancel() {
        callIfDefined(this.props.onCancel, this.props.id);
    }

    render() {
        return (
            <Modal
                id={this.props.id}
                isOpened={this.props.isOpened}
                classes={['mod-prompt', 'mod-fade-in-scale']}>
                <ModalHeader title={this.props.title}
                    classes={['mod-confirmation']}
                    onClose={() => this.cancel()}>
                </ModalHeader>
                <ModalBody classes={['mod-header-padding', 'mod-form-top-bottom-padding']}>
                    <div className='prompt-message'>
                        {this.props.message}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button
                        className='btn mod-small mod-primary js-confirm'
                        onClick={() => this.confirm()}>
                        {this.props.confirmLabel}
                    </button>
                    <button
                        className='btn mod-small js-cancel'
                        onClick={() => this.cancel()}>
                        {this.props.cancelLabel}
                    </button>
                </ModalFooter>
            </Modal>);
    }
}
