/// <reference types="react-tether" /> Required to make dts-generator bundle react-tether definition file.
import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as TetherComponent from 'react-tether';
import * as _ from 'underscore';

export interface ITetherComponentCopiedProps {
  renderElementTag?: string;
  renderElementTo?: Element | string;
  attachment: string;
  targetAttachment?: string;
  offset?: string;
  targetOffset?: string;
  targetModifier?: string;
  enabled?: boolean;
  classes?: any;
  style?: Object;
  classPrefix?: string;
  optimizations?: Object;
  constraints?: any[];
  onUpdate?: Function;
  onRepositioned?: Function;
}

export interface IPopoverProps extends ITetherComponentCopiedProps, React.ClassAttributes<Popover> {
  /**
   * Optionnal, use it to specify the isOpen state of the Popover.
   * @default: false
   */
  isOpen?: boolean;

  /**
   * Optionnal, a callback fired when the Popover wishes to change visibility. Called with the requested `isOpen` value. Use this prop if
   * you want to control the Popover state. Let it undefined if you want the Popover to control his state itself.
   */
  onToggle?: (isOpen: boolean) => void;

  /**
   * Optionnal, use it to prevent default when the Popover isOpen and the user clicks outside.
   * @default: false
   */
  isModal?: boolean;
}

export interface IPopoverState {
  isOpen: boolean;
}

export class Popover extends React.Component<IPopoverProps, IPopoverState> {
  private tetherToggle: HTMLElement;
  private tetherElement: HTMLElement;

  constructor(props: IPopoverProps, state: IPopoverState) {
    super(props, state);

    // If onToggle wasn't passed, Popover is uncontrolled and we set an initial state.
    if (!_.isFunction(this.props.onToggle)) {
      this.state = {
        isOpen: !!this.props.isOpen
      };
    }
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  render() {
    const tetherToggle = !!this.props.children && (this.props.children as JSX.Element[])[0];
    const tetherElement = !!this.props.children && (this.props.children as JSX.Element[])[1];

    const isOpen: boolean = this.state && this.state.isOpen || this.props.isOpen;

    return (
      <TetherComponent {..._.omit(this.props, 'children') } >
        <div ref={(toggle: HTMLElement) => this.tetherToggle = toggle} onClick={() => this.toggleOpened(!isOpen)}>
          {tetherToggle}
        </div>
        {
          isOpen &&
          <div ref={(element: HTMLElement) => this.tetherElement = element}>
            {tetherElement}
          </div>
        }
      </TetherComponent>
    );
  }

  toggleOpened(isOpen: boolean) {
    if (_.isFunction(this.props.onToggle)) {
      this.props.onToggle(isOpen);
    } else {
      this.setState({
        isOpen: isOpen
      });
    }
  }

  // Using a fat arrow function instead of a method here to bind it to context and to make sure we have the same listener for both
  // addEventListener and removeEventListener and therefore prevent leaking listeners.
  private handleDocumentClick: EventListener = (event: Event) => {
    const tetherToggle = findDOMNode<HTMLElement>(this.tetherToggle);
    const tetherElement = findDOMNode<HTMLElement>(this.tetherElement);

    const outsideTetherToggle = !tetherToggle.contains(event.target as Node);
    const outsideTetherElement = tetherElement ? !tetherElement.contains(event.target as Node) : true;

    if (outsideTetherElement && outsideTetherToggle) {
      if (this.props.isOpen && this.props.isModal) {
        event.stopImmediatePropagation();
        event.preventDefault();
      }

      this.toggleOpened(false);
    }
  }
}
