import {
    Box,
    factory,
    Factory,
    ModalRootProps,
    ModalStylesNames,
    StylesApiProps,
    Title,
    useProps,
    useStyles,
} from '@mantine/core';
import {Children, ComponentType, ReactElement, ReactNode} from 'react';
import {Modal} from '../modal';
import {PromptContextProvider} from './Prompt.context';
import classes from './Prompt.module.css';
import {PromptCancelButton, PromptCancelButtonStylesNamesVariant} from './PromptCancelButton';
import {PromptConfirmButton, PromptConfirmButtonStylesNamesVariant} from './PromptConfirmButton';
import CriticalIcon from './icons/CriticalIcon';
import InfoIcon from './icons/InfoIcon';
import SuccessIcon from './icons/SuccessIcon';
import WarningIcon from './icons/WarningIcon';

export type PromptVariant = 'success' | 'warning' | 'critical' | 'info';
export type PromptVars = {root: '--prompt-icon-size'};
export type PromptStylesNames =
    | Exclude<ModalStylesNames, 'title'>
    | 'icon'
    | PromptCancelButtonStylesNamesVariant
    | PromptConfirmButtonStylesNamesVariant;

export interface PromptProps
    extends StylesApiProps<PromptFactory>,
        Omit<ModalRootProps, 'classNames' | 'styles' | 'vars'> {
    /**
     * Controls prompt appearance
     *
     * @default "info"
     */
    variant?: PromptVariant;
    children: ReactNode;
    title: ReactNode;
}

export type PromptFactory = Factory<{
    props: PromptProps;
    ref: HTMLDivElement;
    vars: PromptVars;
    variant: PromptVariant;
    stylesNames: PromptStylesNames;
    staticComponents: {
        CancelButton: typeof PromptCancelButton;
        ConfirmButton: typeof PromptConfirmButton;
        Footer: typeof Modal.Footer;
    };
}>;

const PromptVariantIconsMapping: Record<PromptVariant, ComponentType> = {
    success: SuccessIcon,
    warning: WarningIcon,
    critical: CriticalIcon,
    info: InfoIcon,
};

const defaultProps: Partial<PromptProps> = {
    variant: 'info',
    centered: true,
};

export const Prompt = factory<PromptFactory>((_props, ref) => {
    const props = useProps('Prompt', defaultProps, _props);
    const {variant, title, children, className, classNames, style, styles, unstyled, vars, ...others} = props;
    const getStyles = useStyles<PromptFactory>({
        name: 'Prompt',
        props,
        classes,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
    });
    const stylesApiProps = {classNames, styles};

    const footers: ReactElement[] = [];
    const otherChildren: ReactElement[] = [];

    Children.forEach(children, (child: ReactElement) => {
        (child.type === Prompt.Footer ? footers : otherChildren).push(child);
    });

    const IconComponent = PromptVariantIconsMapping[variant];

    return (
        <PromptContextProvider value={{variant, getStyles}}>
            <Modal.Root ref={ref} variant="prompt" size="sm" {...others} {...getStyles('root')}>
                <Modal.Overlay {...getStyles('overlay', stylesApiProps)} />
                <Modal.Content {...getStyles('content', stylesApiProps)}>
                    <Modal.Header {...getStyles('header', stylesApiProps)}>
                        <IconComponent />
                        <Modal.Title>
                            <Title order={3} component="div">
                                {title}
                            </Title>
                        </Modal.Title>
                        <Modal.CloseButton {...getStyles('close', stylesApiProps)} />
                    </Modal.Header>
                    <Modal.Body {...getStyles('body', stylesApiProps)}>
                        <Box {...getStyles('inner', stylesApiProps)}>{otherChildren}</Box>
                    </Modal.Body>
                    {footers}
                </Modal.Content>
            </Modal.Root>
        </PromptContextProvider>
    );
});

Prompt.CancelButton = PromptCancelButton;
Prompt.ConfirmButton = PromptConfirmButton;
Prompt.Footer = Modal.Footer;
