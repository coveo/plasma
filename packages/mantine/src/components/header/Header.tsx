import {Divider, Group, GroupProps, Stack, Text, Title, useProps} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';

import cx from 'clsx';
import HeaderClasses from './Header.module.css';
import {HeaderActions} from './HeaderActions/HeaderActions';
import {HeaderBreadcrumbs} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
import {HeaderDocAnchor} from './HeaderDocAnchor/HeaderDocAnchor';

export type {HeaderActionsProps} from './HeaderActions/HeaderActions';
export type {HeaderBreadcrumbsProps} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
export type {HeaderDocAnchorProps} from './HeaderDocAnchor/HeaderDocAnchor';

export interface HeaderProps extends Omit<GroupProps, 'styles'> {
    /**
     * The description text displayed inside the header underneath the title
     */
    description?: ReactNode;
    /**
     * Whether the header should have a border on the bottom
     */
    borderBottom?: boolean;
    /**
     * Use the modal variant when displaying the header inside a modal
     *
     * @default 'page'
     */
    variant?: 'page' | 'modal';
    /**
     * The title of the header.
     */
    children: ReactNode;
}

interface HeaderType {
    (props: HeaderProps): ReactElement;
    Breadcrumbs: typeof HeaderBreadcrumbs;
    Actions: typeof HeaderActions;
    DocAnchor: typeof HeaderDocAnchor;
}

const defaultProps: Partial<HeaderProps> = {
    variant: 'page',
    justify: 'space-between',
    wrap: 'nowrap',
};

export const Header: HeaderType = (props: HeaderProps) => {
    const {className, description, borderBottom, variant, children, ...others} = useProps(
        'Header',
        defaultProps,
        props,
    );

    const convertedChildren = Children.toArray(children) as ReactElement[];
    const breadcrumbs = convertedChildren.find((child) => child.type === HeaderBreadcrumbs);
    const actions = convertedChildren.find((child) => child.type === HeaderActions);
    const docAnchor = convertedChildren.find((child) => child.type === HeaderDocAnchor);
    const otherChildren = convertedChildren.filter(
        (child) => child.type !== HeaderBreadcrumbs && child.type !== HeaderActions && child.type !== HeaderDocAnchor,
    );
    return (
        <>
            <Group variant={variant} className={cx(className, HeaderClasses.root)} {...others}>
                <Stack gap={0}>
                    {breadcrumbs}
                    <Title variant={variant} order={variant === 'page' ? 1 : 3} className={HeaderClasses.title}>
                        {otherChildren}
                        {docAnchor}
                    </Title>
                    <Text className={HeaderClasses.description} size={variant === 'page' ? 'md' : 'sm'}>
                        {description}
                    </Text>
                </Stack>
                {actions}
            </Group>
            {borderBottom ? <Divider className={HeaderClasses.divider} size="xs" /> : null}
        </>
    );
};

Header.Breadcrumbs = HeaderBreadcrumbs;
Header.Actions = HeaderActions;
Header.DocAnchor = HeaderDocAnchor;
