import * as React from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import * as _ from 'underscore';

import {
    ISideNavigationSectionProps,
    SideNavigationMenuSection,
} from '../../../src/components/sideNavigation/SideNavigationMenuSection';
import {callIfDefined} from '../../../src/utils/FalsyValuesUtils';

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
    const [isOpened, toggleOpened] = React.useState(hasItemSelected || false);
    const hasMoreThanOneSection = _.size(React.Children.map(children, _.identity)) > 1;

    const handleClick = () => {
        if (hasMoreThanOneSection) {
            toggleOpened(!isOpened);
        }
        callIfDefined(onClick);
    };

    return (
        <SideNavigationMenuSection
            {...rest}
            expandable={!notExpandable && hasMoreThanOneSection}
            expanded={isOpened}
            onClick={handleClick}
        >
            {React.Children.map(children, (c: React.ReactElement) => {
                return React.cloneElement(c, {baseUrl});
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
