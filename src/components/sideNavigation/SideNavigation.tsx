import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../utils/JSXUtils';
import {IReduxStatePossibleProps} from '../../utils/ReduxUtils';

export interface ISideNavProps extends IReduxStatePossibleProps {
    className?: string;
    children?: JSXRenderable;
    opened?: boolean;
}

export const SideNavigation = (props: ISideNavProps) =>
    <nav className={classNames(props.className, 'navigation', {'navigation-opened': props.withReduxState ? props.opened : true})}>
        <div className='navigation-menu'>
            <div className='navigation-menu-sections'>
                {props.children}
            </div>
        </div>
    </nav>;
