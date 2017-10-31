import * as React from 'react';
import * as classname from 'classnames';
import * as _ from 'underscore';
import { ComponentContent } from '../../utils/ComponentUtils';

export interface IContentProps {
  content: ComponentContent;
  componentProps?: { [key: string]: any };
  classes?: string[];
}

export class Content extends React.Component<IContentProps, {}> {

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
