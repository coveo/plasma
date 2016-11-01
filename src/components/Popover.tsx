/// <reference path="../../types/react-tether/index.d.ts" /> Required to make dts-generator bundle react-tether definition file.

import * as React from 'react';
import { findDOMNode } from 'react-dom';
import * as TetherComponent from 'react-tether';
import { extend, isFunction, isUndefined, omit } from 'underscore';

/*
 The children property should be mandatory, but waiting for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/10641 and/or
 https://github.com/Microsoft/TypeScript/issues/8588. After that, we will be allowed to build using the strictNullChecks flag.

 Extending React.ClassAttributes<Popover> is required to be compatible with Typescript 1.7.
 */
export interface IPopoverProps extends TetherComponent.ITetherComponentProps, React.ClassAttributes<Popover> {
  children?: [React.ReactNode, React.ReactNode];

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
}

export interface IPopoverState {
  isOpen: boolean;
}

export class Popover extends React.Component<IPopoverProps, IPopoverState> {
  static propTypes = extend(TetherComponent.propTypes, {
    children: ({children}: IPopoverProps, propName: string, componentName: string) => {
      if (isUndefined(children) || React.Children.count(children) != 2) {
        return new Error(`${componentName} expects two children to use as target and element.` +
          `Second child can either be a boolean or a ReactNode.`);
      }
    },
    isOpen: React.PropTypes.bool,
    onToggle: React.PropTypes.func
  });

  private tetherToggle: HTMLElement;
  private tetherElement: HTMLElement;

  constructor(props: IPopoverProps, state: IPopoverState) {
    super(props, state);

    // If onToggle wasn't passed, Popover is uncontrolled and we set an initial state.
    if (!isFunction(this.props.onToggle)) {
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
    let tetherToggle = !!this.props.children && this.props.children[0];
    let tetherElement = !!this.props.children && this.props.children[1];

    let isOpen: boolean = this.state && this.state.isOpen ? this.state.isOpen : this.props.isOpen;

    return (
      <TetherComponent {...omit(this.props, 'children') } >
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
    if (isFunction(this.props.onToggle)) {
      this.props.onToggle(isOpen);
    } else {
      this.setState({
        isOpen: isOpen
      });
    }
  }

  // Using a fat arrow function instead of a methot here to bind it to context and to make sure we have the same listener for both
  // addEventListener and removeEventListener and therefore prevent leaking listeners.
  private handleDocumentClick: EventListener = (event: Event) => {
    const tetherToggle = findDOMNode<HTMLElement>(this.tetherToggle);
    const tetherElement = findDOMNode<HTMLElement>(this.tetherElement);

    let outsideTetherToggle = !tetherToggle.contains(event.target as Node);
    let outsideTetherElement = tetherElement ? !tetherElement.contains(event.target as Node) : true;

    if (outsideTetherElement && outsideTetherToggle) {
      this.toggleOpened(false);
    }
  };
}
