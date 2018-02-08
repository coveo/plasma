import * as classNames from 'classnames';
import * as React from 'react';
import * as _ from 'underscore';
import { Content, IContentProps } from '../content/Content';
import { ITabsHeaderProps, TabsHeader } from './TabsHeader';

export interface IHeaderWrapperProps extends ITabsHeaderProps, React.ClassAttributes<React.Component<any, any>> {
  description?: string;
  actions?: IContentProps[];
  classes?: string[];
}

export class HeaderWrapper extends React.Component<IHeaderWrapperProps, {}> {

  private getClasses(): string {
    return classNames(
      'flex',
      'flex-center',
      'space-between',
      'mod-header-padding',
      'header-height',
      'pt1',
      {
        'pb2': !!this.props.tabs,
        'pb1': !this.props.tabs,
      },
      this.props.classes,
    );
  }

  private getActions(): JSX.Element[] {
    return this.props.actions
      ? _.map(this.props.actions, (action: IContentProps, index: number) => <Content key={index} {...action} />)
      : null;
  }

  render() {
    return (
      <div className={!this.props.tabs ? 'mod-border-bottom' : ''}>
        <div className={this.getClasses()}>
          <div className='truncate mr2'>
            {this.props.children}
            <h4 className='mt1 text-dark-grey normal-white-space'>{this.props.description}</h4>
          </div>
          <div className='flex'>
            {this.getActions()}
          </div>
        </div>
        <TabsHeader tabs={this.props.tabs} />
      </div>
    );
  }
}
