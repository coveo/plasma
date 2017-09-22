import * as React from 'react';
import * as classname from 'classnames';
import * as _ from 'underscore';

export interface IContentProps {
  content: typeof React.Component | string | (() => JSX.Element);
  componentProps?: { [key: string]: any };
  classes?: string[];
}

export class Content extends React.Component<IContentProps, void> {

  static defaultProps: Partial<IContentProps> = {
    classes: [],
  };

  private getContent(): JSX.Element | string {
    return _.isString(this.props.content) ? this.props.content : <this.props.content {...this.props.componentProps} />;
  }

  render() {
    const classes = classname(this.props.classes);
    return (<span className={classes}>
      {this.getContent()}
    </span>);
  }
}
