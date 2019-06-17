import * as React from 'react';

export interface ISideNavigationItemProps {
    href: string;
    title: string;
    target?: string;
}

export const SideNavigationItem = (props: ISideNavigationItemProps) => (
    <a className="block navigation-menu-section-item" href={props.href} target={props.target}>
        <span className="navigation-menu-section-item-link">{props.title}</span>
    </a>
);
