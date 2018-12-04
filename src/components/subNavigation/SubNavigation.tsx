import * as classNames from 'classnames';
import * as React from 'react';
import {keys} from 'ts-transformer-keys';
import {map, omit} from 'underscore';

import {callIfDefined} from '../../utils/FalsyValuesUtils';

export interface ISubNavigationOwnProps extends React.ClassAttributes<SubNavigation> {
    id?: string;
    items: ISubNavigationItem[];
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
    label: string;
    link?: string;
}

export interface ISubNavigationProps extends ISubNavigationOwnProps, ISubNavigationStateProps, ISubNavigationDispatchProps {}

const ISubNavigationPropsToOmit = keys<ISubNavigationProps>();

export class SubNavigation extends React.PureComponent<ISubNavigationProps & React.HTMLAttributes<HTMLElement>> {
    componentWillMount() {
        callIfDefined(this.props.onRender);
    }

    componentWillUnmount() {
        callIfDefined(this.props.onDestroy);
    }

    render() {
        const selected = this.props.selected || this.props.defaultSelected;
        const navProps = omit(this.props, ISubNavigationPropsToOmit);
        const items = map(this.props.items, ({id, link, label}: ISubNavigationItem) => (
            <li
                key={id}
                className={classNames(
                    'sub-navigation-item',
                    {'mod-selected': id === selected},
                )}>
                <a
                    href={link || '#'}
                    className='sub-navigation-item-link'
                    onClick={(e) => this.handleItemClick(e, id)}>
                    {label}
                </a>
            </li>
        ));

        return (
            <nav {...navProps} className={classNames('sub-navigation', navProps.className)}>
                <ul className='sub-navigation-items'>
                    {items}
                </ul>
            </nav>
        );
    }

    private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        callIfDefined(this.props.onClickItem, id);
    }
}
