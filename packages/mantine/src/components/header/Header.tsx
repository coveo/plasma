import {
    Divider,
    Factory,
    Group,
    GroupProps,
    Stack,
    StylesApiProps,
    Text,
    Title,
    factory,
    useProps,
    useStyles,
} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import {HeaderProvider} from './Header.context';
import classes from './Header.module.css';
import {HeaderActions, HeaderActionsStyleNames} from './HeaderActions/HeaderActions';
import {HeaderBreadcrumbs, HeaderBreadcrumbsStyleNames} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
import {HeaderDocAnchor, HeaderDocAnchorStyleNames} from './HeaderDocAnchor/HeaderDocAnchor';

export type {HeaderActionsProps} from './HeaderActions/HeaderActions';
export type {HeaderBreadcrumbsProps} from './HeaderBreadcrumbs/HeaderBreadcrumbs';
export type {HeaderDocAnchorProps} from './HeaderDocAnchor/HeaderDocAnchor';

export type HeaderVariant = 'primary' | 'secondary';
export type HeaderStyleNames =
    | 'root'
    | 'title'
    | 'description'
    | 'divider'
    | HeaderDocAnchorStyleNames
    | HeaderBreadcrumbsStyleNames
    | HeaderActionsStyleNames;

export interface HeaderProps extends StylesApiProps<HeaderFactory>, Omit<GroupProps, 'classNames' | 'styles' | 'vars'> {
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
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary';
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
    variant: 'primary',
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
            <Group ref={ref} variant={variant} {...getStyles('root')} {...others}>
                <Stack gap={0}>
                    {breadcrumbs}
                    <Title
                        variant={variant}
                        order={variant === 'primary' ? 1 : 3}
                        {...getStyles('title', stylesApiProps)}
                    >
                        {otherChildren}
                        {docAnchor}
                    </Title>
                    <Text {...getStyles('description', stylesApiProps)} size={variant === 'primary' ? 'md' : 'sm'}>
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
