import * as React from 'react';
import * as _ from 'underscore';
import {ITabProps} from '../tab/Tab';
import {TabConnected} from '../tab/TabConnected';
import {TabNavigation} from '../tab/TabNavigation';

export interface ITabsHeaderProps {
    tabs?: ITabProps[];
}

export const TabsHeader = (props: ITabsHeaderProps) => {
    if (props.tabs) {
        return (<TabNavigation>
            {..._.map(props.tabs, (tab: ITabProps) => <TabConnected key={tab.id} {...tab} />)}
        </TabNavigation>);
    }

    return null;
};
