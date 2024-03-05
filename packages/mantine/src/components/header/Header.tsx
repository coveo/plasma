import {Divider, Factory, Group, GroupProps, Stack, Text, Title, factory, useProps, useStyles} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import classes from './Header.module.css';
import {HeaderActions, HeaderActionsStyleNames} from './HeaderActions/HeaderActions';
import {HeaderBreadcrumbs, HeaderBreadcrumbsStyleNames} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
import {HeaderDocAnchor, HeaderDocAnchorStyleNames} from './HeaderDocAnchor/HeaderDocAnchor';
import {HeaderProvider} from './Header.context';

export type {HeaderActionsProps} from './HeaderActions/HeaderActions';
export type {HeaderBreadcrumbsProps} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
export type {HeaderDocAnchorProps} from './HeaderDocAnchor/HeaderDocAnchor';

export type HeaderVariant = 'page' | 'modal';
export type HeaderStyleNames =
    | 'root'
    | 'title'
    | 'description'
    | 'divider'
    | HeaderDocAnchorStyleNames
    | HeaderBreadcrumbsStyleNames
    | HeaderActionsStyleNames;

export interface HeaderProps extends GroupProps {
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

export type HeaderFactory = Factory<{
    props: HeaderProps;
    ref: HTMLDivElement;
    variant: HeaderVariant;
    stylesNames: HeaderStyleNames;
    staticComponents: {
        Breadcrumbs: typeof HeaderBreadcrumbs;
        Actions: typeof HeaderActions;
        DocAnchor: typeof HeaderDocAnchor;
    };
}>;

const defaultProps: Partial<HeaderProps> = {
    variant: 'page',
    justify: 'space-between',
    wrap: 'nowrap',
};

export const Header = factory<HeaderFactory>((_props, ref) => {
    const props = useProps('PlasmaHeader', defaultProps, _props);
    const {
        className,
        description,
        borderBottom,
        variant,
        children,
        style,
        classNames,
        unstyled,
        vars,
        styles,
        ...others
    } = props;
    const getStyles = useStyles<HeaderFactory>({
        name: 'PlasmaHeader',
        props,
        classes,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
    });
    const stylesApiProps = {classNames, styles};

    const convertedChildren = Children.toArray(children) as ReactElement[];
    const breadcrumbs = convertedChildren.find((child) => child.type === HeaderBreadcrumbs);
    const actions = convertedChildren.find((child) => child.type === HeaderActions);
    const docAnchor = convertedChildren.find((child) => child.type === HeaderDocAnchor);
    const otherChildren = convertedChildren.filter(
        (child) => child.type !== HeaderBreadcrumbs && child.type !== HeaderActions && child.type !== HeaderDocAnchor,
    );
    return (
        <HeaderProvider value={{getStyles}}>
            <Group variant={variant} {...getStyles('root')} {...others}>
                <Stack gap={0}>
                    {breadcrumbs}
                    <Title variant={variant} order={variant === 'page' ? 1 : 3} {...getStyles('title', stylesApiProps)}>
                        {otherChildren}
                        {docAnchor}
                    </Title>
                    <Text {...getStyles('description', stylesApiProps)} size={variant === 'page' ? 'md' : 'sm'}>
                        {description}
                    </Text>
                </Stack>
                {actions}
            </Group>
            {borderBottom ? <Divider {...getStyles('divider', stylesApiProps)} size="xs" /> : null}
        </HeaderProvider>
    );
});

Header.Breadcrumbs = HeaderBreadcrumbs;
Header.Actions = HeaderActions;
Header.DocAnchor = HeaderDocAnchor;
