import * as React from 'react';
import {map} from 'underscore';

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

export class SubNavigation extends React.Component<ISubNavigationProps, any> {

    private handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (this.props.onClickItem) {
            this.props.onClickItem(id);
        }
    }

    componentWillMount() {
        if (this.props.onRender) {
            this.props.onRender();
        }
    }

    componentWillUnmount() {
        if (this.props.onDestroy) {
            this.props.onDestroy();
        }
    }

    render() {
        const selected = this.props.selected || this.props.defaultSelected;
        const items = map(this.props.items, (item: ISubNavigationItem) => {
            const classes = ['sub-navigation-item'];
            if (item.id === selected) {
                classes.push('mod-selected');
            }
            return (
                <li key={item.id} className={classes.join(' ')}>
                    <a href={item.link || '#'} className='sub-navigation-item-link'
                        onClick={(e) => this.handleItemClick(e, item.id)}>{item.label}</a>
                </li>
            );
        });

        return (
            <nav className='sub-navigation'>
                <ul className='sub-navigation-items'>
                    {items}
                </ul>
            </nav>
        );
    }
}
