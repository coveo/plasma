import {
    DefaultProps,
    Divider,
    Group,
    GroupProps,
    Selectors,
    Stack,
    Text,
    Title,
    useComponentDefaultProps,
} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';

import {HeaderStylesParams, useStyles} from './Header.styles';
import {HeaderActions} from './HeaderActions/HeaderActions';
import {HeaderBreadcrumbs} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
import {HeaderDocAnchor} from './HeaderDocAnchor/HeaderDocAnchor';

export type {HeaderDocAnchorProps, HeaderDocAnchorStylesNames} from './HeaderDocAnchor/HeaderDocAnchor';
export type {HeaderBreadcrumbsProps, HeaderBreadcrumbsStylesNames} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
export type {HeaderActionsProps, HeaderActionsStylesNames} from './HeaderActions/HeaderActions';
export type HeaderStylesNames = Selectors<typeof useStyles>;

export interface HeaderProps extends Omit<GroupProps, 'styles'>, DefaultProps<HeaderStylesNames, HeaderStylesParams> {
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
    position: 'apart',
    noWrap: true,
};

export const Header: HeaderType = (props: HeaderProps) => {
    const {classNames, styles, unstyled, className, description, borderBottom, variant, children, ...others} =
        useComponentDefaultProps('PlasmaHeader', defaultProps, props);
    const {classes, cx} = useStyles({variant}, {name: 'PlasmaHeader', classNames, styles, unstyled});

    const convertedChildren = Children.toArray(children) as ReactElement[];
    const breadcrumbs = convertedChildren.find((child) => child.type === HeaderBreadcrumbs);
    const actions = convertedChildren.find((child) => child.type === HeaderActions);
    const docAnchor = convertedChildren.find((child) => child.type === HeaderDocAnchor);
    const otherChildren = convertedChildren.filter(
        (child) => child.type !== HeaderBreadcrumbs && child.type !== HeaderActions && child.type !== HeaderDocAnchor,
    );
    return (
        <>
            <Group className={cx(className, classes.root)} {...others}>
                <Stack spacing={0}>
                    {breadcrumbs}
                    <Title order={variant === 'page' ? 1 : 3} className={classes.title}>
                        {otherChildren}
                        {docAnchor}
                    </Title>
                    <Text className={classes.description} size={variant === 'page' ? 'md' : 'sm'}>
                        {description}
                    </Text>
                </Stack>
                {actions}
            </Group>
            {borderBottom ? <Divider className={classes.divider} size="xs" /> : null}
        </>
    );
};

Header.Breadcrumbs = HeaderBreadcrumbs;
Header.Actions = HeaderActions;
Header.DocAnchor = HeaderDocAnchor;
