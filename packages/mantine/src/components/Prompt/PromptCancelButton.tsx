import {CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {Button, ButtonProps} from '../Button/Button.js';
import {usePromptContext} from './Prompt.context.js';

export type PromptCancelButtonStylesNamesVariant = 'cancel';

export interface PromptCancelButtonProps
    extends CompoundStylesApiProps<PromptCancelButtonFactory>,
        Omit<ButtonProps, 'primary' | 'classNames' | 'styles' | 'vars' | 'variant'> {}

export type PromptCancelButtonFactory = Factory<{
    props: PromptCancelButtonProps;
    ref: HTMLButtonElement;
    stylesNames: PromptCancelButtonStylesNamesVariant;
    compound: true;
}>;

const defaultProps: Partial<PromptCancelButtonProps> = {};

export const PromptCancelButton = factory<PromptCancelButtonFactory>((_props, ref) => {
    const {getStyles} = usePromptContext();
    const props = useProps('PromptCancelButton', defaultProps, _props);
    const {className, classNames, style, styles, unstyled, vars, ...others} = props;

    return <Button.Tertiary ref={ref} {...others} {...getStyles('cancel', {style, styles, className, classNames})} />;
});
