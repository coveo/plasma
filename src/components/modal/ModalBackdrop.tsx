import * as React from 'react';

export interface IModalBackdropOwnProps {
  displayFor?: string[];
}

export interface IModalBackdropStateProps {
  display?: boolean;
}

export interface IModalBackdropDispatchProps {
  onClick?: (id?: string) => void;
}

export interface IModalBackdropProps extends IModalBackdropOwnProps, IModalBackdropStateProps, IModalBackdropDispatchProps {
}

export class ModalBackdrop extends React.Component<IModalBackdropProps, {}> {

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    const classes = ['modal-backdrop'];
    if (!this.props.display) {
      classes.push('closed');
    }
    if (this.props.displayFor && this.props.displayFor.length > 0) {
      classes.push('prompt-backdrop');
    }

    return (
      <div className={classes.join(' ')} onClick={() => this.handleClick()}>
        <div className='mask'></div>
      </div>
    );
  }
}
