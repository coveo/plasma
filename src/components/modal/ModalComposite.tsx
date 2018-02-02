import * as React from 'react';
import * as _ from 'underscore';
import { IModalProps, Modal } from './Modal';
import { IModalHeaderProps, ModalHeader } from './ModalHeader';
import { IModalFooterProps, ModalFooter } from './ModalFooter';
import { IModalBackdropProps, ModalBackdrop } from './ModalBackdrop';
import { IReduxStatePossibleProps } from '../../utils/ReduxUtils';
import { ModalBackdropConnected } from './ModalBackdropConnected';
import { ModalHeaderConnected } from './ModalHeaderConnected';
import { JSXRenderable } from '../../utils/JSXUtils';
import { ModalConnected } from './ModalConnected';
import { ModalBody } from './ModalBody';

export interface IModalCompositeOwnProps extends IModalProps, IModalHeaderProps, IModalFooterProps, IModalBackdropProps {
  modalHeaderChildren?: JSXRenderable;
  modalHeaderClasses?: string[];
  modalBodyChildren?: JSXRenderable;
  modalBodyClasses?: string[];
  modalFooterChildren?: JSXRenderable;
  modalFooterClasses?: string[];
}

export interface IModalCompositeStateProps extends IReduxStatePossibleProps { }

export interface IModalCompositeDispatchProps { }

export interface IModalCompositeProps extends IModalCompositeOwnProps, IModalCompositeStateProps, IModalCompositeDispatchProps { }

export class ModalComposite extends React.Component<IModalCompositeProps, {}> {
  static defaultProps: Partial<IModalCompositeProps> = {
    id: _.uniqueId('modal'),
  };

  render() {
    return (
      <div>
        {this.getModal([this.getModalHeader(), this.getModalBody(), this.getModalFooter()])}
        {this.getModalBackdrop()}
      </div>
    );
  }

  private getModal(children: JSXRenderable) {
    const basicProps: IModalProps = {
      id: this.props.id,
      classes: this.props.classes,
    };
    const onRenderProp = this.props.onRender ? () => this.props.onRender() : undefined;
    const onDestroyProp = this.props.onDestroy ? () => this.props.onDestroy() : undefined;

    return this.props.withReduxState
      ? <ModalConnected {...basicProps}>{children}</ModalConnected>
      : <Modal
        {...basicProps}
        isOpened={this.props.isOpened}
        onRender={onRenderProp}
        onDestroy={onDestroyProp}
      >
        {children}
      </Modal>;
  }

  private getModalHeader() {
    const basicProps: IModalHeaderProps = {
      id: this.props.id,
      title: this.props.title,
      classes: this.props.modalHeaderClasses,
    };
    const onCloseProp = this.props.onClose ? () => this.props.onClose() : undefined;

    return this.props.withReduxState
      ? <ModalHeaderConnected {...basicProps}>{this.props.modalHeaderChildren}</ModalHeaderConnected>
      : <ModalHeader {...basicProps} onClose={onCloseProp}>{this.props.modalHeaderChildren}</ModalHeader>;
  }

  private getModalBody() {
    return this.props.modalBodyChildren
      ? <ModalBody classes={this.props.modalBodyClasses}>{this.props.modalBodyChildren}</ModalBody>
      : null;
  }

  private getModalFooter() {
    return this.props.modalFooterChildren
      ? <ModalFooter classes={this.props.modalFooterClasses}>{this.props.modalFooterChildren}</ModalFooter>
      : null;
  }

  private getModalBackdrop() {
    const basicProps: IModalBackdropProps = {
      displayFor: [this.props.id],
    };

    const onClickProp = () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
      if (this.props.onClick) {
        this.props.onClick();
      }
    };

    return this.props.withReduxState
      ? <ModalBackdropConnected {...basicProps} />
      : <ModalBackdrop {...basicProps} display={this.props.display || this.props.isOpened} onClick={onClickProp} />;
  }
}
