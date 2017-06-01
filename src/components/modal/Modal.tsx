import * as React from 'react';

export interface IModalOwnProps {
  id: string;
  classes?: string[];
}

export interface IModalStateProps {
  isOpened?: boolean;
}

export interface IModalDispatchProps {
  onDestroy?: () => void;
  onRender?: () => void;
}

export interface IModalProps extends IModalOwnProps, IModalStateProps, IModalDispatchProps { }

export class Modal extends React.Component<IModalProps, any> {

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }
  }

  componentWillUnmount() {
    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    let classes = ['modal-container'].concat(this.props.classes);
    if (this.props.isOpened) {
      classes.push('opened');
    }

    return (
      <div className={classes.join(' ')}>
        <div className='modal-content'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
