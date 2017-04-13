import * as React from 'react';
import { Modal } from '../modal/Modal';
import { ModalBody } from '../modal/ModalBody';
import { ModalFooter } from '../modal/ModalFooter';
import { ModalBackdrop } from '../modal/ModalBackdrop';

export interface IModalPromptOwnProps {
  id: string;
  title: string;
  message: string;
  confirmLabel: string;
  cancelLabel: string;
}

export interface IModalPromptStateProps {
  isOpened?: boolean;
}

export interface IModalPromptDispatchProps {
  onCancel?: (id: string) => void;
  onDestroy?: (id: string) => void;
  onRender?: (id: string) => void;
  onConfirm?: (id: string) => void;
}

export interface IModalPromptProps extends IModalPromptOwnProps, IModalPromptStateProps, IModalPromptDispatchProps { }

export class ModalPrompt extends React.Component<IModalPromptProps, any> {

  componentDidMount() {
    if (this.props.onRender) {
      this.props.onRender(this.props.id);
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy(this.props.id);
    }
  }

  confirm() {
    if(this.props.onConfirm) {
      this.props.onConfirm(this.props.id);
    }
  }

  cancel() {
    if (this.props.onCancel) {
      this.props.onCancel(this.props.id);
    }
  }

  render() {
    let classes = ['modal-container', 'mod-prompt'];
    if (this.props.isOpened) {
      classes.push('opened');
    }
    let modalId = 'modal-prompt-' + this.props.id;

    return (
      <div>
        <Modal id={modalId} isOpened={this.props.isOpened} title={this.props.title} classes={['mod-prompt']} headerClasses={['mod-confirmation']} onClose={() => this.cancel()}>
          <ModalBody classes={['mod-header-padding mod-form-top-bottom-padding']}>
            <div className='prompt-message'>
              {this.props.message}
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn mod-small mod-primary' onClick={() => this.confirm()}>{this.props.confirmLabel}</button>
            <button className='btn mod-small' onClick={() => this.cancel()}>{this.props.cancelLabel}</button>
          </ModalFooter>
        </Modal>
        <ModalBackdrop display={this.props.isOpened} displayFor={[modalId]} onClick={() => this.cancel()} />
      </div>
    );
  }
}
