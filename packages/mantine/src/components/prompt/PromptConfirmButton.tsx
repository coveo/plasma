import {CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {Button, ButtonProps} from '../button/Button';
import {PromptVariant} from './Prompt';
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

const COLOR_BY_VARIANT: Record<PromptVariant, string> = {
    success: 'var(--mantine-primary-color-filled)',
    info: 'var(--mantine-primary-color-filled)',
    warning: 'var(--mantine-color-error)',
    critical: 'var(--mantine-color-error)',
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

    return (
        <Button
            ref={ref}
            variant="filled"
            color={COLOR_BY_VARIANT[variant]}
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
            {...others}
            {...getStyles('confirm', {style, styles, className, classNames})}
        />
    );
});
