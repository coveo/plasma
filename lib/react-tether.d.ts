import * as React from 'react';
import * as Tether from 'tether';

export interface ITetherComponentProps {
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
  children?: React.ReactNode;
}

declare class TetherComponent extends React.Component<ITetherComponentProps, any> {
  props: ITetherComponentProps;

  static propTypes: {
    renderElementTag: React.Requireable<any>;
    renderElementTo: React.Requireable<any>;
    attachment: React.Validator<any>;
    targetAttachment: React.Requireable<any>;
    offset: React.Requireable<any>;
    targetOffset: React.Requireable<any>;
    targetModifier: React.Requireable<any>;
    enabled: React.Requireable<any>;
    classes: React.Requireable<any>;
    classPrefix: React.Requireable<any>;
    optimizations: React.Requireable<any>;
    constraints: React.Requireable<any>;
    id: React.Requireable<any>;
    className: React.Requireable<any>;
    style: React.Requireable<any>;
    onUpdate: React.Requireable<any>;
    onRepositioned: React.Requireable<any>;
    children: [React.ReactNode, boolean | React.ReactNode];
  };

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
