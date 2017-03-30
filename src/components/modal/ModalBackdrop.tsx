import * as React from 'react';

export interface IModalBackdropOwnProps {
  displayFor?: string[];
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
    let classes = ['modal-backdrop'];
    if (!this.props.display) {
      classes.push('closed');
    }
    if (this.props.displayFor && this.props.displayFor.length > 0) {
      classes.push('prompt-backdrop');
    }

    return (
      <div className={classes.join(' ')}></div>
    );
  };
}
