import {ITabProps, TabConnected} from '../tab/Tab';
import {TabNavigation} from '../tab/TabNavigation';

export interface ITabsHeaderProps {
    /**
     * Array of tabs, see Tab Component for details
     */
    tabs?: ITabProps[];
}

/**
 * @deprecated Use Mantine instead
 */
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
