import {ITabProps} from '../tab/Tab';

export interface ITabsHeaderProps {
    /**
     * Array of tabs, see Tab Component for details
     */
    tabs?: ITabProps[];
}

export const TabsHeader = (props: ITabsHeaderProps) => {
    if (props.tabs) {
        return (
            <TabNavigation>
                {props.tabs.map((tab: ITabProps) => (
                    <TabConnected key={tab.id} {...tab} />
                ))}
            </TabNavigation>
        );
    }

    return null;
};
