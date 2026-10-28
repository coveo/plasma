import {IconExternalLink} from '@coveord/plasma-react-icons';
import {
    AnchorProps,
    AnchorVariant,
    Anchor as MantineAnchor,
    polymorphicFactory,
    PolymorphicFactory,
    StylesApiProps,
    useProps,
    useStyles,
    VisuallyHidden,
} from '@mantine/core';
import {ReactNode, useId} from 'react';
import classes from './AnchorExternal.module.css';

export type AnchorExternalStylesNames = 'root' | 'icon';

export interface AnchorExternalProps
    extends Omit<AnchorProps, 'classNames' | 'styles' | 'vars' | 'attributes'>, StylesApiProps<AnchorExternalFactory> {
    /**
     * Content rendered inside the link.
     */
    children?: ReactNode;
    /**
     * Text announced to screen readers when the link opens in a new tab.
     *
     * @default '(opens in a new tab)'
     */
    newTabLabel?: string;
}

export type AnchorExternalFactory = PolymorphicFactory<{
    props: AnchorExternalProps;
    defaultComponent: 'a';
    defaultRef: HTMLAnchorElement;
    stylesNames: AnchorExternalStylesNames;
    variant: AnchorVariant;
}>;

const defaultProps = {
    newTabLabel: '(opens in a new tab)',
} satisfies Partial<AnchorExternalProps>;

export const AnchorExternal = polymorphicFactory<AnchorExternalFactory>((_props) => {
    const props = useProps('AnchorExternal', defaultProps, _props);
    const {classNames, className, style, styles, unstyled, vars, attributes, children, newTabLabel, ref, ...others} =
        props;
    const getStyles = useStyles<AnchorExternalFactory>({
        name: 'AnchorExternal',
        classes,
        props,
        className,
        style,
        classNames,
        styles,
        unstyled,
        vars,
        attributes,
    });
    const announcementId = useId();
    const {
        target = '_blank',
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': ariaDescribedBy,
    } = others as {
        target?: string;
        'aria-label'?: string;
        'aria-labelledby'?: string;
        'aria-describedby'?: string;
    };
    const announcesNewTab = target === '_blank' && !!newTabLabel;
    // An explicit label replaces the link content as its accessible name, so the announcement becomes a description
    const describesNewTab = announcesNewTab && !!(ariaLabel || ariaLabelledBy);

    return (
        <MantineAnchor
            ref={ref}
            unstyled={unstyled}
            target="_blank"
            rel="noopener noreferrer"
            {...getStyles('root')}
            {...others}
            aria-describedby={
                describesNewTab ? [ariaDescribedBy, announcementId].filter(Boolean).join(' ') : ariaDescribedBy
            }
        >
            {children}
            {/* The word joiner and nowrap keep the icon on the same line as the last word */}
            <span className={classes.iconWrapper}>
                {'\u2060'}
                <IconExternalLink size="1em" aria-hidden {...getStyles('icon')} />
            </span>
            {announcesNewTab ? <VisuallyHidden id={announcementId}>{`\u00A0${newTabLabel}`}</VisuallyHidden> : null}
        </MantineAnchor>
    );
});

AnchorExternal.displayName = 'Anchor.External';
