import * as React from 'react';
import { ModalBody } from '../modal/ModalBody';
import { ModalFooter } from '../modal/ModalFooter';

export interface IModalPromptBodyOwnProps {
  message: string;
  confirmLabel?: string;
  cancelLabel?: string;
}

export interface IModalPromptStateProps {
  isOpened?: boolean;
}

export interface IModalPromptDispatchProps {
  onCancel?: () => void;
  onConfirm?: () => void;
}

export interface IModalPromptProps extends IModalPromptBodyOwnProps, IModalPromptStateProps, IModalPromptDispatchProps { }

export class ModalPromptBody extends React.Component<IModalPromptProps, any> {

  confirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm();
    }
  }

  cancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  render() {
    return (
      <div>
        <ModalBody classes={['mod-header-padding', 'mod-form-top-bottom-padding']}>
          <div className='prompt-message'>
            {this.props.message}
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className='btn mod-small mod-primary'
            onClick={() => this.confirm()}>
            {this.props.confirmLabel || 'Confirm'}
            </button>
          <button
            className='btn mod-small'
            onClick={() => this.cancel()}>
            {this.props.cancelLabel || 'Cancel'}
            </button>
        </ModalFooter>
      </div>
    );
  }
}
