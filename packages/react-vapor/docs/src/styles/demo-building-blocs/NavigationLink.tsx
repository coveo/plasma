import * as classNames from 'classnames';
import * as React from 'react';
import {RouteChildrenProps} from 'react-router';
import {Link, LinkProps, Route, RouteComponentProps, withRouter} from 'react-router-dom';

const ListItem: React.FunctionComponent<{isActive: boolean}> = ({isActive, children}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (isActive && ref.current) {
            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});
        }
    }, [isActive]);

    return (
        <li className={classNames('navigation-menu-section-item', {'state-active': isActive})} ref={ref}>
            {children}
        </li>
    );
};

const ListItemLink: React.FunctionComponent<LinkProps> = ({to, ...rest}) => (
    <Route
        path={to as string}
        children={({match}: RouteChildrenProps) => (
            <ListItem isActive={!!match}>
                <Link to={to} {...rest} />
            </ListItem>
        )}
    />
);

const NavLink: React.FunctionComponent<{href: string; name: string} & RouteComponentProps> = ({href, name, match}) => (
    <ListItemLink to={`${match.url}${href}`} className="block navigation-menu-section-item-link">
        {name}
    </ListItemLink>
);

const NavigationLink = withRouter(NavLink);

export default NavigationLink;
