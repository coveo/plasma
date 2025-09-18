import {CompoundStylesApiProps, factory, Factory, PolymorphicComponentProps, useProps} from '@mantine/core';
import {JSXElementConstructor, ReactElement} from 'react';
import {Button, ButtonProps} from '../button/Button.js';
import {PromptVariant} from './Prompt.js';
import {usePromptContext} from './Prompt.context';

export type PromptConfirmButtonStylesNamesVariant = 'confirm';

export interface PromptConfirmButtonProps
    extends CompoundStylesApiProps<PromptConfirmButtonFactory>,
        Omit<ButtonProps, 'primary' | 'classNames' | 'styles' | 'vars' | 'variant'> {}

export type PromptConfirmButtonFactory = Factory<{
    props: PromptConfirmButtonProps;
    ref: HTMLButtonElement;
    stylesNames: PromptConfirmButtonStylesNamesVariant;
    compound: true;
}>;

const COMPONENT_BY_VARIANT: Record<
    PromptVariant,
    <L = 'button'>(
        props: PolymorphicComponentProps<L, ButtonProps>,
    ) => ReactElement<any, string | JSXElementConstructor<any>>
> = {
    success: Button.Primary,
    info: Button.Primary,
    warning: Button.DestructivePrimary,
    critical: Button.DestructivePrimary,
};

const defaultProps: Partial<PromptConfirmButtonProps> = {};

export const PromptConfirmButton = factory<PromptConfirmButtonFactory>((_props, ref) => {
    const {variant, getStyles} = usePromptContext();
    const props = useProps('PromptConfirmButton', defaultProps, _props);
    const {
        className,
        classNames,
        style,
        styles,
        unstyled,
        vars,
        disabled,
        disabledTooltip,
        disabledTooltipProps,
        ...others
    } = props;
    const Component = COMPONENT_BY_VARIANT[variant];
    return (
        <Component
            ref={ref}
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
            {...others}
            {...getStyles('confirm', {style, styles, className, classNames})}
        />
    );
});
