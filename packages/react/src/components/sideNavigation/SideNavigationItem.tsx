import classNames from 'clsx';
import {FunctionComponent, useRef, useEffect, PropsWithChildren} from 'react';
import {addClassNameToChildren} from '../../utils/JSXUtils';

export interface ISideNavigationItemProps {
    href: string;
    title: string;
    target?: string;
}

export interface SideNavigationItemProps extends Partial<ISideNavigationItemProps> {
    isActive?: boolean;
    disabled?: boolean;
}

/**
 * @deprecated Use Mantine NavLink instead: https://mantine.dev/core/nav-link/
 */
export const SideNavigationItem: FunctionComponent<PropsWithChildren<SideNavigationItemProps>> = ({
    isActive,
    href,
    title,
    children,
    target,
    disabled,
}) => {
    const ref = useRef(null);

    useEffect(() => {
        if (isActive && ref.current) {
            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});
        }
    }, [isActive]);

    const itemClasses = classNames('navigation-menu-section-item', {'state-active': isActive, disabled});

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
