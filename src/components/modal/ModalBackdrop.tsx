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

  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render() {
    let classes = ['modal-backdrop'];
    if (!this.props.display) {
      classes.push('closed');
    }
    if (this.props.displayFor && this.props.displayFor.length > 0) {
      classes.push('prompt-backdrop');
    }

    return (
      <div className={classes.join(' ')} onClick={() => this.handleClick()}>
        <div style={{'position': 'fixed', 'top': 0, 'bottom': 0, 'left': 0, 'right': 0}} ></div>
      </div>
    );
  };
}
