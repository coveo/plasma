import * as classNames from 'classnames';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface IFlippableOwnProps {
  id?: string;
  front?: React.ReactNode;
  back?: React.ReactNode;
  className?: string;
}

export interface IFlippableDispatchProps {
  onRender?: () => void;
  onDestroy?: () => void;
  onFlip?: () => void;
  onUnflip?: () => void;
}

export interface IFlippableStateProps {
  isFlipped?: boolean;
}

export interface IFlippableProps extends IFlippableOwnProps, IFlippableDispatchProps,
  IFlippableStateProps { }

export class Flippable extends React.Component<IFlippableProps, any> {
  static CONTAINER_CLASSNAME: string = 'flippable';
  static FLIPPER_CLASSNAME: string = 'flipper';
  static sides = {
    FRONT: 'flipper-front',
    BACK: 'flipper-back',
  };
  static triggers = {
    FRONT: 'show-front',
    BACK: 'show-back',
  };
  static defaults: Partial<IFlippableProps> = {
    isFlipped: false,
  };

  private handleClickOnFront() {
    if (this.props.onFlip) {
      this.props.onFlip();
    }
  }

  private handleUnflip() {
    if (this.props.onUnflip) {
      this.props.onUnflip();
    }
  }

  private handleOutsideClick(e: MouseEvent) {
    if (!ReactDOM.findDOMNode(this).contains(e.target as Node) && this.props.isFlipped) {
      this.handleUnflip();
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
      Flippable.CONTAINER_CLASSNAME,
      this.props.className,
    );
    const flipperClassName = classNames(
      Flippable.FLIPPER_CLASSNAME,
      this.props.isFlipped ? Flippable.triggers.BACK : Flippable.triggers.FRONT,
    );

    return (
      <div className={containerClassName} onClick={() => this.handleClickOnFront()}>
        <div className={flipperClassName}>
          <div className={Flippable.sides.FRONT}>
            {this.props.front}
          </div>
          <div className={Flippable.sides.BACK}>
            {this.props.back}
          </div>
        </div>
      </div>
    );
  }
}
