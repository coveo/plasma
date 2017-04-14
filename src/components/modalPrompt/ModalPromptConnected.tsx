import * as React from 'react';
import {ModalPromptBody} from './ModalPromptBody';
import {ModalConnected} from '../modal/ModalConnected';

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

export class ModalPromptConnected extends React.Component<IModalPromptProps, any> {

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
      <ModalConnected
        id={this.props.id}
        title={this.props.title}
        classes={['mod-prompt']}
        headerClasses={['mod-confirmation']}
        onClose={() => this.cancel()}>
        {this.getBody()}
      </ModalConnected>
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
