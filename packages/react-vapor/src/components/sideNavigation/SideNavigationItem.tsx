import * as classNames from 'classnames';
import * as React from 'react';

export interface SideNavigationItemProps {
    isActive?: boolean;
}

export const SideNavigationItem: React.FunctionComponent<SideNavigationItemProps> = ({isActive, children}) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (isActive && ref.current) {
            ref.current.scrollIntoView({behavior: 'instant', block: 'nearest'});
        }
    }, [isActive]);

    return (
        <div className={classNames('navigation-menu-section-item', {'state-active': isActive})} ref={ref}>
            {children}
        </div>
    );
};
