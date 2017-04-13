import * as React from 'react';

export interface IModalBackdropOwnProps {
  displayFor?: string[];
  onClick?: (id?: string) => void;
}

export interface IModalBackdropStateProps {
  display?: boolean;
}

export interface IModalBackdropDispatchProps {
}

export interface IModalBackdropProps extends IModalBackdropOwnProps, IModalBackdropStateProps, IModalBackdropDispatchProps {
}

export class ModalBackdrop extends React.Component<IModalBackdropProps, any> {

  render() {
    let classes = [];
    if (!this.props.display) {
      classes.push('closed');
    }
    let modalId = '';
    if (this.props.displayFor && this.props.displayFor.length > 0) {
      classes.push('prompt-backdrop');
      modalId = this.props.displayFor[0];
    }

    return (
      <div className={classes.join(' ')} onClick={() => this.props.onClick(modalId)}></div>
    );
  };
}
