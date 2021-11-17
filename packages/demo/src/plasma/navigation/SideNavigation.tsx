/* eslint-disable arrow-body-style */
import React, {useState} from 'react';
import {RouteChildrenProps} from 'react-router';
import {Link, Route} from 'react-router-dom';
import {SideNavigation, SideNavigationItem, SideNavigationMenuSection} from 'react-vapor';

import {NavItem, NavItems} from './nav-items';

interface NavLinkProps {
    href?: string;
    label: string;
    disabled?: boolean;
}

const NavLink: React.FunctionComponent<NavLinkProps> = ({href, label, disabled}) => {
    return (
        <Route
            path={href}
            children={(routeProps: RouteChildrenProps) => (
                <SideNavigationItem isActive={!!routeProps.match} disabled={disabled} href={href}>
                    {disabled ? (
                        <div className="navigation-menu-section">{label}</div>
                    ) : (
                        <Link to={href}>
                            <div className="navigation-menu-section">{label}</div>
                        </Link>
                    )}
                </SideNavigationItem>
            )}
        />
    );
};

const CollapsibleSideSection: React.FC<{nav: NavItem}> = ({nav}) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <SideNavigationMenuSection
            expandable
            expanded={expanded}
            onClick={() => setExpanded(!expanded)}
            title={<NavLink label={nav.groupTitle} />}
        >
            {nav.children.map((navChild) => (
                <NavLink label={navChild.label} href={navChild.href} disabled={navChild.disabled} />
            ))}
        </SideNavigationMenuSection>
    );
};

export const Navigation: React.FunctionComponent = () => {
    const sideNav = NavItems.map((nav) => {
        if (nav.label) {
            return <SideNavigationMenuSection title={<NavLink href={nav.href} label={nav.label} />} />;
        }
        if (nav.children) {
            return <CollapsibleSideSection nav={nav} />;
        }
    });

    return <SideNavigation className="demo-side-nav">{sideNav}</SideNavigation>;
};
