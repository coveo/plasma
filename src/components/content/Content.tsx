import * as React from 'react';
import * as _ from 'underscore';

export interface IContentProps {
  content: typeof React.Component | string | (() => JSX.Element);
  classes?: string[];
}

export class Content extends React.Component<IContentProps, void> {

  static defaultProps: Partial<IContentProps> = {
    classes: [],
  };

  private getContent(): JSX.Element | string {
    return _.isString(this.props.content) ? this.props.content : <this.props.content />;
  }

  render() {
    return (<span className={this.props.classes.join(' ')}>
      {this.getContent()}
    </span>);
  }
}
