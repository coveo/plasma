import {factory, StylesApiProps, useProps, useStyles, type Factory, type TooltipProps} from '@mantine/core';
import {type ReactNode} from 'react';
import {ContextualHelp, type ContextualHelpProps} from '../ContextualHelp/ContextualHelp.js';

/**
 * @deprecated Use `ContextualHelp` instead, with `ml="xxs"` when placed next to a label.
 */
export type InputLabelInfoStylesNames = 'labelInfo';

/**
 * Tooltip props that Input.LabelInfo used to forward. They are still accepted to avoid breaking existing usages, but
 * are ignored.
 */
interface DeprecatedTooltipProps extends Omit<
    TooltipProps,
    'label' | 'children' | 'position' | 'className' | 'style' | 'classNames' | 'styles' | 'vars' | 'attributes'
> {
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    refProp?: TooltipProps['refProp'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    withinPortal?: TooltipProps['withinPortal'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    radius?: TooltipProps['radius'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    color?: TooltipProps['color'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    multiline?: TooltipProps['multiline'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    zIndex?: TooltipProps['zIndex'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    disabled?: TooltipProps['disabled'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    portalProps?: TooltipProps['portalProps'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    middlewares?: TooltipProps['middlewares'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    onPositionChange?: TooltipProps['onPositionChange'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    openDelay?: TooltipProps['openDelay'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    closeDelay?: TooltipProps['closeDelay'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    opened?: TooltipProps['opened'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    defaultOpened?: TooltipProps['defaultOpened'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    offset?: TooltipProps['offset'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    withArrow?: TooltipProps['withArrow'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    arrowSize?: TooltipProps['arrowSize'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    arrowOffset?: TooltipProps['arrowOffset'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    arrowRadius?: TooltipProps['arrowRadius'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    arrowPosition?: TooltipProps['arrowPosition'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    transitionProps?: TooltipProps['transitionProps'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    events?: TooltipProps['events'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    interactive?: TooltipProps['interactive'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    inline?: TooltipProps['inline'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    keepMounted?: TooltipProps['keepMounted'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    floatingStrategy?: TooltipProps['floatingStrategy'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    autoContrast?: TooltipProps['autoContrast'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    target?: TooltipProps['target'];
    /**
     * @deprecated Has no effect anymore and will be removed in the next major version.
     */
    hideDetached?: TooltipProps['hideDetached'];
}

/**
 * @deprecated Use `ContextualHelp` instead, with `ml="xxs"` when placed next to a label.
 */
export interface InputLabelInfoProps
    extends
        DeprecatedTooltipProps,
        Pick<ContextualHelpProps, 'position' | 'className' | 'style'>,
        StylesApiProps<InputLabelInfoFactory> {
    children: ReactNode;
}

/**
 * @deprecated Use `ContextualHelp` instead, with `ml="xxs"` when placed next to a label.
 */
export type InputLabelInfoFactory = Factory<{
    props: InputLabelInfoProps;
    ref: HTMLElement;
    stylesNames: InputLabelInfoStylesNames;
}>;

const defaultProps = {} satisfies Partial<InputLabelInfoProps>;

/**
 * @deprecated Use `ContextualHelp` instead, with `ml="xxs"` when placed next to a label.
 */
export const InputLabelInfo = factory<InputLabelInfoFactory>((_props) => {
    const props = useProps('InputLabelInfo', defaultProps, _props);
    const {classNames, className, style, styles, unstyled, vars, children, attributes, position, ref} = props;
    const getStyles = useStyles<InputLabelInfoFactory>({
        name: 'InputLabelInfo',
        props,
        style,
        styles,
        unstyled,
        attributes,
        className,
        classes: {},
        classNames,
        vars,
    });
    return (
        <ContextualHelp ref={ref} position={position} ml="xxs" {...getStyles('labelInfo', {className, style})}>
            {children}
        </ContextualHelp>
    );
});
