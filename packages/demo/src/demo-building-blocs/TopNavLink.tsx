import * as React from 'react';
import {RouteChildrenProps} from 'react-router';
import {Route} from 'react-router-dom';
import {Tab} from 'react-vapor';

const TopNavLink: React.FunctionComponent<{href: string; name: string}> = ({href, name}) => {
    return (
        <Route
            path={href}
            children={(routeProps: RouteChildrenProps) => (
                <Tab
                    id={name}
                    title={name}
                    isActive={!!routeProps.match}
                    onSelect={() => {
                        routeProps.history.push(href);
                    }}
                />
            )}
        />
    );
};

export default TopNavLink;
