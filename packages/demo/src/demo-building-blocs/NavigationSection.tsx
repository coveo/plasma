import * as React from 'react';
import {Route, RouteChildrenProps, RouteComponentProps, withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import {ISideNavigationSectionProps, SideNavigationMenuSection} from 'react-vapor';

type NavSectionControlledProps = Omit<ISideNavigationSectionProps, 'expanded' | 'expandable'>;

export interface NavSectionProps extends NavSectionControlledProps {
    baseUrl?: string;
    notExpandable?: boolean;
    isLink?: boolean;
    isActive?: boolean;
}

const Section: React.FunctionComponent<NavSectionProps> = ({
    children,
    onClick,
    notExpandable,
    baseUrl,
    isActive,
    isLink,
    ...rest
}) => {
    return isLink ? (
        <Route
            path={baseUrl}
            children={(routeProps: RouteChildrenProps) => (
                <div className={'navigation-menu-section'}>
                    <Link to={baseUrl}>
                        <SideNavigationMenuSection isActive={!!routeProps.match} isLink {...rest} />
                    </Link>
                </div>
            )}
        />
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

    return <Section baseUrl={path} {...rest} />;
};

export default withRouter(NavSection);
