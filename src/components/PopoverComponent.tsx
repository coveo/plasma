import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TetherComponent from 'react-tether';
import * as _ from 'underscore';

export interface IPopoverComponentProps extends TetherComponent.ITetherComponentProps {
  toggleOpenedTetherElement: Function;
}

export class PopoverComponent extends React.Component<IPopoverComponentProps, any> {
  static propTypes = _.extend(TetherComponent.propTypes, {
    children: ({children}: IPopoverComponentProps, propName: string, componentName: string) => {
      if (_.isUndefined(children) || React.Children.count(children) != 2) {
        return new Error(`${componentName} expects two children to use as target and element.` +
          `Second child can either be a boolean or a ReactNode.`);
      }
    }
  });

          refs: {
    [key: string]: (Element);
    tetherToggle?: HTMLElement;
    tetherElement?: HTMLElement;
  } = {};

  // Using a fat arrow function instead of a methot here to bind it to context and to make sure we have the same listener for both
  // addEventListener and removeEventListener and therefore prevent leaking listeners.
  private handleDocumentClick: EventListener = (event: Event) => {
    const tetherToggle = ReactDOM.findDOMNode<HTMLElement>(this.refs.tetherToggle);
    const tetherElement = ReactDOM.findDOMNode<HTMLElement>(this.refs.tetherElement);

    let outsideTetherToggle = !tetherToggle.contains(event.target as Node);
    let outsideTetherElement = tetherElement ? !tetherElement.contains(event.target as Node) : true;

    if (outsideTetherElement && outsideTetherToggle) {
      this.props.toggleOpenedTetherElement(false);
    }
  };

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
        <div ref='tetherToggle'>
          {tetherToggle}
        </div>
        {
          tetherElement &&
          <div ref='tetherElement'>
            {tetherElement}
          </div>
        }
      </TetherComponent>
    );
  }
}
