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
import {Children, ElementType, ReactElement, ReactNode} from 'react';
import {HeaderProvider} from './Header.context';
import classes from './Header.module.css';
import {
    HeaderBreadcrumbAnchor,
    type HeaderBreadcrumbAnchorStyleNames,
} from './HeaderBreadcrumbs/HeaderBreadcrumbAnchor.js';
import {HeaderBreadcrumbs, HeaderBreadcrumbsStyleNames} from './HeaderBreadcrumbs/HeaderBreadcrumbs.js';
import {HeaderBreadcrumbText, HeaderBreadcrumbTextStyleNames} from './HeaderBreadcrumbs/HeaderBreadcrumbText.js';
import {HeaderDocAnchor, HeaderDocAnchorStyleNames} from './HeaderDocAnchor/HeaderDocAnchor.js';
import {HeaderRight, HeaderRightStyleNames} from './HeaderRight/HeaderRight.js';

export type {HeaderBreadcrumbsProps} from './HeaderBreadcrumbs/HeaderBreadcrumbs.js';
export type {HeaderDocAnchorProps} from './HeaderDocAnchor/HeaderDocAnchor.js';
export type {HeaderRightProps} from './HeaderRight/HeaderRight.js';

export type HeaderVariant = 'primary' | 'secondary';
export type HeaderStyleNames =
    | 'root'
    | 'title'
    | 'description'
    | 'divider'
    | 'body'
    | HeaderDocAnchorStyleNames
    | HeaderBreadcrumbsStyleNames
    | HeaderBreadcrumbAnchorStyleNames
    | HeaderBreadcrumbTextStyleNames
    | HeaderBreadcrumbsStyleNames
    | HeaderRightStyleNames;

export interface HeaderProps
    extends StylesApiProps<HeaderFactory>,
        Omit<GroupProps, 'classNames' | 'styles' | 'vars' | 'variant'> {
    /**
     * The description text displayed inside the header underneath the title
     */
    description?: ReactNode;
    /**
     * Whether the header should have a border on the bottom
     */
    borderBottom?: boolean;
    /**
     * Use the primary variant for page header and secondary variant elsewhere
     *
     * @default 'primary'
     */
    variant?: 'primary' | 'secondary';
    /**
     * The title of the header.
     */
    children: ReactNode;
    /**
     * The component used to render the title.
     *
     * @default Title
     * @example 'h2'
     */
    titleComponent?: ElementType;
}

export type HeaderFactory = Factory<{
    props: HeaderProps;
    ref: HTMLDivElement;
    variant: HeaderVariant;
    stylesNames: HeaderStyleNames;
    staticComponents: {
        Breadcrumbs: typeof HeaderBreadcrumbs;
        BreadcrumbAnchor: typeof HeaderBreadcrumbAnchor;
        BreadcrumbText: typeof HeaderBreadcrumbText;
        Right: typeof HeaderRight;
        DocAnchor: typeof HeaderDocAnchor;
    };
}>;

const defaultProps: Partial<HeaderProps> = {
    variant: 'primary',
    justify: 'space-between',
    wrap: 'nowrap',
};

const getSpacing = (variant: HeaderVariant) => (variant === 'secondary' ? 'xxs' : 'xs');

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
        titleComponent: TitleComponent,
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
    const right = convertedChildren.find((child) => child.type === HeaderRight);
    const docAnchor = convertedChildren.find((child) => child.type === HeaderDocAnchor);
    const otherChildren = convertedChildren.filter(
        (child) => child.type !== HeaderBreadcrumbs && child.type !== HeaderRight && child.type !== HeaderDocAnchor,
    );
    return (
        <HeaderProvider value={{getStyles}}>
            <Group ref={ref} variant={variant} {...getStyles('root')} {...others}>
                <Stack gap={getSpacing(variant)}>
                    {breadcrumbs}
                    <Title
                        variant={variant}
                        component={TitleComponent}
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
                {right}
            </Group>
            {borderBottom ? <Divider {...getStyles('divider', stylesApiProps)} size="xs" /> : null}
        </HeaderProvider>
    );
});

Header.Breadcrumbs = HeaderBreadcrumbs;
Header.BreadcrumbAnchor = HeaderBreadcrumbAnchor;
Header.BreadcrumbText = HeaderBreadcrumbText;
Header.Right = HeaderRight;
Header.DocAnchor = HeaderDocAnchor;
