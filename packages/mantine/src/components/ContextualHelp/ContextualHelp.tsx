import {
    BoxProps,
    ElementProps,
    factory,
    Factory,
    FloatingPosition,
    HoverCard,
    StylesApiProps,
    Tooltip,
    UnstyledButton,
    useProps,
    useStyles,
} from '@mantine/core';
import {type MouseEvent, type MouseEventHandler, type ReactNode, type Ref} from 'react';
import {InfoToken, type InfoTokenSizes} from '../InfoToken/InfoToken.js';
import {useContextualHelpFocusable} from './ContextualHelp.context.js';
import classes from './ContextualHelp.module.css';

export type ContextualHelpVariant = 'text' | 'interactive';
export type ContextualHelpStylesNames = 'root' | 'dropdown';

export interface ContextualHelpProps
    extends BoxProps, StylesApiProps<ContextualHelpFactory>, ElementProps<'button', 'children' | 'ref'> {
    /**
     * The help content. Use the `interactive` variant when it contains links or other interactive elements.
     */
    children: ReactNode;
    /**
     * How the help content is displayed.
     * - `text`: for short, plain text content, shown in a tooltip
     * - `interactive`: for content with links or other interactive elements, shown in a hover card
     *
     * @default 'text'
     */
    variant?: ContextualHelpVariant;
    /**
     * The size of the question icon.
     *
     * @default 'xs'
     */
    size?: InfoTokenSizes;
    /**
     * The position of the help content relative to the icon.
     *
     * @default 'top'
     */
    position?: FloatingPosition;
    /**
     * Whether the icon is a focusable button. Set it to `false` only inside an interactive container (e.g. a card
     * rendered as a button), where a nested button is invalid. The help then opens on hover only and can't be reached
     * with the keyboard. Inside a RadioCard label, it defaults to `false`.
     *
     * @default true
     */
    focusable?: boolean;
    /**
     * The accessible name of the icon button.
     *
     * @default 'More information'
     */
    'aria-label'?: string;
}

export type ContextualHelpFactory = Factory<{
    props: ContextualHelpProps;
    ref: HTMLElement;
    stylesNames: ContextualHelpStylesNames;
    variant: ContextualHelpVariant;
}>;

const defaultProps = {
    variant: 'text',
    size: 'xs',
    position: 'top',
    'aria-label': 'More information',
} satisfies Partial<ContextualHelpProps>;

export const ContextualHelp = factory<ContextualHelpFactory>((_props) => {
    const props = useProps('ContextualHelp', defaultProps, _props);
    const {
        classNames,
        className,
        style,
        styles,
        unstyled,
        vars,
        attributes,
        children,
        variant,
        size,
        position,
        focusable: focusableProp,
        onClick,
        ref,
        ...others
    } = props;
    const getStyles = useStyles<ContextualHelpFactory>({
        name: 'ContextualHelp',
        props,
        style,
        styles,
        unstyled,
        attributes,
        className,
        classes,
        classNames,
        vars,
    });
    const focusableFromContext = useContextualHelpFocusable();
    const focusable = focusableProp ?? focusableFromContext;

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        // Prevents focusing the associated field when rendered inside a <label>
        event.preventDefault();
        onClick?.(event);
    };
    const {'aria-label': ariaLabel, ...triggerProps} = others;
    const trigger = focusable ? (
        <UnstyledButton
            ref={ref as Ref<HTMLButtonElement>}
            aria-label={ariaLabel}
            {...getStyles('root')}
            {...triggerProps}
            onClick={handleClick}
        >
            <InfoToken.Question component="span" size={size} />
        </UnstyledButton>
    ) : (
        // Same markup as the former Input.LabelInfo: a non-focusable icon named "question"
        <InfoToken.Question
            component="span"
            ref={ref}
            size={size}
            {...getStyles('root')}
            {...triggerProps}
            onClick={handleClick as unknown as MouseEventHandler<HTMLSpanElement>}
        />
    );

    if (variant === 'interactive') {
        return (
            <HoverCard position={position} withArrow interactive events={{hover: true, focus: focusable, touch: false}}>
                <HoverCard.Target>{trigger}</HoverCard.Target>
                <HoverCard.Dropdown {...getStyles('dropdown')}>{children}</HoverCard.Dropdown>
            </HoverCard>
        );
    }

    return (
        <Tooltip
            label={children}
            position={position}
            events={{hover: true, focus: focusable, touch: false}}
            // Tooltip also applies className and style to its target, so they go through the tooltip selector instead
            classNames={{tooltip: getStyles('dropdown').className}}
            styles={{tooltip: getStyles('dropdown').style}}
        >
            {trigger}
        </Tooltip>
    );
});

ContextualHelp.displayName = 'ContextualHelp';

export namespace ContextualHelp {
    export type Props = ContextualHelpProps;
    export type StylesNames = ContextualHelpStylesNames;
    export type Factory = ContextualHelpFactory;
}
