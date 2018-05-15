import * as classNames from 'classnames';
import * as React from 'react';
import {JSXRenderable} from '../../utils/JSXUtils';

export interface ISideNavProps {
    className?: string;
    children?: JSXRenderable;
}

export const SideNavigation = (props: ISideNavProps) =>
    <nav className={classNames(props.className, 'navigation')}>
        <div className='navigation-menu'>
            <div className='navigation-menu-sections'>
                {props.children}
            </div>
        </div>
    </nav>;
