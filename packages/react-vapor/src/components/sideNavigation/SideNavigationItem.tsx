import classNames from 'classnames';
import * as React from 'react';
import {addClassNameToChildren} from '../../utils/JSXUtils';

export interface ISideNavigationItemProps {
    href: string;
    title: string;
    target?: string;
}

export interface SideNavigationItemProps extends Partial<ISideNavigationItemProps> {
    isActive?: boolean;
}

export const SideNavigationItem: React.FunctionComponent<SideNavigationItemProps> = ({
    isActive,
    href,
    title,
    children,
    target,
}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (isActive && ref.current) {
            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});
        }
    }, [isActive]);

    const itemClasses = classNames('navigation-menu-section-item', {'state-active': isActive});

    // Rendering an anchor tag from href and title support for retrocompatibility
    return href && title ? (
        <a className={classNames('block', itemClasses)} href={href} target={target} ref={ref}>
            <span className="navigation-menu-section-item-link">{title}</span>
        </a>
    ) : (
        <div className={itemClasses} ref={ref}>
            {addClassNameToChildren(children, 'navigation-menu-section-item-link')}
        </div>
    );
};
