import {Breadcrumbs, BreadcrumbsProps} from '@mantine/core';
import {FunctionComponent} from 'react';
import HeaderBreadcumbsClasses from './HeaderBreadcrumbs.module.css';

export type HeaderBreadcrumbsProps = BreadcrumbsProps;
export const HeaderBreadcrumbs: FunctionComponent<HeaderBreadcrumbsProps> = ({children, ...others}) => (
    <Breadcrumbs
        classNames={{breadcrumb: HeaderBreadcumbsClasses.breadcrumb, separator: HeaderBreadcumbsClasses.separator}}
        {...others}
    >
        {children}
    </Breadcrumbs>
);
