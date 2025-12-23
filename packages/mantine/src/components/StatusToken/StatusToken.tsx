import {
    Box,
    BoxProps,
    createVarsResolver,
    Factory,
    getSize,
    MantineSize,
    MantineTheme,
    polymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';

import Circle from './icons/circle.svg?raw';
import Ring from './icons/ring.svg?raw';
import Square from './icons/square.svg?raw';
import Triangle from './icons/triangle.svg?raw';
import Info from './icons/info.svg?raw';
import classes from './StatusToken.module.css';

export type StatusTokenFactory = Factory<{
    props: StatusTokenProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: StatusTokenComponentStylesNames;
    vars: StatusTokenCssVariables;
    variant: StatusTokenVariant;
}>;
export type StatusTokenComponentStylesNames = 'root';
export type StatusTokenVariant = 'info' | 'success' | 'caution' | 'error' | 'disabled' | 'waiting' | 'edited' | 'new';
export type StatusTokenSize = Extract<MantineSize, 'sm' | 'lg'>;
export type StatusTokenCssVariables = {
    root: '--status-token-color' | '--status-token-size';
};

export interface StatusTokenProps extends BoxProps, StylesApiProps<StatusTokenFactory> {
    /**
     * The size of the token.
     *
     * @default 'lg'
     */
    size?: StatusTokenSize;
    /**
     * The variant of the token.
     *
     * @default 'info'
     */
    variant?: StatusTokenVariant;
}

const defaultProps: Partial<StatusTokenProps> = {size: 'lg', variant: 'info'};

const resolveThemeColorFromVariant = (variant: StatusTokenVariant, theme: MantineTheme): string => {
    switch (variant) {
        case 'success':
            return theme.colors.green[4];
        case 'caution':
            return theme.colors.yellow[4];
        case 'error':
            return theme.colors.red[5];
        case 'disabled':
        case 'waiting':
            return theme.colors.gray[5];
        case 'edited':
        case 'new':
            return 'var(--mantine-primary-color-filled)';
        case 'info':
            return theme.colors.gray[3];
        default:
            return theme.colors.navy[5];
    }
};
const resolveSize = (size: StatusTokenSize): number => (size === 'sm' ? 8 : 12);

const resolveIconSrcFromVariant = (variant: StatusTokenVariant): string => {
    switch (variant) {
        case 'caution':
            return Triangle;
        case 'error':
            return Square;
        case 'disabled':
            return Ring;
        case 'info':
            return Info;
        case 'success':
        case 'waiting':
        case 'edited':
        case 'new':
        default:
            return Circle;
    }
};

const varsResolver = createVarsResolver<StatusTokenFactory>((theme, {variant, size}) => {
    const color = resolveThemeColorFromVariant(variant, theme);
    return {
        root: {
            '--status-token-color': color,
            '--status-token-size': getSize(resolveSize(size), 'status-token-size'),
        },
    };
});

const statusTokenLabels: Record<StatusTokenVariant, string> = {
    info: 'Info',
    success: 'Success',
    caution: 'Caution',
    error: 'Error',
    disabled: 'Disabled',
    waiting: 'Waiting',
    edited: 'Edited',
    new: 'New',
};

export const StatusToken: ReturnType<typeof polymorphicFactory<StatusTokenFactory>> =
    polymorphicFactory<StatusTokenFactory>((props, ref) => {
        const {variant, vars, size, className, style, unstyled, styles, classNames, ...others} = useProps(
            'StatusToken',
            defaultProps,
            props,
        );
        const getStyles = useStyles<StatusTokenFactory>({
            name: 'StatusToken',
            classes,
            className,
            props,
            style,
            styles,
            unstyled,
            vars,
            varsResolver,
        });
        return (
            <Box
                ref={ref}
                variant={variant}
                role="img"
                aria-label={statusTokenLabels[variant]}
                {...getStyles('root', {
                    className,
                    style,
                    styles,
                    classNames,
                })}
                dangerouslySetInnerHTML={{__html: resolveIconSrcFromVariant(variant)}}
                {...others}
            />
        );
    });

StatusToken.displayName = 'StatusToken';
