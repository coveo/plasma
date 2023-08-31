import {Breadcrumbs, BreadcrumbsProps, DefaultProps, Selectors} from '@mantine/core';
import {FunctionComponent} from 'react';
import {HeaderBreadcrumbsStylesParams, useStyles} from './HeaderBreadcrumbs.styles';

export type HeaderBreadcrumbsStylesNames = Selectors<typeof useStyles>;

export type HeaderBreadcrumbsProps = BreadcrumbsProps &
    DefaultProps<HeaderBreadcrumbsStylesNames, HeaderBreadcrumbsStylesParams>;

export const HeaderBreadcrumbs: FunctionComponent<HeaderBreadcrumbsProps> = ({
    classNames,
    styles,
    unstyled,
    children,
    ...others
}) => {
    const {classes} = useStyles(
        {},
        {
            name: 'PlasmaHeaderBreadcrumbs',
            classNames,
            styles,
            unstyled,
        },
    );
    return (
        <Breadcrumbs classNames={{breadcrumb: classes.breadcrumb, separator: classes.separator}} {...others}>
            {children}
        </Breadcrumbs>
    );
};
