import * as React from 'react';
import * as _ from 'underscore';
import { TabConnected } from '../tab/TabConnected';
import { ITabProps } from '../tab/Tab';
import { TabNavigation } from '../tab/TabNavigation';

export interface ITabsHeaderProps extends React.ClassAttributes<React.Component<any, any>> {
  tabs?: ITabProps[];
}

export class TabsHeader extends React.Component<ITabsHeaderProps, {}> {

  render() {
    if (this.props.tabs) {
      return (<TabNavigation>
        {..._.map(this.props.tabs, (tab: ITabProps) => <TabConnected key={tab.id} {...tab} />)}
      </TabNavigation>);
    }
    return null;
  }
}
