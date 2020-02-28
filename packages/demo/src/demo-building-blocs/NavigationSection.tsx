import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {ISideNavigationSectionProps, SideNavigationMenuSection} from 'react-vapor';
import * as _ from 'underscore';

type NavSectionControlledProps = Omit<ISideNavigationSectionProps, 'expanded' | 'expandable'>;

export interface NavSectionProps extends NavSectionControlledProps {
    baseUrl?: string;
    notExpandable?: boolean;
}

const Section: React.FunctionComponent<NavSectionProps> = ({children, onClick, notExpandable, baseUrl, ...rest}) => {
    const [isOpened, toggleOpened] = React.useState(true);
    const hasMoreThanOneSection = _.size<React.ReactNode>(React.Children.map(children, _.identity)) > 1;

    const handleClick = () => {
        if (hasMoreThanOneSection) {
            toggleOpened(!isOpened);
        }
        onClick?.();
    };

    return (
        <SideNavigationMenuSection
            {...rest}
            expandable={!notExpandable && hasMoreThanOneSection}
            expanded={isOpened}
            onClick={handleClick}
        >
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
