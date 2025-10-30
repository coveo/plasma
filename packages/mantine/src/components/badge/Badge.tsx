import {
    Badge as MantineBadge,
    BadgeCssVariables,
    BadgeProps,
    BadgeStylesNames,
    BadgeVariant,
    polymorphicFactory,
    PolymorphicFactory,
    PolymorphicComponentProps,
    alpha,
    useComputedColorScheme,
} from '@mantine/core';
import {forwardRef, ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes} from 'react';

export interface SemanticBadgeProps
    extends Pick<
        BadgeProps,
        | 'm'
        | 'mt'
        | 'mb'
        | 'ml'
        | 'mr'
        | 'ms'
        | 'me'
        | 'mx'
        | 'my'
        | 'miw'
        | 'maw'
        | 'pos'
        | 'top'
        | 'left'
        | 'right'
        | 'bottom'
        | 'inset'
        | 'display'
        | 'flex'
        | 'leftSection'
        | 'rightSection'
        | 'fullWidth'
        | 'circle'
    > {
    /**
     * The size of the badge.
     * @default 'small'
     */
    size?: 'small' | 'large';
    /**
     * Whether the badge is displayed over a light or dark background.
     * @default Falls back to theme.
     */
    on?: 'light' | 'dark';
    /**
     * The content of the badge.
     */
    children?: ReactNode;
}

export type SemanticBadge = ForwardRefExoticComponent<SemanticBadgeProps & RefAttributes<HTMLDivElement>>;

const enhanceBadge = (
    ComponentLight: <L = 'div'>(props: PolymorphicComponentProps<L, BadgeProps>) => ReactElement,
    ComponentDark: <L = 'div'>(props: PolymorphicComponentProps<L, BadgeProps>) => ReactElement,
): SemanticBadge =>
    forwardRef<HTMLDivElement, SemanticBadgeProps>((props, ref) => {
        const computedColorScheme = useComputedColorScheme('light', {getInitialValueInEffect: true});
        const Component = (props.on || computedColorScheme) === 'dark' ? ComponentDark : ComponentLight;
        return (
            <Component
                ref={ref}
                {...props}
                py={2}
                px={12}
                size={props.size === 'large' ? 'lg' : 'md'}
                h={props.size === 'large' ? 22 : 20}
            />
        );
    });

const BadgePrimary = enhanceBadge(
    MantineBadge.withProps({
        variant: 'light',
        bd: '1px solid var(--badge-bg)',
        c: 'var(--mantine-primary-color-6)',
    }),
    MantineBadge.withProps({
        variant: 'light',
        bd: `1px solid ${alpha('var(--mantine-primary-color-3)', 0.32)}`,
        c: 'var(--mantine-primary-color-2)',
        bg: alpha('var(--mantine-primary-color-3)', 0.32),
    }),
);
const BadgeSecondary = enhanceBadge(
    MantineBadge.withProps({
        variant: 'light',
        color: 'gray',
        bd: '1px solid var(--badge-bg)',
        c: 'gray.7',
    }),
    MantineBadge.withProps({
        variant: 'light',
        color: 'gray',
        c: 'var(--mantine-color-white)',
        bd: `1px solid ${alpha('var(--mantine-color-gray-3)', 0.16)}`,
        bg: alpha('var(--mantine-color-gray-3)', 0.16),
    }),
);
const BadgeCritical = enhanceBadge(
    MantineBadge.withProps({
        variant: 'light',
        color: 'critical',
        bd: '1px solid var(--badge-bg)',
        c: 'red.6',
    }),
    MantineBadge.withProps({
        variant: 'light',
        color: 'critical',
        c: 'red.2',
        bd: `1px solid ${alpha('var(--mantine-color-red-3)', 0.16)}`,
        bg: alpha('var(--mantine-color-red-3)', 0.16),
    }),
);
const BadgeWarning = enhanceBadge(
    MantineBadge.withProps({
        variant: 'light',
        color: 'warning',
        bd: '1px solid var(--badge-bg)',
        c: 'yellow.6',
    }),
    MantineBadge.withProps({
        variant: 'light',
        color: 'warning',
        c: 'yellow.2',
        bd: `1px solid ${alpha('var(--mantine-color-yellow-3)', 0.16)}`,
        bg: alpha('var(--mantine-color-yellow-3)', 0.16),
    }),
);
const BadgeDisabled = enhanceBadge(
    MantineBadge.withProps({
        variant: 'light',
        color: 'gray',
        c: 'var(--coveo-color-text-disabled)',
        bg: 'var(--coveo-color-bg-disabled)',
    }),
    MantineBadge.withProps({
        variant: 'light',
        color: 'gray',
        c: 'dark.3',
        bg: alpha('var(--mantine-color-gray-3)', 0.16),
    }),
);

export type BadgeOverloadFactory = PolymorphicFactory<{
    props: BadgeProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: BadgeStylesNames;
    vars: BadgeCssVariables;
    variant: BadgeVariant;
    staticComponents: {
        Primary: SemanticBadge;
        Secondary: SemanticBadge;
        Critical: SemanticBadge;
        Warning: SemanticBadge;
        Disabled: SemanticBadge;
    };
}>;

export const Badge = polymorphicFactory<BadgeOverloadFactory>((props, ref) => <MantineBadge ref={ref} {...props} />);

Badge.Primary = BadgePrimary;
Badge.Secondary = BadgeSecondary;
Badge.Critical = BadgeCritical;
Badge.Warning = BadgeWarning;
Badge.Disabled = BadgeDisabled;
