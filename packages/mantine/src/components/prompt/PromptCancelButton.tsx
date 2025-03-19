import {Button, CompoundStylesApiProps, factory, Factory, useProps} from '@mantine/core';
import {ButtonProps} from '../button/Button';
import {usePromptContext} from './Prompt.context';

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

    return (
        <Button
            ref={ref}
            variant="outline"
            {...others}
            {...getStyles('cancel', {style, styles, className, classNames})}
        />
    );
});
