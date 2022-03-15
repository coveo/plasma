import classNames from 'classnames';
import * as React from 'react';
import {map, omit} from 'underscore';

export interface ISubNavigationOwnProps {
    /**
     * Id of the SubNavigation
     */
    id?: string;
    /**
     * Array of elements composing the subNavigation
     */
    items: ISubNavigationItem[];
    /**
     * Element selected by default
     */
    defaultSelected?: string;
}

export interface ISubNavigationStateProps {
    selected?: string;
}

export interface ISubNavigationDispatchProps {
    onRender?: () => void;
    onDestroy?: () => void;
    onClickItem?: (id: string) => void;
}

export interface ISubNavigationItem {
    id: string;
    label: React.ReactNode;
    disabled?: boolean;
    link?: string;
}

export interface ISubNavigationProps
    extends ISubNavigationOwnProps,
        ISubNavigationStateProps,
        ISubNavigationDispatchProps {}

const ISubNavigationPropsToOmit = [
    'defaultSelected',
    'id',
    'items',
    'onClickItem',
    'onDestroy',
    'onRender',
    'selected',
];

export const SubNavigation: React.FunctionComponent<ISubNavigationProps & React.HTMLAttributes<HTMLElement>> = ({
    onDestroy,
    onRender,
    selected,
    defaultSelected,
    onClickItem,
    items,
    className,
    ...props
}) => {
    React.useEffect(() => {
        onRender?.();
        return () => onDestroy?.();
    }, []);
    const navProps = omit(props, ISubNavigationPropsToOmit);

    const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        onClickItem?.(id);
        return true;
    };
    const selectedItem = selected || defaultSelected;

    const navItems = map(items, ({id, link, label, disabled}: ISubNavigationItem) => (
        <li
            key={id}
            className={classNames('sub-navigation-item', {
                'mod-selected': id === selectedItem,
            })}
        >
            <a
                href={link}
                className={classNames('sub-navigation-item-link', {disabled})}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => handleItemClick(e, id)}
            >
                {label}
            </a>
        </li>
    ));

    return (
        <nav {...navProps} className={classNames('sub-navigation', className)}>
            <ul className="sub-navigation-items">{navItems}</ul>
        </nav>
    );
};
