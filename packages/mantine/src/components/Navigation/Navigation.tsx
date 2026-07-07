import {useToggle} from '@mantine/hooks';
import {ReactElement, ReactNode} from 'react';
import {NavigationContext} from './Navigation.context.js';
import {NavigationBadge} from './NavigationBadge.js';
import {NavigationLink} from './NavigationLink.js';
import {NavigationSection} from './NavigationSection.js';
import {NavigationSideBar} from './NavigationSideBar.js';
import {NavigationToggle} from './NavigationToggle.js';

interface NavigationType {
    (props: NavigationProps): ReactElement;
    displayName: string;
    SideBar: typeof NavigationSideBar;
    Section: typeof NavigationSection;
    Link: typeof NavigationLink;
    Toggle: typeof NavigationToggle;
    Badge: typeof NavigationBadge;
}

export interface NavigationProps {
    /**
     * Whether the navigation starts in collapsed state.
     * @default false
     */
    defaultCollapsed?: boolean;
    children?: ReactNode;
}

export const Navigation: NavigationType = ({children, defaultCollapsed = false}) => {
    const [collapsed, toggleCollapsed] = useToggle([defaultCollapsed, !defaultCollapsed]);

    return <NavigationContext.Provider value={{collapsed, toggleCollapsed}}>{children}</NavigationContext.Provider>;
};

Navigation.displayName = 'Navigation';
Navigation.SideBar = NavigationSideBar;
Navigation.Section = NavigationSection;
Navigation.Link = NavigationLink;
Navigation.Toggle = NavigationToggle;
Navigation.Badge = NavigationBadge;

export {NavigationSideBar, type NavigationSideBarProps} from './NavigationSideBar.js';
export {NavigationSection} from './NavigationSection.js';
export {NavigationLink, type NavigationLinkProps} from './NavigationLink.js';
export {NavigationToggle, type NavigationToggleProps} from './NavigationToggle.js';
export {NavigationBadge, type NavigationBadgeProps, type NavigationBadgeVariant} from './NavigationBadge.js';
export {useNavigation, type NavigationContextType} from './Navigation.context.js';
