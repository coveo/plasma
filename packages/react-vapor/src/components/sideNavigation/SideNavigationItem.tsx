import * as classNames from 'classnames';
import * as React from 'react';

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

    return href && title ? (
        <a
            className={classNames('block navigation-menu-section-item', {'state-active': isActive})}
            href={href}
            target={target}
        >
            <span className="navigation-menu-section-item-link">{title}</span>
        </a>
    ) : (
        <div className={classNames('navigation-menu-section-item', {'state-active': isActive})} ref={ref}>
            {children}
        </div>
    );
};
