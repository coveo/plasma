import React = __React;

declare class TetherComponent extends React.Component<TetherComponent.ITetherComponentProps, any> {
  props: TetherComponent.ITetherComponentProps;

  static defaultProps: {
    renderElementTag: string;
    renderElementTo: any;
  };

  componentDidMount(): void;

  componentDidUpdate(prevProps: any): void;

  componentWillUnmount(): void;

  getTetherInstance(): Tether;

  disable(): void;

  enable(): void;

  on(event: any, handler: any, ctx?: any): void;

  once(event: any, handler: any, ctx?: any): void;

  off(event: any, handler: any): void;

  position(): void;

  render(): any;
}

declare namespace TetherComponent {
  interface ITetherComponentProps {
    renderElementTag?: string;
    renderElementTo?: Element | string;
    attachment: string;
    targetAttachment?: string;
    offset?: string;
    targetOffset?: string;
    targetModifier?: string;
    enabled?: boolean;
    classes?: any;
    classPrefix?: string;
    optimizations?: Object;
    constraints?: any[];
    id?: string;
    className?: string;
    style?: Object;
    onUpdate?: Function;
    onRepositioned?: Function;
    children?: [React.ReactNode, boolean | React.ReactNode];
  }
}

declare module 'react-tether' {
  export = TetherComponent;
}
