import {
    IconAlertSquareFilled,
    IconAlertTriangleFilled,
    IconBulbFilled,
    IconHelpCircle,
    IconInfoCircleFilled,
    TablerIcon,
} from '@coveord/plasma-react-icons';
import {
    Box,
    BoxProps,
    createVarsResolver,
    Factory,
    MantineSize,
    polymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
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
     * @default 'information'
     */
    variant?: InfoTokenVariant;
    /**
     * The size of the info token.
     *
     * @default 'sm'
     */
    size?: MantineSize;
}

const defaultProps: Partial<InfoTokenProps> = {variant: 'information', size: 'xs'};

const colorResolver = (variant: InfoTokenVariant): string => {
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

const sizeResolver = (size: MantineSize): number => {
    if (typeof size === 'number') {
        return size;
    }
    switch (size) {
        case 'sm':
            return 20;
        case 'md':
            return 24;
        case 'lg':
            return 32;
        case 'xl':
            return 40;
        case 'xs':
        default:
            return 16;
    }
};

const iconResolver = (variant: InfoTokenVariant): TablerIcon => {
    switch (variant) {
        case 'error':
            return IconAlertSquareFilled;
        case 'information':
            return IconInfoCircleFilled;
        case 'question':
            return IconHelpCircle;
        case 'warning':
            return IconAlertTriangleFilled;
        case 'advice':
        default:
            return IconBulbFilled;
    }
};

const varsResolver = createVarsResolver<InfoTokenFactory>((_theme, {variant}) => {
    const color = colorResolver(variant);
    return {
        root: {
            '--info-token-color': color,
        },
    };
});

export const InfoToken: ReturnType<typeof polymorphicFactory<InfoTokenFactory>> = polymorphicFactory<InfoTokenFactory>(
    (_props, ref) => {
        const props = useProps('InfoToken', defaultProps, _props);
        const {variant, vars, className, style, unstyled, styles, classNames, size, ...others} = props;
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
        const IconComponent = iconResolver(variant);
        return (
            <Box
                ref={ref}
                variant={variant}
                role="img"
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
    },
);
