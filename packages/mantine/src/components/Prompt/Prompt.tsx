import {
    factory,
    Factory,
    ModalRootProps,
    ModalStylesNames,
    StylesApiProps,
    Title,
    useProps,
    useStyles,
} from '@mantine/core';
import {
    Children,
    ComponentProps,
    ComponentType,
    forwardRef,
    ForwardRefExoticComponent,
    isValidElement,
    ReactElement,
    ReactNode,
    RefAttributes,
} from 'react';
import {InfoToken} from '../InfoToken/InfoToken.js';
import {Modal} from '../Modal/Modal.js';
import {PromptContextProvider} from './Prompt.context.js';
import classes from './Prompt.module.css';
import {PromptCancelButton, PromptCancelButtonStylesNamesVariant} from './PromptCancelButton.js';
import {PromptConfirmButton, PromptConfirmButtonStylesNamesVariant} from './PromptConfirmButton.js';

export type PromptVariant = 'success' | 'warning' | 'critical' | 'information';
export type PromptVars = {root: '--prompt-icon-size'};
export type PromptStylesNames =
    | Exclude<ModalStylesNames, 'title'>
    | 'icon'
    | PromptCancelButtonStylesNamesVariant
    | PromptConfirmButtonStylesNamesVariant;

type PromptStylesApiProps = Omit<StylesApiProps<PromptFactory>, 'variant'>;

export interface PromptProps
    extends PromptStylesApiProps, Omit<ModalRootProps, 'classNames' | 'styles' | 'vars' | 'attributes' | 'variant'> {
    children: ReactNode;
    title: ReactNode;
}

interface PromptInternalProps extends PromptProps {
    variant?: PromptVariant;
}

export type PromptFactory = Factory<{
    props: PromptInternalProps;
    ref: HTMLDivElement;
    vars: PromptVars;
    variant: PromptVariant;
    stylesNames: PromptStylesNames;
}>;

const PromptVariantIconsMapping: Record<PromptVariant, typeof InfoToken.Information> = {
    success: InfoToken.Success,
    warning: InfoToken.Warning,
    critical: InfoToken.Error,
    information: InfoToken.Information,
};

const defaultProps = {
    variant: 'information',
    centered: true,
    size: 'sm',
} satisfies Partial<PromptInternalProps>;

const _Prompt = factory<PromptFactory>((_props, ref) => {
    const props = useProps('Prompt', defaultProps, _props);
    const {
        variant,
        title,
        children,
        className,
        classNames,
        style,
        styles,
        unstyled,
        vars,
        attributes: _attributes,
        ...others
    } = props;
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
    const otherChildren: ReactNode[] = [];

    Children.forEach(children, (child) => {
        if (isValidElement(child) && child.type === PromptFooter) {
            footers.push(child);
            return;
        }

        otherChildren.push(child);
    });

    const IconComponent = PromptVariantIconsMapping[variant];

    return (
        <PromptContextProvider value={{variant, getStyles}}>
            <Modal.Root ref={ref} variant="prompt" {...others} {...getStyles('root')}>
                <Modal.Overlay {...getStyles('overlay', stylesApiProps)} />
                <Modal.Content {...getStyles('content', stylesApiProps)}>
                    <Modal.Header {...getStyles('header', stylesApiProps)}>
                        <IconComponent
                            {...getStyles('icon', stylesApiProps)}
                            variant="light"
                            size="sm"
                            aria-label={variant}
                        />
                        <Modal.Title>
                            <Title order={3} component="div">
                                {title}
                            </Title>
                        </Modal.Title>
                        <Modal.CloseButton {...getStyles('close', stylesApiProps)} />
                    </Modal.Header>
                    <Modal.Body {...getStyles('body', stylesApiProps)}>
                        {otherChildren}
                        {footers}
                    </Modal.Body>
                </Modal.Content>
            </Modal.Root>
        </PromptContextProvider>
    );
});
_Prompt.displayName = 'Prompt';

type PromptCompoundComponent = ForwardRefExoticComponent<PromptProps & RefAttributes<HTMLDivElement>>;

const PromptFooter: ComponentType<ComponentProps<typeof Modal.Footer>> = (props) => <Modal.Footer {...props} />;
PromptFooter.displayName = 'Prompt.Footer';

const createPromptCompound = (variant: PromptVariant, displayName: string) => {
    const Component = forwardRef<HTMLDivElement, PromptProps>((props, ref) => (
        <_Prompt ref={ref} {...props} variant={variant} />
    ));
    Component.displayName = displayName;
    return Component as PromptCompoundComponent;
};

export const Prompt = {
    Information: createPromptCompound('information', 'Prompt.Information'),
    Success: createPromptCompound('success', 'Prompt.Success'),
    Warning: createPromptCompound('warning', 'Prompt.Warning'),
    Critical: createPromptCompound('critical', 'Prompt.Critical'),
    CancelButton: PromptCancelButton,
    ConfirmButton: PromptConfirmButton,
    Footer: PromptFooter,
} as const;
