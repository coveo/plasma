import {Button, CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {ButtonProps} from '../button/Button';
import {ButtonWithDisabledTooltip} from '../button/ButtonWithDisabledTooltip';
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
    success: 'action',
    info: 'action',
    warning: 'critical',
    critical: 'critical',
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
        <ButtonWithDisabledTooltip
            disabled={disabled}
            disabledTooltip={disabledTooltip}
            disabledTooltipProps={disabledTooltipProps}
        >
            <Button
                ref={ref}
                variant="filled"
                color={COLOR_BY_VARIANT[variant]}
                {...others}
                {...getStyles('confirm', {style, styles, className, classNames})}
            />
        </ButtonWithDisabledTooltip>
    );
});
