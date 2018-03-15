import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IFlippableOwnProps {
  id?: string;
  front?: React.ReactNode;
  back?: React.ReactNode;
}

export interface IFlippableDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onFlip?: () => void;
  onCancel?: () => void;
}

export interface IFlippableStateProps {
  isFlipped?: boolean;
}

export interface IFlippableProps extends IFlippableOwnProps, IFlippableDispatchProps,
  IFlippableStateProps { }

export class Flippable extends React.Component<IFlippableProps, any> {

  private handleClickOnFront() {
    if (this.props.onFlip) {
      this.props.onFlip();
    }
  }

  private handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  private handleOutsideClick(e: MouseEvent) {
    if (!ReactDOM.findDOMNode(this).contains(e.target as Node) && this.props.isFlipped) {
      this.handleCancel();
    }
    e.preventDefault();
  }

  componentWillMount() {
    if (this.props.onRender) {
      this.props.onRender();
    }

    document.addEventListener('click', (e: MouseEvent) => this.handleOutsideClick(e));
  }

  componentWillUnmount() {
    document.removeEventListener('click', (e: MouseEvent) => this.handleOutsideClick(e));

    if (this.props.onDestroy) {
      this.props.onDestroy();
    }
  }

  render() {
    const containerClassName = classNames(
      'flippable',
    );
    const flipperClassName = classNames(
      'flipper',
      this.props.isFlipped ? 'show-back' : 'show-front',
    );

    return (
      <div className={containerClassName} onClick={() => this.handleClickOnFront()}>
        <div className={flipperClassName}>
          <div className='flipper-front'>
            {this.props.front}
          </div>
          <div className='flipper-back'>
            {this.props.back}
          </div>
        </div>
      </div>
    );
  }
}
