import {
    Box,
    BoxProps,
    createVarsResolver,
    Factory,
    polymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {
    IconAlertSquareFilled,
    IconAlertTriangleFilled,
    IconBulbFilled,
    IconHelpCircle,
    IconInfoCircleFilled,
} from '@tabler/icons-react';
import type {ReactNode} from 'react';
import classes from './InfoToken.module.css';

export type InfoTokenFactory = Factory<{
    props: InfoTokenProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: InfoTokenComponentStylesNames;
    vars: InfoTokenCssVariables;
    variant: InfoTokenVariant;
}>;
export type InfoTokenComponentStylesNames = 'root';
export type InfoTokenVariant = 'information' | 'advice' | 'warning' | 'error' | 'question';
export type InfoTokenCssVariables = {
    root: '--info-token-color';
};

export interface InfoTokenProps extends BoxProps, StylesApiProps<InfoTokenFactory> {
    /**
     * The variant of the token.
     *
     * @default 'info'
     */
    variant?: InfoTokenVariant;
}

const defaultProps: Partial<InfoTokenProps> = {variant: 'information'};

const resolveThemeColorFromVariant = (variant: InfoTokenVariant): string => {
    switch (variant) {
        case 'error':
            return 'var(--mantine-color-error)';
        case 'advice':
            return 'var(--mantine-primary-color-filled)';
        case 'question':
            return 'var(--mantine-primary-color-filled)';
        case 'warning':
            return 'var(--mantine-color-yellow-filled)';
        case 'information':
        default:
            return 'var(--mantine-color-gray-filled)';
    }
};

const resolveIconSrcFromVariant = (variant: InfoTokenVariant): ReactNode => {
    switch (variant) {
        case 'error':
            return <IconAlertSquareFilled />;
        case 'information':
            return <IconInfoCircleFilled />;
        case 'question':
            return <IconHelpCircle stroke={1.5} />;
        case 'warning':
            return <IconAlertTriangleFilled />;
        case 'advice':
        default:
            return <IconBulbFilled />;
    }
};

const varsResolver = createVarsResolver<InfoTokenFactory>((_theme, {variant}) => {
    const color = resolveThemeColorFromVariant(variant);
    return {
        root: {
            '--info-token-color': color,
        },
    };
});

export const InfoToken: ReturnType<typeof polymorphicFactory<InfoTokenFactory>> = polymorphicFactory<InfoTokenFactory>(
    (props, ref) => {
        const {variant, vars, className, style, unstyled, styles, classNames, ...others} = useProps(
            'InfoToken',
            defaultProps,
            props,
        );
        const getStyles = useStyles<InfoTokenFactory>({
            name: 'InfoToken',
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
                {...getStyles('root', {
                    className,
                    style,
                    styles,
                    classNames,
                })}
                {...others}
            >
                {resolveIconSrcFromVariant(variant)}
            </Box>
        );
    },
);
