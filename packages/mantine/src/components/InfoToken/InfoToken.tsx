import {
    IconAlertSquare,
    IconAlertTriangle,
    IconBulb,
    IconCheck,
    IconHelpCircle,
    IconInfoCircle,
    TablerIcon,
} from '@coveord/plasma-react-icons';
import {
    Box,
    BoxProps,
    createPolymorphicComponent,
    createVarsResolver,
    Factory,
    PolymorphicComponentProps,
    polymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {forwardRef, FunctionComponent, ReactElement} from 'react';
import classes from './InfoToken.module.css';

export type InfoTokenFactory = Factory<{
    props: InfoTokenInternalProps;
    defaultRef: HTMLDivElement;
    defaultComponent: 'div';
    stylesNames: InfoTokenComponentStylesNames;
    vars: InfoTokenCssVariables;
    variant: InfoTokenVariant;
}>;
export type InfoTokenComponentStylesNames = 'root';
export type InfoTokenType = 'information' | 'advice' | 'warning' | 'error' | 'question' | 'success';
export type InfoTokenVariant = 'outline' | 'light';
export type InfoTokenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InfoTokenCssVariables = {
    root: '--it-color' | '--it-bg';
};

interface InfoTokenInternalProps extends BoxProps, StylesApiProps<InfoTokenFactory> {
    /**
     * The variant of the token.
     *
     * @default 'outline'
     */
    variant?: InfoTokenVariant;
    /**
     * The semantic type of the token
     *
     * @default 'information'
     */
    type?: InfoTokenType;
    /**
     * The size of the info token.
     *
     * @default 'xs'
     */
    size?: InfoTokenSizes;
}

export type InfoTokenProps = Omit<InfoTokenInternalProps, 'type'>;

type InfoTokenCompoundComponent = (<C = 'div'>(props: PolymorphicComponentProps<C, InfoTokenProps>) => ReactElement) &
    Omit<FunctionComponent<PolymorphicComponentProps<any, InfoTokenProps>>, never>;

const defaultProps: Partial<InfoTokenInternalProps> = {variant: 'outline', type: 'information', size: 'xs'};

const colorResolver = (type: InfoTokenType): string => {
    switch (type) {
        case 'error':
            return 'var(--mantine-color-error)';
        case 'advice':
        case 'question':
            return 'var(--coveo-color-text-primary)';
        case 'warning':
            return 'var(--mantine-color-yellow-text)';
        case 'success':
            return 'var(--mantine-color-green-text)';
        case 'information':
        default:
            return 'var(--mantine-color-gray-text)';
    }
};

const bgColorResolver = (type: InfoTokenType): string => {
    switch (type) {
        case 'error':
            return 'var(--mantine-color-red-light)';
        case 'advice':
        case 'question':
            return 'var(--mantine-primary-color-light)';
        case 'warning':
            return 'var(--mantine-color-yellow-light)';
        case 'success':
            return 'var(--mantine-color-green-light)';
        case 'information':
        default:
            return 'var(--mantine-color-gray-light)';
    }
};

const sizeResolver = (size: InfoTokenSizes): number => {
    switch (size) {
        case 'sm':
            return 16;
        case 'md':
            return 20;
        case 'lg':
            return 24;
        case 'xl':
            return 32;
        case 'xs':
        default:
            return 12;
    }
};

const iconResolver = (type: InfoTokenType): TablerIcon => {
    switch (type) {
        case 'error':
            return IconAlertSquare;
        case 'question':
            return IconHelpCircle;
        case 'warning':
            return IconAlertTriangle;
        case 'advice':
            return IconBulb;
        case 'success':
            return IconCheck;
        default:
            return IconInfoCircle;
    }
};

const varsResolver = createVarsResolver<InfoTokenFactory>((_theme, {type}) => {
    const color = colorResolver(type);
    const bgColor = bgColorResolver(type);
    return {
        root: {
            '--it-color': color,
            '--it-bg': bgColor,
        },
    };
});

const _InfoToken = polymorphicFactory<InfoTokenFactory>((_props, ref) => {
    const props = useProps('InfoToken', defaultProps, _props);
    const {variant, type, vars, className, style, unstyled, styles, classNames, size, ...others} = props;
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
    const IconComponent = iconResolver(type);
    return (
        <Box
            ref={ref}
            variant={variant}
            role="img"
            aria-label={type}
            size={size}
            {...getStyles('root', {
                className,
                style,
                styles,
                classNames,
            })}
            {...others}
        >
            <IconComponent size={sizeResolver(size)} />
        </Box>
    );
});

const createInfoTokenCompound = (type: InfoTokenType, displayName: string): InfoTokenCompoundComponent => {
    const Component: InfoTokenCompoundComponent = createPolymorphicComponent<'div', InfoTokenProps>(
        forwardRef<any, InfoTokenProps>((props, ref) => <_InfoToken ref={ref} {...props} type={type} />),
    );
    Component.displayName = displayName;
    return Component;
};

export const InfoToken = {
    Information: createInfoTokenCompound('information', 'InfoToken.Information'),
    Advice: createInfoTokenCompound('advice', 'InfoToken.Advice'),
    Warning: createInfoTokenCompound('warning', 'InfoToken.Warning'),
    Error: createInfoTokenCompound('error', 'InfoToken.Error'),
    Question: createInfoTokenCompound('question', 'InfoToken.Question'),
    Success: createInfoTokenCompound('success', 'InfoToken.Success'),
} as const;
