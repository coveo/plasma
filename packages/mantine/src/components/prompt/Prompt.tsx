import {
    Box,
    createVarsResolver,
    factory,
    Factory,
    Image,
    Modal,
    ModalRootProps,
    ModalStylesNames,
    StylesApiProps,
    useProps,
    useStyles,
} from '@mantine/core';
import {Children, ReactElement, ReactNode} from 'react';
import classes from '../header/Header.module.css';
import Critical from './icons/critical.svg';
import Info from './icons/info.svg';
import Success from './icons/success.svg';
import Warning from './icons/warning.svg';
import {PromptContextProvider} from './Prompt.context';
import {PromptCancelButton, PromptCancelButtonStylesNamesVariant} from './PromptCancelButton';
import {PromptConfirmButton} from './PromptConfirmButton';
import {PromptFooter} from './PromptFooter';

export type PromptVariant = 'success' | 'warning' | 'critical' | 'info';
export type PromptVars = {root: '--prompt-icon-size'};
export type PromptStylesNames = ModalStylesNames | 'icon' | PromptCancelButtonStylesNamesVariant;

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
    icon?: ReactNode;
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
        Footer: typeof PromptFooter;
    };
}>;

const PROMPT_VARIANT_ICONS_SRC: Record<PromptVariant, string> = {
    success: Success,
    warning: Warning,
    critical: Critical,
    info: Info,
};

const defaultProps: Partial<PromptProps> = {
    variant: 'info',
};

const varsResolver = createVarsResolver<PromptFactory>((_theme, {icon}) => ({
    root: {
        '--prompt-icon-size': icon ? undefined : '88px',
    },
}));

export const Prompt = factory<PromptFactory>((_props, ref) => {
    const props = useProps('Prompt', defaultProps, _props);
    const {variant, title, icon, children, className, classNames, style, styles, unstyled, vars, ...others} = props;
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
        varsResolver,
    });
    const stylesApiProps = {classNames, styles};

    const convertedChildren = Children.toArray(children) as ReactElement[];

    const otherChildren = convertedChildren.filter((child) => child.type !== PromptFooter);
    const footer = convertedChildren.find((child) => child.type === PromptFooter);

    return (
        <PromptContextProvider value={{variant, getStyles}}>
            <Modal.Root ref={ref} variant="prompt" size="sm" {...others} {...getStyles('root')}>
                <Modal.Overlay {...getStyles('overlay', stylesApiProps)} />
                <Modal.Content {...getStyles('content', stylesApiProps)}>
                    <Modal.Header {...getStyles('header', stylesApiProps)}>
                        {icon ? (
                            icon
                        ) : (
                            <Image {...getStyles('icon', stylesApiProps)} src={PROMPT_VARIANT_ICONS_SRC[variant]} />
                        )}
                        <Modal.Title {...getStyles('title', stylesApiProps)}>{title}</Modal.Title>
                        <Modal.CloseButton {...getStyles('close', stylesApiProps)} />
                    </Modal.Header>
                    <Modal.Body {...getStyles('body', stylesApiProps)}>
                        <Box {...getStyles('inner', stylesApiProps)}>{otherChildren}</Box>
                    </Modal.Body>
                    {footer}
                </Modal.Content>
            </Modal.Root>
        </PromptContextProvider>
    );
});

Prompt.CancelButton = PromptCancelButton;
Prompt.ConfirmButton = PromptConfirmButton;
Prompt.Footer = PromptFooter;
