import * as React from 'react';
import {SideNavigationLoadingHeader} from './SideNavigationLoadingHeader';

export const SideNavigationMenuSection = (props: any) =>
    <div className='block navigation-menu-section'>
        <SideNavigationLoadingHeader />
        <div className='navigation-menu-section-items'>
            {props.children}
        </div>
    </div>;
