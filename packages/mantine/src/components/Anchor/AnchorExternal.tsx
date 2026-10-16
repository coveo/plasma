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
import {ReactNode} from 'react';
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
    const target = (others as {target?: string}).target ?? '_blank';
    const announcesNewTab = target === '_blank' && !!newTabLabel;

    return (
        <MantineAnchor
            ref={ref}
            unstyled={unstyled}
            target="_blank"
            rel="noopener noreferrer"
            {...getStyles('root')}
            {...others}
        >
            {children}
            {/* Non-breaking space keeps the icon on the same line as the last word */}
            {'\u00A0'}
            {announcesNewTab ? <VisuallyHidden>{newTabLabel}</VisuallyHidden> : null}
            <IconExternalLink size="1em" aria-hidden {...getStyles('icon')} />
        </MantineAnchor>
    );
});

AnchorExternal.displayName = 'Anchor.External';
