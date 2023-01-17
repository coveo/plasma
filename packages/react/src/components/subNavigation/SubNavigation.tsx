import classNames from 'classnames';
import {ReactNode, HTMLAttributes, FunctionComponent, MouseEvent, useEffect, createElement} from 'react';
import {map, omit} from 'underscore';
import {SlideY} from '../../animations/index.js';

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
    /**
     * A small description that appears once the subNavigation selected
     */
    description?: string;
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
    label: ReactNode;
    disabled?: boolean;
    link?: string;
    description?: string;
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

/**
 * @deprecated Use Mantine instead
 */
export const SubNavigation: FunctionComponent<
    React.PropsWithChildren<ISubNavigationProps & HTMLAttributes<HTMLElement>>
> = ({onDestroy, onRender, selected, defaultSelected, onClickItem, items, className, ...props}) => {
    useEffect(() => {
        onRender?.();
        return () => onDestroy?.();
    }, []);
    const navProps = omit(props, ISubNavigationPropsToOmit);

    const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        onClickItem?.(id);
        return true;
    };
    const selectedItem = selected || defaultSelected;

    const navItemsContainDescription = items.some((item) => item.description);
    const navItems = map(items, ({id, link, label, disabled, description}: ISubNavigationItem) => {
        const openDescription = description && selectedItem === id;

        if (navItemsContainDescription) {
            return (
                <li key={id} className={classNames('sub-navigation-item', {'mod-selected': id === selectedItem})}>
                    <a
                        href={link}
                        className={classNames('sub-navigation-item-link-with-description', {disabled})}
                        onClick={(e: MouseEvent<HTMLAnchorElement>) => handleItemClick(e, id)}
                    >
                        {typeof label === 'string'
                            ? createElement(
                                  'div',
                                  {
                                      className: 'sub-navigation-item-link-with-description-label',
                                  },
                                  `${label}`
                              )
                            : label}
                    </a>
                    {description && (
                        <SlideY in={openDescription}>
                            <div className="sub-navigation-item-description body-m-book-subdued">{description}</div>
                        </SlideY>
                    )}
                </li>
            );
        }
        return (
            <li key={id} className={classNames('sub-navigation-item', {'mod-selected': id === selectedItem})}>
                <a
                    href={link}
                    className={classNames('sub-navigation-item-link', {disabled})}
                    onClick={(e: MouseEvent<HTMLAnchorElement>) => handleItemClick(e, id)}
                >
                    {label}
                </a>
            </li>
        );
    });

    return (
        <nav {...navProps} className={classNames('sub-navigation', className)}>
            <ul className="sub-navigation-items">{navItems}</ul>
        </nav>
    );
};
