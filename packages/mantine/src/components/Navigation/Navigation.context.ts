import {createContext, SetStateAction, useContext} from 'react';

export interface NavigationContextType {
    /**
     * Whether the Navigation.SideBar is collapsed
     */
    collapsed: boolean;
    /**
     * Allows to toggle the Navigation.SideBar between collapsed and expanded state
     */
    toggleCollapsed: (collapse?: SetStateAction<boolean>) => void;
}

const defaultNavigationContextValues: NavigationContextType = {
    collapsed: false,
    toggleCollapsed: () => void 0,
};

export const NavigationContext = createContext<NavigationContextType>(defaultNavigationContextValues);

/**
 * Provides information about the collapsed state of Navigation.SideBar and allows to toggle it.
 */
export const useNavigation = (): NavigationContextType => useContext(NavigationContext);
