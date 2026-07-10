import {IconExternalLink} from '@coveord/plasma-react-icons';
import {AnchorProps, CompoundStylesApiProps, Factory, Tooltip, TooltipProps, factory, useProps} from '@mantine/core';
import {ReactNode} from 'react';
import {ActionIcon} from '../../ActionIcon/ActionIcon.js';
import {useHeaderContext} from '../Header.context.js';

export type HeaderDocAnchorStyleNames = 'docAnchorTooltip' | 'docAnchor';

export interface HeaderDocAnchorProps
    extends
        Pick<TooltipProps, 'position'>,
        CompoundStylesApiProps<HeaderDocAnchorFactory>,
        Omit<AnchorProps, 'classNames' | 'styles' | 'variant' | 'vars'> {
    /**
     * A href pointing to documentation related to the current panel.
     * When provided, an info icon is rendered next to the title as link to this documentation
     */
    href: string;
    /**
     * The tooltip text shown when hovering over the doc link icon
     */
    label?: ReactNode;
    /**
     * React component to add the tooltip and anchor on
     */
    children?: ReactNode;
}

export type HeaderDocAnchorFactory = Factory<{
    props: HeaderDocAnchorProps;
    ref: HTMLAnchorElement;
    stylesNames: HeaderDocAnchorStyleNames;
    compound: true;
}>;

const defaultProps = {
    position: 'right',
    children: <IconExternalLink />,
} satisfies Partial<HeaderDocAnchorProps>;

export const HeaderDocAnchor = factory<HeaderDocAnchorFactory>((_props) => {
    const props = useProps('PlasmaHeaderActions', defaultProps, _props);
    const {
        className,
        classNames,
        styles,
        style,
        children,
        label,
        position,
        vars,
        inline = true,
        ref,
        ...others
    } = props;

    const ctx = useHeaderContext();

    return (
        <Tooltip
            label={label}
            disabled={!label}
            position={position}
            classNames={{tooltip: ctx.getStyles('docAnchorTooltip', {classNames, styles, props}).className}}
        >
            <ActionIcon.Tertiary
                ref={ref}
                size={ctx.variant === 'primary' ? 'lg' : 'md'}
                component="a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external"
                {...ctx.getStyles('docAnchor', {classNames, styles, props, style, className})}
                {...others}
            >
                {children}
            </ActionIcon.Tertiary>
        </Tooltip>
    );
});

HeaderDocAnchor.displayName = 'Header.DocAnchor';
