import * as React from 'react';
import {RouteChildrenProps} from 'react-router';
import {Link, Route} from 'react-router-dom';
import {SideNavigationItem} from 'react-vapor';

const NavLink: React.FunctionComponent<{href: string; name: string; baseUrl?: string}> = ({
    href,
    name,
    baseUrl,
    ...rest
}) => {
    const path = `${baseUrl}${href}`;
    return (
        <Route
            path={path}
            children={(routeProps: RouteChildrenProps) => (
                <SideNavigationItem isActive={!!routeProps.match}>
                    <Link to={path} className="block navigation-menu-section-item-link" {...rest}>
                        {name}
                    </Link>
                </SideNavigationItem>
            )}
        />
    );
};

export default NavLink;
