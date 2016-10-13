import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TetherComponent from 'react-tether';
import * as _ from 'underscore';

/*
 The children property should be mandatory, but waiting for https://github.com/DefinitelyTyped/DefinitelyTyped/pull/10641 and/or
 https://github.com/Microsoft/TypeScript/issues/8588. After that, we will be allowed to build using the strictNullChecks flag.

 Extending React.ClassAttributes<Popover> is required to be compatible with Typescript 1.7.
 */
export interface IPopoverProps extends TetherComponent.ITetherComponentProps, React.ClassAttributes<Popover> {
  isOpen?: boolean;
  children?: [React.ReactNode, React.ReactNode];
}

export interface IPopoverState {
  isOpen: boolean;
}

export class Popover extends React.Component<IPopoverProps, IPopoverState> {
  static propTypes = _.extend(TetherComponent.propTypes, {
    children: ({children}: IPopoverProps, propName: string, componentName: string) => {
      if (_.isUndefined(children) || React.Children.count(children) != 2) {
        return new Error(`${componentName} expects two children to use as target and element.` +
          `Second child can either be a boolean or a ReactNode.`);
      }
    }
  });

  refs: {
    [key: string]: (Element);
    tetherToggle: HTMLElement;
    tetherElement: HTMLElement;
  };

  constructor(props: IPopoverProps, state: IPopoverState) {
    super(props, state);

    this.state = {
      isOpen: !!this.props.isOpen
    };
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

    return (
      <TetherComponent {..._.omit(this.props, 'children') } >
        <div ref='tetherToggle' onClick={() => this.toggleOpened(!this.state.isOpen)}>
          {tetherToggle}
        </div>
        {
          this.state.isOpen &&
          <div ref='tetherElement'>
            {tetherElement}
          </div>
        }
      </TetherComponent>
    );
  }

  toggleOpened(isOpen: boolean) {
    this.setState({
      isOpen: isOpen
    });
  }

  // Using a fat arrow function instead of a methot here to bind it to context and to make sure we have the same listener for both
  // addEventListener and removeEventListener and therefore prevent leaking listeners.
  private handleDocumentClick: EventListener = (event: Event) => {
    const tetherToggle = ReactDOM.findDOMNode<HTMLElement>(this.refs.tetherToggle);
    const tetherElement = ReactDOM.findDOMNode<HTMLElement>(this.refs.tetherElement);

    let outsideTetherToggle = !tetherToggle.contains(event.target as Node);
    let outsideTetherElement = tetherElement ? !tetherElement.contains(event.target as Node) : true;

    if (outsideTetherElement && outsideTetherToggle) {
      this.toggleOpened(false);
    }
  };
}
