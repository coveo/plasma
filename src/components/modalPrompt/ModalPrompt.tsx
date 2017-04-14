import * as React from 'react';
import { Modal } from '../modal/Modal';
import {ModalPromptBody} from './ModalPromptBody';

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
  onConfirm?: (id: string) => void;
}

export interface IModalPromptProps extends IModalPromptOwnProps, IModalPromptStateProps, IModalPromptDispatchProps { }

export class ModalPrompt extends React.Component<IModalPromptProps, any> {

  private confirm() {
    if (this.props.onConfirm) {
      this.props.onConfirm(this.props.id);
    }
  }

  private cancel() {
    if (this.props.onCancel) {
      this.props.onCancel(this.props.id);
    }
  }

  private getModal(): JSX.Element {
    return (
      <Modal
        id={this.props.id}
        isOpened={this.props.isOpened}
        title={this.props.title}
        classes={['mod-prompt']}
        headerClasses={['mod-confirmation']}
        onClose={() => this.cancel()}>
        {this.getBody()}
      </Modal>
    );
  }

  private getBody(): JSX.Element {
    return <ModalPromptBody
        message={this.props.message}
        cancelLabel={this.props.cancelLabel}
        onCancel={() => this.cancel()}
        confirmLabel={this.props.confirmLabel}
        onConfirm={() => this.confirm()}
      />;
  }

  render() {
    return this.getModal();
  }
}
