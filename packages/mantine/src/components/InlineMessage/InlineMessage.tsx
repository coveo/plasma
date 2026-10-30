import {
    Box,
    BoxProps,
    createVarsResolver,
    Factory,
    polymorphicFactory,
    StylesApiProps,
    Tooltip,
    useProps,
    useStyles,
} from '@mantine/core';
import {type ComponentType, type ReactNode} from 'react';
import {InfoToken} from '../InfoToken/InfoToken.js';
import classes from './InlineMessage.module.css';

export type InlineMessageVariant = 'subtle' | 'information' | 'advice' | 'warning' | 'critical' | 'success';
export type InlineMessageStylesNames = 'root' | 'icon' | 'label';
export type InlineMessageCssVariables = {
    root: '--im-color' | '--im-text-color';
};

export interface InlineMessageProps extends BoxProps, StylesApiProps<InlineMessageFactory> {
    /**
     * The semantic intent of the message. Prefer the `InlineMessage.*` sub-components over setting it manually.
     *
     * @default 'subtle'
     */
    variant?: InlineMessageVariant;
    /**
     * The leading element. Defaults to the `InfoToken` matching the variant (a gray information token for `subtle`).
     * Pass `null` to remove it, or any node (for example a `StatusToken`) to replace it.
     */
    icon?: ReactNode | null;
    /**
     * Additional detail revealed on hover and on keyboard focus. Keep the visible message short and put the
     * explanation here.
     */
    tooltip?: ReactNode;
    /**
     * The message content. Keep it short, ideally under two lines.
     */
    children?: ReactNode;
}

export type InlineMessageFactory = Factory<{
    props: InlineMessageProps;
    defaultRef: HTMLSpanElement;
    defaultComponent: 'span';
    stylesNames: InlineMessageStylesNames;
    vars: InlineMessageCssVariables;
    variant: InlineMessageVariant;
    staticComponents: {
        Subtle: typeof InlineMessageSubtle;
        Information: typeof InlineMessageInformation;
        Advice: typeof InlineMessageAdvice;
        Warning: typeof InlineMessageWarning;
        Critical: typeof InlineMessageCritical;
        Success: typeof InlineMessageSuccess;
    };
}>;

const defaultProps = {variant: 'subtle'} satisfies Partial<InlineMessageProps>;

const resolveColor = (variant: InlineMessageVariant): string => {
    switch (variant) {
        case 'information':
            return 'var(--mantine-color-blue-text)';
        case 'advice':
            return 'var(--mantine-color-violet-text)';
        case 'warning':
            return 'var(--mantine-color-yellow-text)';
        case 'critical':
            return 'var(--mantine-color-error)';
        case 'success':
            return 'var(--mantine-color-green-text)';
        case 'subtle':
        default:
            return 'var(--mantine-color-dimmed)';
    }
};

const COLORED_TEXT_VARIANTS: InlineMessageVariant[] = ['warning', 'critical', 'success'];

const resolveDefaultIcon = (variant: InlineMessageVariant): ReactNode => {
    switch (variant) {
        case 'information':
            return <InfoToken.Information component="span" />;
        case 'advice':
            return <InfoToken.Advice component="span" />;
        case 'warning':
            return <InfoToken.Warning component="span" />;
        case 'critical':
            return <InfoToken.Error component="span" />;
        case 'success':
            return <InfoToken.Success component="span" />;
        case 'subtle':
        default:
            return (
                <InfoToken.Information
                    component="span"
                    vars={() => ({
                        root: {
                            '--it-color': 'var(--mantine-color-dimmed)',
                            '--it-bg': 'var(--mantine-color-gray-light)',
                        },
                    })}
                />
            );
    }
};

const varsResolver = createVarsResolver<InlineMessageFactory>((_theme, {variant}) => {
    const resolvedVariant = variant ?? defaultProps.variant;
    const color = resolveColor(resolvedVariant);
    const colored = COLORED_TEXT_VARIANTS.includes(resolvedVariant);
    return {
        root: {
            '--im-color': color,
            '--im-text-color': colored ? color : 'var(--mantine-color-dimmed)',
        },
    };
});

export const InlineMessage = polymorphicFactory<InlineMessageFactory>((_props) => {
    const props = useProps('InlineMessage', defaultProps, _props);
    const {
        variant,
        icon,
        tooltip,
        children,
        vars,
        className,
        style,
        unstyled,
        styles,
        classNames,
        attributes,
        ref,
        ...others
    } = props;
    const getStyles = useStyles<InlineMessageFactory>({
        name: 'InlineMessage',
        classes,
        className,
        props,
        style,
        styles,
        classNames,
        unstyled,
        attributes,
        vars,
        varsResolver,
    });
    const resolvedIcon = icon === undefined ? resolveDefaultIcon(variant) : icon;

    const hasTooltip = tooltip !== undefined && tooltip !== null;
    const rootStyles = getStyles('root', {
        className: hasTooltip ? [className, 'mantine-focus-auto'].filter(Boolean).join(' ') : className,
        style,
    });

    const message = (
        <Box
            component="span"
            ref={ref}
            variant={variant}
            tabIndex={hasTooltip ? 0 : undefined}
            {...rootStyles}
            {...others}
        >
            {resolvedIcon ? <span {...getStyles('icon')}>{resolvedIcon}</span> : null}
            <span {...getStyles('label')}>{children}</span>
        </Box>
    );

    return hasTooltip ? (
        <Tooltip label={tooltip} multiline maw={320} events={{hover: true, focus: true, touch: true}}>
            {message}
        </Tooltip>
    ) : (
        message
    );
});
InlineMessage.displayName = 'InlineMessage';

const InlineMessageSubtle = InlineMessage.withProps({variant: 'subtle'});
(InlineMessageSubtle as ComponentType).displayName = 'InlineMessage.Subtle';

const InlineMessageInformation = InlineMessage.withProps({variant: 'information'});
(InlineMessageInformation as ComponentType).displayName = 'InlineMessage.Information';

const InlineMessageAdvice = InlineMessage.withProps({variant: 'advice'});
(InlineMessageAdvice as ComponentType).displayName = 'InlineMessage.Advice';

const InlineMessageWarning = InlineMessage.withProps({variant: 'warning'});
(InlineMessageWarning as ComponentType).displayName = 'InlineMessage.Warning';

const InlineMessageCritical = InlineMessage.withProps({variant: 'critical'});
(InlineMessageCritical as ComponentType).displayName = 'InlineMessage.Critical';

const InlineMessageSuccess = InlineMessage.withProps({variant: 'success'});
(InlineMessageSuccess as ComponentType).displayName = 'InlineMessage.Success';

InlineMessage.Subtle = InlineMessageSubtle;
InlineMessage.Information = InlineMessageInformation;
InlineMessage.Advice = InlineMessageAdvice;
InlineMessage.Warning = InlineMessageWarning;
InlineMessage.Critical = InlineMessageCritical;
InlineMessage.Success = InlineMessageSuccess;

export namespace InlineMessage {
    export type Props = InlineMessageProps;
    export type StylesNames = InlineMessageStylesNames;
    export type CssVariables = InlineMessageCssVariables;
    export type Factory = InlineMessageFactory;

    export namespace Subtle {
        export type Props = InlineMessageProps;
    }

    export namespace Information {
        export type Props = InlineMessageProps;
    }

    export namespace Advice {
        export type Props = InlineMessageProps;
    }

    export namespace Warning {
        export type Props = InlineMessageProps;
    }

    export namespace Critical {
        export type Props = InlineMessageProps;
    }

    export namespace Success {
        export type Props = InlineMessageProps;
    }
}
