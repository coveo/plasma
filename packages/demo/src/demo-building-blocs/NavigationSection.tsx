import * as React from 'react';
import {Route, RouteComponentProps, withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {ISideNavigationSectionProps, SideNavigationMenuSection} from 'react-vapor';
import * as _ from 'underscore';

type NavSectionControlledProps = Omit<ISideNavigationSectionProps, 'expanded' | 'expandable'>;

export interface NavSectionProps extends NavSectionControlledProps {
    hasItemSelected?: boolean;
    baseUrl?: string;
    notExpandable?: boolean;
}

const Section: React.FunctionComponent<NavSectionProps> = ({
    hasItemSelected,
    children,
    onClick,
    notExpandable,
    baseUrl,
    ...rest
}) => {
    return rest.isLink ? (
        <Route path={baseUrl}>
            <Link to={baseUrl}>
                <SideNavigationMenuSection {...rest}></SideNavigationMenuSection>
            </Link>
        </Route>
    ) : (
        <SideNavigationMenuSection {...rest} expandable={false}>
            {React.Children.map(children, (c) => {
                return React.cloneElement(c as React.ReactElement, {baseUrl});
            })}
        </SideNavigationMenuSection>
    );
};

const NavSection: React.FunctionComponent<{baseUrl?: string} & RouteComponentProps & NavSectionProps> = ({
    baseUrl = '',
    match,
    location,
    ...rest
}) => {
    const path = `${match.url}${baseUrl}`;
    const baseUrlMatcher = new RegExp(`^${path}`);

    return <Section hasItemSelected={baseUrlMatcher.test(location.pathname)} baseUrl={path} {...rest} />;
};

export default withRouter(NavSection);
